/**
 * Tochka Bank SDK
 *
 * This SDK provides access to Tochka Bank's comprehensive API with support for:
 * - Acquiring: Payment operations, subscriptions, receipts
 * - Invoice: Billing and invoice management
 * - Open Banking: Account and statement queries
 * - Payment: Payment requests and status
 * - SBP: Fast payment system QR codes
 * - Webhook: Event notifications
 *
 * Built on the generated OpenAPI client from tochka-api-spec.json
 */

import { TochkaApi } from "../types/tochka-api/tochka-api";
import { TochkaBankAcquiring } from "./tochka-acquiring";
import { TochkaBankInvoice } from "./tochka-invoice";
import { TochkaBankOpenBanking } from "./tochka-openbanking";
import { TochkaBankPayment } from "./tochka-payment";
import { TochkaBankSBP } from "./tochka-sbp";
import { TochkaBankWebhook } from "./tochka-webhook";

/**
 * Configuration options for TochkaBankSDK
 */
export interface TochkaBankSDKOptions {
  /** JWT Bearer token for authentication */
  jwtToken: string;
  /** Client ID */
  clientId: string;
  /** API version (default: "v1.0") */
  apiVersion?: string;
  /** Use development/sandbox environment (default: false) */
  isDevelopment?: boolean;
  /** Request timeout in milliseconds (default: 30000) */
  timeout?: number;
}

/**
 * Tochka Bank SDK - Aggregator Class
 *
 * Provides easy access to all Tochka Bank API domains through separate domain classes:
 * - Acquiring: Payment operations and receipts
 * - Invoice: Invoice management
 * - OpenBanking: Account and banking queries
 * - Payment: Payment requests
 * - SBP: Fast payment system
 * - Webhook: Webhook management
 *
 * @example
 * ```typescript
 * const sdk = new TochkaBankSDK({
 *   jwtToken: process.env.TOCHKA_JWT_TOKEN,
 *   clientId: process.env.TOCHKA_CLIENT_ID,
 * });
 *
 * // Access domain methods
 * const invoice = await sdk.Invoice.createInvoice("v1.0", {
 *   customerCode: "300000092",
 *   amount: 100000,
 *   description: "Test invoice"
 * });
 *
 * const status = await sdk.Invoice.getInvoicePaymentStatus("v1.0", "300000092", "invoice-123");
 * ```
 */
export class TochkaBankSDK {
  private api: TochkaApi<unknown>;
  private jwtToken_: string;
  private clientId_: string;
  private apiVersion_: string;
  private baseUrl_: string;
  private timeout_: number;

  /**
   * Domain aggregates - separate classes for each API domain
   */
  public readonly Acquiring: TochkaBankAcquiring;
  public readonly Invoice: TochkaBankInvoice;
  public readonly OpenBanking: TochkaBankOpenBanking;
  public readonly Payment: TochkaBankPayment;
  public readonly SBP: TochkaBankSBP;
  public readonly Webhook: TochkaBankWebhook;

  constructor(options: TochkaBankSDKOptions) {
    const {
      jwtToken,
      clientId,
      apiVersion = "v1.0",
      isDevelopment = false,
      timeout = 30000,
    } = options;

    if (!jwtToken) {
      throw new Error("jwtToken is required");
    }
    if (!clientId) {
      throw new Error("clientId is required");
    }

    this.jwtToken_ = jwtToken;
    this.clientId_ = clientId;
    this.apiVersion_ = apiVersion;
    this.timeout_ = timeout;

    // Set base URL based on environment
    this.baseUrl_ = isDevelopment
      ? "https://enter.tochka.com/sandbox/v2"
      : "https://enter.tochka.com/uapi";

    // Initialize the API client
    this.api = new TochkaApi({
      baseUrl: this.baseUrl_,
      baseApiParams: {
        headers: {
          Authorization: `Bearer ${this.jwtToken_}`,
        },
      },
    });

    // Initialize domain aggregates
    this.Acquiring = new TochkaBankAcquiring(this.api, this.apiVersion_, this.clientId_);
    this.Invoice = new TochkaBankInvoice(this.api, this.apiVersion_, this.clientId_);
    this.OpenBanking = new TochkaBankOpenBanking(this.api, this.apiVersion_, this.clientId_);
    this.Payment = new TochkaBankPayment(this.api, this.apiVersion_, this.clientId_);
    this.SBP = new TochkaBankSBP(this.api, this.apiVersion_, this.clientId_);
    this.Webhook = new TochkaBankWebhook(this.api, this.apiVersion_, this.clientId_);
  }

  /**
   * Get the API version being used
   */
  getApiVersion(): string {
    return this.apiVersion_;
  }

  /**
   * Get the client ID being used
   */
  getClientId(): string {
    return this.clientId_;
  }

  /**
   * Get the base URL being used
   */
  getBaseUrl(): string {
    return this.baseUrl_;
  }

  /**
   * Get the underlying API client instance for direct access
   */
  getApiClient(): TochkaApi<unknown> {
    return this.api;
  }
}

// Export domain classes
export { TochkaBankAcquiring } from "./tochka-acquiring";
export { TochkaBankInvoice } from "./tochka-invoice";
export { TochkaBankOpenBanking } from "./tochka-openbanking";
export { TochkaBankPayment } from "./tochka-payment";
export { TochkaBankSBP } from "./tochka-sbp";
export { TochkaBankWebhook } from "./tochka-webhook";
export { TochkaBankDomainBase } from "./tochka-base";

// Export types from generated API for convenience
export type { TochkaApi } from "../types/tochka-api/tochka-api";
export type {
  // Request/Response types can be imported as needed from tochka-api.ts
  // Examples:
  // AcquiringCreatePaymentOperationRequestDataModel,
  // AcquiringCreatePaymentOperationResponseDataModel,
  // InvoiceCreateRequestDataModel,
  // PaymentRequestDataModel,
  // SbpPaymentCodeResponseDataModel,
  // WebhookResponseModel,
} from "../types/tochka-api/tochka-api";

// Export enums from generated API
export {
  ApiVersion,
  WebhookTypeEnum,
  VatType,
  UnitCodeEnum,
  TaxSystemCodeOutput,
  AcquiringPaymentStatus,
  ApplicationInvoiceModelsEnumsPaymentStatusEnum,
  ApplicationSbpModelsEnumsPaymentStatusEnum,
  ContentType,
} from "../types/tochka-api/tochka-api";
