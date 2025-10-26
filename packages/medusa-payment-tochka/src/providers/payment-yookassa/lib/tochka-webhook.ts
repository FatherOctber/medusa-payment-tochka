import { TochkaApi } from "../types/tochka-api/tochka-api";
import { TochkaBankDomainBase } from "./tochka-base";

/**
 * Webhook domain class for webhook management
 *
 * Provides access to webhook functionality including:
 * - Webhook creation and configuration
 * - Webhook editing and URL management
 * - Webhook retrieval and listing
 * - Webhook deletion
 * - Webhook testing and validation
 */
export class TochkaBankWebhook extends TochkaBankDomainBase {
  constructor(api: TochkaApi<unknown>, apiVersion: string, clientId: string) {
    super(api, apiVersion, clientId);
  }

  /**
   * Get all webhook methods from the API
   */
  get methods() {
    return this.api.webhook;
  }

  /**
   * Create webhook
   * @description Метод для создания вебхуков
   */
  createWebhook = this.api.webhook.createWebhook;

  /**
   * Edit webhook
   * @description Метод для изменения URL и типа вебхука
   */
  editWebhook = this.api.webhook.editWebhook;

  /**
   * Get webhooks
   * @description Метод для получения списка вебхуков приложения
   */
  getWebhooks = this.api.webhook.getWebhooks;

  /**
   * Delete webhook
   * @description Метод для удаления вебхука
   */
  deleteWebhook = this.api.webhook.deleteWebhook;

  /**
   * Send webhook (test)
   * @description Метод для проверки отправки вебхука
   */
  sendWebhook = this.api.webhook.sendWebhook;
}