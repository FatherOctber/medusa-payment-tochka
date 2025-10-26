import {
    IWebHookEvent,
    Payment,
    Refund,
} from "@a2seven/yoo-checkout"
import {
    AcquiringCreatePaymentOperationRequestModel,
    AcquiringCreatePaymentOperationWithReceiptRequestModel, TaxSystemCodeInput, VatType
} from "./tochka-api/tochka-api";


export interface TochkaOptions {
    /**
     * Tochka Api JWT token
     */
    tochkaJwtToken: string;
    /**
     * Tochka your client id
     */
    clientId: string;
    /**
     * Use this flag to work in dev mode in tochka api requests (default is false)
     */
    developerMode?: boolean;
    /**
     * Use this flag to enable two factor payment (default is false)
     */
    preAuthorization?: boolean,
    /**
     * Set a default purpose on the payment if the context does not provide one
     */
    paymentPurpose?: string,
    /* Receipt options */
    /**
     * Enable receipt generation according to Russian fiscal data format
     */
    withReceipt?: boolean,
    /**
     * Store tax system
     */
    taxSystemCode?: TaxSystemCodeInput,
    /**
     * Default VAT rate for products
     */
    taxItemDefault?: VatType,
    /**
     * Default VAT rate for shipping
     */
    taxShippingDefault?: VatType,
}

export interface PaymentOptions extends Partial<AcquiringCreatePaymentOperationRequestModel> {
}

export interface PaymentWithReceiptOptions extends Partial<AcquiringCreatePaymentOperationWithReceiptRequestModel> {
}

export interface YookassaEvent {
    type: "notification",
    event: IWebHookEvent,
    object: Payment | Refund | object
}

export const PaymentProviderKeys = {
    TOCHKA: "tochka",
}
