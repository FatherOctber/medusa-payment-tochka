import {
    AbstractPaymentProvider,
    BigNumber,
    isDefined,
    PaymentActions,
    PaymentSessionStatus
} from "@medusajs/framework/utils"
import {
    AuthorizePaymentInput,
    AuthorizePaymentOutput,
    CancelPaymentInput,
    CancelPaymentOutput,
    CapturePaymentInput,
    CapturePaymentOutput,
    DeletePaymentInput,
    DeletePaymentOutput,
    GetPaymentStatusInput,
    GetPaymentStatusOutput,
    InitiatePaymentInput,
    InitiatePaymentOutput,
    Logger,
    ProviderWebhookPayload,
    RefundPaymentInput,
    RefundPaymentOutput,
    RetrievePaymentInput,
    RetrievePaymentOutput,
    UpdatePaymentInput,
    UpdatePaymentOutput,
    WebhookActionResult
} from "@medusajs/framework/types"
import {AxiosError} from "axios"
import {
    AcquiringCreatePaymentOperationRequestModel,
    AcquiringCreatePaymentOperationResponseModel,
    AcquiringCreatePaymentOperationWithReceiptRequestModel,
    AcquiringGetPaymentOperationListItemModel,
    AcquiringPaymentMode,
    AcquiringPaymentStatus,
    TaxSystemCodeInput,
    TochkaBankAcquiring,
    TochkaBankSDK,
    TochkaBankWebhook,
} from "tochka-sdk";
import {PaymentOptions, TochkaOptions, TochkaWebhookPayload} from "../types"
import {generateTochkaReceipt} from "../utils"
import {ExternalTypeEnum} from "tochka-sdk/dist/tochka-api/tochka-api";

type InjectedDependencies = {
    logger: Logger
}

abstract class TochkaBase extends AbstractPaymentProvider<TochkaOptions> {
    protected readonly options_: TochkaOptions
    protected tochkaSDK_: TochkaBankSDK
    protected tochkaWebhook_: TochkaBankWebhook
    protected logger_: Logger
    protected tochkaAcquiring_: TochkaBankAcquiring
    protected publicKeyJWK_: any

    static validateOptions(options: TochkaOptions): void {
        if (!isDefined(options.tochkaJwtToken)) {
            throw new Error("Required option `tochkaJwtToken` is missing in Tochka plugin")
        }
        if (!isDefined(options.clientId)) {
            throw new Error("Required option `clientId` is missing in Tochka plugin")
        }
        if (!isDefined(options.webhookPublicKeyJson)) {
            throw new Error("Required option `webhookPublicKeyJson` is missing in Tochka plugin")
        }
        if (isDefined(options.withReceipt)) {
            if (!isDefined(options.taxSystemCode)) {
                throw new Error("Required option `taxSystemCode` is missing in Tochka provider when withReceipt is enabled")
            }
            if (!isDefined(options.taxItemDefault)) {
                throw new Error("Required option `taxItemDefault` is missing in Tochka provider when withReceipt is enabled")
            }
            if (!isDefined(options.taxShippingDefault)) {
                throw new Error("Required option `taxShippingDefault` is missing in Tochka provider when withReceipt is enabled")
            }
        }
    }

    protected constructor(container: InjectedDependencies, options: TochkaOptions) {
        // @ts-ignore
        super(...arguments)

        this.logger_ = container.logger
        this.options_ = options
        this.tochkaSDK_ = new TochkaBankSDK({
            jwtToken: options.tochkaJwtToken,
            clientId: options.clientId,
            isDevelopment: options.developerMode ?? false,
        })
        this.tochkaWebhook_ = this.tochkaSDK_.Webhook
        this.tochkaAcquiring_ = this.tochkaSDK_.Acquiring
        this.publicKeyJWK_ = JSON.parse(this.options_.webhookPublicKeyJson)
        this.logger_.info(`TochkaBase payment provider was created successfully: api_v=${this.tochkaSDK_.getApiVersion()}, url=${this.tochkaSDK_.getBaseUrl()}`)
    }

    abstract get paymentOptions(): PaymentOptions

    get options(): TochkaOptions {
        return this.options_
    }

    private normalizePaymentParameters(
        extra?: Record<string, unknown>
    ): Partial<AcquiringCreatePaymentOperationRequestModel> {
        const res = {} as Partial<AcquiringCreatePaymentOperationRequestModel>

        res.purpose =
            extra?.purpose as string ??
            this.options_?.paymentPurpose ??
            'Payment'

        res.preAuthorization =
            extra?.preAuthorization as boolean ??
            this.paymentOptions.preAuthorization ??
            this.options_.preAuthorization ??
            false

        res.paymentMode = this.paymentOptions?.paymentMode ?? [AcquiringPaymentMode.Card]

        res.redirectUrl = extra?.redirectUrl as string
        res.failRedirectUrl = extra?.failRedirectUrl as string
        res.saveCard = extra?.saveCard as boolean
        res.consumerId = extra?.consumerId as string
        res.merchantId = extra?.merchantId as string
        res.ttl = extra?.ttl as number
        const sessionId = extra?.session_id as string
        if (sessionId && sessionId.length > 0 && sessionId.length < 46) {
            // workaround to store session_id in tochka without own persistence
            res.paymentLinkId = sessionId
        }

        return res
    }

    private normalizePaymentWithReceiptParameters(
        extra?: Record<string, unknown>
    ): Partial<AcquiringCreatePaymentOperationWithReceiptRequestModel> {
        const baseParams = this.normalizePaymentParameters(extra)

        const res = {} as Partial<AcquiringCreatePaymentOperationWithReceiptRequestModel>
        Object.assign(res, baseParams)

        res.taxSystemCode = extra?.taxSystemCode as TaxSystemCodeInput ?? this.options_.taxSystemCode

        return res
    }

    /**
     * Initiate a new payment.
     */
    async initiatePayment({
                              currency_code,
                              amount,
                              data,
                              context,
                          }: InitiatePaymentInput): Promise<InitiatePaymentOutput> {
        this.logger_.debug(`TochkaBase.initiatePayment input:\n${JSON.stringify({
            currency_code,
            amount,
            data,
            context
        }, null, 2)}`)

        const cart = data?.cart as Record<string, any>

        try {
            let response: AcquiringCreatePaymentOperationResponseModel
            if (!cart) {
                throw new Error("No cart provided")
            }
            const customerCode = await this.getCustomerCodeForPayment()
            if (!customerCode) {
                throw new Error(`Customer code is undefined`)
            }

            if (this.options_.withReceipt) {
                const receiptPaymentParams = this.normalizePaymentWithReceiptParameters(data)
                const receipt = generateTochkaReceipt(cart, this.options_.taxItemDefault, this.options_.taxShippingDefault)

                const createPayload: AcquiringCreatePaymentOperationWithReceiptRequestModel = {
                    customerCode: customerCode,
                    amount: parseFloat(amount as string),
                    ...receiptPaymentParams,
                    ...receipt,
                } as AcquiringCreatePaymentOperationWithReceiptRequestModel

                const result = await this.tochkaAcquiring_.createPaymentOperationWithReceipt(
                    this.tochkaSDK_.getApiVersion(),
                    {Data: createPayload}
                )
                response = result.data.Data
            } else {
                const standardPaymentParameter = this.normalizePaymentParameters(data)
                const createPayload: AcquiringCreatePaymentOperationRequestModel = {
                    customerCode: customerCode,
                    amount: parseFloat(amount as string),
                    ...standardPaymentParameter,
                } as AcquiringCreatePaymentOperationRequestModel

                const result = await this.tochkaAcquiring_.createPaymentOperation(
                    this.tochkaSDK_.getApiVersion(),
                    {Data: createPayload}
                )
                response = result.data.Data
            }

            const output = {
                id: response.operationId,
                data: {
                    ...response,
                    session_id: data?.session_id as string,
                } as unknown as Record<string, unknown>,
            }
            this.logger_.debug(`TochkaBase.initiatePayment output:\n${JSON.stringify(output, null, 2)}`)

            return output
        } catch (e) {
            this.logger_.error(`Can not initiate payment: ${JSON.stringify(e?.error)}`)
            throw this.buildError("An error occurred in initiatePayment", e)
        }
    }

    /**
     * Retrieve payment status and map it to Medusa status.
     */
    async getPaymentStatus(
        input: GetPaymentStatusInput
    ): Promise<GetPaymentStatusOutput> {
        this.logger_.debug(`TochkaBase.getPaymentStatus input:\n${JSON.stringify(input, null, 2)}`)

        const id = (input.data?.id || input.data?.operationId) as string
        if (!id) {
            throw this.buildError(
                "No payment ID provided while getting payment status",
                new Error("No payment ID provided")
            )
        }

        try {
            const result = await this.tochkaAcquiring_.getPaymentOperationInfo(
                this.tochkaSDK_.getApiVersion(),
                id
            )
            if (result.data.Data.Operation.length === 0) {
                throw new Error("Payment with id " + id + " not found")
            }
            const payment = result.data.Data.Operation[0]
            const paymentData = payment as unknown as Record<string, unknown>

            let output: GetPaymentStatusOutput
            switch (payment.status) {
                case AcquiringPaymentStatus.CREATED:
                case AcquiringPaymentStatus.WAIT_FULL_PAYMENT:
                    output = {status: PaymentSessionStatus.PENDING, data: paymentData}
                    break
                case AcquiringPaymentStatus.EXPIRED:
                    output = {status: PaymentSessionStatus.CANCELED, data: paymentData}
                    break
                case AcquiringPaymentStatus.AUTHORIZED:
                    output = {status: PaymentSessionStatus.AUTHORIZED, data: paymentData}
                    break
                case AcquiringPaymentStatus.APPROVED:
                    output = {status: PaymentSessionStatus.CAPTURED, data: paymentData}
                    break
                case AcquiringPaymentStatus.REFUNDED:
                case AcquiringPaymentStatus.REFUNDED_PARTIALLY:
                    output = {status: PaymentSessionStatus.CANCELED, data: paymentData}
                    break
                default:
                    output = {status: PaymentSessionStatus.PENDING, data: paymentData}
            }
            this.logger_.debug(`TochkaBase.getPaymentStatus output:\n${JSON.stringify(output, null, 2)}`)

            return output
        } catch (e) {
            this.logger_.error(`Can not get payment status: ${JSON.stringify(e?.error)}`)
            throw this.buildError("An error occurred in getPaymentStatus", e)
        }
    }

    /**
     * Capture an existing payment.
     */
    async capturePayment(input: CapturePaymentInput): Promise<CapturePaymentOutput> {
        this.logger_.debug(`TochkaBase.capturePayment input:\n${JSON.stringify(input, null, 2)}`)

        const id = (input.data?.id || input.data?.operationId) as string

        if (!id) {
            throw this.buildError(
                "No operation ID provided while capturing payment",
                new Error("No operation ID provided")
            )
        }

        // Avoid autoCapture if payment is already approved
        if (input.data?.status === AcquiringPaymentStatus.APPROVED) {
            return {data: input.data}
        }

        try {
            const result = await this.tochkaAcquiring_.capturePaymentAcquiring(
                this.tochkaSDK_.getApiVersion(),
                id,
            )

            const output = {data: result.data as unknown as Record<string, unknown>}
            this.logger_.debug(`TochkaBase.capturePayment output:\n${JSON.stringify(output, null, 2)}`)

            return output
        } catch (e) {
            this.logger_.error(`Can not capture payment: ${JSON.stringify(e?.error)}`)
            throw this.buildError("An error occurred in capturePayment", e)
        }
    }

    /**
     * Authorize a payment by retrieving its status.
     */
    async authorizePayment(input: AuthorizePaymentInput): Promise<AuthorizePaymentOutput> {
        this.logger_.debug(`TochkaBase.authorizePayment input:\n${JSON.stringify(input, null, 2)}`)

        const output = await this.getPaymentStatus(input)
        this.logger_.debug(`TochkaBase.authorizePayment output:\n${JSON.stringify(output, null, 2)}`)

        return output
    }

    /**
     * Cancel an existing payment.
     * Note: Tochka doesn't have an explicit cancel endpoint, so we return the current status
     */
    async cancelPayment(input: CancelPaymentInput): Promise<CancelPaymentOutput> {
        this.logger_.debug(`TochkaBase.cancelPayment input:\n${JSON.stringify(input, null, 2)}`)

        // Tochka API doesn't have a cancel payment endpoint
        // We just return the current payment data
        const output = {data: input.data}
        this.logger_.debug(`TochkaBase.cancelPayment output:\n${JSON.stringify(output, null, 2)}`)

        return output
    }

    /**
     * Retrieve a payment.
     */
    async retrievePayment(input: RetrievePaymentInput): Promise<RetrievePaymentOutput> {
        this.logger_.debug(`TochkaBase.retrievePayment input:\n${JSON.stringify(input, null, 2)}`)

        const id = (input.data?.id || input.data?.operationId) as string
        if (!id) {
            throw this.buildError(
                "No payment ID provided while retrieving payment",
                new Error("No payment ID provided")
            )
        }

        try {
            const result = await this.tochkaAcquiring_.getPaymentOperationInfo(
                this.tochkaSDK_.getApiVersion(),
                id
            )

            if (result.data.Data.Operation.length === 0) {
                throw new Error("Payment with id " + id + " not found")
            }
            const payment = result.data.Data.Operation[0]
            const paymentData = payment as unknown as Record<string, unknown>

            const output = {data: paymentData}
            this.logger_.debug(`TochkaBase.retrievePayment output:\n${JSON.stringify(output, null, 2)}`)

            return output
        } catch (e) {
            this.logger_.error(`Can not get webhooks from tochka webhooks ${JSON.stringify(e?.error)}`)
            if (e?.error && e?.error?.code == "404") {
                return {}
            }
            throw this.buildError("An error occurred in retrievePayment", e)
        }
    }

    /**
     * Refund a payment.
     */
    async refundPayment({
                            amount,
                            data,
                            context,
                        }: RefundPaymentInput): Promise<RefundPaymentOutput> {
        this.logger_.debug(`TochkaBase.refundPayment input:\n${JSON.stringify({amount, data, context}, null, 2)}`)

        const operationId = (data?.id || data?.operationId) as string

        if (!operationId) {
            throw this.buildError(
                "No operation ID provided while refunding payment",
                new Error("No operation ID provided")
            )
        }

        const refundAmount = new BigNumber(amount).numeric

        try {
            await this.tochkaSDK_.Acquiring.refundPaymentOperation(
                this.tochkaSDK_.getApiVersion(),
                operationId,
                {
                    Data: {
                        amount: parseFloat(refundAmount.toString()),
                    }
                }
            )

            const output = await this.retrievePayment({data})
            this.logger_.debug(`TochkaBase.refundPayment output:\n${JSON.stringify(output, null, 2)}`)

            return output
        } catch (e) {
            this.logger_.error(`Can not refund payment: ${JSON.stringify(e?.error)}`)
            throw this.buildError("An error occurred in refundPayment", e)
        }
    }

    /**
     * Delete a payment.
     * Payment deletion is not supported by Tochka.
     */
    async deletePayment(input: DeletePaymentInput): Promise<DeletePaymentOutput> {
        this.logger_.debug(`TochkaBase.deletePayment input:\n${JSON.stringify(input, null, 2)}`)

        const output = input
        this.logger_.debug(`TochkaBase.deletePayment output:\n${JSON.stringify(output, null, 2)}`)

        return output
    }

    /**
     * Update a payment.
     * Payment update is not supported by Tochka.
     */
    async updatePayment(input: UpdatePaymentInput): Promise<UpdatePaymentOutput> {
        this.logger_.debug(`TochkaBase.updatePayment input:\n${JSON.stringify(input, null, 2)}`)

        const output = input
        this.logger_.debug(`TochkaBase.updatePayment output:\n${JSON.stringify(output, null, 2)}`)

        return output
    }

    /**
     * Process webhook event and map it to Medusa action.
     */
    async getWebhookActionAndData(webhookData: ProviderWebhookPayload["payload"]): Promise<WebhookActionResult> {
        this.logger_.debug(`TochkaBase.getWebhookActionAndData payload:\n${JSON.stringify(webhookData, null, 2)}`)

        const payloadData = await this.parseWebhookPayload(webhookData)
        if (!payloadData || payloadData.webhookType !== "acquiringInternetPayment") {
            return {
                action: PaymentActions.NOT_SUPPORTED
            }
        }
        const status = payloadData.status!
        const amount = payloadData.amount!
        const operationId = payloadData.operationId!
        const paymentOperation = await this.retrievePayment({
            data: {
                id: operationId,
                operationId: operationId,
            }
        })
        if (!paymentOperation?.data || this.validateWebhookPayloadAndOriginalOperation(payloadData, paymentOperation.data as unknown as AcquiringGetPaymentOperationListItemModel)) {
            this.logger_.warn(`TochkaBase.getWebhookActionAndData invalid webhook payload for original payment or original payment not found`)
            return {
                action: PaymentActions.NOT_SUPPORTED
            }
        }

        const sessionId = paymentOperation.data?.paymentLinkId as string

        let result: WebhookActionResult
        switch (status) {
            case AcquiringPaymentStatus.APPROVED:
                result = {
                    action: PaymentActions.SUCCESSFUL,
                    data: sessionId ? {
                        amount: amount,
                        session_id: sessionId
                    } : undefined
                }
                break
            case AcquiringPaymentStatus.AUTHORIZED:
                result = {
                    action: PaymentActions.AUTHORIZED,
                    data: sessionId ? {
                        amount: amount,
                        session_id: sessionId
                    } : undefined
                }
                break
            case AcquiringPaymentStatus.EXPIRED:
            case AcquiringPaymentStatus.REFUNDED:
                result = {
                    action: PaymentActions.CANCELED,
                    data: sessionId ? {
                        amount: amount,
                        session_id: sessionId
                    } : undefined
                }
                break
            default:
                result = {
                    action: PaymentActions.NOT_SUPPORTED
                }
        }
        this.logger_.debug(`TochkaBase.getWebhookActionAndData result:\n${JSON.stringify(result, null, 2)}`)

        return result
    }

    /**
     * parse Webhook event using JWK public key
     * @param {object} webhookData - the data of the webhook request: req.body
     * @returns {any} - parsed payload
     */
    protected async parseWebhookPayload(webhookData: ProviderWebhookPayload["payload"]): Promise<TochkaWebhookPayload | undefined> {
        try {
            const jose = await import('jose');
            const jwks = jose.createLocalJWKSet({
                keys: [this.publicKeyJWK_]
            });
            const {payload, protectedHeader} = await jose.jwtVerify(webhookData.data as unknown as string, jwks)
            this.logger_.info('JWT Verified Successfully!');
            this.logger_.info(`Payload: ${JSON.stringify(payload, null, 2)}`);
            this.logger_.info(`Protected Header: ${JSON.stringify(protectedHeader, null, 2)}`);
            // For now, we'll do basic validation on the webhook payload structure
            const webhookPayload = payload as TochkaWebhookPayload

            if (!webhookPayload.operationId || !webhookPayload.paymentType || !webhookPayload.amount || !webhookPayload.status || !webhookPayload.webhookType) {
                throw new Error(`Webhook payload is corrupted: ${payload}`);
            }

            return webhookPayload
        } catch (e) {
            this.logger_.error(`An error occurred in parseWebhookPayload: ${e}`)
            return undefined
        }
    }

    protected validateWebhookPayloadAndOriginalOperation(payload: TochkaWebhookPayload, originalOperation: AcquiringGetPaymentOperationListItemModel): boolean {
        return payload.status === originalOperation.status && payload.operationId === originalOperation.operationId;
    }

    /**
     * Helper to build errors with additional context.
     */
    protected buildError(message: string, error: Error | AxiosError): Error {
        if (error instanceof AxiosError && error.response) {
            return new Error(
                `${message}: ${error.response?.status} ${error.response?.data?.code || ''} - ${error.response?.data?.description || error.response?.statusText}`.trim()
            )
        }
        return new Error(
            `${message}: ${error.message}`.trim()
        )
    }

    protected async getCustomerCodeForPayment(): Promise<string | undefined> {
        return await this.tochkaSDK_.OpenBanking.getCustomersList(this.tochkaSDK_.getApiVersion())
            .then(({data}) => {
                return data.Data.Customer.find(customer => customer.customerType === ExternalTypeEnum.Business)?.customerCode
            }).catch((err: Error) => {
                this.logger_.error(`Can not get customer list ${JSON.stringify(err, null, 2)}`)
                return undefined
            })
    }
}

export default TochkaBase
