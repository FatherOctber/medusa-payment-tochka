/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

/**
 * PaymentStatusEnum
 * **Описание возможных статусов платежа**
 *   - `Confirming` - операция в процессе подтверждения ОПКЦ СБП
 *   - `Confirmed` - операция подтверждена
 *   - `Initiated` - операция отправлена на обработку
 *   - `Accepting` - операция в обработке ОПКЦ СБП
 *   - `Accepted` - операция успешно завершена
 *   - `InProgress` - операция в обработке РЦ СБП
 *   - `Rejected` - операция отклонена
 *   - `Error` - ошибка выполнения операции
 *   - `Timeout` - тайм-аут выполнения операции
 */
export enum ApplicationSbpModelsEnumsPaymentStatusEnum {
    Confirming = "Confirming",
    Confirmed = "Confirmed",
    Initiated = "Initiated",
    Accepting = "Accepting",
    Accepted = "Accepted",
    InProgress = "InProgress",
    Rejected = "Rejected",
    Error = "Error",
    Timeout = "Timeout",
}

/** PaymentStatusEnum */
export enum ApplicationInvoiceModelsEnumsPaymentStatusEnum {
    PaymentWaiting = "payment_waiting",
    PaymentExpired = "payment_expired",
    PaymentPaid = "payment_paid",
}

/** WebhookTypeEnum */
export enum WebhookTypeEnum {
    IncomingPayment = "incomingPayment",
    OutgoingPayment = "outgoingPayment",
    IncomingSbpPayment = "incomingSbpPayment",
    AcquiringInternetPayment = "acquiringInternetPayment",
    IncomingSbpB2BPayment = "incomingSbpB2BPayment",
}

/** VatType */
export enum VatType {
    None = "none",
    Vat0 = "vat0",
    Vat5 = "vat5",
    Vat7 = "vat7",
    Vat10 = "vat10",
    Vat20 = "vat20",
    Vat105 = "vat105",
    Vat107 = "vat107",
    Vat110 = "vat110",
    Vat120 = "vat120",
}

/** UnitCodeEnum */
export enum UnitCodeEnum {
    ValueШт = "шт.",
    ValueТысШт = "тыс.шт.",
    ValueКомпл = "компл.",
    ValueПар = "пар.",
    ValueУслЕд = "усл.ед.",
    ValueУпак = "упак.",
    ValueУслуга = "услуга.",
    ValueПач = "пач.",
    ValueМин = "мин.",
    ValueЧ = "ч.",
    ValueСут = "сут.",
    ValueГ = "г.",
    ValueКг = "кг.",
    ValueЛ = "л.",
    ValueМ = "м.",
    ValueМ2 = "м2.",
    ValueМ3 = "м3.",
    ValueКм = "км.",
    ValueГа = "га.",
    ValueКВт = "кВт.",
    ValueКВтЧ = "кВт.ч.",
}

/**
 * TaxSystemCodeOutput
 * Перечисление для выдачи результатов из openapi.
 */
export enum TaxSystemCodeOutput {
    Osn = "osn",
    UsnIncome = "usn_income",
    UsnIncomeOutcome = "usn_income_outcome",
    Esn = "esn",
    Patent = "patent",
    Envd = "envd",
}

/** TaxSystemCodeInput */
export enum TaxSystemCodeInput {
    Osn = "osn",
    UsnIncome = "usn_income",
    UsnIncomeOutcome = "usn_income_outcome",
    Esn = "esn",
    Patent = "patent",
}

/** StatusEnum */
export enum StatusEnum {
    Active = "Active",
    Suspended = "Suspended",
}

/** StatementStatus */
export enum StatementStatus {
    Created = "Created",
    Processing = "Processing",
    Error = "Error",
    Ready = "Ready",
}

/** SBPPaymentStatus */
export enum SBPPaymentStatus {
    WaitingForClientConfirm = "WaitingForClientConfirm",
    Initiated = "Initiated",
    WaitingForConfirm = "WaitingForConfirm",
    Confirmed = "Confirmed",
    WaitingForAccept = "WaitingForAccept",
    Accepted = "Accepted",
    Rejected = "Rejected",
}

/**
 * SBPCashboxTrxStatus
 * * ACWP - Операция завершена успешно
 * * RJCT - Операция отклонена
 * * RCVD - Операция в обработке
 * * NTST - Операции по QR-коду не существует
 */
export enum SBPCashboxTrxStatus {
    ACWP = "ACWP",
    RJCT = "RJCT",
    RCVD = "RCVD",
    NTST = "NTST",
}

/** SBPCashboxQrCodeStatus */
export enum SBPCashboxQrCodeStatus {
    INACTIVATED = "INACTIVATED",
    WAITING_PAYMENT = "WAITING_PAYMENT",
    IN_PROGRESS = "IN_PROGRESS",
}

/** SBPCashboxOperationQrCodeStatus */
export enum SBPCashboxOperationQrCodeStatus {
    DEACTIVATED = "DEACTIVATED",
    WAITING_PAYMENT = "WAITING_PAYMENT",
    IN_PROGRESS = "IN_PROGRESS",
}

/**
 * QrTypeEnum
 * 01 - QR-Static (QR наклейка)
 * 02 - QR-Dynamic (QR на кассе)
 */
export enum QrTypeEnum {
    Value01 = "01",
    Value02 = "02",
}

/**
 * QRCodePaymentStatusExternal
 * **Описание возможных статусов платежа**
 *
 *   - `NotStarted` - операции по QR-коду не существует
 *   - `Received` - операция в обработке
 *   - `InProgress` - операция в обработке
 *   - `Accepted` - операция завершена успешно
 *   - `Rejected` - операция отклонена
 */
export enum QRCodePaymentStatusExternal {
    NotStarted = "NotStarted",
    Received = "Received",
    InProgress = "InProgress",
    Accepted = "Accepted",
    Rejected = "Rejected",
}

/**
 * PaymentOrderStatusEnum
 * **Описание статусов платежа**
 *
 *   - `Initiated` - Все необходимые реквизиты для платежа получены, платёж готов к проверке на возможность проведения
 *   - `Wait For Owner Requisites` - Часть реквизитов для платежа получена, кроме реквизитов плательщика
 *   - `NotAllowed` - Платёж нельзя провести: либо у пользователя нет прав для подписи, либо платёж заблокирован
 *   комплаенсом
 *   - `Allowed` - Платёж готов к подписанию, все проверки пройдены
 *   - `WaitingForSign` - Платёж ждёт подписи
 *   - `WaitingForCreate` - Платёж подписан, ждёт создания внутри систем банка
 *   - `Created` - Платёж создан
 *   - `Paid` - Платёж оплачен
 *   - `Canceled` - Платёж отменен
 *   - `Rejected` - Платёж отменён
 */
export enum PaymentOrderStatusEnum {
    Initiated = "Initiated",
    WaitForOwnerRequisites = "Wait For Owner Requisites",
    NotAllowed = "NotAllowed",
    Allowed = "Allowed",
    WaitingForSign = "WaitingForSign",
    WaitingForCreate = "WaitingForCreate",
    Created = "Created",
    Paid = "Paid",
    Canceled = "Canceled",
    Rejected = "Rejected",
}

/** PaymentObject */
export enum PaymentObject {
    Goods = "goods",
    Service = "service",
    Work = "work",
}

/** PaymentMethod */
export enum PaymentMethod {
    FullPayment = "full_payment",
    FullPrepayment = "full_prepayment",
}

/** OrderType */
export enum OrderType {
    Refund = "refund",
    Approval = "approval",
    Authorized = "authorized",
}

/** NdsKindEnum */
export enum NdsKindEnum {
    Nds0 = "nds_0",
    Nds5 = "nds_5",
    Nds7 = "nds_7",
    Nds10 = "nds_10",
    Nds20 = "nds_20",
    WithoutNds = "without_nds",
}

/** MediaTypeEnum */
export enum MediaTypeEnum {
    ImagePng = "image/png",
    ImageSvgXml = "image/svg+xml",
}

/** Measure */
export enum Measure {
    ValueГ = "г.",
    ValueКг = "кг.",
    ValueТ = "т.",
    ValueСм = "см.",
    ValueДм = "дм.",
    ValueМ = "м.",
    ValueСм2 = "см2.",
    ValueДм2 = "дм2.",
    ValueМ2 = "м2.",
    ValueМл = "мл.",
    ValueЛ = "л.",
    ValueМ3 = "м3",
    ValueКВтЧ = "кВт.ч.",
    ValueГкал = "Гкал.",
    ValueДн = "дн.",
    ValueЧ = "ч.",
    ValueМин = "мин.",
    ValueСек = "сек.",
    ValueКб = "Кб.",
    ValueМб = "Мб.",
    ValueГб = "Гб.",
    ValueТб = "Тб.",
    ValueШт = "шт.",
}

/** FinancialInstitutionIdentificationEnum */
export enum FinancialInstitutionIdentificationEnum {
    RUCBRBICFI = "RU.CBR.BICFI",
    RUCBRBIK = "RU.CBR.BIK",
}

/** ExternalTypeEnum */
export enum ExternalTypeEnum {
    Business = "Business",
    Personal = "Personal",
}

/** ExternalTransationTypeEnum */
export enum ExternalTransationTypeEnum {
    ValueНеопределенноеЗначение = "Неопределенное значение",
    ValueПлатежноеПоручение = "Платежное поручение",
    ValueПлатежноеТребование = "Платежное требование",
    ValueДенежныйЧекРКО = "Денежный чек, РКО",
    ValueОбъявлениеНаВзносНаличнымиПКО = "Объявление на взнос наличными, ПКО",
    ValueТребованиеПоручение = "Требование-поручение",
    ValueИнкассовоеПоручение = "Инкассовое поручение",
    ValueРасчетныйЧек = "Расчетный чек",
    ValueАккредитив = "Аккредитив",
    ValueМемориальныйОрдер = "Мемориальный ордер",
    ValueПогашениеКредита = "Погашение кредита",
    ValueВыдачаКредита = "Выдача кредита",
    ValueАвизо = "Авизо",
    ValueБанковскиеКарты = "Банковские карты",
    ValueПлатежныйОрдер = "Платежный ордер",
    ValueБанковскийОрдер = "Банковский ордер",
    ValueОрдерПоПередачеЦенностей = "Ордер по передаче ценностей",
    ValueПрограммныйОрдер = "Программный ордер",
    ValueИмпортированнаяЗапись = "Импортированная запись",
}

/** ExternalTransactionStatusEnum */
export enum ExternalTransactionStatusEnum {
    Booked = "Booked",
    Pending = "Pending",
}

/** ExternalCreditDebitIndicatorEnum */
export enum ExternalCreditDebitIndicatorEnum {
    Credit = "Credit",
    Debit = "Debit",
}

/** ExternalConsentTypeEnum */
export enum ExternalConsentTypeEnum {
    ReadAccountsBasic = "ReadAccountsBasic",
    ReadAccountsDetail = "ReadAccountsDetail",
    ReadBalances = "ReadBalances",
    ReadStatements = "ReadStatements",
    ReadTransactionsBasic = "ReadTransactionsBasic",
    ReadTransactionsCredits = "ReadTransactionsCredits",
    ReadTransactionsDebits = "ReadTransactionsDebits",
    ReadTransactionsDetail = "ReadTransactionsDetail",
    ReadCustomerData = "ReadCustomerData",
    ReadSBPData = "ReadSBPData",
    EditSBPData = "EditSBPData",
    CreatePaymentForSign = "CreatePaymentForSign",
    CreatePaymentOrder = "CreatePaymentOrder",
    ReadAcquiringData = "ReadAcquiringData",
    MakeAcquiringOperation = "MakeAcquiringOperation",
    ManageInvoiceData = "ManageInvoiceData",
    ManageWebhookData = "ManageWebhookData",
    MakeCustomer = "MakeCustomer",
    ManageGuarantee = "ManageGuarantee",
}

/** ExternalBalanceTypeEnum */
export enum ExternalBalanceTypeEnum {
    Credit = "Credit",
    Debit = "Debit",
}

/**
 * ExternalBalanceStaticTypeEnum
 * **Описание типов балансов**
 *
 *   - `OpeningAvailable` - Начальный остаток
 *   - `ClosingAvailable` - Доступный баланс
 *   - `Expected` - Сумма заблокированных средств
 *   - `OverdraftAvailable` - Доступный лимит по овердрафту
 */
export enum ExternalBalanceStaticTypeEnum {
    OpeningAvailable = "OpeningAvailable",
    ClosingAvailable = "ClosingAvailable",
    Expected = "Expected",
    OverdraftAvailable = "OverdraftAvailable",
}

/** ExternalAcquiringPaymentTypeEnum */
export enum ExternalAcquiringPaymentTypeEnum {
    Sbp = "sbp",
    Card = "card",
    Tinkoff = "tinkoff",
    Dolyame = "dolyame",
}

/** ExternalAccountSubTypeEnum */
export enum ExternalAccountSubTypeEnum {
    CreditCard = "CreditCard",
    CurrentAccount = "CurrentAccount",
    Loan = "Loan",
    Mortgage = "Mortgage",
    PrePaidCard = "PrePaidCard",
    Savings = "Savings",
    Special = "Special",
}

/** ExternalAccountStatusEnum */
export enum ExternalAccountStatusEnum {
    Enabled = "Enabled",
    Disabled = "Disabled",
    Deleted = "Deleted",
    ProForma = "ProForma",
    Pending = "Pending",
}

/** CounterpartTypeEnum */
export enum CounterpartTypeEnum {
    Ip = "ip",
    Company = "company",
}

/** ConsentTypeEnum */
export enum ConsentTypeEnum {
    ReadAccountsBasic = "ReadAccountsBasic",
    ReadAccountsDetail = "ReadAccountsDetail",
    ReadBalances = "ReadBalances",
    ReadStatements = "ReadStatements",
    ReadTransactionsBasic = "ReadTransactionsBasic",
    ReadTransactionsCredits = "ReadTransactionsCredits",
    ReadTransactionsDebits = "ReadTransactionsDebits",
    ReadTransactionsDetail = "ReadTransactionsDetail",
    ReadCustomerData = "ReadCustomerData",
    ReadSBPData = "ReadSBPData",
    EditSBPData = "EditSBPData",
    ReadSBPData1C = "ReadSBPData1C",
    EditSBPData1C = "EditSBPData1C",
    CreatePaymentForSign = "CreatePaymentForSign",
    CreatePaymentOrder = "CreatePaymentOrder",
    ReadAcquiringData = "ReadAcquiringData",
    MakeAcquiringOperation = "MakeAcquiringOperation",
    ManageInvoiceData = "ManageInvoiceData",
    ManageWebhookData = "ManageWebhookData",
    MakeCustomer = "MakeCustomer",
    ManageGuarantee = "ManageGuarantee",
}

/** ConsentStatusEnum */
export enum ConsentStatusEnum {
    AwaitingAuthorisation = "AwaitingAuthorisation",
    Authorised = "Authorised",
    Rejected = "Rejected",
    Revoked = "Revoked",
}

/**
 * CapabilitiesEnum
 * `001` - только QR Static
 * `010` - только QR Dynamic
 * `011` - QR Static и QR Dynamic
 * `100` - Только QR Subscription
 * `101` - QR Subscription и QR Static
 * `110` - QR Subscription и QR Dynamic
 * `111` - QR Static, QR Dynamic и QR Subscription
 */
export enum CapabilitiesEnum {
    Value001 = "001",
    Value010 = "010",
    Value011 = "011",
    Value100 = "100",
    Value101 = "101",
    Value110 = "110",
    Value111 = "111",
}

/** ApiVersion */
export enum ApiVersion {
    V10 = "v1.0",
}

/** AcquiringSubscriptionStatusInput */
export enum AcquiringSubscriptionStatusInput {
    Cancelled = "Cancelled",
}

/** AcquiringSubscriptionStatus */
export enum AcquiringSubscriptionStatus {
    Active = "Active",
    Cancelled = "Cancelled",
    Completed = "Completed",
    Expired = "Expired",
    Failed = "Failed",
    PastDue = "PastDue",
    Preparing = "Preparing",
    Refused = "Refused",
    Rejected = "Rejected",
    Suspended = "Suspended",
    Trial = "Trial",
}

/** AcquiringSubscriptionPeriodOutput */
export enum AcquiringSubscriptionPeriodOutput {
    Day = "Day",
    Month = "Month",
    Year = "Year",
    Quarter = "Quarter",
}

/** AcquiringSubscriptionPeriodInput */
export enum AcquiringSubscriptionPeriodInput {
    Day = "Day",
    Month = "Month",
    Year = "Year",
}

/** AcquiringRetailerStatus */
export enum AcquiringRetailerStatus {
    NEW = "NEW",
    ADDRESS_DADATA = "ADDRESS_DADATA",
    OPEN_ACCOUNT = "OPEN_ACCOUNT",
    TWPG_SENDED = "TWPG_SENDED",
    RETAILER_CREATED = "RETAILER_CREATED",
    TERMINAL_CREATED = "TERMINAL_CREATED",
    FILE_SENT = "FILE_SENT",
    REG = "REG",
    CLOSE = "CLOSE",
}

/** AcquiringPaymentStatus */
export enum AcquiringPaymentStatus {
    CREATED = "CREATED",
    APPROVED = "APPROVED",
    ONREFUND = "ON-REFUND",
    REFUNDED = "REFUNDED",
    EXPIRED = "EXPIRED",
    REFUNDED_PARTIALLY = "REFUNDED_PARTIALLY",
    AUTHORIZED = "AUTHORIZED",
    WAIT_FULL_PAYMENT = "WAIT_FULL_PAYMENT",
}

/** AcquiringPaymentMode */
export enum AcquiringPaymentMode {
    Sbp = "sbp",
    Card = "card",
    Tinkoff = "tinkoff",
    Dolyame = "dolyame",
}

/** AcquiringCreatedStatus */
export enum AcquiringCreatedStatus {
    CREATED = "CREATED",
}

/** AccountIdentificationEnum */
export enum AccountIdentificationEnum {
    RUCBRPAN = "RU.CBR.PAN",
    RUCBRCellphoneNumber = "RU.CBR.CellphoneNumber",
    RUCBRBBAN = "RU.CBR.BBAN",
}

/** Account */
export interface Account {
    /** Уникальный и неизменный идентификатор счёта */
    accountId: string;
    /** Статус объекта */
    status: StatusEnum;
    /** Время регистрации */
    createdAt: string;
    /** Идентификатор зарегистрированного юрлица в СБП (12 символов) */
    legalId: string;
}

/** AccountDetailModel */
export interface AccountDetailModel {
    /** Наименование схемы идентификации счёта */
    schemeName: string;
    /**
     * Уникальный и неизменный идентификатор счёта
     * @maxLength 40
     */
    identification: string;
    /** Название идентификатора счёта */
    name: string;
}

/** AccountListModel */
export interface AccountListModel {
    /** Account */
    Account: AccountModel[];
}

/** AccountListResponse */
export interface AccountListResponse {
    /** Accountlist */
    AccountList: Account[];
}

/** AccountModel */
export interface AccountModel {
    /**
     * Уникальный код клиента
     * @maxLength 9
     */
    customerCode: string;
    /**
     * Уникальный и неизменный идентификатор счёта
     * @maxLength 40
     */
    accountId: string;
    /** Идентификатор транзитного счета */
    transitAccount?: string;
    /** Статус счёта в форме кода */
    status: ExternalAccountStatusEnum;
    /** Дата и время изменения статуса счёта. Используется стандарт ISO8601 */
    statusUpdateDateTime: string;
    /** Валюта ведения счёта. Используется стандарт ISO 4217 */
    currency: string;
    /** Тип счёта (физическое или юридическое лицо) */
    accountType: ExternalTypeEnum;
    /** Подтип счёта  */
    accountSubType: ExternalAccountSubTypeEnum;
    /**
     * Дата регистрации счета
     * @format date
     */
    registrationDate: string;
    /** Accountdetails */
    accountDetails?: AccountDetailModel[];
}

/**
 * AccountResponseModel
 * Метод получения информации по счёту
 */
export interface AccountResponseModel {
    Data: AccountModel;
    Links: LinkModel;
    Meta: MetaModel;
}

/** AcquiringCapturePaymentResponseModel */
export interface AcquiringCapturePaymentResponseModel {
    Data: BooleanResponse;
    Links: LinkModel;
    Meta: MetaModel;
}

/** AcquiringChargeSubscriptionRequestDataModel */
export interface AcquiringChargeSubscriptionRequestDataModel {
    Data: AcquiringChargeSubscriptionRequestModel;
}

/** AcquiringChargeSubscriptionRequestModel */
export interface AcquiringChargeSubscriptionRequestModel {
    /** Сумма платежа */
    amount: number;
}

/** AcquiringChargeSubscriptionResponseDataModel */
export interface AcquiringChargeSubscriptionResponseDataModel {
    Data: BooleanResponse;
}

/** AcquiringCreatePaymentOperationRequestDataModel */
export interface AcquiringCreatePaymentOperationRequestDataModel {
    Data: AcquiringCreatePaymentOperationRequestModel;
}

/** AcquiringCreatePaymentOperationRequestModel */
export interface AcquiringCreatePaymentOperationRequestModel {
    /**
     * Уникальный код клиента
     * @minLength 9
     * @maxLength 9
     */
    customerCode: string;
    /**
     * Сумма платежа
     * @exclusiveMin 0
     */
    amount: number;
    /**
     * Назначение платежа
     * @minLength 1
     * @maxLength 140
     */
    purpose: string;
    /**
     * URL адрес, куда будет переправлен клиент после оплаты услуги
     * @format uri
     * @minLength 1
     * @maxLength 2083
     */
    redirectUrl?: string;
    /**
     * URL адрес, куда будет переправлен клиент в случае неуспешной оплаты
     * @format uri
     * @minLength 1
     * @maxLength 2083
     */
    failRedirectUrl?: string;
    /**
     * Способ оплаты
     * @minItems 1
     */
    paymentMode: AcquiringPaymentMode[];
    /** Предложить покупателю сохранить карту */
    saveCard?: boolean;
    /** Идентификатор покупателя */
    consumerId?: string;
    /**
     * Идентификатор торговой точки в интернет-эквайринге
     * @minLength 15
     * @maxLength 15
     */
    merchantId?: string;
    /** Создать платёж с двухэтапной оплатой */
    preAuthorization?: boolean;
    /**
     * Время жизни платёжной ссылки в минутах
     * @min 1
     * @max 44640
     * @default 10080
     */
    ttl?: number;
    /**
     * Уникальный номер заказа
     * @minLength 1
     * @maxLength 45
     */
    paymentLinkId?: string;
}

/** AcquiringCreatePaymentOperationResponseDataModel */
export interface AcquiringCreatePaymentOperationResponseDataModel {
    Data: AcquiringCreatePaymentOperationResponseModel;
    Links: LinkModel;
    Meta: MetaModel;
}

/** AcquiringCreatePaymentOperationResponseModel */
export interface AcquiringCreatePaymentOperationResponseModel {
    /** Назначение платежа */
    purpose: string;
    /**
     * Статус операции
     * @default "CREATED"
     */
    status?: AcquiringPaymentStatus;
    /** Сумма платежа */
    amount: number;
    /** Идентификатор платежа */
    operationId: string;
    /** Ссылка на оплату */
    paymentLink: string;
    /** Идентификатор покупателя */
    consumerId?: string;
    /** Идентификатор торговой точки в интернет-эквайринге */
    merchantId?: string;
    /** Создать платёж с двухэтапной оплатой */
    preAuthorization?: boolean;
    /**
     * Время жизни платёжной ссылки в минутах
     * @min 1
     * @max 44640
     * @default 10080
     */
    ttl?: number;
    /**
     * Уникальный номер заказа
     * @minLength 1
     * @maxLength 45
     */
    paymentLinkId?: string;
    /**
     * Способ оплаты
     * @minItems 1
     */
    paymentMode: AcquiringPaymentMode[];
}

/** AcquiringCreatePaymentOperationWithReceiptRequestDataModel */
export interface AcquiringCreatePaymentOperationWithReceiptRequestDataModel {
    Data: AcquiringCreatePaymentOperationWithReceiptRequestModel;
}

/** AcquiringCreatePaymentOperationWithReceiptRequestModel */
export interface AcquiringCreatePaymentOperationWithReceiptRequestModel {
    /**
     * Уникальный код клиента
     * @minLength 9
     * @maxLength 9
     */
    customerCode: string;
    /**
     * Сумма платежа
     * @exclusiveMin 0
     */
    amount: number;
    /**
     * Назначение платежа
     * @minLength 1
     * @maxLength 140
     */
    purpose: string;
    /**
     * URL адрес, куда будет переправлен клиент после оплаты услуги
     * @format uri
     * @minLength 1
     * @maxLength 2083
     */
    redirectUrl?: string;
    /**
     * URL адрес, куда будет переправлен клиент в случае неуспешной оплаты
     * @format uri
     * @minLength 1
     * @maxLength 2083
     */
    failRedirectUrl?: string;
    /**
     * Способ оплаты
     * @minItems 1
     */
    paymentMode: AcquiringPaymentMode[];
    /** Предложить покупателю сохранить карту */
    saveCard?: boolean;
    /** Идентификатор покупателя */
    consumerId?: string;
    /**
     * Идентификатор торговой точки в интернет-эквайринге
     * @minLength 15
     * @maxLength 15
     */
    merchantId?: string;
    /** Создать платёж с двухэтапной оплатой */
    preAuthorization?: boolean;
    /**
     * Время жизни платёжной ссылки в минутах
     * @min 1
     * @max 44640
     * @default 10080
     */
    ttl?: number;
    /**
     * Уникальный номер заказа
     * @minLength 1
     * @maxLength 45
     */
    paymentLinkId?: string;
    /** Система налогообложения */
    taxSystemCode?: TaxSystemCodeInput;
    /** Данные покупателя */
    Client: ReceiptClientModel;
    /**
     * Список товаров в заказе
     * @minItems 1
     */
    Items: ReceiptItemModelInput[];
    /** Данные поставщика */
    Supplier?: SupplierModel;
}

/** AcquiringCreatePaymentOperationWithReceiptResponseDataModel */
export interface AcquiringCreatePaymentOperationWithReceiptResponseDataModel {
    Data: AcquiringCreatePaymentOperationWithReceiptResponseModel;
    Links: LinkModel;
    Meta: MetaModel;
}

/** AcquiringCreatePaymentOperationWithReceiptResponseModel */
export interface AcquiringCreatePaymentOperationWithReceiptResponseModel {
    /** Назначение платежа */
    purpose: string;
    /**
     * Статус операции
     * @default "CREATED"
     */
    status?: AcquiringPaymentStatus;
    /** Сумма платежа */
    amount: number;
    /** Идентификатор платежа */
    operationId: string;
    /** Ссылка на оплату */
    paymentLink: string;
    /** Идентификатор покупателя */
    consumerId?: string;
    /** Идентификатор торговой точки в интернет-эквайринге */
    merchantId?: string;
    /** Создать платёж с двухэтапной оплатой */
    preAuthorization?: boolean;
    /**
     * Время жизни платёжной ссылки в минутах
     * @min 1
     * @max 44640
     * @default 10080
     */
    ttl?: number;
    /**
     * Уникальный номер заказа
     * @minLength 1
     * @maxLength 45
     */
    paymentLinkId?: string;
    /**
     * Способ оплаты
     * @minItems 1
     */
    paymentMode: AcquiringPaymentMode[];
    /**
     * Уникальный код клиента
     * @minLength 9
     * @maxLength 9
     */
    customerCode: string;
    /**
     * URL адрес, куда будет переправлен клиент после оплаты услуги
     * @format uri
     * @minLength 1
     * @maxLength 2083
     */
    redirectUrl?: string;
    /**
     * URL адрес, куда будет переправлен клиент в случае неуспешной оплаты
     * @format uri
     * @minLength 1
     * @maxLength 2083
     */
    failRedirectUrl?: string;
    /** Система налогообложения */
    taxSystemCode?: TaxSystemCodeInput;
    /** Данные покупателя */
    Client: ReceiptClientModel;
    /**
     * Список товаров в заказе
     * @minItems 1
     */
    Items: ReceiptItemModelOutput[];
    /** Данные поставщика */
    Supplier?: SupplierModel;
}

/** AcquiringCreateSubscriptionRequestDataModel */
export interface AcquiringCreateSubscriptionRequestDataModel {
    Data: AcquiringCreateSubscriptionRequestModel;
}

/** AcquiringCreateSubscriptionRequestModel */
export interface AcquiringCreateSubscriptionRequestModel {
    /**
     * Уникальный код клиента
     * @minLength 9
     * @maxLength 9
     */
    customerCode: string;
    /**
     * Сумма платежа, которая будет списываться в указанный клиентом период
     * @exclusiveMin 0
     */
    amount: number;
    /**
     * Назначение платежа
     * @minLength 1
     * @maxLength 140
     */
    purpose: string;
    /**
     * URL адрес, куда будет переправлен клиент после оплаты услуги
     * @format uri
     * @minLength 1
     * @maxLength 2083
     */
    redirectUrl?: string;
    /**
     * URL адрес, куда будет переправлен клиент в случае неуспешной оплаты
     * @format uri
     * @minLength 1
     * @maxLength 2083
     */
    failRedirectUrl?: string;
    /** Предложить покупателю сохранить карту */
    saveCard?: boolean;
    /** Идентификатор покупателя */
    consumerId?: string;
    /** Идентификатор торговой точки в интернет-эквайринге */
    merchantId?: string;
    /** Создание рекуррентной оплаты */
    recurring?: boolean;
    /** Опции подписки */
    Options?: AcquiringSubscriptionInputOptions;
    /**
     * Уникальный номер заказа
     * @minLength 1
     * @maxLength 45
     */
    paymentLinkId?: string;
}

/** AcquiringCreateSubscriptionResponseDataModel */
export interface AcquiringCreateSubscriptionResponseDataModel {
    Data: AcquiringCreateSubscriptionResponseModel;
    Links: LinkModel;
    Meta: MetaModel;
}

/** AcquiringCreateSubscriptionResponseModel */
export interface AcquiringCreateSubscriptionResponseModel {
    /**
     * Назначение платежа
     * @minLength 1
     * @maxLength 140
     */
    purpose: string;
    /** Сумма платежа, которая будет списываться в указанный клиентом период */
    amount: number;
    /**
     * Статус платежа
     * @default "CREATED"
     */
    status?: AcquiringCreatedStatus;
    /** Идентификатор платежа */
    operationId: string;
    /** Ссылка на оплату */
    paymentLink: string;
    /** Идентификатор покупателя */
    consumerId?: string;
    /** Рекуррентная подписка */
    recurring?: boolean;
    /** Опции подписки */
    Options?: AcquiringSubscriptionOutputOptions;
    /**
     * Уникальный номер заказа
     * @minLength 1
     * @maxLength 45
     */
    paymentLinkId?: string;
}

/** AcquiringCreateSubscriptionWithReceiptRequestDataModel */
export interface AcquiringCreateSubscriptionWithReceiptRequestDataModel {
    Data: AcquiringCreateSubscriptionWithReceiptRequestModel;
}

/** AcquiringCreateSubscriptionWithReceiptRequestModel */
export interface AcquiringCreateSubscriptionWithReceiptRequestModel {
    /**
     * Уникальный код клиента
     * @minLength 9
     * @maxLength 9
     */
    customerCode: string;
    /**
     * Сумма платежа, которая будет списываться в указанный клиентом период
     * @exclusiveMin 0
     */
    amount: number;
    /**
     * Назначение платежа
     * @minLength 1
     * @maxLength 140
     */
    purpose: string;
    /**
     * URL адрес, куда будет переправлен клиент после оплаты услуги
     * @format uri
     * @minLength 1
     * @maxLength 2083
     */
    redirectUrl?: string;
    /**
     * URL адрес, куда будет переправлен клиент в случае неуспешной оплаты
     * @format uri
     * @minLength 1
     * @maxLength 2083
     */
    failRedirectUrl?: string;
    /** Предложить покупателю сохранить карту */
    saveCard?: boolean;
    /** Идентификатор покупателя */
    consumerId?: string;
    /** Идентификатор торговой точки в интернет-эквайринге */
    merchantId?: string;
    /** Создание рекуррентной оплаты */
    recurring?: boolean;
    /** Опции подписки */
    Options?: AcquiringSubscriptionInputOptions;
    /**
     * Уникальный номер заказа
     * @minLength 1
     * @maxLength 45
     */
    paymentLinkId?: string;
    /** Система налогообложения */
    taxSystemCode?: TaxSystemCodeInput;
    /** Данные покупателя */
    Client: ReceiptClientModel;
    /**
     * Список товаров в заказе
     * @minItems 1
     */
    Items: ReceiptItemModelInput[];
    /** Данные поставщика */
    Supplier?: SupplierModel;
}

/** AcquiringCreateSubscriptionWithReceiptResponseDataModel */
export interface AcquiringCreateSubscriptionWithReceiptResponseDataModel {
    Data: AcquiringCreateSubscriptionWithReceiptResponseModel;
    Links: LinkModel;
    Meta: MetaModel;
}

/** AcquiringCreateSubscriptionWithReceiptResponseModel */
export interface AcquiringCreateSubscriptionWithReceiptResponseModel {
    /**
     * Назначение платежа
     * @minLength 1
     * @maxLength 140
     */
    purpose: string;
    /** Сумма платежа, которая будет списываться в указанный клиентом период */
    amount: number;
    /**
     * Статус платежа
     * @default "CREATED"
     */
    status?: AcquiringCreatedStatus;
    /** Идентификатор платежа */
    operationId: string;
    /** Ссылка на оплату */
    paymentLink: string;
    /** Идентификатор покупателя */
    consumerId?: string;
    /** Рекуррентная подписка */
    recurring?: boolean;
    /** Опции подписки */
    Options?: AcquiringSubscriptionOutputOptions;
    /**
     * Уникальный номер заказа
     * @minLength 1
     * @maxLength 45
     */
    paymentLinkId?: string;
    /**
     * Уникальный код клиента
     * @minLength 9
     * @maxLength 9
     */
    customerCode: string;
    /**
     * URL адрес, куда будет переправлен клиент после оплаты услуги
     * @format uri
     * @minLength 1
     * @maxLength 2083
     */
    redirectUrl?: string;
    /**
     * URL адрес, куда будет переправлен клиент в случае неуспешной оплаты
     * @format uri
     * @minLength 1
     * @maxLength 2083
     */
    failRedirectUrl?: string;
    /** Идентификатор торговой точки в интернет-эквайринге */
    merchantId?: string;
    /** Система налогообложения */
    taxSystemCode?: TaxSystemCodeInput;
    /** Данные покупателя */
    Client: ReceiptClientModel;
    /**
     * Список товаров в заказе
     * @minItems 1
     */
    Items: ReceiptItemModelOutput[];
    /** Данные поставщика */
    Supplier?: SupplierModel;
}

/** AcquiringGetPaymentOperationInfoResponseDataModel */
export interface AcquiringGetPaymentOperationInfoResponseDataModel {
    Data: AcquiringGetPaymentOperationListResponseModel;
    Links: LinkModel;
    Meta: MetaModel;
}

/** AcquiringGetPaymentOperationListItemModel */
export interface AcquiringGetPaymentOperationListItemModel {
    /**
     * Уникальный код клиента
     * @minLength 9
     * @maxLength 9
     */
    customerCode: string;
    /**
     * Система налогообложения
     * Перечисление для выдачи результатов из openapi.
     */
    taxSystemCode?: TaxSystemCodeOutput;
    /**
     * Тип оплаты
     * Присутствует, если оплата произведена
     */
    paymentType?: ExternalAcquiringPaymentTypeEnum;
    /** Идентификатор платежа в процессинге или СБП */
    paymentId?: string;
    /**
     * Идентификатор транзакции в СБП
     * Используется для возврата при оплате по СБП
     */
    transactionId?: string;
    /** Дата и время создания операции. Используется стандарт ISO8601 */
    createdAt: string;
    /**
     * Способ оплаты
     * @minItems 1
     */
    paymentMode?: AcquiringPaymentMode[];
    /**
     * URL адрес, куда будет переправлен клиент после оплаты услуги
     * @format uri
     * @minLength 1
     * @maxLength 2083
     */
    redirectUrl?: string;
    /**
     * URL адрес, куда будет переправлен клиент в случае неуспешной оплаты
     * @format uri
     * @minLength 1
     * @maxLength 2083
     */
    failRedirectUrl?: string;
    /** Данные покупателя */
    Client?: ReceiptClientModel;
    /**
     * Список товаров в заказе
     * @minItems 1
     */
    Items?: ReceiptItemResponseModel[];
    /**
     * Назначение платежа
     * Отсутствует, если при создании платежа назначение не было указано
     */
    purpose?: string;
    /** Сумма платежа */
    amount: number;
    /** Статус платежа */
    status: AcquiringPaymentStatus;
    /** Идентификатор платежа */
    operationId: string;
    /** Ссылка на оплату */
    paymentLink: string;
    /** Идентификатор торговой точки в интернет-эквайринге */
    merchantId?: string;
    /** Идентификатор покупателя */
    consumerId?: string;
    /** Список операций, связанных с платежом. */
    Order: OrderModel[];
    /** Данные поставщика */
    Supplier?: SupplierModel;
    /** Создать платёж с двухэтапной оплатой */
    preAuthorization?: boolean;
    /** Дата и время оплаты */
    paidAt?: string;
    /**
     * Уникальный номер заказа
     * @minLength 1
     * @maxLength 45
     */
    paymentLinkId?: string;
}

/** AcquiringGetPaymentOperationListResponseDataModel */
export interface AcquiringGetPaymentOperationListResponseDataModel {
    Data: AcquiringGetPaymentOperationListResponseModel;
    Links: PaginatedLinkModel;
    Meta: MetaModel;
}

/** AcquiringGetPaymentOperationListResponseModel */
export interface AcquiringGetPaymentOperationListResponseModel {
    /** Operation */
    Operation: AcquiringGetPaymentOperationListItemModel[];
}

/** AcquiringGetSubscriptionStatusResponseDataModel */
export interface AcquiringGetSubscriptionStatusResponseDataModel {
    Data: AcquiringGetSubscriptionStatusResponseModel;
    Links: LinkModel;
    Meta: MetaModel;
}

/** AcquiringGetSubscriptionStatusResponseModel */
export interface AcquiringGetSubscriptionStatusResponseModel {
    status: AcquiringSubscriptionStatus;
}

/** AcquiringPaymentOperationRefundModel */
export interface AcquiringPaymentOperationRefundModel {
    /** Оформлен ли возврат */
    isRefund: boolean;
    /** Идентификатор платежа */
    operationId: string;
    /** Сумма платежа */
    amount: number;
    /**
     * Дата запроса на возврат
     * @format date
     */
    date: string;
    /** Идентификатор операции возрата */
    orderId: string;
}

/** AcquiringPaymentOperationRefundResponseModel */
export interface AcquiringPaymentOperationRefundResponseModel {
    Data: AcquiringPaymentOperationRefundModel;
    Links: LinkModel;
    Meta: MetaModel;
}

/** AcquiringPaymentOrderRefundRequestDataModel */
export interface AcquiringPaymentOrderRefundRequestDataModel {
    Data: AcquiringPaymentOrderRefundRequestModel;
}

/** AcquiringPaymentOrderRefundRequestModel */
export interface AcquiringPaymentOrderRefundRequestModel {
    /**
     * Сумма платежа
     * Не больше суммы оплаты
     * @exclusiveMin 0
     */
    amount: number;
}

/** AcquiringPaymentRegistryItemModel */
export interface AcquiringPaymentRegistryItemModel {
    /** Тип оплаты */
    paymentType: ExternalAcquiringPaymentTypeEnum;
    /**  Сумма всех позиций из этого блока */
    totalAmount: number;
    /** Уникальный идентификатор платежа */
    paymentId?: string;
    /**
     * Список товаров в заказе
     * @minItems 1
     */
    payments: PaymentItemModel[];
}

/** AcquiringPaymentRegistryModel */
export interface AcquiringPaymentRegistryModel {
    /** Registry */
    Registry: AcquiringPaymentRegistryItemModel[];
}

/** AcquiringPaymentRegistryResponseDataModel */
export interface AcquiringPaymentRegistryResponseDataModel {
    Data: AcquiringPaymentRegistryModel;
    Links: LinkModel;
    Meta: MetaModel;
}

/** AcquiringRetailerListModel */
export interface AcquiringRetailerListModel {
    /** Retailer */
    Retailer: AcquiringRetailerModel[];
}

/** AcquiringRetailerListResponseModel */
export interface AcquiringRetailerListResponseModel {
    Data: AcquiringRetailerListModel;
    Links: LinkModel;
    Meta: MetaModel;
}

/** AcquiringRetailerModel */
export interface AcquiringRetailerModel {
    /** Статус регистрации */
    status: AcquiringRetailerStatus;
    /** Статус готовности к работе */
    isActive: boolean;
    /** Код МСС */
    mcc: string;
    /** Комиссия */
    rate: number;
    /** Наименование */
    name: string;
    /** Сайт регистрации */
    url?: string;
    /**
     * ID мерчанта
     * Может отсутствовать при значениях поля status: NEW, ADDRESS_DADATA и OPEN_ACCOUNT
     */
    merchantId?: string;
    /**
     * ID терминала
     * Будет заполнен при значениях поля status: TERMINAL_CREATED, FILE_SENT, REG
     */
    terminalId?: string;
    /**
     * Способ оплаты
     * @minItems 0
     */
    paymentModes: AcquiringPaymentMode[];
    /** Название подключённой кассы */
    cashbox?: string;
}

/** AcquiringSetSubscriptionStatusRequestDataModel */
export interface AcquiringSetSubscriptionStatusRequestDataModel {
    Data: AcquiringSetSubscriptionStatusRequestModel;
}

/** AcquiringSetSubscriptionStatusRequestModel */
export interface AcquiringSetSubscriptionStatusRequestModel {
    /** Статус подписки */
    status: AcquiringSubscriptionStatusInput;
}

/** AcquiringSetSubscriptionStatusResponseDataModel */
export interface AcquiringSetSubscriptionStatusResponseDataModel {
    Data: BooleanResponse;
    Links: LinkModel;
    Meta: MetaModel;
}

/** AcquiringSubscriptionInputOptions */
export interface AcquiringSubscriptionInputOptions {
    /**
     * Количество списаний по подписке
     * @exclusiveMin 0
     * @default 12
     */
    trancheCount?: number;
    /**
     * Периодичность списания
     * @default "Month"
     */
    period?: AcquiringSubscriptionPeriodInput;
    /**
     * Длина периодичности в днях. Работает только с периодом Day
     * @exclusiveMin 0
     */
    daysInPeriod?: number;
}

/** AcquiringSubscriptionListItemModel */
export interface AcquiringSubscriptionListItemModel {
    /**
     * Уникальный код клиента
     * @minLength 9
     * @maxLength 9
     */
    customerCode: string;
    /**
     * Система налогообложения
     * Перечисление для выдачи результатов из openapi.
     */
    taxSystemCode?: TaxSystemCodeOutput;
    /** Идентификатор платежа в процессинге или СБП */
    paymentId?: string;
    /**
     * Идентификатор транзакции в СБП
     * Используется для возврата при оплате по СБП
     */
    transactionId?: string;
    /** Дата и время создания операции. Используется стандарт ISO8601 */
    createdAt: string;
    /**
     * URL адрес, куда будет переправлен клиент после оплаты услуги
     * @format uri
     * @minLength 1
     * @maxLength 2083
     */
    redirectUrl?: string;
    /**
     * URL адрес, куда будет переправлен клиент в случае неуспешной оплаты
     * @format uri
     * @minLength 1
     * @maxLength 2083
     */
    failRedirectUrl?: string;
    /** Данные покупателя */
    Client?: ReceiptClientModel;
    /**
     * Список товаров в заказе
     * @minItems 1
     */
    Items: ReceiptItemResponseModel[];
    /**
     * Назначение платежа
     * Отсутствует, если при создании платежа назначение не было указано
     */
    purpose?: string;
    /** Сумма платежа */
    amount: number;
    /** Статус платежа */
    status: AcquiringPaymentStatus;
    /** Идентификатор платежа */
    operationId: string;
    /** Ссылка на оплату */
    paymentLink: string;
    /** Идентификатор торговой точки в интернет-эквайринге */
    merchantId?: string;
    /** Идентификатор покупателя */
    consumerId?: string;
    /** Опции подписки */
    Options?: AcquiringSubscriptionOutputOptions;
    /** Данные поставщика */
    Supplier?: SupplierModel;
    /** Создание рекуррентной оплаты */
    recurring?: boolean;
    /**
     * Уникальный номер заказа
     * @minLength 1
     * @maxLength 45
     */
    paymentLinkId?: string;
}

/** AcquiringSubscriptionListResponseDataModel */
export interface AcquiringSubscriptionListResponseDataModel {
    Data: AcquiringSubscriptionListResponseModel;
    Links: PaginatedLinkModel;
    Meta: MetaModel;
}

/** AcquiringSubscriptionListResponseModel */
export interface AcquiringSubscriptionListResponseModel {
    /** Subscription */
    Subscription: AcquiringSubscriptionListItemModel[];
}

/** AcquiringSubscriptionOutputOptions */
export interface AcquiringSubscriptionOutputOptions {
    /** Количество списаний по подписке */
    trancheCount?: number;
    /** Периодичность списания */
    period?: AcquiringSubscriptionPeriodOutput;
    /** Длина периодичности в днях. Работает только с периодом Day */
    daysInPeriod?: number;
}

/** ActModel */
export interface ActModel {
    /**
     * Список позиций
     * @minItems 1
     */
    Positions: PositionModel[];
    /**
     * Дата выставления счета, приведенная к часовому поясу Москвы. Если не передана, то текущая дата.
     * @format date
     */
    date?: string;
    /**
     * Сумма всех позиций с НДС
     * @min 0
     */
    totalAmount: number;
    /**
     * Сумма НДС
     * @min 0
     */
    totalNds?: number;
    /** Номер акта */
    number: string;
    /** Документ, на основании которого вы выставляете акт */
    basedOn?: string;
}

/** ActivateCashboxQrCodeRequestDataModel */
export interface ActivateCashboxQrCodeRequestDataModel {
    Data: ActivateCashboxQrCodeRequestModel;
}

/** ActivateCashboxQrCodeRequestModel */
export interface ActivateCashboxQrCodeRequestModel {
    /**
     * Сумма в копейках.
     * @exclusiveMin 0
     * @exclusiveMax 1000000000000
     */
    amount: number;
    /**
     * Currency
     * Валюта операции
     * @default "RUB"
     */
    currency?: string;
    /**
     * Назначение платежа
     * @maxLength 140
     */
    paymentPurpose?: string;
    /**
     * Период использования QR-кода в минутах
     * @min 5
     * @max 20
     * @default 5
     */
    ttl?: number;
}

/** ActivateCashboxQrCodeResponseDataModel */
export interface ActivateCashboxQrCodeResponseDataModel {
    Data: ActivateCashboxQrCodeResponseModel;
    Links: LinkModel;
    Meta: MetaModel;
}

/** ActivateCashboxQrCodeResponseModel */
export interface ActivateCashboxQrCodeResponseModel {
    /** Идентификатор QR-кода в СБП */
    qrcId: string;
    /** Сумма в копейках */
    amount: number;
    /**
     * Валюта операции
     * @default "RUB"
     */
    currency?: string;
    /** Идентификатор активных значений параметров QR-кода */
    paramsId: string;
    /**
     * Назначение платежа
     * @maxLength 140
     */
    paymentPurpose?: string;
}

/** B2BQRCodeModelResponseModel */
export interface B2BQRCodeModelResponseModel {
    Data: RegisteredB2BQrCode;
    Links: LinkModel;
    Meta: MetaModel;
}

/** B2BQrCode */
export interface B2BQrCode {
    /** Payload зарегистрированного QR-кода в СБП */
    payload: string;
    /** Уникальный и неизменный идентификатор счёта */
    accountId: string;
    /** Время регистрации */
    createdAt: string;
    /**
     * Идентификатор ТСП
     * @maxLength 12
     */
    merchantId: string;
    /** Идентификатор зарегистрированного юрлица в СБП (12 символов) */
    legalId: string;
    /** Идентификатор QR-кода в СБП */
    qrcId: string;
    /** Сумма в копейках */
    amount?: number;
    /** Период использования в минутах */
    ttl?: string;
    /**
     * Назначение платежа
     * @maxLength 140
     */
    paymentPurpose?: string;
    image?: QrCodeContent;
    /** Ссылка для автоматического возврата плательщика из приложения банка в приложение или на сайт ТСП */
    redirectUrl?: string;
    /**
     * Taketax
     * Наличие НДС
     */
    takeTax: boolean;
    /**
     * Totaltaxamount
     * Сумма НДС в копейках
     */
    totalTaxAmount?: number;
    /** Уникальный идентификатор платежа, назначаемый получателем */
    uip?: string;
}

/** B2BQrCodeResponseModel */
export interface B2BQrCodeResponseModel {
    Data: B2BQrCode;
    Links: LinkModel;
    Meta: MetaModel;
}

/** BadRequestError */
export interface BadRequestError {
    /** Низкоуровневое текстовое описание ошибки */
    errorCode: string;
    /**
     * Описание ошибки. Обрезается если длина ошибки превышает максимальное значение
     * @maxLength 603
     */
    message: string;
    /** URL для помощи в устранении проблемы */
    url: string;
}

/** BadRequestErrorResponse */
export interface BadRequestErrorResponse {
    /**
     * Высокоуровневый текстовый код ошибки, необходимый для классификации.
     * @maxLength 40
     */
    code: string;
    /**
     * Уникальный идентификатор ошибки, для целей аудита
     * @maxLength 40
     */
    id: string;
    /**
     * Краткое сообщение об ошибке.
     * @maxLength 600
     */
    message: string;
    /** Errors */
    Errors: BadRequestError[];
}

/** BalanceAmountModel */
export interface BalanceAmountModel {
    /** Сумма */
    amount: number;
    /** Валюта ведения счета. Используется стандарт ISO 4217 */
    currency: string;
}

/** BalanceListModel */
export interface BalanceListModel {
    /** Balance */
    Balance: BalanceModel[];
}

/**
 * BalanceListResponseModel
 * Метод получения баланса
 */
export interface BalanceListResponseModel {
    Data: BalanceListModel;
    Links: LinkModel;
    Meta: MetaModel;
}

/** BalanceModel */
export interface BalanceModel {
    /**
     * Уникальный и неизменный идентификатор счёта
     * @maxLength 40
     */
    accountId: string;
    /** Определяет является баланс кредитовым или дебетовым */
    creditDebitIndicator: ExternalBalanceTypeEnum;
    /**
     * Тип баланса, заполняется согласно ISO 20022
     * **Описание типов балансов**
     *
     *   - `OpeningAvailable` - Начальный остаток
     *   - `ClosingAvailable` - Доступный баланс
     *   - `Expected` - Сумма заблокированных средств
     *   - `OverdraftAvailable` - Доступный лимит по овердрафту
     */
    type: ExternalBalanceStaticTypeEnum;
    /** Дата и время построения отчета. Используется стандарт ISO8601 */
    dateTime: string;
    Amount: BalanceAmountModel;
}

/** BooleanResponse */
export interface BooleanResponse {
    /** Статус операции */
    result: boolean;
}

/** BooleanResponseModel */
export interface BooleanResponseModel {
    Data: BooleanResponse;
    Links: LinkModel;
    Meta: MetaModel;
}

/** CardTransactionAmountModel */
export interface CardTransactionAmountModel {
    /**
     * Amount
     * Сумма транзакции
     */
    amount: number;
    /**
     * Currency
     * Валюта транзакции, используется ISO 4217
     */
    currency: string;
}

/** CardTransactionListModel */
export interface CardTransactionListModel {
    /** Transactions */
    Transactions: CardTransactionModel[];
}

/** CardTransactionModel */
export interface CardTransactionModel {
    /**
     * Уникальный и неизменный идентификатор счёта
     * @maxLength 40
     */
    accountId: string;
    /**
     * Pan
     * Маскированный номер карты транзакции
     */
    pan: string;
    /** Дата и время транзакции. Используется стандарт ISO8601 */
    dateTime: string;
    /** Оригинальная сумма и валюта */
    Amount: CardTransactionAmountModel;
    /** Сумма и валюта в валюте счета */
    AccountAmount: CardTransactionAmountModel;
    TerminalData: CardTransactionTerminalData;
}

/** CardTransactionTerminalData */
export interface CardTransactionTerminalData {
    /**
     * City
     * Город терминала
     */
    city?: string;
    /**
     * Location
     * Адрес терминала
     */
    location?: string;
    /**
     * Owner
     * Название торговой точки
     */
    owner?: string;
}

/** CardTransactionsListResponseModel */
export interface CardTransactionsListResponseModel {
    Data: CardTransactionListModel;
    Links: LinkModel;
    Meta: MetaModel;
}

/** CashAccountInfoModel */
export interface CashAccountInfoModel {
    /** Название схемы */
    schemeName: AccountIdentificationEnum;
    /**
     * Идентификатор счета(может отсутствовать в валютном платеже)
     * @maxLength 256
     */
    identification?: string;
}

/** CashboxQrCodeOutputCommission */
export interface CashboxQrCodeOutputCommission {
    /** MCC код */
    mcc?: string;
    /** Размер комиссии в процентах */
    percent?: number;
    /** Описание */
    description?: string;
}

/** CashboxQrCodeResponseModel */
export interface CashboxQrCodeResponseModel {
    /** Payload зарегистрированного QR-кода в СБП */
    payload: string;
    /** Уникальный и неизменный идентификатор счёта */
    accountId: string;
    /**
     * Идентификатор ТСП
     * @maxLength 12
     */
    merchantId: string;
    /** Идентификатор зарегистрированного юрлица в СБП (12 символов) */
    legalId: string;
    /** Время регистрации */
    createdAt: string;
    /** Идентификатор QR-кода в СБП */
    qrcId: string;
    /** Сумма в копейках */
    amount?: number;
    /**
     * Валюта операции
     * @default "RUB"
     */
    currency?: string;
    /**
     * Назначение платежа
     * @maxLength 140
     */
    paymentPurpose?: string;
    /** Идентификатор активных значений параметров QR-кода */
    paramsId?: string;
    /** Период использования в минутах */
    ttl?: number;
    commission?: CashboxQrCodeOutputCommission;
    image?: QrCodeContent;
    /**
     * Ссылка для автоматического возврата плательщика из приложения банка в приложение или на сайт ТСП
     * @format uri
     * @minLength 1
     * @maxLength 2083
     */
    redirectUrl?: string;
}

/** ChangeCashboxQRCodeAccountRequestDataModel */
export interface ChangeCashboxQRCodeAccountRequestDataModel {
    Data: ChangeCashboxQRCodeAccountRequestModel;
}

/** ChangeCashboxQRCodeAccountRequestModel */
export interface ChangeCashboxQRCodeAccountRequestModel {
    /** Уникальный и неизменный идентификатор счёта */
    accountId: string;
}

/** ChangeCashboxQRCodeAccountResponseDataModel */
export interface ChangeCashboxQRCodeAccountResponseDataModel {
    Data: ChangeCashboxQRCodeAccountResponseModel;
    Links: LinkModel;
    Meta: MetaModel;
}

/** ChangeCashboxQRCodeAccountResponseModel */
export interface ChangeCashboxQRCodeAccountResponseModel {
    /** Уникальный и неизменный идентификатор счёта */
    accountId: string;
    /** Идентификатор QR-кода в СБП */
    qrcId: string;
}

/** ClosingDocumentCreateRequestDataModel */
export interface ClosingDocumentCreateRequestDataModel {
    Data: ClosingDocumentCreateRequestModel;
}

/** ClosingDocumentCreateRequestModel */
export interface ClosingDocumentCreateRequestModel {
    /** Уникальный и неизменный идентификатор счёта */
    accountId: string;
    /** Уникальный код клиента */
    customerCode: string;
    /** Сторона заказчика/покупателя в сделке в документе */
    SecondSide: SecondSideModel;
    /** ID родительского документа */
    documentId?: string;
    /** Содержимое закрывающего документа */
    Content: ContentAct | ContentPackingList | ContentInvoicef;
}

/** ConsentCreateRequest */
export interface ConsentCreateRequest {
    Data: ConsentCreateRequestModel;
    /** Risks */
    Risks?: Record<string, any>;
}

/** ConsentCreateRequestModel */
export interface ConsentCreateRequestModel {
    /**
     * Статус разрешения
     * @default "AwaitingAuthorisation"
     */
    status?: "AwaitingAuthorisation";
    /**
     * Дата и время создания статуса ресурса. Используется стандарт ISO8601
     * @format date-time
     */
    creationDateTime?: string;
    /**
     * Дата и время обновления статуса ресурса. Используется стандарт ISO8601
     * @format date-time
     */
    statusUpdateDateTime?: string;
    /** Указание типов данных доступа. */
    permissions: ExternalConsentTypeEnum[];
    /**
     * Дата и время истечения срока действия разрешений. Используется стандарт ISO8601
     * @format date-time
     */
    expirationDateTime?: string;
}

/** ConsentListModel */
export interface ConsentListModel {
    /** Consent */
    Consent: ConsentResponseModel[];
}

/** ConsentListResponse */
export interface ConsentListResponse {
    Data: ConsentListModel;
    Links: LinkModel;
    Meta: MetaModel;
}

/** ConsentModel */
export interface ConsentModel {
    /**
     * Статус разрешения
     * @default "AwaitingAuthorisation"
     */
    status?: ConsentStatusEnum;
    /** Дата и время создания статуса ресурса. Используется стандарт ISO8601 */
    creationDateTime?: string;
    /** Дата и время обновления статуса ресурса. Используется стандарт ISO8601 */
    statusUpdateDateTime?: string;
    /** Указание типов данных доступа. */
    permissions: ExternalConsentTypeEnum[];
    /** Дата и время истечения срока действия разрешений. Используется стандарт ISO8601 */
    expirationDateTime?: string;
    /**
     * Уникальный идентификатор, предназначенный для идентификации разрешения
     * @maxLength 128
     */
    consentId: string;
    /**
     * Уникальный код клиента
     * @maxLength 9
     */
    customerCode?: string;
    /**
     * Название приложения
     * @maxLength 60
     */
    applicationName?: string;
    /**
     * ID приложения в oAuth
     * @maxLength 60
     */
    clientId?: string;
}

/** ConsentResponse */
export interface ConsentResponse {
    Data: ConsentModel;
    Links: LinkModel;
    Meta: MetaModel;
}

/** ConsentResponseModel */
export interface ConsentResponseModel {
    /**
     * Статус разрешения
     * @default "AwaitingAuthorisation"
     */
    status?: ConsentStatusEnum;
    /** Дата и время создания статуса ресурса. Используется стандарт ISO8601 */
    creationDateTime?: string;
    /** Дата и время обновления статуса ресурса. Используется стандарт ISO8601 */
    statusUpdateDateTime?: string;
    /** Указание типов данных доступа. */
    permissions: ConsentTypeEnum[];
    /** Дата и время истечения срока действия разрешений. Используется стандарт ISO8601 */
    expirationDateTime?: string;
    /**
     * Уникальный идентификатор, предназначенный для идентификации разрешения
     * @maxLength 128
     */
    consentId: string;
    /**
     * Уникальный код клиента
     * @maxLength 9
     */
    customerCode?: string;
    /**
     * Название приложения
     * @maxLength 60
     */
    applicationName?: string;
    /**
     * ID приложения в oAuth
     * @maxLength 60
     */
    clientId?: string;
    /**
     * Isvalid
     * Показывает истек срок разрешения или нет
     */
    isValid?: boolean;
}

/** ContentAct */
export interface ContentAct {
    /** Содержимое акта */
    Act: ActModel;
}

/** ContentInvoice */
export interface ContentInvoice {
    /** Содержимое счета на оплату */
    Invoice: InvoiceModel;
}

/** ContentInvoicef */
export interface ContentInvoicef {
    /** Содержимое счета-фактуры */
    Invoicef: InvoicefModel;
}

/** ContentPackingList */
export interface ContentPackingList {
    /** Содержимое товарной накладной */
    PackingList: PackingListModel;
}

/** ContractorBankInfoModel */
export interface ContractorBankInfoModel {
    /** БИК/SWIFT банка агента */
    schemeName?: FinancialInstitutionIdentificationEnum;
    /**
     * БИК/SWIFT банка агента
     * @maxLength 35
     */
    identification?: string;
    /** Номер кор. счета банка агента */
    accountIdentification?: string;
    /**
     * Наименование банка агента
     * @maxLength 160
     */
    name?: string;
}

/** ContractorInfoModel */
export interface ContractorInfoModel {
    /**
     * ИНН контрагента
     * @maxLength 12
     */
    inn?: string;
    /** Наименование контрагента */
    name?: string;
    /**
     * КПП контрагента
     * @maxLength 9
     */
    kpp?: string;
}

/** CustomerCodeAndBankCode */
export interface CustomerCodeAndBankCode {
    /**
     * Уникальный код клиента
     * @maxLength 9
     */
    customerCode: string;
    /**
     * БИК банка
     * @minLength 9
     * @maxLength 9
     */
    bankCode: string;
}

/** CustomerCodeAndBankCodeRequest */
export interface CustomerCodeAndBankCodeRequest {
    Data: CustomerCodeAndBankCode;
}

/** CustomerInfoResponseV3 */
export interface CustomerInfoResponseV3 {
    /** Статус объекта */
    status: StatusEnum;
    /** Идентификатор зарегистрированного юрлица в СБП (12 символов) */
    legalId: string;
    /** Время регистрации */
    createdAt: string;
    /** Юридический адрес */
    address?: string;
    /** Город */
    city?: string;
    /** код страны-регистрации юридического лица, в формате "ISO 3166, Alpha-2" */
    countryCode: string;
    /** Код региона-регистрации юридического лица, первые две цифры кода ОКТМО */
    countrySubDivisionCode?: string;
    /** Индекс */
    zipCode?: string;
    /** Уникальный код клиента */
    customerCode: string;
    /** Организационно-правовая форма юридического лица */
    entityType?: string;
    /** ИНН */
    inn: string;
    /** КПП */
    kpp?: string;
    /** Полное наименование юридического лица */
    name: string;
    /** ОГРН */
    ogrn: string;
    /** БИК банка клиента */
    bankCode: string;
    /** Merchantlist */
    MerchantList?: Merchant[];
    /** Accountlist */
    AccountList?: Account[];
}

/** CustomerListModel */
export interface CustomerListModel {
    /** Customer */
    Customer: CustomerModel[];
}

/**
 * CustomerListResponseModel
 * Метод получения списка доступных клиентов
 */
export interface CustomerListResponseModel {
    Data: CustomerListModel;
    Links: LinkModel;
    Meta: MetaModel;
}

/** CustomerModel */
export interface CustomerModel {
    /**
     * Уникальный код клиента
     * @maxLength 9
     */
    customerCode: string;
    /** Тип клиент (физическое или юридическое лицо) */
    customerType: ExternalTypeEnum;
    /** Признак резидента */
    isResident: boolean;
    /** ИНН */
    taxCode?: string;
    /** Полное наименование */
    fullName: string;
    /** Краткое наименование */
    shortName?: string;
    /** КПП */
    kpp?: string;
    /** ОГРН или ОГРНИП */
    customerOgrn?: string;
}

/**
 * CustomerResponseModel
 * Метод получения информации по клиенту
 */
export interface CustomerResponseModel {
    Data: CustomerModel;
    Links: LinkModel;
    Meta: MetaModel;
}

/** DeactivateCashboxQrCodeResponseDataModel */
export interface DeactivateCashboxQrCodeResponseDataModel {
    Data: BooleanResponse;
    Links: LinkModel;
    Meta: MetaModel;
}

/** DocumentCreateResponse */
export interface DocumentCreateResponse {
    /** Уникальный идентификатор документа */
    documentId: string;
}

/** DocumentCreateResponseModel */
export interface DocumentCreateResponseModel {
    Data: DocumentCreateResponse;
    Links: LinkModel;
    Meta: MetaModel;
}

/** ErrorModel */
export interface ErrorModel {
    /** Низкоуровневое текстовое описание ошибки */
    errorCode: string;
    /**
     * Описание ошибки. Обрезается если длина ошибки превышает максимальное значение
     * @maxLength 603
     */
    message: string;
    /** URL для помощи в устранении проблемы */
    url: string;
}

/** ErrorResponse */
export interface ErrorResponse {
    /**
     * Высокоуровневый текстовый код ошибки, необходимый для классификации.
     * @maxLength 40
     */
    code: string;
    /**
     * Уникальный идентификатор ошибки, для целей аудита
     * @maxLength 40
     */
    id: string;
    /**
     * Краткое сообщение об ошибке.
     * @maxLength 600
     */
    message: string;
    /** Подробное описание ошибок */
    Errors: ErrorModel[];
}

/** ForbiddenError */
export interface ForbiddenError {
    /** Низкоуровневое текстовое описание ошибки */
    errorCode: string;
    /**
     * Описание ошибки. Обрезается если длина ошибки превышает максимальное значение
     * @maxLength 603
     */
    message: string;
    /** URL для помощи в устранении проблемы */
    url: string;
}

/** ForbiddenErrorResponse */
export interface ForbiddenErrorResponse {
    /**
     * Высокоуровневый текстовый код ошибки, необходимый для классификации.
     * @maxLength 40
     */
    code: string;
    /**
     * Уникальный идентификатор ошибки, для целей аудита
     * @maxLength 40
     */
    id: string;
    /**
     * Краткое сообщение об ошибке.
     * @maxLength 600
     */
    message: string;
    /** Errors */
    Errors: ForbiddenError[];
}

/** GetCashboxQRCodeListResponseDataModel */
export interface GetCashboxQRCodeListResponseDataModel {
    Data: GetCashboxQRCodeListResponseModel;
    Links: LinkModel;
    Meta: MetaModel;
}

/** GetCashboxQRCodeListResponseItemModel */
export interface GetCashboxQRCodeListResponseItemModel {
    /** Payload зарегистрированного QR-кода в СБП */
    payload: string;
    /** Уникальный и неизменный идентификатор счёта */
    accountId: string;
    /**
     * Идентификатор ТСП
     * @maxLength 12
     */
    merchantId: string;
    /** Идентификатор зарегистрированного юрлица в СБП (12 символов) */
    legalId: string;
    /** Время регистрации */
    createdAt: string;
    /** Идентификатор QR-кода в СБП */
    qrcId: string;
    /** Сумма в копейках */
    amount?: number;
    /** Валюта операции */
    currency?: string;
    /**
     * Назначение платежа
     * @maxLength 140
     */
    paymentPurpose?: string;
    /** Идентификатор активных значений параметров QR-кода */
    paramsId?: string;
    /** Период использования в минутах */
    ttl?: number;
    /** Комиссия */
    commission?: CashboxQrCodeOutputCommission;
    /**
     * Ссылка для автоматического возврата плательщика из приложения банка в приложение или на сайт ТСП
     * @format uri
     * @minLength 1
     * @maxLength 2083
     */
    redirectUrl?: string;
}

/** GetCashboxQRCodeListResponseModel */
export interface GetCashboxQRCodeListResponseModel {
    /** Список QR-кодов */
    qrCodes: GetCashboxQRCodeListResponseItemModel[];
}

/** GetCashboxQRCodeRequestDataModel */
export interface GetCashboxQRCodeRequestDataModel {
    Data: GetCashboxQRCodeRequestModel;
}

/** GetCashboxQRCodeRequestModel */
export interface GetCashboxQRCodeRequestModel {
    imageParams?: QrCodeImageParams;
}

/** GetCashboxQrCodeOperationInfoResponseDataModel */
export interface GetCashboxQrCodeOperationInfoResponseDataModel {
    Data: GetCashboxQrCodeOperationInfoResponseModel;
    Links: LinkModel;
    Meta: MetaModel;
}

/** GetCashboxQrCodeOperationInfoResponseModel */
export interface GetCashboxQrCodeOperationInfoResponseModel {
    /** Статус кассовой ссылки */
    qrCodeStatus: SBPCashboxOperationQrCodeStatus;
    /**
     * Статус операции по кассовой ссылке
     * * ACWP - Операция завершена успешно
     * * RJCT - Операция отклонена
     * * RCVD - Операция в обработке
     * * NTST - Операции по QR-коду не существует
     */
    trxStatus: SBPCashboxTrxStatus;
    /** Идентификатор операции */
    trxId?: string;
    /**
     * Сумма Операции в копейках
     * Целое, положительное число. Валюта операции – рубли РФ
     */
    amount?: number;
    /** Дата и время выполнения операции */
    dateTime?: string;
    /** Маскированный номер телефона клиента-плательщика */
    payerId?: string;
    /** Контрольное значение операции СБП */
    kzo?: string;
}

/** GetCashboxQrCodeResponseDataModel */
export interface GetCashboxQrCodeResponseDataModel {
    Data: CashboxQrCodeResponseModel;
    Links: LinkModel;
    Meta: MetaModel;
}

/** GetCashboxQrCodeStatusResponseDataModel */
export interface GetCashboxQrCodeStatusResponseDataModel {
    Data: GetCashboxQrCodeStatusResponseModel;
    Links: LinkModel;
    Meta: MetaModel;
}

/** GetCashboxQrCodeStatusResponseModel */
export interface GetCashboxQrCodeStatusResponseModel {
    /** Статус операции */
    status: SBPCashboxQrCodeStatus;
    /** Идентификатор активных значений параметров QR-кода */
    paramsId: string;
}

/** GetCustomerInfoResponseModelV3 */
export interface GetCustomerInfoResponseModelV3 {
    Data: CustomerInfoResponseV3;
    Links: LinkModel;
    Meta: MetaModel;
}

/** InitStatementModel */
export interface InitStatementModel {
    /**
     * Уникальный и неизменный идентификатор счёта
     * @maxLength 40
     */
    accountId: string;
    /**
     * Идентификатор ресурса выписки
     * @maxLength 40
     */
    statementId?: string;
    /** Статус готовности выписки */
    status: StatementStatus;
    /**
     * Дата начала выписки. Используется стандарт ISO8601
     * @format date
     */
    startDateTime: string;
    /**
     * Дата окончания выписки. Используется стандарт ISO8601
     * @format date
     */
    endDateTime: string;
    /** Дата и время создания ресурса. Используется стандарт ISO8601 */
    creationDateTime: string;
}

/** InvoiceCreateRequestDataModel */
export interface InvoiceCreateRequestDataModel {
    Data: InvoiceCreateRequestModel;
}

/** InvoiceCreateRequestModel */
export interface InvoiceCreateRequestModel {
    /** Уникальный и неизменный идентификатор счёта */
    accountId: string;
    /** Уникальный код клиента */
    customerCode: string;
    /** Сторона заказчика/покупателя в сделке в документе */
    SecondSide: SecondSideModel;
    /** Содержимое счета на оплату */
    Content: ContentInvoice;
}

/** InvoiceModel */
export interface InvoiceModel {
    /**
     * Список позиций
     * @minItems 1
     */
    Positions: PositionModel[];
    /**
     * Дата выставления счета, приведенная к часовому поясу Москвы. Если не передана, то текущая дата.
     * @format date
     */
    date?: string;
    /**
     * Сумма всех позиций с НДС
     * @min 0
     */
    totalAmount: number;
    /**
     * Сумма НДС
     * @min 0
     */
    totalNds?: number;
    /** Номер выставляемого счёта */
    number: string;
    /** Документ, на основании которого выставляется счёт */
    basedOn?: string;
    /** Комментарий */
    comment?: string;
    /**
     * Срок оплаты в виде даты, приведенной к часовому поясу Москвы
     * @format date
     */
    paymentExpiryDate?: string;
}

/** InvoicePaymentStatusResponse */
export interface InvoicePaymentStatusResponse {
    /** Статус оплаты документа */
    paymentStatus: ApplicationInvoiceModelsEnumsPaymentStatusEnum;
}

/** InvoicePaymentStatusResponseModel */
export interface InvoicePaymentStatusResponseModel {
    Data: InvoicePaymentStatusResponse;
    Links: LinkModel;
    Meta: MetaModel;
}

/** InvoicefModel */
export interface InvoicefModel {
    /**
     * Список позиций
     * @minItems 1
     */
    Positions: PositionModel[];
    /**
     * Дата выставления счета, приведенная к часовому поясу Москвы. Если не передана, то текущая дата.
     * @format date
     */
    date?: string;
    /**
     * Сумма всех позиций с НДС
     * @min 0
     */
    totalAmount: number;
    /**
     * Сумма НДС
     * @min 0
     */
    totalNds?: number;
    /** Номер счёт-фактуры */
    number: string;
    /** Документ, на основании которого выставляется счёт */
    basedOn?: string;
    /**
     * Реквизиты документа, подтверждающего отгрузку товаров, работ или услуг
     * @minItems 1
     */
    shipmentDocuments?: ShipmentDocumentModel[];
}

/** LegalEntity */
export interface LegalEntity {
    /** Статус объекта */
    status: StatusEnum;
    /** Идентификатор зарегистрированного юрлица в СБП (12 символов) */
    legalId: string;
    /** Время регистрации */
    createdAt: string;
    /** Юридический адрес */
    address?: string;
    /** Город */
    city?: string;
    /** код страны-регистрации юридического лица, в формате "ISO 3166, Alpha-2" */
    countryCode: string;
    /** Код региона-регистрации юридического лица, первые две цифры кода ОКТМО */
    countrySubDivisionCode?: string;
    /** Индекс */
    zipCode?: string;
    /** Уникальный код клиента */
    customerCode: string;
    /** Организационно-правовая форма юридического лица */
    entityType?: string;
    /** ИНН */
    inn: string;
    /** КПП */
    kpp?: string;
    /** Полное наименование юридического лица */
    name: string;
    /** ОГРН */
    ogrn: string;
}

/** LegalEntityResponseModel */
export interface LegalEntityResponseModel {
    Data: LegalEntity;
    Links: LinkModel;
    Meta: MetaModel;
}

/** LinkModel */
export interface LinkModel {
    /**
     * Self
     * @format uri
     * @minLength 1
     * @maxLength 2083
     */
    self: string;
}

/** Merchant */
export interface Merchant {
    /** Статус объекта */
    status: StatusEnum;
    /** Время регистрации */
    createdAt: string;
    /** Юридический адрес */
    address?: string;
    /** Город */
    city?: string;
    /** код страны-регистрации юридического лица, в формате "ISO 3166, Alpha-2" */
    countryCode: string;
    /** Код региона-регистрации юридического лица, первые две цифры кода ОКТМО */
    countrySubDivisionCode?: string;
    /** Индекс */
    zipCode?: string;
    /**
     * Идентификатор ТСП
     * @maxLength 12
     */
    merchantId: string;
    /** Идентификатор зарегистрированного юрлица в СБП (12 символов) */
    legalId: string;
    /** Название ТСП (имя по вывеске) */
    brandName: string;
    /**
     * Возможности ТСП по взаимодействию с покупателем
     * `001` - только QR Static
     * `010` - только QR Dynamic
     * `011` - QR Static и QR Dynamic
     * `100` - Только QR Subscription
     * `101` - QR Subscription и QR Static
     * `110` - QR Subscription и QR Dynamic
     * `111` - QR Static, QR Dynamic и QR Subscription
     */
    capabilities: CapabilitiesEnum;
    /** "Контактный номер телефона ТСП */
    contactPhoneNumber?: string;
    /** MCC код */
    mcc: string;
    /** Дополнительные контакты */
    additionalContacts?: Record<string, any>[];
}

/** MerchantId */
export interface MerchantId {
    /**
     * Идентификатор ТСП
     * @maxLength 12
     */
    merchantId: string;
}

/** MerchantIdResponseModel */
export interface MerchantIdResponseModel {
    Data: MerchantId;
    Links: LinkModel;
    Meta: MetaModel;
}

/** MerchantListResponse */
export interface MerchantListResponse {
    /** Merchantlist */
    MerchantList: Merchant[];
}

/** MerchantListResponseModel */
export interface MerchantListResponseModel {
    Data: MerchantListResponse;
    Links: LinkModel;
    Meta: MetaModel;
}

/** MerchantResponseModel */
export interface MerchantResponseModel {
    Data: Merchant;
    Links: LinkModel;
    Meta: MetaModel;
}

/** MetaModel */
export interface MetaModel {
    /** Totalpages */
    totalPages: number;
}

/** NotFoundError */
export interface NotFoundError {
    /** Низкоуровневое текстовое описание ошибки */
    errorCode: string;
    /**
     * Описание ошибки. Обрезается если длина ошибки превышает максимальное значение
     * @maxLength 603
     */
    message: string;
    /** URL для помощи в устранении проблемы */
    url: string;
}

/** NotFoundErrorResponse */
export interface NotFoundErrorResponse {
    /**
     * Высокоуровневый текстовый код ошибки, необходимый для классификации.
     * @maxLength 40
     */
    code: string;
    /**
     * Уникальный идентификатор ошибки, для целей аудита
     * @maxLength 40
     */
    id: string;
    /**
     * Краткое сообщение об ошибке.
     * @maxLength 600
     */
    message: string;
    /** Errors */
    Errors: NotFoundError[];
}

/** OptionalLegalId */
export interface OptionalLegalId {
    /** Идентификатор зарегистрированного юрлица в СБП (12 символов) */
    legalId: string;
}

/** OrderModel */
export interface OrderModel {
    /** Идентификатор платежа */
    orderId: string;
    /** Тип операции */
    type: OrderType;
    /** Сумма операции */
    amount: number;
    /** Время операции */
    time: string;
}

/** PackingListModel */
export interface PackingListModel {
    /**
     * Список позиций
     * @minItems 1
     */
    Positions: PositionModel[];
    /**
     * Дата выставления счета, приведенная к часовому поясу Москвы. Если не передана, то текущая дата.
     * @format date
     */
    date?: string;
    /**
     * Сумма всех позиций с НДС
     * @min 0
     */
    totalAmount: number;
    /**
     * Сумма НДС
     * @min 0
     */
    totalNds?: number;
    /** Номер товарной накладной */
    number: string;
    /** Документ, на основании которого вы выставляете накладную */
    basedOn?: string;
}

/** PaginatedLinkModel */
export interface PaginatedLinkModel {
    /**
     * Self
     * @format uri
     * @minLength 1
     * @maxLength 2083
     */
    self: string;
    /**
     * First
     * @format uri
     * @minLength 1
     * @maxLength 2083
     */
    first?: string;
    /**
     * Prev
     * @format uri
     * @minLength 1
     * @maxLength 2083
     */
    prev?: string;
    /**
     * Next
     * @format uri
     * @minLength 1
     * @maxLength 2083
     */
    next?: string;
    /**
     * Last
     * @format uri
     * @minLength 1
     * @maxLength 2083
     */
    last?: string;
}

/** PaymentForSignListItemModel */
export interface PaymentForSignListItemModel {
    /**
     * Номер счёта отправителя
     * @minLength 20
     * @maxLength 20
     */
    accountCode?: string;
    /**
     * БИК отправителя
     * @minLength 9
     * @maxLength 9
     */
    bankCode?: string;
    /**
     * БИК получателя
     * @minLength 9
     * @maxLength 9
     */
    counterpartyBankBic: string;
    /**
     * Счёт получателя
     * @minLength 20
     * @maxLength 20
     */
    counterpartyAccountNumber: string;
    /**
     * ИНН получателя длинна строки
     * Допустимые значения "0", 10 или 12 значное число
     */
    counterpartyINN?: string;
    /**
     * КПП получателя
     * Допустимые значения "0" или 9 значное число
     */
    counterpartyKPP?: string;
    /** Наименование получателя платежа */
    counterpartyName: string;
    /** Сумма платежа */
    paymentAmount: number;
    /**
     * Дата последней смены статуса платежа
     * @format date-time
     */
    paymentDate: string;
    /**
     * Номер платежа
     * @minLength 1
     * @maxLength 6
     */
    paymentNumber?: string;
    /**
     * Назначение платежа
     * @minLength 1
     * @maxLength 210
     */
    paymentPurpose: string;
    /**
     * ИНН за кого платят
     * Допустимые значения "0", 10 или 12 значное число
     */
    payerINN?: string;
    /**
     * КПП за кого платят
     * Допустимые значения "0" или 9 значное число
     */
    payerKPP?: string;
    /**
     * Кор. счёт банка получателя
     * @minLength 20
     * @maxLength 20
     */
    counterpartyBankCorrAccount?: string;
    /**
     * Приоритет платежа
     * @minLength 1
     * @maxLength 1
     * @default "5"
     */
    paymentPriority?: string;
    /**
     * Поле 20
     * @maxLength 1
     */
    codePurpose?: string;
    /** Код УИН (поле 22) */
    supplierBillId?: string;
    /** Код выплат из бюджета на ФЛ (поле 110) */
    budgetPaymentCode?: string;
    /**
     * Email для отправки платежного поручения
     * @format email
     */
    email?: string;
    /** Дата документа (поле 109). Используется стандарт ISO8601. Допустимо значение "0" */
    taxInfoDocumentDate?: string;
    /**
     * Номера документа (поле 108)
     * @minLength 1
     */
    taxInfoDocumentNumber?: string;
    /** КБК (поле 104) */
    taxInfoKBK?: string;
    /** ОКАТО (поле 105) */
    taxInfoOKATO?: string;
    /** Налоговый период (поле 107). Допустимо значение "0" */
    taxInfoPeriod?: string;
    /** Основание (поле 106) */
    taxInfoReasonCode?: string;
    /** Статус (поле 101) */
    taxInfoStatus?: string;
}

/** PaymentForSignListResponseDataModel */
export interface PaymentForSignListResponseDataModel {
    Data: PaymentForSignListResponseModel;
    Links: LinkModel;
    Meta: MetaModel;
}

/** PaymentForSignListResponseModel */
export interface PaymentForSignListResponseModel {
    /** Payment */
    Payment: PaymentForSignListItemModel[];
}

/** PaymentForSignRequestDataModel */
export interface PaymentForSignRequestDataModel {
    Data: PaymentForSignRequestModel;
}

/** PaymentForSignRequestModel */
export interface PaymentForSignRequestModel {
    /**
     * Номер счёта отправителя
     * @minLength 20
     * @maxLength 20
     */
    accountCode: string;
    /**
     * БИК отправителя
     * @minLength 9
     * @maxLength 9
     */
    bankCode: string;
    /**
     * ИНН за кого платят
     * Заполняется только при платеже за 3 лицо. Допустимые значения "0", 10 или 12 значное число
     */
    payerINN?: string;
    /**
     * КПП за кого платят
     * Заполняется только за 3 лицо при платеже в бюджет. Допустимые значение "0" или 9 значное число
     */
    payerKPP?: string;
    /**
     * БИК получателя
     * @minLength 9
     * @maxLength 9
     */
    counterpartyBankBic: string;
    /**
     * Счёт получателя
     * @minLength 20
     * @maxLength 20
     */
    counterpartyAccountNumber: string;
    /**
     * ИНН получателя
     * @minLength 10
     * @maxLength 12
     */
    counterpartyINN?: string;
    /**
     * КПП получателя
     * Допустимые значения "0" или 9 значное число
     * @maxLength 9
     */
    counterpartyKPP?: string;
    /** Получатель платежа */
    counterpartyName: string;
    /**
     * Кор. счёт банка получателя
     * @minLength 20
     * @maxLength 20
     */
    counterpartyBankCorrAccount?: string;
    /** Сумма платежа */
    paymentAmount: number;
    /**
     * Дата платежа. Используется стандарт ISO8601
     * Дата платежа, приведенная к часовому поясу Москвы
     * @format date
     */
    paymentDate: string;
    /**
     * Номер платежа
     * @exclusiveMin 0
     * @exclusiveMax 1000000
     */
    paymentNumber?: number;
    /**
     * Приоритет платежа
     * @minLength 1
     * @maxLength 1
     * @default "5"
     */
    paymentPriority?: string;
    /**
     * Назначение платежа
     * @minLength 1
     * @maxLength 210
     */
    paymentPurpose: string;
    /**
     * Поле 20
     * Заполняется только при платеже физ лицам на счета:('40810', '40817', '40823', '40824', '40826', '423', '30232', '40803', '40813', '40820', '426'). Допустимые значения 1,2,3,4,5 и пусто
     * @maxLength 1
     */
    codePurpose?: string;
    /** Код УИН (поле 22) */
    supplierBillId?: string;
    /** Дата документа (поле 109). Используется стандарт ISO8601. Допустимо значение "0" */
    taxInfoDocumentDate?: string;
    /**
     * Номера документа (поле 108)
     * @minLength 1
     * @maxLength 15
     */
    taxInfoDocumentNumber?: string;
    /** КБК (поле 104) */
    taxInfoKBK?: string;
    /** ОКАТО (поле 105) */
    taxInfoOKATO?: string;
    /** Налоговый период (поле 107). Допустимо значение "0" */
    taxInfoPeriod?: string;
    /**
     * Основание (поле 106)
     * @minLength 1
     * @maxLength 2
     */
    taxInfoReasonCode?: string;
    /**
     * Статус (поле 101)
     * @minLength 2
     * @maxLength 2
     */
    taxInfoStatus?: string;
    /**
     * Код выплат из бюджета на ФЛ (поле 110)
     * @minLength 1
     * @maxLength 1
     */
    budgetPaymentCode?: string;
    /**
     * Email для отправки платежного поручения
     * @format email
     */
    email?: string;
}

/** PaymentForSignResponseDataModel */
export interface PaymentForSignResponseDataModel {
    Data: PaymentForSignResponseModel;
    Links: LinkModel;
    Meta: MetaModel;
}

/** PaymentForSignResponseModel */
export interface PaymentForSignResponseModel {
    /** ID запроса */
    requestId: string;
}

/** PaymentItemModel */
export interface PaymentItemModel {
    /** Назначение платежа */
    purpose: string;
    /**
     * Статус операции
     * @default "CREATED"
     */
    status?: AcquiringPaymentStatus;
    /** Сумма платежа */
    amount: number;
    /** Идентификатор платежа */
    operationId: string;
    /** Ссылка на оплату */
    paymentLink: string;
    /** Дата и время создания операции. Используется стандарт ISO8601 */
    time: string;
    /** Номер платежа */
    number: string;
    /** Комиссия за зачисление платежа */
    commission: number;
    /** Сумма за вычетом комиссии */
    enrollmentAmount: number;
}

/** PaymentOrderRequestDataModel */
export interface PaymentOrderRequestDataModel {
    Data: PaymentOrderRequestModel;
}

/** PaymentOrderRequestModel */
export interface PaymentOrderRequestModel {
    /** Номер счёта отправителя */
    accountCode?: string;
    /** БИК отправителя */
    bankCode?: string;
    /**
     * ИНН за кого платят
     * Заполняется только при платеже за 3 лицо. Допустимые значения "0", 10 или 12 значное число
     */
    payerINN?: string;
    /**
     * КПП за кого платят
     * Заполняется при платеже в бюджет (за себя или 3 лицо). Допустимые значение "0" или 9 значное число
     */
    payerKPP?: string;
    /**
     * БИК получателя
     * @minLength 9
     * @maxLength 9
     */
    counterpartyBankBic: string;
    /**
     * Счёт получателя
     * @minLength 20
     * @maxLength 20
     */
    counterpartyAccountNumber: string;
    /**
     * ИНН получателя
     * @minLength 10
     * @maxLength 12
     */
    counterpartyINN?: string;
    /**
     * КПП получателя
     * Допустимые значения "0" или 9 значное число
     * @maxLength 9
     */
    counterpartyKPP?: string;
    /** Получатель платежа */
    counterpartyName: string;
    /**
     * Кор. счёт банка получателя
     * @minLength 20
     * @maxLength 20
     */
    counterpartyBankCorrAccount?: string;
    /** Сумма платежа */
    paymentAmount: number;
    /**
     * Дата платежа. Используется стандарт ISO8601
     * Дата платежа, приведенная к часовому поясу Москвы
     * @format date
     */
    paymentDate: string;
    /**
     * Номер платежа
     * @exclusiveMin 0
     * @exclusiveMax 1000000
     */
    paymentNumber?: number;
    /**
     * Приоритет платежа
     * @minLength 1
     * @maxLength 1
     * @default "5"
     */
    paymentPriority?: string;
    /**
     * Назначение платежа
     * @minLength 1
     * @maxLength 210
     */
    paymentPurpose: string;
    /**
     * Поле 20
     * Заполняется только при платеже физ лицам на счета:('40810', '40817', '40823', '40824', '40826', '423', '30232', '40803', '40813', '40820', '426'). Допустимые значения 1,2,3,4,5 и пусто
     * @maxLength 1
     */
    codePurpose?: string;
    /** Код УИН (поле 22) */
    supplierBillId?: string;
    /** Дата документа (поле 109). Используется стандарт ISO8601. Допустимо значение "0" */
    taxInfoDocumentDate?: string;
    /**
     * Номера документа (поле 108)
     * @minLength 1
     * @maxLength 15
     */
    taxInfoDocumentNumber?: string;
    /** КБК (поле 104) */
    taxInfoKBK?: string;
    /** ОКАТО (поле 105) */
    taxInfoOKATO?: string;
    /** Налоговый период (поле 107). Допустимо значение "0" */
    taxInfoPeriod?: string;
    /**
     * Основание (поле 106)
     * @minLength 1
     * @maxLength 2
     */
    taxInfoReasonCode?: string;
    /**
     * Статус (поле 101)
     * @minLength 2
     * @maxLength 2
     */
    taxInfoStatus?: string;
    /**
     * Код выплат из бюджета на ФЛ (поле 110)
     * @minLength 1
     * @maxLength 1
     */
    budgetPaymentCode?: string;
}

/** PaymentOrderResponseDataModel */
export interface PaymentOrderResponseDataModel {
    Data: PaymentOrderResponseModel;
    Links: LinkModel;
    Meta: MetaModel;
}

/** PaymentOrderResponseModel */
export interface PaymentOrderResponseModel {
    /** ID запроса */
    requestId: string;
    /** Ссылка на страницу для редиректа. В query-параметрах указываются поля платежа. */
    redirectURL: string;
}

/** PaymentStatusResponseDataModel */
export interface PaymentStatusResponseDataModel {
    Data: PaymentStatusResponseModel;
    Links: LinkModel;
    Meta: MetaModel;
}

/** PaymentStatusResponseModel */
export interface PaymentStatusResponseModel {
    /** ID запроса */
    requestId: string;
    /**
     * Статус
     * **Описание статусов платежа**
     *
     *   - `Initiated` - Все необходимые реквизиты для платежа получены, платёж готов к проверке на возможность проведения
     *   - `Wait For Owner Requisites` - Часть реквизитов для платежа получена, кроме реквизитов плательщика
     *   - `NotAllowed` - Платёж нельзя провести: либо у пользователя нет прав для подписи, либо платёж заблокирован
     *   комплаенсом
     *   - `Allowed` - Платёж готов к подписанию, все проверки пройдены
     *   - `WaitingForSign` - Платёж ждёт подписи
     *   - `WaitingForCreate` - Платёж подписан, ждёт создания внутри систем банка
     *   - `Created` - Платёж создан
     *   - `Paid` - Платёж оплачен
     *   - `Canceled` - Платёж отменен
     *   - `Rejected` - Платёж отменён
     */
    status: PaymentOrderStatusEnum;
    /**
     * Ошибки
     * @default []
     */
    errors?: any[];
}

/** PositionModel */
export interface PositionModel {
    /** Название товара или услуги */
    positionName: string;
    /** Код единицы измерения */
    unitCode: UnitCodeEnum;
    /** Ставка НДС */
    ndsKind: NdsKindEnum;
    /**
     * Цена единицы с НДС
     * @min 0
     */
    price: number;
    /**
     * Количество
     * @exclusiveMin 0
     * @exclusiveMax 10000000
     */
    quantity: number;
    /**
     * Сумма позиции с НДС
     * @min 0
     */
    totalAmount: number;
    /**
     * Сумма НДС
     * @min 0
     */
    totalNds?: number;
}

/** QRCodeListResponse */
export interface QRCodeListResponse {
    /** Qrcodelist */
    qrCodeList: QrCode[];
}

/** QRCodeListResponseModel */
export interface QRCodeListResponseModel {
    Data: QRCodeListResponse;
    Links: LinkModel;
    Meta: MetaModel;
}

/** QRCodeModelResponseModel */
export interface QRCodeModelResponseModel {
    Data: RegisteredQrCode;
    Links: LinkModel;
    Meta: MetaModel;
}

/** QRCodePaymentStatusListResponse */
export interface QRCodePaymentStatusListResponse {
    /** Paymentlist */
    paymentList: QrCodePaymentStatus[];
}

/** QRCodePaymentStatusListResponseModel */
export interface QRCodePaymentStatusListResponseModel {
    Data: QRCodePaymentStatusListResponse;
    Links: LinkModel;
    Meta: MetaModel;
}

/** QRCodeRequestParams */
export interface QRCodeRequestParams {
    /**
     * Ширина изображения (>=200, по умолчанию: 300)
     * @min 200
     * @max 2000
     */
    width: number;
    /**
     * Высота изображения (>=200, по умолчанию: 300)
     * @min 200
     * @max 2000
     */
    height: number;
    /**
     * Тип контента ("image/png" или "image/svg+xml" )
     * @default "image/png"
     */
    mediaType?: MediaTypeEnum;
}

/** QRCodeResponseModel */
export interface QRCodeResponseModel {
    Data: QrCode;
    Links: LinkModel;
    Meta: MetaModel;
}

/** QrCode */
export interface QrCode {
    /** Статус объекта */
    status: StatusEnum;
    /** Payload зарегистрированного QR-кода в СБП */
    payload: string;
    /** Уникальный и неизменный идентификатор счёта */
    accountId: string;
    /** Время регистрации */
    createdAt: string;
    /**
     * Идентификатор ТСП
     * @maxLength 12
     */
    merchantId: string;
    /** Идентификатор зарегистрированного юрлица в СБП (12 символов) */
    legalId: string;
    /** Идентификатор QR-кода в СБП */
    qrcId: string;
    /** Сумма в копейках */
    amount?: number;
    /** Период использования в минутах */
    ttl?: string;
    /**
     * Назначение платежа
     * @maxLength 140
     */
    paymentPurpose?: string;
    image?: QrCodeContent;
    /** Размер комиссии в процентах */
    commissionPercent: number;
    /** Валюта операции */
    currency?: string;
    /**
     * Тип QR-кода
     * 01 - QR-Static (QR наклейка)
     * 02 - QR-Dynamic (QR на кассе)
     */
    qrcType: QrTypeEnum;
    /** Версия payload QR-кода */
    templateVersion: string;
    /** название источника (системы создавшей QR-код) */
    sourceName?: string;
}

/** QrCodeContent */
export interface QrCodeContent {
    /** Ширина изображения (>=200, по умолчанию: 300) */
    width: number;
    /** Высота изображения (>=200, по умолчанию: 300) */
    height: number;
    /**
     * Тип контента
     * @default "image/png"
     */
    mediaType?: MediaTypeEnum;
    /** содержимое изображения (для image/png - в кодировке base64) */
    content: string;
}

/** QrCodeImageParams */
export interface QrCodeImageParams {
    /**
     * Ширина изображения (>=200, по умолчанию: 300)
     * @min 200
     */
    width: number;
    /**
     * Высота изображения (>=200, по умолчанию: 300)
     * @min 200
     */
    height: number;
    /**
     * Тип контента
     * @default "image/png"
     */
    mediaType?: MediaTypeEnum;
}

/** QrCodePaymentStatus */
export interface QrCodePaymentStatus {
    /** Идентификатор QR-кода в СБП */
    qrcId: string;
    /** Код операции */
    code: string;
    /**
     * Статус операции, инициированной Dynamic QR-кодом
     * **Описание возможных статусов платежа**
     *
     *   - `NotStarted` - операции по QR-коду не существует
     *   - `Received` - операция в обработке
     *   - `InProgress` - операция в обработке
     *   - `Accepted` - операция завершена успешно
     *   - `Rejected` - операция отклонена
     */
    status?: QRCodePaymentStatusExternal;
    /** Текстовое представление статуса */
    message: string;
    /** Идентификатор операции, инициированной Dynamic QR-кодом */
    trxId?: string;
}

/** ReceiptClientModel */
export interface ReceiptClientModel {
    /** Для юрлица — название организации, для ИП и физического лица — ФИО */
    name?: string;
    /**
     * Email покупателя, на который будет отправлен чек
     * @format email
     */
    email: string;
    /** Телефон пользователя для отправки чека. */
    phone?: string;
}

/** ReceiptItemModel */
export interface ReceiptItemModelInput {
    /** Ставка НДС */
    vatType?: VatType;
    /**
     * Название товара
     * @minLength 1
     * @maxLength 256
     */
    name: string;
    /**
     * Цена за единицу товара
     * @exclusiveMin 0
     */
    amount: number;
    /**
     * Количество товара
     * @exclusiveMin 0
     */
    quantity: number;
    /** Тип оплаты */
    paymentMethod?: PaymentMethod;
    /** Признак предмета расчёта */
    paymentObject?: PaymentObject;
    /**
     * Единица измерения. По умолчанию - штуки
     * @default "шт."
     */
    measure?: Measure;
    /** Данные поставщика */
    Supplier?: SupplierModel;
}

/** ReceiptItemModel */
export interface ReceiptItemModelOutput {
    /** Ставка НДС */
    vatType?: VatType;
    /**
     * Название товара
     * @minLength 1
     * @maxLength 256
     */
    name: string;
    /** Цена за единицу товара */
    amount: number;
    /** Количество товара */
    quantity: number;
    /** Тип оплаты */
    paymentMethod?: PaymentMethod;
    /** Признак предмета расчёта */
    paymentObject?: PaymentObject;
    /**
     * Единица измерения. По умолчанию - штуки
     * @default "шт."
     */
    measure?: Measure;
    /** Данные поставщика */
    Supplier?: SupplierModel;
}

/** ReceiptItemResponseModel */
export interface ReceiptItemResponseModel {
    /** Ставка НДС */
    vatType?: VatType;
    /**
     * Название товара
     * @minLength 1
     * @maxLength 256
     */
    name: string;
    /** Цена за единицу товара */
    amount: number;
    /** Количество товара */
    quantity: number;
    /** Тип оплаты */
    paymentMethod?: PaymentMethod;
    /** Признак предмета расчёта */
    paymentObject?: PaymentObject;
    /**
     * Единица измерения. По умолчанию - штуки
     * @default "шт."
     */
    measure?: Measure;
    /** Данные поставщика */
    Supplier?: SupplierModel;
}

/** RegisterB2BQRCode */
export interface RegisterB2BQRCode {
    /**
     * Сумма в копейках
     * @min 1
     * @max 100000000
     */
    amount: number;
    /**
     * Назначение платежа
     * @maxLength 140
     */
    paymentPurpose: string;
    /**
     * Название источника (системы создавшей QR-код)
     * Система, создавшая QR-код
     * @maxLength 50
     */
    sourceName: string;
    /**
     * Taketax
     * Наличие НДС
     */
    takeTax: boolean;
    /**
     * Totaltaxamount
     * Сумма НДС в копейках
     */
    totalTaxAmount?: number;
    /**
     * Период использования в минутах
     * @min 1
     * @max 129600
     * @default 4320
     */
    ttl?: number;
    /**
     * URL адрес
     * Ссылка для автоматического возврата плательщика из приложения банка в приложение или на сайт ТСП
     * @format uri
     * @minLength 1
     * @maxLength 2083
     */
    redirectUrl?: string;
    /**
     * Уникальный идентификатор платежа, назначаемый получателем
     * @maxLength 35
     */
    uip?: string;
}

/** RegisterB2BQRCodeRequest */
export interface RegisterB2BQRCodeRequest {
    Data: RegisterB2BQRCode;
}

/** RegisterCashboxQrCodeRequestDataModel */
export interface RegisterCashboxQrCodeRequestDataModel {
    Data: RegisterCashboxQrCodeRequestModel;
}

/** RegisterCashboxQrCodeRequestModel */
export interface RegisterCashboxQrCodeRequestModel {
    /**
     * Идентификатор ТСП
     * @maxLength 12
     */
    merchantId: string;
    /** Уникальный и неизменный идентификатор счёта */
    accountId: string;
    /**
     * Ссылка для автоматического возврата плательщика из приложения банка в приложение или на сайт ТСП
     * @format uri
     * @minLength 1
     * @maxLength 2083
     */
    redirectUrl?: string;
    /** Параметры изображения */
    imageParams?: QrCodeImageParams;
}

/** RegisterCashboxQrCodeResponseDataModel */
export interface RegisterCashboxQrCodeResponseDataModel {
    Data: RegisterCashboxQrCodeResponseModel;
    Links: LinkModel;
    Meta: MetaModel;
}

/** RegisterCashboxQrCodeResponseModel */
export interface RegisterCashboxQrCodeResponseModel {
    /** Payload зарегистрированного QR-кода в СБП */
    payload: string;
    /** Идентификатор QR-кода в СБП */
    qrcId: string;
    image?: QrCodeContent;
}

/** RegisterLegalEntityResponseModel */
export interface RegisterLegalEntityResponseModel {
    Data: OptionalLegalId;
    Links: LinkModel;
    Meta: MetaModel;
}

/** RegisterMerchant */
export interface RegisterMerchant {
    /**
     * Юридический адрес
     * @maxLength 140
     */
    address: string;
    /**
     * Город
     * @maxLength 140
     */
    city: string;
    /**
     * код страны-регистрации юридического лица, в формате "ISO 3166, Alpha-2"
     * @maxLength 2
     */
    countryCode: string;
    /**
     * Код региона-регистрации юридического лица, первые две цифры кода ОКТМО
     * @maxLength 2
     */
    countrySubDivisionCode: string;
    /**
     * Индекс
     * @maxLength 6
     */
    zipCode: string;
    /**
     * Название ТСП (имя по вывеске)
     * @maxLength 35
     */
    brandName: string;
    /**
     * Возможности ТСП по взаимодействию с покупателем
     * `001` - только QR Static
     * `010` - только QR Dynamic
     * `011` - QR Static и QR Dynamic
     * `100` - Только QR Subscription
     * `101` - QR Subscription и QR Static
     * `110` - QR Subscription и QR Dynamic
     * `111` - QR Static, QR Dynamic и QR Subscription
     */
    capabilities: CapabilitiesEnum;
    /**
     * "Контактный номер телефона ТСП
     * @maxLength 13
     */
    contactPhoneNumber?: string;
    /**
     * MCC код
     * @maxLength 4
     */
    mcc: string;
}

/** RegisterMerchantRequest */
export interface RegisterMerchantRequest {
    Data: RegisterMerchant;
}

/** RegisterQRCode */
export interface RegisterQRCode {
    /**
     * Сумма в копейках
     * Поле обязательно для заполнения, если тип QR = QR-Dynamic
     */
    amount?: number;
    /** Валюта операции */
    currency?: string;
    /**
     * Назначение платежа
     * @maxLength 140
     */
    paymentPurpose: string;
    /**
     * Тип QR-кода
     * 01 - QR-Static (QR наклейка)
     * 02 - QR-Dynamic (QR на кассе)
     */
    qrcType: QrTypeEnum;
    /** Параметры изображения */
    imageParams?: QRCodeRequestParams;
    /**
     * Название источника
     * Cистема, создавшая QR-код
     */
    sourceName?: string;
    /**
     * Период использования QR-кода в минутах
     * Задается, только если тип QR = QR-Dynamic
     */
    ttl?: number;
    /**
     * URL адрес
     * Ссылка для автоматического возврата плательщика из приложения банка в приложение или на сайт ТСП
     * @format uri
     * @minLength 1
     * @maxLength 2083
     */
    redirectUrl?: string;
}

/** RegisterQRCodeRequest */
export interface RegisterQRCodeRequest {
    Data: RegisterQRCode;
}

/** RegisteredB2BQrCode */
export interface RegisteredB2BQrCode {
    /** Payload зарегистрированного QR-кода в СБП */
    payload: string;
    /** Идентификатор QR-кода в СБП */
    qrcId: string;
}

/** RegisteredQrCode */
export interface RegisteredQrCode {
    /** Payload зарегистрированного QR-кода в СБП */
    payload: string;
    /** Идентификатор QR-кода в СБП */
    qrcId: string;
    image?: QrCodeContent;
}

/** SBPPayment */
export interface SBPPayment {
    /** Идентификатор QR-кода в СБП */
    qrcId: string;
    /**
     * Статус операции, инициированной Dynamic QR-кодом
     * **Описание возможных статусов платежа**
     *   - `Confirming` - операция в процессе подтверждения ОПКЦ СБП
     *   - `Confirmed` - операция подтверждена
     *   - `Initiated` - операция отправлена на обработку
     *   - `Accepting` - операция в обработке ОПКЦ СБП
     *   - `Accepted` - операция успешно завершена
     *   - `InProgress` - операция в обработке РЦ СБП
     *   - `Rejected` - операция отклонена
     *   - `Error` - ошибка выполнения операции
     *   - `Timeout` - тайм-аут выполнения операции
     */
    status: ApplicationSbpModelsEnumsPaymentStatusEnum;
    /** Текстовое представление статуса */
    message: string;
    /** Идентификатор операции, инициированной Dynamic QR-кодом */
    refTransactionId: string;
}

/** SBPPaymentList */
export interface SBPPaymentList {
    /** Payments */
    Payments: SBPPayment[];
}

/** SBPPaymentsResponse */
export interface SBPPaymentsResponse {
    Data: SBPPaymentList;
    Links: LinkModel;
    Meta: MetaModel;
}

/** SBPRefund */
export interface SBPRefund {
    /**
     * Bankcode
     * БИК отправителя
     * @maxLength 9
     */
    bankCode: string;
    /**
     * Accountcode
     * Уникальный и неизменный идентификатор счёта
     * @maxLength 20
     */
    accountCode: string;
    /**
     * Amount
     * Cумма операции в рублях
     */
    amount: string;
    /**
     * Currency
     * Валюта операции
     * @default "RUB"
     */
    currency?: string;
    /**
     * Qrcid
     * ID qr-кода, по которому был сделан платеж
     */
    qrcId: string;
    /**
     * Purpose
     * Назначение платежа
     * @maxLength 140
     */
    purpose?: string;
    /**
     * Reftransactionid
     * Идентификатор транзакции, по которой осуществляется возврат
     */
    refTransactionId?: string;
    /**
     * Trxid
     * Идентификатор операции в НСПК, по которой можно осуществить возврат
     */
    trxId?: string;
}

/** SBPRefundRequest */
export interface SBPRefundRequest {
    Data: SBPRefund;
}

/** SBPRefundRequestResponse */
export interface SBPRefundRequestResponse {
    /** ID запроса */
    requestId: string;
    /** Статус по процессу возрата */
    status: SBPPaymentStatus;
}

/** SBPRefundRequestResponseModel */
export interface SBPRefundRequestResponseModel {
    Data: SBPRefundRequestResponse;
    Links: LinkModel;
    Meta: MetaModel;
}

/** SBPRefundStatus */
export interface SBPRefundStatus {
    /** ID запроса */
    requestId: string;
    /** Статус по процессу возрата */
    status: SBPPaymentStatus;
    /**
     * Statusdescription
     * Описание статуса (причина ошибки или сообщение об успехе)
     */
    statusDescription?: string;
}

/** SBPRefundStatusModel */
export interface SBPRefundStatusModel {
    Data: SBPRefundStatus;
    Links: LinkModel;
    Meta: MetaModel;
}

/** SecondSideModel */
export interface SecondSideModel {
    /** Уникальный и неизменный идентификатор счёта */
    accountId?: string;
    /** Юридический адрес */
    legalAddress?: string;
    /** КПП */
    kpp?: string;
    /** Название банка */
    bankName?: string;
    /** Корреспондентский счет банка */
    bankCorrAccount?: string;
    /** ИНН покупателя или заказчика */
    taxCode: string;
    /** Тип покупателя или заказчика */
    type: CounterpartTypeEnum;
    /** Наименование покупателя или заказчика */
    secondSideName?: string;
}

/** SendDocumentToEmailRequestDataModel */
export interface SendDocumentToEmailRequestDataModel {
    Data: SendDocumentToEmailRequestModel;
}

/** SendDocumentToEmailRequestModel */
export interface SendDocumentToEmailRequestModel {
    /**
     * Электронная почта, на которую нужно отправить
     * @format email
     */
    email: string;
}

/** ShipmentDocumentModel */
export interface ShipmentDocumentModel {
    /** Наименование документа об отгрузке */
    name: string;
    /**
     * Дата документа об отгрузке
     * @format date
     */
    date: string;
    /** Номер документа об отгрузке */
    number: string;
}

/** StatementInitReqModel */
export interface StatementInitReqModel {
    /**
     * Уникальный и неизменный идентификатор счёта
     * @maxLength 40
     */
    accountId: string;
    /**
     * Дата начала выписки. Используется стандарт ISO8601
     * @format date
     */
    startDateTime: string;
    /**
     * Дата окончания выписки. Используется стандарт ISO8601
     * @format date
     */
    endDateTime: string;
}

/**
 * StatementInitRequestDataModel
 * Метод создания выписки по счету
 */
export interface StatementInitRequestDataModel {
    Data: StatementInitRequestModel;
}

/** StatementInitRequestModel */
export interface StatementInitRequestModel {
    Statement: StatementInitReqModel;
}

/**
 * StatementInitResponseDataModel
 * Метод создания выписки по счету
 */
export interface StatementInitResponseDataModel {
    Data: StatementInitResponseModel;
    Links: LinkModel;
    Meta: MetaModel;
}

/** StatementInitResponseModel */
export interface StatementInitResponseModel {
    Statement: InitStatementModel;
}

/** StatementListModel */
export interface StatementListModel {
    /** Statement */
    Statement: StatementModel[];
}

/** StatementModel */
export interface StatementModel {
    /**
     * Уникальный и неизменный идентификатор счёта
     * @maxLength 40
     */
    accountId: string;
    /**
     * Идентификатор ресурса выписки
     * @maxLength 40
     */
    statementId?: string;
    /** Статус готовности выписки */
    status: StatementStatus;
    /**
     * Дата начала выписки. Используется стандарт ISO8601
     * @format date
     */
    startDateTime: string;
    /**
     * Дата окончания выписки. Используется стандарт ISO8601
     * @format date
     */
    endDateTime: string;
    /** Дата и время создания ресурса. Используется стандарт ISO8601 */
    creationDateTime: string;
    /** Баланс на начало запрашиваемого периода выписки в валюте счета */
    startDateBalance?: number;
    /** Баланс на конец запрашиваемого периода выписки в валюте счета */
    endDateBalance?: number;
    /** Transaction */
    Transaction?: TransactionModel[];
}

/**
 * StatementResponseDataModel
 * Метод получения выписки по счету
 */
export interface StatementResponseDataModel {
    Data: StatementListModel;
    Links: LinkModel;
    Meta: MetaModel;
}

/** Status */
export interface Status {
    /** Статус объекта */
    status: StatusEnum;
}

/** StatusRequest */
export interface StatusRequest {
    Data: Status;
}

/** SupplierModel */
export interface SupplierModel {
    /**
     * Номер телефона поставщика
     * @minLength 11
     * @maxLength 15
     * @pattern ^\+?\d+$
     */
    phone: string;
    /** Наименование поставщика */
    name: string;
    /**
     * ИНН поставщика
     * @minLength 10
     * @maxLength 12
     * @pattern ^\d+$
     */
    taxCode: string;
}

/** TaxFieldsModel */
export interface TaxFieldsModel {
    /** Статус плательщика бюджетного платежа */
    originatorStatus?: string;
    /** КБК */
    kbk?: string;
    /** ОКТМО */
    oktmo?: string;
    /** Основание налогового платежа */
    base?: string;
    /** Номер налогового документа */
    documentNumber?: string;
    /** Дата налогового документа */
    documentDate?: number | string;
    /** Вид платежа */
    type?: string;
    /** Налоговой период / код таможенного органа */
    field107?: string;
}

/** TransactionAmountModel */
export interface TransactionAmountModel {
    /** Сумма транзакции запроса в валюте счета */
    amount: number;
    /** Сумма транзакции по счету запроса в рублях по курсу ЦБ на дату транзакции */
    amountNat?: number;
    /** Валюта ведения счета. Используется стандарт ISO 4217 */
    currency: string;
}

/** TransactionModel */
export interface TransactionModel {
    /**
     * Уникальный идентификатор транзакции
     * @maxLength 210
     */
    transactionId?: string;
    /** Уникальный идентификатор платежа, по которому произошла транзакция */
    paymentId?: string;
    /** Приход/Уход */
    creditDebitIndicator: ExternalCreditDebitIndicatorEnum;
    /** Статус транзакции */
    status: ExternalTransactionStatusEnum;
    /**
     * Номер платежного документа
     * @maxLength 12
     */
    documentNumber?: string;
    /** Код типа транзакции (Вид платежного документа) */
    transactionTypeCode?: ExternalTransationTypeEnum;
    /**
     * Дата отражения на балансе
     * @format date
     */
    documentProcessDate?: string;
    /** Назначение платежа */
    description?: string;
    Amount: TransactionAmountModel;
    /** Информация о контрагенте в случае кредитной операции */
    DebtorParty?: ContractorInfoModel;
    /** Идентификация счета дебитора, в случае кредитной операции */
    DebtorAccount?: CashAccountInfoModel;
    /** Финансовое организация, обслуживающая счет дебитора */
    DebtorAgent?: ContractorBankInfoModel;
    /** Информация о контрагенте в случае дебетовой транзакции */
    CreditorParty?: ContractorInfoModel;
    /** Идентификация счета кредитора, в случае дебетовой транзакции */
    CreditorAccount?: CashAccountInfoModel;
    /** Финансовое организация, обслуживающая счет кредитора */
    CreditorAgent?: ContractorBankInfoModel;
    /** Налоговые поля */
    TaxFields?: TaxFieldsModel;
}

/** UnauthorizedError */
export interface UnauthorizedError {
    /** Низкоуровневое текстовое описание ошибки */
    errorCode: string;
    /**
     * Описание ошибки. Обрезается если длина ошибки превышает максимальное значение
     * @maxLength 603
     */
    message: string;
    /** URL для помощи в устранении проблемы */
    url: string;
}

/** UnauthorizedErrorResponse */
export interface UnauthorizedErrorResponse {
    /**
     * Высокоуровневый текстовый код ошибки, необходимый для классификации.
     * @maxLength 40
     */
    code: string;
    /**
     * Уникальный идентификатор ошибки, для целей аудита
     * @maxLength 40
     */
    id: string;
    /**
     * Краткое сообщение об ошибке.
     * @maxLength 600
     */
    message: string;
    /** Errors */
    Errors: UnauthorizedError[];
}

/** Webhook */
export interface Webhook {
    /** Список событий, на которое подписано приложение */
    webhooksList: WebhookTypeEnum[];
    /**
     * url на который необходимо отправлять запрос
     * @format uri
     * @minLength 1
     * @maxLength 2083
     */
    url: string;
}

/** WebhookEditRequest */
export interface WebhookEditRequest {
    /** Новый список событий, на которые нужно подписаться */
    webhooksList: WebhookTypeEnum[];
    /**
     * url на который необходимо отправлять запрос
     * @format uri
     * @minLength 1
     * @maxLength 2083
     */
    url: string;
}

/** WebhookResponseModel */
export interface WebhookResponseModel {
    Data: Webhook;
    Links: LinkModel;
    Meta: MetaModel;
}

/** WebhookTestSendRequest */
export interface WebhookTestSendRequest {
    /** Тип вебхука */
    webhookType: WebhookTypeEnum;
}

/**
 * AccountListResponseModel
 * Метод получения списка доступных счетов
 */
export interface ApplicationOpenBankingModelsExternalModelsAccountListResponseModel {
    Data: AccountListModel;
    Links: LinkModel;
    Meta: MetaModel;
}

/** AccountListResponseModel */
export interface ApplicationSbpModelsResponseModelsSbpAccountListResponseModel {
    Data: AccountListResponse;
    Links: LinkModel;
    Meta: MetaModel;
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
    /** set parameter to `true` for call `securityWorker` for this request */
    secure?: boolean;
    /** request path */
    path: string;
    /** content type of request body */
    type?: ContentType;
    /** query params */
    query?: QueryParamsType;
    /** format of response (i.e. response.json() -> format: "json") */
    format?: ResponseFormat;
    /** request body */
    body?: unknown;
    /** base url */
    baseUrl?: string;
    /** request cancellation token */
    cancelToken?: CancelToken;
}

export type RequestParams = Omit<
    FullRequestParams,
    "body" | "method" | "query" | "path"
>;

export interface ApiConfig<SecurityDataType = unknown> {
    baseUrl?: string;
    baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
    securityWorker?: (
        securityData: SecurityDataType | null,
    ) => Promise<RequestParams | void> | RequestParams | void;
    customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown>
    extends Response {
    data: D;
    error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
    Json = "application/json",
    JsonApi = "application/vnd.api+json",
    FormData = "multipart/form-data",
    UrlEncoded = "application/x-www-form-urlencoded",
    Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
    public baseUrl: string = "https://enter.tochka.com/uapi/";
    private securityData: SecurityDataType | null = null;
    private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
    private abortControllers = new Map<CancelToken, AbortController>();
    private customFetch = (...fetchParams: Parameters<typeof fetch>) =>
        fetch(...fetchParams);

    private baseApiParams: RequestParams = {
        credentials: "same-origin",
        headers: {},
        redirect: "follow",
        referrerPolicy: "no-referrer",
    };

    constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
        Object.assign(this, apiConfig);
    }

    public setSecurityData = (data: SecurityDataType | null) => {
        this.securityData = data;
    };

    protected encodeQueryParam(key: string, value: any) {
        const encodedKey = encodeURIComponent(key);
        return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
    }

    protected addQueryParam(query: QueryParamsType, key: string) {
        return this.encodeQueryParam(key, query[key]);
    }

    protected addArrayQueryParam(query: QueryParamsType, key: string) {
        const value = query[key];
        return value.map((v: any) => this.encodeQueryParam(key, v)).join("&");
    }

    protected toQueryString(rawQuery?: QueryParamsType): string {
        const query = rawQuery || {};
        const keys = Object.keys(query).filter(
            (key) => "undefined" !== typeof query[key],
        );
        return keys
            .map((key) =>
                Array.isArray(query[key])
                    ? this.addArrayQueryParam(query, key)
                    : this.addQueryParam(query, key),
            )
            .join("&");
    }

    protected addQueryParams(rawQuery?: QueryParamsType): string {
        const queryString = this.toQueryString(rawQuery);
        return queryString ? `?${queryString}` : "";
    }

    private contentFormatters: Record<ContentType, (input: any) => any> = {
        [ContentType.Json]: (input: any) =>
            input !== null && (typeof input === "object" || typeof input === "string")
                ? JSON.stringify(input)
                : input,
        [ContentType.JsonApi]: (input: any) =>
            input !== null && (typeof input === "object" || typeof input === "string")
                ? JSON.stringify(input)
                : input,
        [ContentType.Text]: (input: any) =>
            input !== null && typeof input !== "string"
                ? JSON.stringify(input)
                : input,
        [ContentType.FormData]: (input: any) => {
            if (input instanceof FormData) {
                return input;
            }

            return Object.keys(input || {}).reduce((formData, key) => {
                const property = input[key];
                formData.append(
                    key,
                    property instanceof Blob
                        ? property
                        : typeof property === "object" && property !== null
                            ? JSON.stringify(property)
                            : `${property}`,
                );
                return formData;
            }, new FormData());
        },
        [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
    };

    protected mergeRequestParams(
        params1: RequestParams,
        params2?: RequestParams,
    ): RequestParams {
        return {
            ...this.baseApiParams,
            ...params1,
            ...(params2 || {}),
            headers: {
                ...(this.baseApiParams.headers || {}),
                ...(params1.headers || {}),
                ...((params2 && params2.headers) || {}),
            },
        };
    }

    protected createAbortSignal = (
        cancelToken: CancelToken,
    ): AbortSignal | undefined => {
        if (this.abortControllers.has(cancelToken)) {
            const abortController = this.abortControllers.get(cancelToken);
            if (abortController) {
                return abortController.signal;
            }
            return void 0;
        }

        const abortController = new AbortController();
        this.abortControllers.set(cancelToken, abortController);
        return abortController.signal;
    };

    public abortRequest = (cancelToken: CancelToken) => {
        const abortController = this.abortControllers.get(cancelToken);

        if (abortController) {
            abortController.abort();
            this.abortControllers.delete(cancelToken);
        }
    };

    public request = async <T = any, E = any>({
                                                  body,
                                                  secure,
                                                  path,
                                                  type,
                                                  query,
                                                  format,
                                                  baseUrl,
                                                  cancelToken,
                                                  ...params
                                              }: FullRequestParams): Promise<HttpResponse<T, E>> => {
        const secureParams =
            ((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
                this.securityWorker &&
                (await this.securityWorker(this.securityData))) ||
            {};
        const requestParams = this.mergeRequestParams(params, secureParams);
        const queryString = query && this.toQueryString(query);
        const payloadFormatter = this.contentFormatters[type || ContentType.Json];
        const responseFormat = format || requestParams.format;
        const requestData = {
            ...requestParams,
            headers: {
                ...(requestParams.headers || {}),
                ...(type && type !== ContentType.FormData
                    ? {"Content-Type": type}
                    : {}),
            },
            signal:
                (cancelToken
                    ? this.createAbortSignal(cancelToken)
                    : requestParams.signal) || null,
            body:
                typeof body === "undefined" || body === null
                    ? null
                    : payloadFormatter(body),
        };
        return this.customFetch(
            `${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`,
            requestData,
        ).then(async (response) => {
            const r = response as HttpResponse<T, E>;
            r.data = null as unknown as T;
            r.error = null as unknown as E;

            const responseToParse = responseFormat ? response.clone() : response;
            const data = !responseFormat
                ? r
                : await responseToParse[responseFormat]()
                    .then((data) => {
                        if (r.ok) {
                            r.data = data;
                        } else {
                            r.error = data;
                        }
                        return r;
                    })
                    .catch((e) => {
                        r.error = e;
                        return r;
                    });

            if (cancelToken) {
                this.abortControllers.delete(cancelToken);
            }

            if (!response.ok) throw data;
            return data;
        });
    };
}

/**
 * @title Tochka.API
 * @version v1.81.6
 * @baseUrl https://enter.tochka.com/uapi/
 *
 * Подключая Tochka API, вы соглашаетесь на условия [оферты](https://tochka.com/links/offer-open-api)
 *
 * [Скачать](https://enter.tochka.com/doc/openapi/swagger.json) OpenAPI спецификацию
 */
export class TochkaApi<
    SecurityDataType extends unknown,
> extends HttpClient<SecurityDataType> {
    acquiring = {
        /**
         * @description Метод для получения списка операций - *CREATED* - Операция создана - *APPROVED* - Операция одобрена (оплата прошла успешно) - *ON-REFUND* - Операция заблокирована на время выполнения возврата - *REFUNDED* - Осуществлен возврат - *EXPIRED* - Истек срок действия
         *
         * @tags Работа с платёжными ссылками
         * @name getPaymentOperationList
         * @summary Get Payment Operation List
         * @request GET:/acquiring/{apiVersion}/payments
         * @secure
         */
        getPaymentOperationList: (
            apiVersion: ApiVersion,
            query: {
                /**
                 * Customercode
                 * Уникальный код клиента
                 * @example "300000092"
                 */
                customerCode: string;
                /**
                 * Fromdate
                 * Начало периода создания операций
                 * @example "2020-01-20"
                 */
                fromDate?: string;
                /**
                 * Todate
                 * Конец периода создания операций
                 * @example "2020-01-20"
                 */
                toDate?: string;
                /**
                 * Page
                 * Номер страницы
                 * @default 1
                 */
                page?: number;
                /**
                 * Perpage
                 * Количество записей на странице
                 * @default 1000
                 */
                perPage?: number;
                /** Статус операции */
                status?: AcquiringPaymentStatus;
            },
            params: RequestParams = {},
        ) =>
            this.request<
                AcquiringGetPaymentOperationListResponseDataModel,
                | BadRequestErrorResponse
                | UnauthorizedErrorResponse
                | ForbiddenErrorResponse
                | NotFoundErrorResponse
                | ErrorResponse
            >({
                path: `/acquiring/${apiVersion}/payments`,
                method: "GET",
                query: query,
                secure: true,
                format: "json",
                ...params,
            }),

        /**
         * @description Метод для создания ссылки на оплату
         *
         * @tags Работа с платёжными ссылками
         * @name createPaymentOperation
         * @summary Create Payment Operation
         * @request POST:/acquiring/{apiVersion}/payments
         * @secure
         */
        createPaymentOperation: (
            apiVersion: ApiVersion,
            data: AcquiringCreatePaymentOperationRequestDataModel,
            params: RequestParams = {},
        ) =>
            this.request<
                AcquiringCreatePaymentOperationResponseDataModel,
                | BadRequestErrorResponse
                | UnauthorizedErrorResponse
                | ForbiddenErrorResponse
                | NotFoundErrorResponse
                | ErrorResponse
            >({
                path: `/acquiring/${apiVersion}/payments`,
                method: "POST",
                body: data,
                secure: true,
                type: ContentType.Json,
                format: "json",
                ...params,
            }),

        /**
         * @description Метод для получения информации о конкретной операции - *CREATED* - Операция создана - *APPROVED* - Операция одобрена (оплата прошла успешно) - *ON-REFUND* - Операция заблокирована на время выполнения возврата - *REFUNDED* - Осуществлен возврат - *EXPIRED* - Истек срок действия
         *
         * @tags Работа с платёжными ссылками
         * @name getPaymentOperationInfo
         * @summary Get Payment Operation Info
         * @request GET:/acquiring/{apiVersion}/payments/{operationId}
         * @secure
         */
        getPaymentOperationInfo: (
            apiVersion: ApiVersion,
            operationId: string,
            params: RequestParams = {},
        ) =>
            this.request<
                AcquiringGetPaymentOperationInfoResponseDataModel,
                | BadRequestErrorResponse
                | UnauthorizedErrorResponse
                | ForbiddenErrorResponse
                | NotFoundErrorResponse
                | ErrorResponse
            >({
                path: `/acquiring/${apiVersion}/payments/${operationId}`,
                method: "GET",
                secure: true,
                format: "json",
                ...params,
            }),

        /**
         * @description Метод для списания средств при двухэтапной оплате
         *
         * @tags Работа с платёжными ссылками
         * @name capturePaymentAcquiring
         * @summary Capture Payment
         * @request POST:/acquiring/{apiVersion}/payments/{operationId}/capture
         * @secure
         */
        capturePaymentAcquiring: (
            apiVersion: ApiVersion,
            operationId: string,
            params: RequestParams = {},
        ) =>
            this.request<
                AcquiringCapturePaymentResponseModel,
                | BadRequestErrorResponse
                | UnauthorizedErrorResponse
                | ForbiddenErrorResponse
                | NotFoundErrorResponse
                | ErrorResponse
            >({
                path: `/acquiring/${apiVersion}/payments/${operationId}/capture`,
                method: "POST",
                secure: true,
                format: "json",
                ...params,
            }),

        /**
         * @description Метод для возврата платежей, созданных через платёжную ссылку Возврат возможен только для платежа со статусом APPROVED
         *
         * @tags Работа с платёжными ссылками
         * @name refundPaymentOperation
         * @summary Refund Payment Operation
         * @request POST:/acquiring/{apiVersion}/payments/{operationId}/refund
         * @secure
         */
        refundPaymentOperation: (
            apiVersion: ApiVersion,
            operationId: string,
            data: AcquiringPaymentOrderRefundRequestDataModel,
            params: RequestParams = {},
        ) =>
            this.request<
                AcquiringPaymentOperationRefundResponseModel,
                | BadRequestErrorResponse
                | UnauthorizedErrorResponse
                | ForbiddenErrorResponse
                | NotFoundErrorResponse
                | ErrorResponse
            >({
                path: `/acquiring/${apiVersion}/payments/${operationId}/refund`,
                method: "POST",
                body: data,
                secure: true,
                type: ContentType.Json,
                format: "json",
                ...params,
            }),

        /**
         * @description Метод для создания ссылки на оплату и отправки чека
         *
         * @tags Работа с платёжными ссылками
         * @name createPaymentOperationWithReceipt
         * @summary Create Payment Operation With Receipt
         * @request POST:/acquiring/{apiVersion}/payments_with_receipt
         * @secure
         */
        createPaymentOperationWithReceipt:
            (
                apiVersion: ApiVersion,
                data: AcquiringCreatePaymentOperationWithReceiptRequestDataModel,
                params: RequestParams = {},
            ) =>
                this.request<
                    AcquiringCreatePaymentOperationWithReceiptResponseDataModel,
                    | BadRequestErrorResponse
                    | UnauthorizedErrorResponse
                    | ForbiddenErrorResponse
                    | NotFoundErrorResponse
                    | ErrorResponse
                >({
                    path: `/acquiring/${apiVersion}/payments_with_receipt`,
                    method: "POST",
                    body: data,
                    secure: true,
                    type: ContentType.Json,
                    format: "json",
                    ...params,
                }),

        /**
         * @description Метод для получения реестра платежей по интернет-эквайрингу
         *
         * @tags Работа с платёжными ссылками
         * @name getPaymentRegistry
         * @summary Get Payment Registry
         * @request GET:/acquiring/{apiVersion}/registry
         * @secure
         */
        getPaymentRegistry: (
            apiVersion: ApiVersion,
            query: {
                /**
                 * Customercode
                 * Уникальный код клиента
                 * @example "300000092"
                 */
                customerCode: string;
                /**
                 * Merchantid
                 * Идентификатор торговой точки в интернет-эквайринге
                 * @example "200000000001056"
                 */
                merchantId: string;
                /**
                 * Paymentid
                 * Уникальный идентификатор платежа, по которому произошла транзакция
                 * @example "6d369b30-4a40-4249-aabb-7fc6b561dc7b"
                 */
                paymentId?: string;
                /**
                 * Date
                 * Дата реестра
                 * @example "2020-01-20"
                 */
                date: string;
            },
            params: RequestParams = {},
        ) =>
            this.request<
                AcquiringPaymentRegistryResponseDataModel,
                | BadRequestErrorResponse
                | UnauthorizedErrorResponse
                | ForbiddenErrorResponse
                | NotFoundErrorResponse
                | ErrorResponse
            >({
                path: `/acquiring/${apiVersion}/registry`,
                method: "GET",
                query: query,
                secure: true,
                format: "json",
                ...params,
            }),

        /**
         * @description Метод для получения информации о ретейлере - *NEW* - Ретейлер создан - *ADDRESS_DADATA* - Адрес уточнен - *OPEN_ACCOUNT* - Счёт открыт - *TWPG_SENDED* - Данные мерчанта и терминала отправлены в процессинг - *RETAILER_CREATED* - Мерчант создан в процессинге - *TERMINAL_CREATED* - Терминал создан в процессинге - *FILE_SENT* - файл отправлен в НСПК - *REG* - Зарегистрирован - *CLOSE* - Закрыт
         *
         * @tags Работа с платёжными ссылками
         * @name getRetailers
         * @summary Get Retailers
         * @request GET:/acquiring/{apiVersion}/retailers
         * @secure
         */
        getRetailers: (
            apiVersion: ApiVersion,
            query: {
                /**
                 * Customercode
                 * Уникальный код клиента
                 * @example "300000092"
                 */
                customerCode: string;
            },
            params: RequestParams = {},
        ) =>
            this.request<
                AcquiringRetailerListResponseModel,
                | BadRequestErrorResponse
                | UnauthorizedErrorResponse
                | ForbiddenErrorResponse
                | NotFoundErrorResponse
                | ErrorResponse
            >({
                path: `/acquiring/${apiVersion}/retailers`,
                method: "GET",
                query: query,
                secure: true,
                format: "json",
                ...params,
            }),

        /**
         * @description Метод для создания подписки по карте
         *
         * @tags Работа с подписками
         * @name createSubscription
         * @summary Create Subscription
         * @request POST:/acquiring/{apiVersion}/subscriptions
         * @secure
         */
        createSubscription: (
            apiVersion: ApiVersion,
            data: AcquiringCreateSubscriptionRequestDataModel,
            params: RequestParams = {},
        ) =>
            this.request<
                AcquiringCreateSubscriptionResponseDataModel,
                | BadRequestErrorResponse
                | UnauthorizedErrorResponse
                | ForbiddenErrorResponse
                | NotFoundErrorResponse
                | ErrorResponse
            >({
                path: `/acquiring/${apiVersion}/subscriptions`,
                method: "POST",
                body: data,
                secure: true,
                type: ContentType.Json,
                format: "json",
                ...params,
            }),

        /**
         * @description Метод для получения всех подписок
         *
         * @tags Работа с подписками
         * @name getSubscriptionList
         * @summary Get Subscription List
         * @request GET:/acquiring/{apiVersion}/subscriptions
         * @secure
         */
        getSubscriptionList: (
            apiVersion: ApiVersion,
            query: {
                /**
                 * Customercode
                 * Уникальный код клиента
                 * @example "300000092"
                 */
                customerCode: string;
                /**
                 * Page
                 * Номер страницы
                 * @default 1
                 */
                page?: number;
                /**
                 * Perpage
                 * Количество записей на странице
                 * @default 1000
                 */
                perPage?: number;
                /**
                 * Recurring
                 * Получить платежи по рекуррентным подпискам
                 * @default false
                 */
                recurring?: boolean;
            },
            params: RequestParams = {},
        ) =>
            this.request<
                AcquiringSubscriptionListResponseDataModel,
                | BadRequestErrorResponse
                | UnauthorizedErrorResponse
                | ForbiddenErrorResponse
                | NotFoundErrorResponse
                | ErrorResponse
            >({
                path: `/acquiring/${apiVersion}/subscriptions`,
                method: "GET",
                query: query,
                secure: true,
                format: "json",
                ...params,
            }),

        /**
         * @description Метод для списания средств по рекуррентной подписке
         *
         * @tags Работа с подписками
         * @name chargeSubscription
         * @summary Charge Subscription
         * @request POST:/acquiring/{apiVersion}/subscriptions/{operationId}/charge
         * @secure
         */
        chargeSubscription: (
            apiVersion: ApiVersion,
            operationId: string,
            data: AcquiringChargeSubscriptionRequestDataModel,
            params: RequestParams = {},
        ) =>
            this.request<
                AcquiringChargeSubscriptionResponseDataModel,
                | BadRequestErrorResponse
                | UnauthorizedErrorResponse
                | ForbiddenErrorResponse
                | NotFoundErrorResponse
                | ErrorResponse
            >({
                path: `/acquiring/${apiVersion}/subscriptions/${operationId}/charge`,
                method: "POST",
                body: data,
                secure: true,
                type: ContentType.Json,
                format: "json",
                ...params,
            }),

        /**
         * @description Метод для установки статуса подписки
         *
         * @tags Работа с подписками
         * @name setSubscriptionStatus
         * @summary Set Subscription Status
         * @request POST:/acquiring/{apiVersion}/subscriptions/{operationId}/status
         * @secure
         */
        setSubscriptionStatus:
            (
                apiVersion: ApiVersion,
                operationId: string,
                data: AcquiringSetSubscriptionStatusRequestDataModel,
                params: RequestParams = {},
            ) =>
                this.request<
                    AcquiringSetSubscriptionStatusResponseDataModel,
                    | BadRequestErrorResponse
                    | UnauthorizedErrorResponse
                    | ForbiddenErrorResponse
                    | NotFoundErrorResponse
                    | ErrorResponse
                >({
                    path: `/acquiring/${apiVersion}/subscriptions/${operationId}/status`,
                    method: "POST",
                    body: data,
                    secure: true,
                    type: ContentType.Json,
                    format: "json",
                    ...params,
                }),

        /**
         * @description Метод для получения актуального статуса подписки
         *
         * @tags Работа с подписками
         * @name getSubscriptionStatus
         * @summary Get Subscription Status
         * @request GET:/acquiring/{apiVersion}/subscriptions/{operationId}/status
         * @secure
         */
        getSubscriptionStatus: (
            apiVersion: ApiVersion,
            operationId: string,
            params: RequestParams = {},
        ) =>
            this.request<
                AcquiringGetSubscriptionStatusResponseDataModel,
                | BadRequestErrorResponse
                | UnauthorizedErrorResponse
                | ForbiddenErrorResponse
                | NotFoundErrorResponse
                | ErrorResponse
            >({
                path: `/acquiring/${apiVersion}/subscriptions/${operationId}/status`,
                method: "GET",
                secure: true,
                format: "json",
                ...params,
            }),

        /**
         * @description Метод для создания подписки по карте и отправке чека
         *
         * @tags Работа с подписками
         * @name createSubscriptionWithReceipt
         * @summary Create Subscription With Receipt
         * @request POST:/acquiring/{apiVersion}/subscriptions_with_receipt
         * @secure
         */
        createSubscriptionWithReceipt:
            (
                apiVersion: ApiVersion,
                data: AcquiringCreateSubscriptionWithReceiptRequestDataModel,
                params: RequestParams = {},
            ) =>
                this.request<
                    AcquiringCreateSubscriptionWithReceiptResponseDataModel,
                    | BadRequestErrorResponse
                    | UnauthorizedErrorResponse
                    | ForbiddenErrorResponse
                    | NotFoundErrorResponse
                    | ErrorResponse
                >({
                    path: `/acquiring/${apiVersion}/subscriptions_with_receipt`,
                    method: "POST",
                    body: data,
                    secure: true,
                    type: ContentType.Json,
                    format: "json",
                    ...params,
                }),
    };
    consent = {
        /**
         * @description Метод для получения списка разрешений.
         *
         * @tags Работа с разрешениями
         * @name getAllConsentsList
         * @summary Get All Consents List
         * @request GET:/consent/{apiVersion}/consents
         */
        getAllConsentsList: (
            apiVersion: ApiVersion,
            params: RequestParams = {},
        ) =>
            this.request<
                ConsentListResponse,
                | BadRequestErrorResponse
                | UnauthorizedErrorResponse
                | ForbiddenErrorResponse
                | NotFoundErrorResponse
                | ErrorResponse
            >({
                path: `/consent/${apiVersion}/consents`,
                method: "GET",
                format: "json",
                ...params,
            }),

        /**
         * @description Метод для создания разрешения.
         *
         * @tags Работа с разрешениями
         * @name createNewConsent
         * @summary Create New Consent
         * @request POST:/consent/{apiVersion}/consents
         */
        createNewConsent: (
            apiVersion: ApiVersion,
            data: ConsentCreateRequest,
            params: RequestParams = {},
        ) =>
            this.request<
                ConsentListResponse,
                | BadRequestErrorResponse
                | UnauthorizedErrorResponse
                | ForbiddenErrorResponse
                | NotFoundErrorResponse
                | ErrorResponse
            >({
                path: `/consent/${apiVersion}/consents`,
                method: "POST",
                body: data,
                type: ContentType.Json,
                format: "json",
                ...params,
            }),

        /**
         * @description Метод для получения всех дочерних разрешений
         *
         * @tags Работа с разрешениями
         * @name getAllChildConsents
         * @summary Get All Child Consents
         * @request GET:/consent/{apiVersion}/consents/{consentId}/child
         */
        getAllChildConsents: (
            apiVersion: ApiVersion,
            consentId: string,
            params: RequestParams = {},
        ) =>
            this.request<
                ConsentListResponse,
                | BadRequestErrorResponse
                | UnauthorizedErrorResponse
                | ForbiddenErrorResponse
                | NotFoundErrorResponse
                | ErrorResponse
            >({
                path: `/consent/${apiVersion}/consents/${consentId}/child`,
                method: "GET",
                format: "json",
                ...params,
            }),

        /**
         * @description Метод для получения информации о списке разрешений
         *
         * @tags Работа с разрешениями
         * @name getConsentInfo
         * @summary Get Consent Info
         * @request GET:/consent/{apiVersion}/{consentId}
         */
        getConsentInfo: (
            apiVersion: ApiVersion,
            consentId: string,
            params: RequestParams = {},
        ) =>
            this.request<
                ConsentResponse,
                | BadRequestErrorResponse
                | UnauthorizedErrorResponse
                | ForbiddenErrorResponse
                | NotFoundErrorResponse
                | ErrorResponse
            >({
                path: `/consent/${apiVersion}/${consentId}`,
                method: "GET",
                format: "json",
                ...params,
            }),
    };
    invoice = {
        /**
         * @description Метод для создания счёта на оплату
         *
         * @tags Работа с выставлением счетов
         * @name createInvoice
         * @summary Create Invoice
         * @request POST:/invoice/{apiVersion}/bills
         * @secure
         */
        createInvoice: (
            apiVersion: ApiVersion,
            data: InvoiceCreateRequestDataModel,
            params: RequestParams = {},
        ) =>
            this.request<
                DocumentCreateResponseModel,
                | BadRequestErrorResponse
                | UnauthorizedErrorResponse
                | ForbiddenErrorResponse
                | NotFoundErrorResponse
                | ErrorResponse
            >({
                path: `/invoice/${apiVersion}/bills`,
                method: "POST",
                body: data,
                secure: true,
                type: ContentType.Json,
                format: "json",
                ...params,
            }),

        /**
         * @description Метод для удаления счёта на оплату
         *
         * @tags Работа с выставлением счетов
         * @name deleteInvoice
         * @summary Delete Invoice
         * @request DELETE:/invoice/{apiVersion}/bills/{customerCode}/{documentId}
         * @secure
         */
        deleteInvoice: (
            apiVersion: ApiVersion,
            customerCode: string,
            documentId: string,
            params: RequestParams = {},
        ) =>
            this.request<
                BooleanResponseModel,
                | BadRequestErrorResponse
                | UnauthorizedErrorResponse
                | ForbiddenErrorResponse
                | NotFoundErrorResponse
                | ErrorResponse
            >({
                path: `/invoice/${apiVersion}/bills/${customerCode}/${documentId}`,
                method: "DELETE",
                secure: true,
                format: "json",
                ...params,
            }),

        /**
         * @description Метод для отправки счёта на почту
         *
         * @tags Работа с выставлением счетов
         * @name sendInvoiceToEmail
         * @summary Send Invoice To Email
         * @request POST:/invoice/{apiVersion}/bills/{customerCode}/{documentId}/email
         * @secure
         */
        sendInvoiceToEmail: (
            apiVersion: ApiVersion,
            customerCode: string,
            documentId: string,
            data: SendDocumentToEmailRequestDataModel,
            params: RequestParams = {},
        ) =>
            this.request<
                BooleanResponseModel,
                | BadRequestErrorResponse
                | UnauthorizedErrorResponse
                | ForbiddenErrorResponse
                | NotFoundErrorResponse
                | ErrorResponse
            >({
                path: `/invoice/${apiVersion}/bills/${customerCode}/${documentId}/email`,
                method: "POST",
                body: data,
                secure: true,
                type: ContentType.Json,
                format: "json",
                ...params,
            }),

        /**
         * @description Метод для получения файла выставленного счёта
         *
         * @tags Работа с выставлением счетов
         * @name getInvoice
         * @summary Get Invoice
         * @request GET:/invoice/{apiVersion}/bills/{customerCode}/{documentId}/file
         * @secure
         */
        getInvoice: (
            apiVersion: ApiVersion,
            customerCode: string,
            documentId: string,
            params: RequestParams = {},
        ) =>
            this.request<
                File,
                | BadRequestErrorResponse
                | UnauthorizedErrorResponse
                | ForbiddenErrorResponse
                | NotFoundErrorResponse
                | ErrorResponse
            >({
                path: `/invoice/${apiVersion}/bills/${customerCode}/${documentId}/file`,
                method: "GET",
                secure: true,
                ...params,
            }),

        /**
         * @description Метод для получения статуса счёта
         *
         * @tags Работа с выставлением счетов
         * @name getInvoicePaymentStatus
         * @summary Get Invoice Payment Status
         * @request GET:/invoice/{apiVersion}/bills/{customerCode}/{documentId}/payment-status
         * @secure
         */
        getInvoicePaymentStatus:
            (
                apiVersion: ApiVersion,
                customerCode: string,
                documentId: string,
                params: RequestParams = {},
            ) =>
                this.request<
                    InvoicePaymentStatusResponseModel,
                    | BadRequestErrorResponse
                    | UnauthorizedErrorResponse
                    | ForbiddenErrorResponse
                    | NotFoundErrorResponse
                    | ErrorResponse
                >({
                    path: `/invoice/${apiVersion}/bills/${customerCode}/${documentId}/payment-status`,
                    method: "GET",
                    secure: true,
                    format: "json",
                    ...params,
                }),

        /**
         * @description Метод для создания закрывающего документа
         *
         * @tags Работа с закрывающими документами
         * @name createClosingDocument
         * @summary Create Closing Document
         * @request POST:/invoice/{apiVersion}/closing-documents
         * @secure
         */
        createClosingDocument: (
            apiVersion: ApiVersion,
            data: ClosingDocumentCreateRequestDataModel,
            params: RequestParams = {},
        ) =>
            this.request<
                DocumentCreateResponseModel,
                | BadRequestErrorResponse
                | UnauthorizedErrorResponse
                | ForbiddenErrorResponse
                | NotFoundErrorResponse
                | ErrorResponse
            >({
                path: `/invoice/${apiVersion}/closing-documents`,
                method: "POST",
                body: data,
                secure: true,
                type: ContentType.Json,
                format: "json",
                ...params,
            }),

        /**
         * @description Метод для удаления закрывающего документа
         *
         * @tags Работа с закрывающими документами
         * @name deleteClosingDocuments
         * @summary Delete Closing Documents
         * @request DELETE:/invoice/{apiVersion}/closing-documents/{customerCode}/{documentId}
         * @secure
         */
        deleteClosingDocuments:
            (
                apiVersion: ApiVersion,
                customerCode: string,
                documentId: string,
                params: RequestParams = {},
            ) =>
                this.request<
                    BooleanResponseModel,
                    | BadRequestErrorResponse
                    | UnauthorizedErrorResponse
                    | ForbiddenErrorResponse
                    | NotFoundErrorResponse
                    | ErrorResponse
                >({
                    path: `/invoice/${apiVersion}/closing-documents/${customerCode}/${documentId}`,
                    method: "DELETE",
                    secure: true,
                    format: "json",
                    ...params,
                }),

        /**
         * @description Метод для отправки закрывающего документа на почту
         *
         * @tags Работа с закрывающими документами
         * @name sendClosingDocumentsToEmail
         * @summary Send Closing Documents To Email
         * @request POST:/invoice/{apiVersion}/closing-documents/{customerCode}/{documentId}/email
         * @secure
         */
        sendClosingDocumentsToEmail:
            (
                apiVersion: ApiVersion,
                customerCode: string,
                documentId: string,
                data: SendDocumentToEmailRequestDataModel,
                params: RequestParams = {},
            ) =>
                this.request<
                    BooleanResponseModel,
                    | BadRequestErrorResponse
                    | UnauthorizedErrorResponse
                    | ForbiddenErrorResponse
                    | NotFoundErrorResponse
                    | ErrorResponse
                >({
                    path: `/invoice/${apiVersion}/closing-documents/${customerCode}/${documentId}/email`,
                    method: "POST",
                    body: data,
                    secure: true,
                    type: ContentType.Json,
                    format: "json",
                    ...params,
                }),

        /**
         * @description Метод для получения файла закрывающего документа
         *
         * @tags Работа с закрывающими документами
         * @name getClosingDocument
         * @summary Get Closing Document
         * @request GET:/invoice/{apiVersion}/closing-documents/{customerCode}/{documentId}/file
         * @secure
         */
        getClosingDocument:
            (
                apiVersion: ApiVersion,
                customerCode: string,
                documentId: string,
                params: RequestParams = {},
            ) =>
                this.request<
                    File,
                    | BadRequestErrorResponse
                    | UnauthorizedErrorResponse
                    | ForbiddenErrorResponse
                    | NotFoundErrorResponse
                    | ErrorResponse
                >({
                    path: `/invoice/${apiVersion}/closing-documents/${customerCode}/${documentId}/file`,
                    method: "GET",
                    secure: true,
                    ...params,
                }),
    };
    openBanking = {
        /**
         * @description Метод для получения списка доступных счетов
         *
         * @tags Работа со счетами
         * @name getAccountsList
         * @summary Get Accounts List
         * @request GET:/open-banking/{apiVersion}/accounts
         * @secure
         */
        getAccountsList: (
            apiVersion: ApiVersion,
            params: RequestParams = {},
        ) =>
            this.request<
                ApplicationOpenBankingModelsExternalModelsAccountListResponseModel,
                | BadRequestErrorResponse
                | UnauthorizedErrorResponse
                | ForbiddenErrorResponse
                | NotFoundErrorResponse
                | ErrorResponse
            >({
                path: `/open-banking/${apiVersion}/accounts`,
                method: "GET",
                secure: true,
                format: "json",
                ...params,
            }),

        /**
         * @description Метод для получения информации по конкретному счёту
         *
         * @tags Работа со счетами
         * @name getAccountInfo
         * @summary Get Account Info
         * @request GET:/open-banking/{apiVersion}/accounts/{accountId}
         * @secure
         */
        getAccountInfo: (
            apiVersion: ApiVersion,
            accountId: string,
            params: RequestParams = {},
        ) =>
            this.request<
                AccountResponseModel,
                | BadRequestErrorResponse
                | UnauthorizedErrorResponse
                | ForbiddenErrorResponse
                | NotFoundErrorResponse
                | ErrorResponse
            >({
                path: `/open-banking/${apiVersion}/accounts/${accountId}`,
                method: "GET",
                secure: true,
                format: "json",
                ...params,
            }),

        /**
         * @description Метод для получения авторизованных карточных транзакций конкретного счёта
         *
         * @tags Работа с балансами счетов
         * @name getAuthorizedCardTransactions
         * @summary Get Authorized Card Transactions
         * @request GET:/open-banking/{apiVersion}/accounts/{accountId}/authorized-card-transactions
         * @secure
         */
        getAuthorizedCardTransactions:
            (apiVersion: ApiVersion, accountId: string, params: RequestParams = {}) =>
                this.request<
                    CardTransactionsListResponseModel,
                    | BadRequestErrorResponse
                    | UnauthorizedErrorResponse
                    | ForbiddenErrorResponse
                    | NotFoundErrorResponse
                    | ErrorResponse
                >({
                    path: `/open-banking/${apiVersion}/accounts/${accountId}/authorized-card-transactions`,
                    method: "GET",
                    secure: true,
                    format: "json",
                    ...params,
                }),

        /**
         * @description Метод для получения информации о балансе конкретного счёта
         *
         * @tags Работа с балансами счетов
         * @name getBalanceInfo
         * @summary Get Balance Info
         * @request GET:/open-banking/{apiVersion}/accounts/{accountId}/balances
         * @secure
         */
        getBalanceInfo: (
            apiVersion: ApiVersion,
            accountId: string,
            params: RequestParams = {},
        ) =>
            this.request<
                BalanceListResponseModel,
                | BadRequestErrorResponse
                | UnauthorizedErrorResponse
                | ForbiddenErrorResponse
                | NotFoundErrorResponse
                | ErrorResponse
            >({
                path: `/open-banking/${apiVersion}/accounts/${accountId}/balances`,
                method: "GET",
                secure: true,
                format: "json",
                ...params,
            }),

        /**
         * @description Метод для получения конкретной выписки После вызова метода `Init Statement` с помощью `statementId` можно отследить,на каком этапе создание определённой выписки. Есть три статуса: *Created* — создан запрос на выписку; *Processing* — запрос в обработке; *Ready* — выписка готова. **Особенности:** Метод *Init Statement* отрабатывает асинхронно.Отражаются только операции, находящиеся в финальном статусе — *Ready*.
         *
         * @tags Работа с выписками
         * @name  getStatement
         * @summary Get Statement
         * @request GET:/open-banking/{apiVersion}/accounts/{accountId}/statements/{statementId}
         * @secure
         */
        getStatement:
            (
                apiVersion: ApiVersion,
                accountId: string,
                statementId: string,
                params: RequestParams = {},
            ) =>
                this.request<
                    StatementResponseDataModel,
                    | BadRequestErrorResponse
                    | UnauthorizedErrorResponse
                    | ForbiddenErrorResponse
                    | NotFoundErrorResponse
                    | ErrorResponse
                >({
                    path: `/open-banking/${apiVersion}/accounts/${accountId}/statements/${statementId}`,
                    method: "GET",
                    secure: true,
                    format: "json",
                    ...params,
                }),

        /**
         * @description Метод для получения баланса по нескольким счетам
         *
         * @tags Работа с балансами счетов
         * @name getBalancesList
         * @summary Get Balances List
         * @request GET:/open-banking/{apiVersion}/balances
         * @secure
         */
        getBalancesList: (
            apiVersion: ApiVersion,
            params: RequestParams = {},
        ) =>
            this.request<
                BalanceListResponseModel,
                | BadRequestErrorResponse
                | UnauthorizedErrorResponse
                | ForbiddenErrorResponse
                | NotFoundErrorResponse
                | ErrorResponse
            >({
                path: `/open-banking/${apiVersion}/balances`,
                method: "GET",
                secure: true,
                format: "json",
                ...params,
            }),

        /**
         * @description Метод для получения списка доступных клиентов
         *
         * @tags Работа с клиентами
         * @name getCustomersList
         * @summary Get Customers List
         * @request GET:/open-banking/{apiVersion}/customers
         * @secure
         */
        getCustomersList: (
            apiVersion: ApiVersion,
            params: RequestParams = {},
        ) =>
            this.request<
                CustomerListResponseModel,
                | BadRequestErrorResponse
                | UnauthorizedErrorResponse
                | ForbiddenErrorResponse
                | NotFoundErrorResponse
                | ErrorResponse
            >({
                path: `/open-banking/${apiVersion}/customers`,
                method: "GET",
                secure: true,
                format: "json",
                ...params,
            }),

        /**
         * @description Метод для получения информации по конкретному клиенту
         *
         * @tags Работа с клиентами
         * @name getCustomerInfo
         * @summary Get Customer Info
         * @request GET:/open-banking/{apiVersion}/customers/{customerCode}
         * @secure
         */
        getCustomerInfo: (
            apiVersion: ApiVersion,
            customerCode: string,
            params: RequestParams = {},
        ) =>
            this.request<
                CustomerResponseModel,
                | BadRequestErrorResponse
                | UnauthorizedErrorResponse
                | ForbiddenErrorResponse
                | NotFoundErrorResponse
                | ErrorResponse
            >({
                path: `/open-banking/${apiVersion}/customers/${customerCode}`,
                method: "GET",
                secure: true,
                format: "json",
                ...params,
            }),

        /**
         * @description Метод для создания выписки по конкретному счёту
         *
         * @tags Работа с выписками
         * @name initStatement
         * @summary Init Statement
         * @request POST:/open-banking/{apiVersion}/statements
         * @secure
         */
        initStatement: (
            apiVersion: ApiVersion,
            data: StatementInitRequestDataModel,
            params: RequestParams = {},
        ) =>
            this.request<
                StatementInitResponseDataModel,
                | BadRequestErrorResponse
                | UnauthorizedErrorResponse
                | ForbiddenErrorResponse
                | NotFoundErrorResponse
                | ErrorResponse
            >({
                path: `/open-banking/${apiVersion}/statements`,
                method: "POST",
                body: data,
                secure: true,
                type: ContentType.Json,
                format: "json",
                ...params,
            }),

        /**
         * @description Метод для получения списка доступных выписок После вызова метода `Init Statement` можно отследить, в каком статусе готовящаяся выписка: *Created* — только создан запрос на выписку; *Processing* — запрос в обработке; *Ready* — выписка готова. **Особенности:** Отражаются только операции, находящиеся в финальном статусе — *Ready*.
         *
         * @tags Работа с выписками
         * @name getStatementsList
         * @summary Get Statements List
         * @request GET:/open-banking/{apiVersion}/statements
         * @secure
         */
        getStatementsList: (
            apiVersion: ApiVersion,
            query?: {
                /**
                 * Limit
                 * Максимальное количество выписок в ответе
                 * @default 5
                 */
                limit?: number;
            },
            params: RequestParams = {},
        ) =>
            this.request<
                StatementResponseDataModel,
                | BadRequestErrorResponse
                | UnauthorizedErrorResponse
                | ForbiddenErrorResponse
                | NotFoundErrorResponse
                | ErrorResponse
            >({
                path: `/open-banking/${apiVersion}/statements`,
                method: "GET",
                query: query,
                secure: true,
                format: "json",
                ...params,
            }),
    };
    payment = {
        /**
         * @description Метод для создания платежа. Если вы создаёте платёж за третье лицо в бюджет, заполните поля `payerINN` и `payerKPP`. **Обратите внимание:** *paymentDate* нужно заполнить по часовому поясу Москвы.
         *
         * @tags Работа с платежами
         * @name createPaymentForSign
         * @summary Create Payment For Sign
         * @request POST:/payment/{apiVersion}/for-sign
         * @secure
         */
        createPaymentForSign: (
            apiVersion: ApiVersion,
            data: PaymentForSignRequestDataModel,
            params: RequestParams = {},
        ) =>
            this.request<
                PaymentForSignResponseDataModel,
                | BadRequestErrorResponse
                | UnauthorizedErrorResponse
                | ForbiddenErrorResponse
                | NotFoundErrorResponse
                | ErrorResponse
            >({
                path: `/payment/${apiVersion}/for-sign`,
                method: "POST",
                body: data,
                secure: true,
                type: ContentType.Json,
                format: "json",
                ...params,
            }),

        /**
         * @description Метод получения списка платежей на подпись
         *
         * @tags Работа с платежами
         * @name getPaymentForSignList
         * @summary Get Payment For Sign List
         * @request GET:/payment/{apiVersion}/for-sign
         * @secure
         */
        getPaymentForSignList: (
            apiVersion: ApiVersion,
            query: {
                /**
                 * Customercode
                 * Уникальный код клиента
                 * @example "300000092"
                 */
                customerCode: string;
            },
            params: RequestParams = {},
        ) =>
            this.request<
                PaymentForSignListResponseDataModel,
                | BadRequestErrorResponse
                | UnauthorizedErrorResponse
                | ForbiddenErrorResponse
                | NotFoundErrorResponse
                | ErrorResponse
            >({
                path: `/payment/${apiVersion}/for-sign`,
                method: "GET",
                query: query,
                secure: true,
                format: "json",
                ...params,
            }),

        /**
         * @description Метод для создания и подписания платежа. - Если вы создаёте платеж в бюджет, то необходимо заполнить поле `payerKPP` - Если вы создаёте платёж за третье лицо в бюджет, заполните поля `payerINN` и `payerKPP`. **Обратите внимание:** *paymentDate* нужно заполнить по часовому поясу Москвы.
         *
         * @tags Работа с платежами
         * @name createPayment
         * @summary Create Payment
         * @request POST:/payment/{apiVersion}/order
         * @secure
         */
        createPayment: (
            apiVersion: ApiVersion,
            data: PaymentOrderRequestDataModel,
            params: RequestParams = {},
        ) =>
            this.request<
                PaymentOrderResponseDataModel,
                | BadRequestErrorResponse
                | UnauthorizedErrorResponse
                | ForbiddenErrorResponse
                | NotFoundErrorResponse
                | ErrorResponse
            >({
                path: `/payment/${apiVersion}/order`,
                method: "POST",
                body: data,
                secure: true,
                type: ContentType.Json,
                format: "json",
                ...params,
            }),

        /**
         * @description Метод для получения статуса платежа
         *
         * @tags Работа с платежами
         * @name getPaymentStatus
         * @summary Get Payment Status
         * @request GET:/payment/{apiVersion}/status/{requestId}
         * @secure
         */
        getPaymentStatus: (
            apiVersion: ApiVersion,
            requestId: string,
            params: RequestParams = {},
        ) =>
            this.request<
                PaymentStatusResponseDataModel,
                | BadRequestErrorResponse
                | UnauthorizedErrorResponse
                | ForbiddenErrorResponse
                | NotFoundErrorResponse
                | ErrorResponse
            >({
                path: `/payment/${apiVersion}/status/${requestId}`,
                method: "GET",
                secure: true,
                format: "json",
                ...params,
            }),
    };
    sbp = {
        /**
         * @description Метод для получения списка счетов юрлица в Системе быстрых платежей
         *
         * @tags Сервис СБП: Работа с ЮЛ
         * @name getAccountsList
         * @summary Get Accounts List
         * @request GET:/sbp/{apiVersion}/account/{legalId}
         * @secure
         */
        getAccountsList: (
            apiVersion: ApiVersion,
            legalId: string,
            params: RequestParams = {},
        ) =>
            this.request<
                ApplicationSbpModelsResponseModelsSbpAccountListResponseModel,
                | BadRequestErrorResponse
                | UnauthorizedErrorResponse
                | ForbiddenErrorResponse
                | NotFoundErrorResponse
                | ErrorResponse
            >({
                path: `/sbp/${apiVersion}/account/${legalId}`,
                method: "GET",
                secure: true,
                format: "json",
                ...params,
            }),

        /**
         * @description Метод для регистрации B2B QR-кода в Системе быстрых платежей
         *
         * @tags Сервис СБП: работа с B2B QR-кодами
         * @name registerB2BQrCode
         * @summary Register B2B Qr Code
         * @request POST:/sbp/{apiVersion}/b2b-qr-code/merchant/{merchantId}/{accountId}
         * @secure
         */
        registerB2BQrCode: (
            apiVersion: ApiVersion,
            accountId: string,
            merchantId: string,
            data: RegisterB2BQRCodeRequest,
            params: RequestParams = {},
        ) =>
            this.request<
                B2BQRCodeModelResponseModel,
                | BadRequestErrorResponse
                | UnauthorizedErrorResponse
                | ForbiddenErrorResponse
                | NotFoundErrorResponse
                | ErrorResponse
            >({
                path: `/sbp/${apiVersion}/b2b-qr-code/merchant/${merchantId}/${accountId}`,
                method: "POST",
                body: data,
                secure: true,
                type: ContentType.Json,
                format: "json",
                ...params,
            }),

        /**
         * @description Метод для получения информации о B2B QR-коде
         *
         * @tags Сервис СБП: работа с B2B QR-кодами
         * @name getB2BQrCode
         * @summary Get B2B Qr Code
         * @request GET:/sbp/{apiVersion}/b2b-qr-code/{qrcId}
         * @secure
         */
        getB2BQrCode: (
            apiVersion: ApiVersion,
            qrcId: string,
            query?: {
                /**
                 * Width
                 * Ширина изображения (по умолчанию: 300)
                 * @example 300
                 */
                width?: number;
                /**
                 * Height
                 * Высота изображения (по умолчанию: 300)
                 * @example 300
                 */
                height?: number;
            },
            params: RequestParams = {},
        ) =>
            this.request<
                B2BQrCodeResponseModel,
                | BadRequestErrorResponse
                | UnauthorizedErrorResponse
                | ForbiddenErrorResponse
                | NotFoundErrorResponse
                | ErrorResponse
            >({
                path: `/sbp/${apiVersion}/b2b-qr-code/${qrcId}`,
                method: "GET",
                query: query,
                secure: true,
                format: "json",
                ...params,
            }),

        /**
         * @description Метод для регистрации кассового QR-кода
         *
         * @tags Сервис СБП: Работа с кассовыми QR-кодами
         * @name registerCashboxQrcode
         * @summary Register Cashbox Qrcode
         * @request POST:/sbp/{apiVersion}/cashbox-qr-code
         * @secure
         */
        registerCashboxQrcode: (
            apiVersion: ApiVersion,
            data: RegisterCashboxQrCodeRequestDataModel,
            params: RequestParams = {},
        ) =>
            this.request<
                RegisterCashboxQrCodeResponseDataModel,
                | BadRequestErrorResponse
                | UnauthorizedErrorResponse
                | ForbiddenErrorResponse
                | NotFoundErrorResponse
                | ErrorResponse
            >({
                path: `/sbp/${apiVersion}/cashbox-qr-code`,
                method: "POST",
                body: data,
                secure: true,
                type: ContentType.Json,
                format: "json",
                ...params,
            }),

        /**
         * @description Метод для получения списка кассовых QR-кодов
         *
         * @tags Сервис СБП: Работа с кассовыми QR-кодами
         * @name getCashboxQrcodeList
         * @summary Get Cashbox Qrcode List
         * @request GET:/sbp/{apiVersion}/cashbox-qr-code/merchant/{merchantId}/{accountId}
         * @secure
         */
        getCashboxQrcodeList:
            (
                apiVersion: ApiVersion,
                merchantId: string,
                accountId: string,
                params: RequestParams = {},
            ) =>
                this.request<
                    GetCashboxQRCodeListResponseDataModel,
                    | BadRequestErrorResponse
                    | UnauthorizedErrorResponse
                    | ForbiddenErrorResponse
                    | NotFoundErrorResponse
                    | ErrorResponse
                >({
                    path: `/sbp/${apiVersion}/cashbox-qr-code/merchant/${merchantId}/${accountId}`,
                    method: "GET",
                    secure: true,
                    format: "json",
                    ...params,
                }),

        /**
         * @description Метод для получения информации о кассовом QR-коде
         *
         * @tags Сервис СБП: Работа с кассовыми QR-кодами
         * @name getCashboxQrcode
         * @summary Get Cashbox Qrcode
         * @request POST:/sbp/{apiVersion}/cashbox-qr-code/{qrcId}
         * @secure
         */
        getCashboxQrcode: (
            apiVersion: ApiVersion,
            qrcId: string,
            data: GetCashboxQRCodeRequestDataModel,
            params: RequestParams = {},
        ) =>
            this.request<
                GetCashboxQrCodeResponseDataModel,
                | BadRequestErrorResponse
                | UnauthorizedErrorResponse
                | ForbiddenErrorResponse
                | NotFoundErrorResponse
                | ErrorResponse
            >({
                path: `/sbp/${apiVersion}/cashbox-qr-code/${qrcId}`,
                method: "POST",
                body: data,
                secure: true,
                type: ContentType.Json,
                format: "json",
                ...params,
            }),

        /**
         * @description Метод для смены счёта зачисления кассового QR-кода
         *
         * @tags Сервис СБП: Работа с кассовыми QR-кодами
         * @name changeCashboxQrcodeAccount
         * @summary Change Cashbox Qrcode Account
         * @request POST:/sbp/{apiVersion}/cashbox-qr-code/{qrcId}/account
         * @secure
         */
        changeCashboxQrcodeAccount: (
            apiVersion: ApiVersion,
            qrcId: string,
            data: ChangeCashboxQRCodeAccountRequestDataModel,
            params: RequestParams = {},
        ) =>
            this.request<
                ChangeCashboxQRCodeAccountResponseDataModel,
                | BadRequestErrorResponse
                | UnauthorizedErrorResponse
                | ForbiddenErrorResponse
                | NotFoundErrorResponse
                | ErrorResponse
            >({
                path: `/sbp/${apiVersion}/cashbox-qr-code/${qrcId}/account`,
                method: "POST",
                body: data,
                secure: true,
                type: ContentType.Json,
                format: "json",
                ...params,
            }),

        /**
         * @description Метод для активации кассового QR-кода
         *
         * @tags Сервис СБП: Работа с кассовыми QR-кодами
         * @name activateCashboxQrcode
         * @summary Activate Cashbox Qrcode
         * @request POST:/sbp/{apiVersion}/cashbox-qr-code/{qrcId}/activate
         * @secure
         */
        activateCashboxQrcode: (
            apiVersion: ApiVersion,
            qrcId: string,
            data: ActivateCashboxQrCodeRequestDataModel,
            params: RequestParams = {},
        ) =>
            this.request<
                ActivateCashboxQrCodeResponseDataModel,
                | BadRequestErrorResponse
                | UnauthorizedErrorResponse
                | ForbiddenErrorResponse
                | NotFoundErrorResponse
                | ErrorResponse
            >({
                path: `/sbp/${apiVersion}/cashbox-qr-code/${qrcId}/activate`,
                method: "POST",
                body: data,
                secure: true,
                type: ContentType.Json,
                format: "json",
                ...params,
            }),

        /**
         * @description Метод для деактивации кассового QR-кода
         *
         * @tags Сервис СБП: Работа с кассовыми QR-кодами
         * @name deactivateCashboxQrcode
         * @summary Deactivate Cashbox Qrcode
         * @request POST:/sbp/{apiVersion}/cashbox-qr-code/{qrcId}/deactivate
         * @secure
         */
        deactivateCashboxQrcode: (
            apiVersion: ApiVersion,
            qrcId: string,
            params: RequestParams = {},
        ) =>
            this.request<
                DeactivateCashboxQrCodeResponseDataModel,
                | BadRequestErrorResponse
                | UnauthorizedErrorResponse
                | ForbiddenErrorResponse
                | NotFoundErrorResponse
                | ErrorResponse
            >({
                path: `/sbp/${apiVersion}/cashbox-qr-code/${qrcId}/deactivate`,
                method: "POST",
                secure: true,
                format: "json",
                ...params,
            }),

        /**
         * @description Метод для получения статуса кассового QR-кода.
         *
         * @tags Сервис СБП: Работа с кассовыми QR-кодами
         * @name getCashboxQrcodeOperationInfo
         * @summary Get Cashbox Qrcode Operation Info
         * @request GET:/sbp/{apiVersion}/cashbox-qr-code/{qrcId}/operation
         * @secure
         */
        getCashboxQrcodeOperationInfo: (
            apiVersion: ApiVersion,
            qrcId: string,
            query: {
                /**
                 * Paramsid
                 * Идентификатор активных значений параметров QR-кода
                 * @example "AP10001G1HPSOI658DP9SJK41V7JEDRS"
                 */
                paramsId: string;
            },
            params: RequestParams = {},
        ) =>
            this.request<
                GetCashboxQrCodeOperationInfoResponseDataModel,
                | BadRequestErrorResponse
                | UnauthorizedErrorResponse
                | ForbiddenErrorResponse
                | NotFoundErrorResponse
                | ErrorResponse
            >({
                path: `/sbp/${apiVersion}/cashbox-qr-code/${qrcId}/operation`,
                method: "GET",
                query: query,
                secure: true,
                format: "json",
                ...params,
            }),

        /**
         * @description Метод для получения статуса кассового QR-кода.
         *
         * @tags Сервис СБП: Работа с кассовыми QR-кодами
         * @name getCashboxQrcodeStatus
         * @summary Get Cashbox Qrcode Status
         * @request GET:/sbp/{apiVersion}/cashbox-qr-code/{qrcId}/status
         * @secure
         */
        getCashboxQrcodeStatus: (
            apiVersion: ApiVersion,
            qrcId: string,
            params: RequestParams = {},
        ) =>
            this.request<
                GetCashboxQrCodeStatusResponseDataModel,
                | BadRequestErrorResponse
                | UnauthorizedErrorResponse
                | ForbiddenErrorResponse
                | NotFoundErrorResponse
                | ErrorResponse
            >({
                path: `/sbp/${apiVersion}/cashbox-qr-code/${qrcId}/status`,
                method: "GET",
                secure: true,
                format: "json",
                ...params,
            }),

        /**
         * @description Метод для получения информации о клиенте в Системе быстрых платежей
         *
         * @tags Сервис СБП: Работа с ЮЛ
         * @name getCustomerInfo
         * @summary Get Customer Info
         * @request GET:/sbp/{apiVersion}/customer/{customerCode}/{bankCode}
         * @secure
         */
        getCustomerInfo: (
            apiVersion: ApiVersion,
            customerCode: string,
            bankCode: string,
            params: RequestParams = {},
        ) =>
            this.request<
                GetCustomerInfoResponseModelV3,
                | BadRequestErrorResponse
                | UnauthorizedErrorResponse
                | ForbiddenErrorResponse
                | NotFoundErrorResponse
                | ErrorResponse
            >({
                path: `/sbp/${apiVersion}/customer/${customerCode}/${bankCode}`,
                method: "GET",
                secure: true,
                format: "json",
                ...params,
            }),

        /**
         * @description Метод для получения списка платежей в Системе быстрых платежей Обратите внимание: при поиске платежей за прошедшие дни обязательно передавать атрибут `fromDate` с указанием начальной даты периода. Если этот атрибут не передать, поиск выдаст результаты только за вчерашний и сегодняшний дни.
         *
         * @tags Сервис СБП: Работа с возвратами
         * @name getPayments
         * @summary Get Payments
         * @request GET:/sbp/{apiVersion}/get-sbp-payments
         * @secure
         */
        getPayments: (
            apiVersion: ApiVersion,
            query: {
                /**
                 * Customercode
                 * Уникальный код клиента
                 * @example "300000092"
                 */
                customerCode: string;
                /**
                 * Qrcid
                 * ID qr-кода для фильтрации
                 */
                qrcId?: string;
                /**
                 * Fromdate
                 * Начало периода для запроса статусов платежей. При отсутствии параметра в запросе будет задано дефолтное значение
                 * @default "Вчера и сегодня"
                 * @example "2020-12-20"
                 */
                fromDate?: string;
                /**
                 * Todate
                 * Конец периода для запроса статусов платежей
                 */
                toDate?: string;
                /**
                 * Page
                 * Номер страницы
                 * @default 1
                 */
                page?: number;
                /**
                 * Perpage
                 * Количество записей на странице
                 * @default 1000
                 */
                perPage?: number;
            },
            params: RequestParams = {},
        ) =>
            this.request<
                SBPPaymentsResponse,
                | BadRequestErrorResponse
                | UnauthorizedErrorResponse
                | ForbiddenErrorResponse
                | NotFoundErrorResponse
                | ErrorResponse
            >({
                path: `/sbp/${apiVersion}/get-sbp-payments`,
                method: "GET",
                query: query,
                secure: true,
                format: "json",
                ...params,
            }),

        /**
         * @description Метод для получения данных юрлица в Системе быстрых платежей
         *
         * @tags Сервис СБП: Работа с ЮЛ
         * @name getLegalEntity
         * @summary Get Legal Entity
         * @request GET:/sbp/{apiVersion}/legal-entity/{legalId}
         * @secure
         */
        getLegalEntity: (
            apiVersion: ApiVersion,
            legalId: string,
            params: RequestParams = {},
        ) =>
            this.request<
                LegalEntityResponseModel,
                | BadRequestErrorResponse
                | UnauthorizedErrorResponse
                | ForbiddenErrorResponse
                | NotFoundErrorResponse
                | ErrorResponse
            >({
                path: `/sbp/${apiVersion}/legal-entity/${legalId}`,
                method: "GET",
                secure: true,
                format: "json",
                ...params,
            }),

        /**
         * @description Метод устанавливает статус юрлица в Системе быстрых платежей
         *
         * @tags Сервис СБП: Работа с ЮЛ
         * @name SetLegalEntityStatusSbpApiVersionLegalEntityLegalIdPost
         * @summary Set Legal Entity Status
         * @request POST:/sbp/{apiVersion}/legal-entity/{legalId}
         * @secure
         */
        setLegalEntityStatus: (
            apiVersion: ApiVersion,
            legalId: string,
            data: StatusRequest,
            params: RequestParams = {},
        ) =>
            this.request<
                BooleanResponseModel,
                | BadRequestErrorResponse
                | UnauthorizedErrorResponse
                | ForbiddenErrorResponse
                | NotFoundErrorResponse
                | ErrorResponse
            >({
                path: `/sbp/${apiVersion}/legal-entity/${legalId}`,
                method: "POST",
                body: data,
                secure: true,
                type: ContentType.Json,
                format: "json",
                ...params,
            }),

        /**
         * @description Метод для регистрации ТСП в Системе быстрых платежей
         *
         * @tags Сервис СБП: Работа с ТСП
         * @name registerMerchant
         * @summary Register Merchant
         * @request POST:/sbp/{apiVersion}/merchant/legal-entity/{legalId}
         * @secure
         */
        registerMerchant: (
            apiVersion: ApiVersion,
            legalId: string,
            data: RegisterMerchantRequest,
            params: RequestParams = {},
        ) =>
            this.request<
                MerchantIdResponseModel,
                | BadRequestErrorResponse
                | UnauthorizedErrorResponse
                | ForbiddenErrorResponse
                | NotFoundErrorResponse
                | ErrorResponse
            >({
                path: `/sbp/${apiVersion}/merchant/legal-entity/${legalId}`,
                method: "POST",
                body: data,
                secure: true,
                type: ContentType.Json,
                format: "json",
                ...params,
            }),

        /**
         * @description Метод для получения списка ТСП юрлица
         *
         * @tags Сервис СБП: Работа с ТСП
         * @name getMerchantsList
         * @summary Get Merchants List
         * @request GET:/sbp/{apiVersion}/merchant/legal-entity/{legalId}
         * @secure
         */
        getMerchantsList: (
            apiVersion: ApiVersion,
            legalId: string,
            params: RequestParams = {},
        ) =>
            this.request<
                MerchantListResponseModel,
                | BadRequestErrorResponse
                | UnauthorizedErrorResponse
                | ForbiddenErrorResponse
                | NotFoundErrorResponse
                | ErrorResponse
            >({
                path: `/sbp/${apiVersion}/merchant/legal-entity/${legalId}`,
                method: "GET",
                secure: true,
                format: "json",
                ...params,
            }),

        /**
         * @description Метод устанавливает статус ТСП
         *
         * @tags Сервис СБП: Работа с ТСП
         * @name setMerchantStatus
         * @summary Set Merchant Status
         * @request PUT:/sbp/{apiVersion}/merchant/{merchantId}
         * @secure
         */
        setMerchantStatus: (
            apiVersion: ApiVersion,
            merchantId: string,
            data: StatusRequest,
            params: RequestParams = {},
        ) =>
            this.request<
                BooleanResponseModel,
                | BadRequestErrorResponse
                | UnauthorizedErrorResponse
                | ForbiddenErrorResponse
                | NotFoundErrorResponse
                | ErrorResponse
            >({
                path: `/sbp/${apiVersion}/merchant/${merchantId}`,
                method: "PUT",
                body: data,
                secure: true,
                type: ContentType.Json,
                format: "json",
                ...params,
            }),

        /**
         * @description Метод для получения информации о ТСП
         *
         * @tags Сервис СБП: Работа с ТСП
         * @name getMerchant
         * @summary Get Merchant
         * @request GET:/sbp/{apiVersion}/merchant/{merchantId}
         * @secure
         */
        getMerchant: (
            apiVersion: ApiVersion,
            merchantId: string,
            params: RequestParams = {},
        ) =>
            this.request<
                MerchantResponseModel,
                | BadRequestErrorResponse
                | UnauthorizedErrorResponse
                | ForbiddenErrorResponse
                | NotFoundErrorResponse
                | ErrorResponse
            >({
                path: `/sbp/${apiVersion}/merchant/${merchantId}`,
                method: "GET",
                secure: true,
                format: "json",
                ...params,
            }),

        /**
         * @description Метод для получения списка QR-кодов
         *
         * @tags Сервис СБП: Работа с QR-кодами
         * @name getQrCodesList
         * @summary Get Qr Codes List
         * @request GET:/sbp/{apiVersion}/qr-code/legal-entity/{legalId}
         * @secure
         */
        getQrCodesList: (
            apiVersion: ApiVersion,
            legalId: string,
            params: RequestParams = {},
        ) =>
            this.request<
                QRCodeListResponseModel,
                | BadRequestErrorResponse
                | UnauthorizedErrorResponse
                | ForbiddenErrorResponse
                | NotFoundErrorResponse
                | ErrorResponse
            >({
                path: `/sbp/${apiVersion}/qr-code/legal-entity/${legalId}`,
                method: "GET",
                secure: true,
                format: "json",
                ...params,
            }),

        /**
         * @description Метод для регистрации статического или динамического QR-кода в Системе быстрых платежей
         *
         * @tags Сервис СБП: Работа с QR-кодами
         * @name registerQrCode
         * @summary Register Qr Code
         * @request POST:/sbp/{apiVersion}/qr-code/merchant/{merchantId}/{accountId}
         * @secure
         */
        registerQrCode: (
            apiVersion: ApiVersion,
            accountId: string,
            merchantId: string,
            data: RegisterQRCodeRequest,
            params: RequestParams = {},
        ) =>
            this.request<
                QRCodeModelResponseModel,
                | BadRequestErrorResponse
                | UnauthorizedErrorResponse
                | ForbiddenErrorResponse
                | NotFoundErrorResponse
                | ErrorResponse
            >({
                path: `/sbp/${apiVersion}/qr-code/merchant/${merchantId}/${accountId}`,
                method: "POST",
                body: data,
                secure: true,
                type: ContentType.Json,
                format: "json",
                ...params,
            }),

        /**
         * @description Метод для получения информации о QR-коде
         *
         * @tags Сервис СБП: Работа с QR-кодами
         * @name getQrCode
         * @summary Get Qr Code
         * @request GET:/sbp/{apiVersion}/qr-code/{qrcId}
         * @secure
         */
        getQrCode: (
            apiVersion: ApiVersion,
            qrcId: string,
            params: RequestParams = {},
        ) =>
            this.request<
                QRCodeResponseModel,
                | BadRequestErrorResponse
                | UnauthorizedErrorResponse
                | ForbiddenErrorResponse
                | NotFoundErrorResponse
                | ErrorResponse
            >({
                path: `/sbp/${apiVersion}/qr-code/${qrcId}`,
                method: "GET",
                secure: true,
                format: "json",
                ...params,
            }),

        /**
         * @description Метод для получения статусов операций по динамическим QR-кодам
         *
         * @tags Сервис СБП: Работа с QR-кодами
         * @name getQrCodesPaymentStatus
         * @summary Get Qr Codes Payment Status
         * @request GET:/sbp/{apiVersion}/qr-codes/{qrc_ids}/payment-status
         * @secure
         */
        getQrCodesPaymentStatus: (
            apiVersion: ApiVersion,
            qrcIds: string,
            params: RequestParams = {},
        ) =>
            this.request<
                QRCodePaymentStatusListResponseModel,
                | BadRequestErrorResponse
                | UnauthorizedErrorResponse
                | ForbiddenErrorResponse
                | NotFoundErrorResponse
                | ErrorResponse
            >({
                path: `/sbp/${apiVersion}/qr-codes/${qrcIds}/payment-status`,
                method: "GET",
                secure: true,
                format: "json",
                ...params,
            }),

        /**
         * @description Метод запрашивает возврат платежа через Систему быстрых платежей Если нужно вернуть деньги нерезиденту, назначение платежа должно начинаться с «{VO99020} Возврат ошибочно полученной суммы transactionId», где `transactionId` — это идентификатор оригинальной операции.
         *
         * @tags Сервис СБП: Работа с возвратами
         * @name startRefund
         * @summary Start Refund
         * @request POST:/sbp/{apiVersion}/refund
         * @secure
         */
        startRefund: (
            apiVersion: ApiVersion,
            data: SBPRefundRequest,
            params: RequestParams = {},
        ) =>
            this.request<
                SBPRefundRequestResponseModel,
                | BadRequestErrorResponse
                | UnauthorizedErrorResponse
                | ForbiddenErrorResponse
                | NotFoundErrorResponse
                | ErrorResponse
            >({
                path: `/sbp/${apiVersion}/refund`,
                method: "POST",
                body: data,
                secure: true,
                type: ContentType.Json,
                format: "json",
                ...params,
            }),

        /**
         * @description Метод для получения информация о платеже-возврате по Системе быстрых платежей
         *
         * @tags Сервис СБП: Работа с возвратами
         * @name getRefundData
         * @summary Get Refund Data
         * @request GET:/sbp/{apiVersion}/refund/{request_id}
         * @secure
         */
        getRefundData: (
            apiVersion: ApiVersion,
            requestId: string,
            params: RequestParams = {},
        ) =>
            this.request<
                SBPRefundStatusModel,
                | BadRequestErrorResponse
                | UnauthorizedErrorResponse
                | ForbiddenErrorResponse
                | NotFoundErrorResponse
                | ErrorResponse
            >({
                path: `/sbp/${apiVersion}/refund/${requestId}`,
                method: "GET",
                secure: true,
                format: "json",
                ...params,
            }),

        /**
         * @description Метод для регистрации юрлица в Системе быстрых платежей
         *
         * @tags Сервис СБП: Работа с ЮЛ
         * @name registerLegalEntity
         * @summary Register Legal Entity
         * @request POST:/sbp/{apiVersion}/register-sbp-legal-entity
         * @secure
         */
        registerLegalEntity: (
            apiVersion: ApiVersion,
            data: CustomerCodeAndBankCodeRequest,
            params: RequestParams = {},
        ) =>
            this.request<
                RegisterLegalEntityResponseModel,
                | BadRequestErrorResponse
                | UnauthorizedErrorResponse
                | ForbiddenErrorResponse
                | NotFoundErrorResponse
                | ErrorResponse
            >({
                path: `/sbp/${apiVersion}/register-sbp-legal-entity`,
                method: "POST",
                body: data,
                secure: true,
                type: ContentType.Json,
                format: "json",
                ...params,
            }),
    };
    webhook = {
        /**
         * @description Метод для создания вебхуков
         *
         * @tags Работа с вебхуками
         * @name createWebhook
         * @summary Create Webhook
         * @request PUT:/webhook/{apiVersion}/{client_id}
         */
        createWebhook: (
            apiVersion: ApiVersion,
            clientId: string,
            data: Webhook,
            params: RequestParams = {},
        ) =>
            this.request<
                WebhookResponseModel,
                | BadRequestErrorResponse
                | UnauthorizedErrorResponse
                | ForbiddenErrorResponse
                | NotFoundErrorResponse
                | ErrorResponse
            >({
                path: `/webhook/${apiVersion}/${clientId}`,
                method: "PUT",
                body: data,
                type: ContentType.Json,
                format: "json",
                ...params,
            }),

        /**
         * @description Метод для изменения URL и типа вебхука
         *
         * @tags Работа с вебхуками
         * @name editWebhook
         * @summary Edit Webhook
         * @request POST:/webhook/{apiVersion}/{client_id}
         */
        editWebhook: (
            apiVersion: ApiVersion,
            clientId: string,
            data: WebhookEditRequest,
            params: RequestParams = {},
        ) =>
            this.request<
                WebhookResponseModel,
                | BadRequestErrorResponse
                | UnauthorizedErrorResponse
                | ForbiddenErrorResponse
                | NotFoundErrorResponse
                | ErrorResponse
            >({
                path: `/webhook/${apiVersion}/${clientId}`,
                method: "POST",
                body: data,
                type: ContentType.Json,
                format: "json",
                ...params,
            }),

        /**
         * @description Метод для получения списка вебхуков приложения
         *
         * @tags Работа с вебхуками
         * @name getWebhooks
         * @summary Get Webhooks
         * @request GET:/webhook/{apiVersion}/{client_id}
         */
        getWebhooks: (
            apiVersion: ApiVersion,
            clientId: string,
            params: RequestParams = {},
        ) =>
            this.request<
                WebhookResponseModel,
                | BadRequestErrorResponse
                | UnauthorizedErrorResponse
                | ForbiddenErrorResponse
                | NotFoundErrorResponse
                | ErrorResponse
            >({
                path: `/webhook/${apiVersion}/${clientId}`,
                method: "GET",
                format: "json",
                ...params,
            }),

        /**
         * @description Метод для удаления вебхука
         *
         * @tags Работа с вебхуками
         * @name deleteWebhook
         * @summary Delete Webhook
         * @request DELETE:/webhook/{apiVersion}/{client_id}
         */
        deleteWebhook: (
            apiVersion: ApiVersion,
            clientId: string,
            params: RequestParams = {},
        ) =>
            this.request<
                BooleanResponseModel,
                | BadRequestErrorResponse
                | UnauthorizedErrorResponse
                | ForbiddenErrorResponse
                | NotFoundErrorResponse
                | ErrorResponse
            >({
                path: `/webhook/${apiVersion}/${clientId}`,
                method: "DELETE",
                format: "json",
                ...params,
            }),

        /**
         * @description Метод для проверки отправки вебхука
         *
         * @tags Работа с вебхуками
         * @name sendWebhook
         * @summary Send Webhook
         * @request POST:/webhook/{apiVersion}/{client_id}/test_send
         */
        sendWebhook: (
            apiVersion: ApiVersion,
            clientId: string,
            data: WebhookTestSendRequest,
            params: RequestParams = {},
        ) =>
            this.request<
                BooleanResponseModel,
                | BadRequestErrorResponse
                | UnauthorizedErrorResponse
                | ForbiddenErrorResponse
                | NotFoundErrorResponse
                | ErrorResponse
            >({
                path: `/webhook/${apiVersion}/${clientId}/test_send`,
                method: "POST",
                body: data,
                type: ContentType.Json,
                format: "json",
                ...params,
            }),
    };
}
