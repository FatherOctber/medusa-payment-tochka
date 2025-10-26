import {TochkaApi} from "../types/tochka-api/tochka-api";
import {TochkaBankDomainBase} from "./tochka-base";

/**
 * Invoice domain class for invoice and closing document management
 *
 * Provides access to all invoice-related functionality including:
 * - Creating and managing invoices
 * - Invoice payment status tracking
 * - Email delivery of invoices
 * - Closing documents management
 */
export class TochkaBankInvoice extends TochkaBankDomainBase {
    constructor(api: TochkaApi<unknown>, apiVersion: string, clientId: string) {
        super(api, apiVersion, clientId);
    }

    /**
     * Get all invoice methods from the API
     */
    get methods() {
        return this.api.invoice;
    }

    // Invoice Operations

    /**
     * Create a new invoice
     * @description Метод для создания счёта на оплату
     */
    createInvoice = this.api.invoice.createInvoice;

    /**
     * Delete an invoice
     * @description Метод для удаления счёта на оплату
     */
    deleteInvoice = this.api.invoice.deleteInvoice;

    /**
     * Send invoice to email
     * @description Метод для отправки счёта на почту
     */
    sendInvoiceToEmail = this.api.invoice.sendInvoiceToEmail;

    /**
     * Get invoice file
     * @description Метод для получения файла выставленного счёта
     */
    getInvoice = this.api.invoice.getInvoice;

    /**
     * Get invoice payment status
     * @description Метод для получения статуса счёта
     */
    getInvoicePaymentStatus = this.api.invoice.getInvoicePaymentStatus;

    // Closing Document Operations

    /**
     * Create closing document
     * @description Метод для создания закрывающего документа
     */
    createClosingDocument = this.api.invoice.createClosingDocument;

    /**
     * Delete closing document
     * @description Метод для удаления закрывающего документа
     */
    deleteClosingDocuments = this.api.invoice.deleteClosingDocuments;

    /**
     * Send closing document to email
     * @description Метод для отправки закрывающего документа на почту
     */
    sendClosingDocumentsToEmail = this.api.invoice.sendClosingDocumentsToEmail;

    /**
     * Get closing document file
     * @description Метод для получения файла закрывающего документа
     */
    getClosingDocument = this.api.invoice.getClosingDocument;
}