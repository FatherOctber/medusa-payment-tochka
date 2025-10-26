import { TochkaApi } from "../types/tochka-api/tochka-api";
import { TochkaBankDomainBase } from "./tochka-base";

/**
 * SBP (Fast Payment System) domain class
 *
 * Provides access to comprehensive SBP functionality including:
 * - Account management for legal entities
 * - B2B QR code operations (register, get, status tracking)
 * - Cashbox QR code management (register, activate, deactivate)
 * - Payment processing and status tracking
 * - Legal entity and merchant management
 * - Customer information in SBP system
 */
export class TochkaBankSBP extends TochkaBankDomainBase {
  constructor(api: TochkaApi<unknown>, apiVersion: string, clientId: string) {
    super(api, apiVersion, clientId);
  }

  /**
   * Get all SBP methods from the API
   */
  get methods() {
    return this.api.sbp;
  }

  // Account Operations

  /**
   * Get accounts list for legal entity
   * @description Метод для получения списка счетов юрлица в Системе быстрых платежей
   */
  getAccountsList = this.api.sbp.getAccountsList;

  // B2B QR Code Operations

  /**
   * Register B2B QR code
   * @description Метод для регистрации B2B QR-кода в Системе быстрых платежей
   */
  registerB2BQrCode = this.api.sbp.registerB2BQrCode;

  /**
   * Get B2B QR code
   * @description Метод для получения информации о B2B QR-коде
   */
  getB2BQrCode = this.api.sbp.getB2BQrCode;

  // Cashbox QR Code Operations

  /**
   * Register cashbox QR code
   * @description Метод для регистрации кассового QR-кода
   */
  registerCashboxQrcode = this.api.sbp.registerCashboxQrcode;

  /**
   * Get cashbox QR code list
   * @description Метод для получения списка кассовых QR-кодов
   */
  getCashboxQrcodeList = this.api.sbp.getCashboxQrcodeList;

  /**
   * Get cashbox QR code
   * @description Метод для получения информации о кассовом QR-коде
   */
  getCashboxQrcode = this.api.sbp.getCashboxQrcode;

  /**
   * Change cashbox QR code account
   * @description Метод для смены счёта зачисления кассового QR-кода
   */
  changeCashboxQrcodeAccount = this.api.sbp.changeCashboxQrcodeAccount;

  /**
   * Activate cashbox QR code
   * @description Метод для активации кассового QR-кода
   */
  activateCashboxQrcode = this.api.sbp.activateCashboxQrcode;

  /**
   * Deactivate cashbox QR code
   * @description Метод для деактивации кассового QR-кода
   */
  deactivateCashboxQrcode = this.api.sbp.deactivateCashboxQrcode;

  /**
   * Get cashbox QR code operation info
   * @description Метод для получения статуса кассового QR-кода.
   */
  getCashboxQrcodeOperationInfo = this.api.sbp.getCashboxQrcodeOperationInfo;

  /**
   * Get cashbox QR code status
   * @description Метод для получения статуса кассового QR-кода.
   */
  getCashboxQrcodeStatus = this.api.sbp.getCashboxQrcodeStatus;

  // Customer Operations

  /**
   * Get customer info
   * @description Метод для получения информации о клиенте в Системе быстрых платежей
   */
  getCustomerInfo = this.api.sbp.getCustomerInfo;

  // Payment Operations

  /**
   * Get SBP payments
   * @description Метод для получения списка платежей в Системе быстрых платежей Обратите внимание: при поиске платежей за прошедшие дни обязательно передавать атрибут `fromDate` с указанием начальной даты периода. Если этот атрибут не передать, поиск выдаст результаты только за вчерашний и сегодняшний дни.
   */
  getPayments = this.api.sbp.getPayments;

  // Legal Entity Operations

  /**
   * Get legal entity
   * @description Метод для получения данных юрлица в Системе быстрых платежей
   */
  getLegalEntity = this.api.sbp.getLegalEntity;

  /**
   * Set legal entity status
   * @description Метод устанавливает статус юрлица в Системе быстрых платежей
   */
  setLegalEntityStatus = this.api.sbp.setLegalEntityStatus;

  // Merchant Operations

  /**
   * Register merchant
   * @description Метод для регистрации ТСП в Системе быстрых платежей
   */
  registerMerchant = this.api.sbp.registerMerchant;

  /**
   * Get merchants list
   * @description Метод для получения списка ТСП юрлица
   */
  getMerchantsList = this.api.sbp.getMerchantsList;

  /**
   * Set merchant status
   * @description Метод устанавливает статус ТСП
   */
  setMerchantStatus = this.api.sbp.setMerchantStatus;

  /**
   * Get merchant
   * @description Метод для получения информации о ТСП
   */
  getMerchant = this.api.sbp.getMerchant;
}