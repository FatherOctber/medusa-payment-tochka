import { TochkaApi } from "../types/tochka-api/tochka-api";
import { TochkaBankDomainBase } from "./tochka-base";

/**
 * Acquiring domain class for internet acquiring operations
 *
 * Provides access to all acquiring-related functionality including:
 * - Payment operations (create, capture, refund payment links)
 * - Payment registries and retailer management
 * - Subscription management (create, charge, status management)
 * - Receipt integration with payment operations
 * - Two-phase payment processing (authorize → capture)
 */
export class TochkaBankAcquiring extends TochkaBankDomainBase {
  constructor(api: TochkaApi<unknown>, apiVersion: string, clientId: string) {
    super(api, apiVersion, clientId);
  }

  /**
   * Get all acquiring methods from the API
   */
  get methods() {
    return this.api.acquiring;
  }

  // Payment Operations

  /**
   * Get payment operation list
   * @description Метод для получения списка операций - *CREATED* - Операция создана - *APPROVED* - Операция одобрена (оплата прошла успешно) - *ON-REFUND* - Операция заблокирована на время выполнения возврата - *REFUNDED* - Осуществлен возврат - *EXPIRED* - Истек срок действия
   */
  getPaymentOperationList = this.api.acquiring.getPaymentOperationList;

  /**
   * Create payment operation
   * @description Метод для создания ссылки на оплату
   */
  createPaymentOperation = this.api.acquiring.createPaymentOperation;

  /**
   * Get payment operation info
   * @description Метод для получения информации о конкретной операции - *CREATED* - Операция создана - *APPROVED* - Операция одобрена (оплата прошла успешно) - *ON-REFUND* - Операция заблокирована на время выполнения возврата - *REFUNDED* - Осуществлен возврат - *EXPIRED* - Истек срок действия
   */
  getPaymentOperationInfo = this.api.acquiring.getPaymentOperationInfo;

  /**
   * Capture payment
   * @description Метод для списания средств при двухэтапной оплате
   */
  capturePaymentAcquiring = this.api.acquiring.capturePaymentAcquiring;

  /**
   * Refund payment operation
   * @description Метод для возврата платежей, созданных через платёжную ссылку Возврат возможен только для платежа со статусом APPROVED
   */
  refundPaymentOperation = this.api.acquiring.refundPaymentOperation;

  /**
   * Create payment operation with receipt
   * @description Метод для создания ссылки на оплату и отправки чека
   */
  createPaymentOperationWithReceipt = this.api.acquiring.createPaymentOperationWithReceipt;

  // Registry and Retailers

  /**
   * Get payment registry
   * @description Метод для получения реестра платежей по интернет-эквайрингу
   */
  getPaymentRegistry = this.api.acquiring.getPaymentRegistry;

  /**
   * Get retailers
   * @description Метод для получения информации о ретейлере - *NEW* - Ретейлер создан - *ADDRESS_DADATA* - Адрес уточнен - *OPEN_ACCOUNT* - Счёт открыт - *TWPG_SENDED* - Данные мерчанта и терминала отправлены в процессинг - *RETAILER_CREATED* - Мерчант создан в процессинге - *TERMINAL_CREATED* - Терминал создан в процессинге - *FILE_SENT* - файл отправлен в НСПК - *REG* - Зарегистрирован - *CLOSE* - Закрыт
   */
  getRetailers = this.api.acquiring.getRetailers;

  // Subscription Operations

  /**
   * Create subscription
   * @description Метод для создания подписки по карте
   */
  createSubscription = this.api.acquiring.createSubscription;

  /**
   * Get subscription list
   * @description Метод для получения всех подписок
   */
  getSubscriptionList = this.api.acquiring.getSubscriptionList;

  /**
   * Charge subscription
   * @description Метод для списания средств по рекуррентной подписке
   */
  chargeSubscription = this.api.acquiring.chargeSubscription;

  /**
   * Set subscription status
   * @description Метод для установки статуса подписки
   */
  setSubscriptionStatus = this.api.acquiring.setSubscriptionStatus;

  /**
   * Get subscription status
   * @description Метод для получения актуального статуса подписки
   */
  getSubscriptionStatus = this.api.acquiring.getSubscriptionStatus;

  /**
   * Create subscription with receipt
   * @description Метод для создания подписки по карте и отправке чека
   */
  createSubscriptionWithReceipt = this.api.acquiring.createSubscriptionWithReceipt;
}