import {TochkaApi} from "../types/tochka-api/tochka-api";

/**
 * Base class for all Tochka Bank domain classes
 */
export abstract class TochkaBankDomainBase {
    protected api: TochkaApi<unknown>;
    protected apiVersion: string;
    protected clientId: string;

    constructor(api: TochkaApi<unknown>, apiVersion: string, clientId: string) {
        this.api = api;
        this.apiVersion = apiVersion;
        this.clientId = clientId;
    }

    /**
     * Get the API version being used
     */
    getApiVersion(): string {
        return this.apiVersion;
    }

    /**
     * Get the client ID being used
     */
    getClientId(): string {
        return this.clientId;
    }
}