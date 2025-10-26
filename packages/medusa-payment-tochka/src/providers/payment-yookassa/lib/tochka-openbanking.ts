import { TochkaApi } from "../types/tochka-api/tochka-api";
import { TochkaBankDomainBase } from "./tochka-base";

/**
 * OpenBanking domain class for banking operations
 *
 * Provides access to comprehensive open banking functionality including:
 * - Account management (list accounts, get account details)
 * - Balance operations (single account balance, multi-account balances)
 * - Statement operations (async statement creation and retrieval)
 * - Transaction data (authorized card transactions)
 * - Customer management (customer information and lists)
 *
 * Features asynchronous statement processing with status tracking:
 * Created → Processing → Ready
 */
export class TochkaBankOpenBanking extends TochkaBankDomainBase {
  constructor(api: TochkaApi<unknown>, apiVersion: string, clientId: string) {
    super(api, apiVersion, clientId);
  }

  /**
   * Get all openBanking methods from the API
   */
  get methods() {
    return this.api.openBanking;
  }

  // Account Operations

  /**
   * Get accounts list
   * @description Метод для получения списка доступных счетов
   */
  getAccountsList = this.api.openBanking.getAccountsList;

  /**
   * Get account information
   * @description Метод для получения информации по конкретному счёту
   */
  getAccountInfo = this.api.openBanking.getAccountInfo;

  // Balance Operations

  /**
   * Get balance info for specific account
   * @description Метод для получения информации о балансе конкретного счёта
   */
  getBalanceInfo = this.api.openBanking.getBalanceInfo;

  /**
   * Get balances list for multiple accounts
   * @description Метод для получения баланса по нескольким счетам
   */
  getBalancesList = this.api.openBanking.getBalancesList;

  // Transaction Operations

  /**
   * Get authorized card transactions
   * @description Метод для получения авторизованных карточных транзакций конкретного счёта
   */
  getAuthorizedCardTransactions = this.api.openBanking.getAuthorizedCardTransactions;

  // Statement Operations

  /**
   * Initialize statement creation
   * @description Метод для создания выписки по конкретному счёту
   */
  initStatement = this.api.openBanking.initStatement;

  /**
   * Get specific statement
   * @description Метод для получения конкретной выписки После вызова метода `Init Statement` с помощью `statementId` можно отследить,на каком этапе создание определённой выписки. Есть три статуса: *Created* — создан запрос на выписку; *Processing* — запрос в обработке; *Ready* — выписка готова. **Особенности:** Метод *Init Statement* отрабатывает асинхронно.Отражаются только операции, находящиеся в финальном статусе — *Ready*.
   */
  getStatement = this.api.openBanking.getStatement;

  /**
   * Get statements list
   * @description Метод для получения списка доступных выписок После вызова метода `Init Statement` можно отследить, в каком статусе готовящаяся выписка: *Created* — только создан запрос на выписку; *Processing* — запрос в обработке; *Ready* — выписка готова. **Особенности:** Отражаются только операции, находящиеся в финальном статусе — *Ready*.
   */
  getStatementsList = this.api.openBanking.getStatementsList;

  // Customer Operations

  /**
   * Get customers list
   * @description Метод для получения списка доступных клиентов
   */
  getCustomersList = this.api.openBanking.getCustomersList;

  /**
   * Get customer information
   * @description Метод для получения информации по конкретному клиенту
   */
  getCustomerInfo = this.api.openBanking.getCustomerInfo;
}