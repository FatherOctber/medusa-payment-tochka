import {
    AcquiringCreatePaymentOperationRequestModel,
    AcquiringPaymentStatus,
    TaxSystemCodeInput,
    VatType
} from "tochka-sdk";


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
     * Tochka webhook checking public key in json text format
     */
    webhookPublicKeyJson: string;
    /**
     * Tochka api version (default is v1.0)
     */
    tochkaApiVersion?: string;
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

export const PaymentProviderKeys = {
    TOCHKA: "tochka",
}


export interface TochkaWebhookPayload {
    operationId?: string;
    status?: AcquiringPaymentStatus;
    amount?: number;
    paymentType?: "card" | "sbp" | "dolyame";
    webhookType?: string;
    purpose?: string;
}

