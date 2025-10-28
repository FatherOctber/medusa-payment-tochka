import { TochkaApi } from "../types/tochka-api/tochka-api";
import { TochkaBankDomainBase } from "./tochka-base";

/**
 * Payment domain class for payment operations
 *
 * Provides access to payment functionality including:
 * - Creating payments for signing
 * - Managing payment workflows
 * - Creating and signing payments immediately
 * - Payment status tracking
 */
export class TochkaBankPayment extends TochkaBankDomainBase {
  constructor(api: TochkaApi<unknown>, apiVersion: string, clientId: string) {
    super(api, apiVersion, clientId);
  }

  /**
   * Get all payment methods from the API
   */
  get methods() {
    return this.api.payment;
  }

  /**
   * Create payment for sign
   * @description Метод для создания платежа. Если вы создаёте платёж за третье лицо в бюджет, заполните поля `payerINN` и `payerKPP`. **Обратите внимание:** *paymentDate* нужно заполнить по часовому поясу Москвы.
   */
  createPaymentForSign = this.api.payment.createPaymentForSign;

  /**
   * Get payment for sign list
   * @description Метод получения списка платежей на подпись
   */
  getPaymentForSignList = this.api.payment.getPaymentForSignList;

  /**
   * Create payment
   * @description Метод для создания и подписания платежа. - Если вы создаёте платеж в бюджет, то необходимо заполнить поле `payerKPP` - Если вы создаёте платёж за третье лицо в бюджет, заполните поля `payerINN` и `payerKPP`. **Обратите внимание:** *paymentDate* нужно заполнить по часовому поясу Москвы.
   */
  createPayment = this.api.payment.createPayment;

  /**
   * Get payment status
   * @description Метод для получения статуса платежа
   */
  getPaymentStatus = this.api.payment.getPaymentStatus;
}