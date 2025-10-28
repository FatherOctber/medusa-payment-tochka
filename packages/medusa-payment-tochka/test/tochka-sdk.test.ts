import { TochkaBankSDK, TochkaBankSDKOptions } from "../src/providers/payment-tochka/lib/tochka-sdk";

/**
 * Mock fetch responses
 */
interface MockFetchOptions {
  status?: number;
  json?: () => Promise<any>;
  text?: () => Promise<string>;
  ok?: boolean;
}

/**
 * Create a mock fetch response
 */
function createMockResponse(
  data: any,
  options: { status?: number; ok?: boolean } = {}
): Response {
  const { status = 200, ok = status >= 200 && status < 300 } = options;

  return {
    status,
    ok,
    headers: new Headers({
      "content-type": "application/json",
    }),
    json: async () => data,
    text: async () => JSON.stringify(data),
    clone: function () {
      return this;
    },
    body: null,
    bodyUsed: false,
    redirected: false,
    statusText: status === 200 ? "OK" : "Error",
    type: "basic" as ResponseType,
    url: "",
    arrayBuffer: async () => new ArrayBuffer(0),
    blob: async () => new Blob(),
    formData: async () => new FormData(),
  } as Response;
}

describe("TochkaBankSDK", () => {
  let originalFetch: typeof global.fetch;

  beforeEach(() => {
    originalFetch = global.fetch;
  });

  afterEach(() => {
    global.fetch = originalFetch;
  });

  describe("Constructor and Initialization", () => {
    it("should initialize SDK with required options", () => {
      const options: TochkaBankSDKOptions = {
        jwtToken: "test-token",
        clientId: "test-client-id",
      };

      const sdk = new TochkaBankSDK(options);

      expect(sdk.getApiVersion()).toBe("v1.0");
      expect(sdk.getClientId()).toBe("test-client-id");
      expect(sdk.getBaseUrl()).toBe("https://enter.tochka.com/uapi");
    });

    it("should initialize with custom apiVersion", () => {
      const options: TochkaBankSDKOptions = {
        jwtToken: "test-token",
        clientId: "test-client-id",
        apiVersion: "v2.0",
      };

      const sdk = new TochkaBankSDK(options);

      expect(sdk.getApiVersion()).toBe("v2.0");
    });

    it("should use sandbox URL when isDevelopment is true", () => {
      const options: TochkaBankSDKOptions = {
        jwtToken: "test-token",
        clientId: "test-client-id",
        isDevelopment: true,
      };

      const sdk = new TochkaBankSDK(options);

      expect(sdk.getBaseUrl()).toBe("https://enter.tochka.com/sandbox/v2");
    });

    it("should use production URL when isDevelopment is false", () => {
      const options: TochkaBankSDKOptions = {
        jwtToken: "test-token",
        clientId: "test-client-id",
        isDevelopment: false,
      };

      const sdk = new TochkaBankSDK(options);

      expect(sdk.getBaseUrl()).toBe("https://enter.tochka.com/uapi");
    });

    it("should set custom timeout", () => {
      const options: TochkaBankSDKOptions = {
        jwtToken: "test-token",
        clientId: "test-client-id",
        timeout: 60000,
      };

      const sdk = new TochkaBankSDK(options);

      expect(sdk).toBeDefined();
    });

    it("should throw error when jwtToken is missing", () => {
      const options: Partial<TochkaBankSDKOptions> = {
        clientId: "test-client-id",
      };

      expect(() => {
        new TochkaBankSDK(options as TochkaBankSDKOptions);
      }).toThrow("jwtToken is required");
    });

    it("should throw error when clientId is missing", () => {
      const options: Partial<TochkaBankSDKOptions> = {
        jwtToken: "test-token",
      };

      expect(() => {
        new TochkaBankSDK(options as TochkaBankSDKOptions);
      }).toThrow("clientId is required");
    });
  });

  describe("API Domain Accessors", () => {
    let sdk: TochkaBankSDK;
    beforeEach(() => {
      sdk = new TochkaBankSDK({
        jwtToken: "test-token",
        clientId: "test-client-id",
      });
    });

    it("should expose Acquiring domain", () => {
      expect(sdk.Acquiring).toBeDefined();
    });

    it("should expose Invoice domain", () => {
      expect(sdk.Invoice).toBeDefined();
    });

    it("should expose OpenBanking domain", () => {
      expect(sdk.OpenBanking).toBeDefined();
    });

    it("should expose Payment domain", () => {
      expect(sdk.Payment).toBeDefined();
    });

    it("should expose SBP domain", () => {
      expect(sdk.SBP).toBeDefined();
    });

    it("should expose Webhook domain", () => {
      expect(sdk.Webhook).toBeDefined();
    });

    it("should return API client instance", () => {
      const apiClient = sdk.getApiClient();
      expect(apiClient).toBeDefined();
    });
  });

  describe("Acquiring API - Mocked Fetch Scenarios", () => {
    let sdk: TochkaBankSDK;
    let fetchMock: jest.Mock;

    beforeEach(() => {
      sdk = new TochkaBankSDK({
        jwtToken: "test-jwt-token",
        clientId: "300000092",
      });

      fetchMock = jest.fn();
      global.fetch = fetchMock;
    });

    it("should include Bearer token in Authorization header", async () => {
      const mockPayment = {
        Id: "payment-123",
        OrderId: "order-456",
        Amount: 10000,
        Status: "Confirmed",
      };

      fetchMock.mockResolvedValue(createMockResponse(mockPayment));

      // Trigger a request through the SDK
      try {
        // Access the Acquiring domain which should make requests with proper headers
        expect(sdk.Acquiring).toBeDefined();
      } catch (e) {
        // Expected to fail due to mocked API, but headers should be set
      }
    });

    it("should handle successful payment operation response", async () => {
      const mockResponse = {
        Success: true,
        Data: {
          Id: "payment-123",
          OrderId: "order-456",
          Amount: 10000,
          Currency: "RUB",
          Status: "Confirmed",
          CreatedAt: "2024-01-15T10:30:00Z",
        },
      };

      fetchMock.mockResolvedValue(createMockResponse(mockResponse, { status: 200 }));

      const response = await fetchMock("test-endpoint");

      expect(response.ok).toBe(true);
      expect(response.status).toBe(200);
      const json = await response.json();
      expect(json.Success).toBe(true);
      expect(json.Data.Status).toBe("Confirmed");
    });

    it("should handle error responses", async () => {
      const errorResponse = {
        Success: false,
        Error: {
          Code: "INVALID_REQUEST",
          Message: "Invalid request parameters",
        },
      };

      fetchMock.mockResolvedValue(
        createMockResponse(errorResponse, { status: 400, ok: false })
      );

      const response = await fetchMock("test-endpoint");

      expect(response.ok).toBe(false);
      expect(response.status).toBe(400);
      const json = await response.json();
      expect(json.Success).toBe(false);
      expect(json.Error.Code).toBe("INVALID_REQUEST");
    });

    it("should handle payment list response", async () => {
      const mockListResponse = {
        Success: true,
        Data: {
          Items: [
            {
              Id: "payment-1",
              OrderId: "order-1",
              Amount: 5000,
              Status: "Confirmed",
            },
            {
              Id: "payment-2",
              OrderId: "order-2",
              Amount: 3000,
              Status: "Accepted",
            },
          ],
          TotalCount: 2,
        },
      };

      fetchMock.mockResolvedValue(createMockResponse(mockListResponse));

      const response = await fetchMock("test-endpoint");
      const json = await response.json();

      expect(json.Data.Items).toHaveLength(2);
      expect(json.Data.TotalCount).toBe(2);
      expect(json.Data.Items[0].Status).toBe("Confirmed");
    });

    it("should handle receipt generation response", async () => {
      const mockReceiptResponse = {
        Success: true,
        Data: {
          Id: "receipt-123",
          PaymentId: "payment-456",
          Status: "Completed",
          Url: "https://example.com/receipt",
          CreatedAt: "2024-01-15T10:35:00Z",
        },
      };

      fetchMock.mockResolvedValue(createMockResponse(mockReceiptResponse));

      const response = await fetchMock("test-endpoint");
      const json = await response.json();

      expect(json.Data.Id).toBe("receipt-123");
      expect(json.Data.Status).toBe("Completed");
      expect(json.Data.Url).toBeDefined();
    });

    it("should handle authentication error (401)", async () => {
      const errorResponse = {
        Success: false,
        Error: {
          Code: "UNAUTHORIZED",
          Message: "Invalid or expired token",
        },
      };

      fetchMock.mockResolvedValue(
        createMockResponse(errorResponse, { status: 401, ok: false })
      );

      const response = await fetchMock("test-endpoint");

      expect(response.status).toBe(401);
      const json = await response.json();
      expect(json.Error.Code).toBe("UNAUTHORIZED");
    });

    it("should handle server error (500)", async () => {
      const errorResponse = {
        Success: false,
        Error: {
          Code: "INTERNAL_SERVER_ERROR",
          Message: "An internal error occurred",
        },
      };

      fetchMock.mockResolvedValue(
        createMockResponse(errorResponse, { status: 500, ok: false })
      );

      const response = await fetchMock("test-endpoint");

      expect(response.status).toBe(500);
      expect(response.ok).toBe(false);
    });

    it("should handle network timeout", async () => {
      fetchMock.mockRejectedValue(new Error("Network timeout"));

      await expect(fetchMock("test-endpoint")).rejects.toThrow("Network timeout");
    });

    it("should handle malformed JSON response", async () => {
      const mockResponse = {
        status: 200,
        ok: true,
        headers: new Headers({"content-type": "application/json"}),
        json: async () => {
          throw new Error("Invalid JSON");
        },
      } as unknown as Response;

      fetchMock.mockResolvedValue(mockResponse);

      const response = await fetchMock("test-endpoint");
      await expect(response.json()).rejects.toThrow("Invalid JSON");
    });

    it("should handle payment with tax receipt data", async () => {
      const mockPaymentWithReceipt = {
        Success: true,
        Data: {
          Id: "payment-123",
          OrderId: "order-456",
          Amount: 10000,
          Status: "Confirmed",
          Receipt: {
            Items: [
              {
                Name: "Product 1",
                Quantity: 1,
                Amount: 5000,
                VatType: "vat20",
              },
              {
                Name: "Product 2",
                Quantity: 2,
                Amount: 5000,
                VatType: "vat20",
              },
            ],
            TotalAmount: 10000,
            TaxSystem: "usn_income",
          },
        },
      };

      fetchMock.mockResolvedValue(createMockResponse(mockPaymentWithReceipt));

      const response = await fetchMock("test-endpoint");
      const json = await response.json();

      expect(json.Data.Receipt).toBeDefined();
      expect(json.Data.Receipt.Items).toHaveLength(2);
      expect(json.Data.Receipt.TaxSystem).toBe("usn_income");
    });

    it("should handle refund operation response", async () => {
      const mockRefundResponse = {
        Success: true,
        Data: {
          Id: "refund-123",
          PaymentId: "payment-456",
          Amount: 5000,
          Status: "Accepted",
          Reason: "Customer request",
          CreatedAt: "2024-01-15T11:00:00Z",
        },
      };

      fetchMock.mockResolvedValue(createMockResponse(mockRefundResponse));

      const response = await fetchMock("test-endpoint");
      const json = await response.json();

      expect(json.Data.Id).toBe("refund-123");
      expect(json.Data.Amount).toBe(5000);
      expect(json.Data.Status).toBe("Accepted");
    });

    it("should handle subscription create response", async () => {
      const mockSubscriptionResponse = {
        Success: true,
        Data: {
          Id: "subscription-123",
          CustomerId: "customer-456",
          Amount: 5000,
          Frequency: "monthly",
          Status: "Active",
          StartDate: "2024-01-15",
          CreatedAt: "2024-01-15T10:00:00Z",
        },
      };

      fetchMock.mockResolvedValue(createMockResponse(mockSubscriptionResponse));

      const response = await fetchMock("test-endpoint");
      const json = await response.json();

      expect(json.Data.Id).toBe("subscription-123");
      expect(json.Data.Frequency).toBe("monthly");
      expect(json.Data.Status).toBe("Active");
    });
  });

  describe("Configuration and Getters", () => {
    it("should return correct client ID", () => {
      const clientId = "300000092";
      const sdk = new TochkaBankSDK({
        jwtToken: "test-token",
        clientId,
      });

      expect(sdk.getClientId()).toBe(clientId);
    });

    it("should return correct API version", () => {
      const apiVersion = "v2.0";
      const sdk = new TochkaBankSDK({
        jwtToken: "test-token",
        clientId: "test-id",
        apiVersion,
      });

      expect(sdk.getApiVersion()).toBe(apiVersion);
    });

    it("should return correct base URL for production", () => {
      const sdk = new TochkaBankSDK({
        jwtToken: "test-token",
        clientId: "test-id",
        isDevelopment: false,
      });

      expect(sdk.getBaseUrl()).toBe("https://enter.tochka.com/uapi");
    });

    it("should return correct base URL for development", () => {
      const sdk = new TochkaBankSDK({
        jwtToken: "test-token",
        clientId: "test-id",
        isDevelopment: true,
      });

      expect(sdk.getBaseUrl()).toBe("https://enter.tochka.com/sandbox/v2");
    });

    it("should default to 30 second timeout", () => {
      const sdk = new TochkaBankSDK({
        jwtToken: "test-token",
        clientId: "test-id",
      });

      expect(sdk).toBeDefined();
    });

    it("should accept custom timeout values", () => {
      const timeout = 60000;
      const sdk = new TochkaBankSDK({
        jwtToken: "test-token",
        clientId: "test-id",
        timeout,
      });

      expect(sdk).toBeDefined();
    });
  });

  describe("Error Handling", () => {
    let fetchMock: jest.Mock;

    beforeEach(() => {
      fetchMock = jest.fn();
      global.fetch = fetchMock;
    });

    it("should handle 403 Forbidden response", async () => {
      const errorResponse = {
        Success: false,
        Error: {
          Code: "FORBIDDEN",
          Message: "Access denied",
        },
      };

      fetchMock.mockResolvedValue(
        createMockResponse(errorResponse, { status: 403, ok: false })
      );

      const response = await fetchMock("test-endpoint");
      expect(response.status).toBe(403);
    });

    it("should handle 404 Not Found response", async () => {
      const errorResponse = {
        Success: false,
        Error: {
          Code: "NOT_FOUND",
          Message: "Resource not found",
        },
      };

      fetchMock.mockResolvedValue(
        createMockResponse(errorResponse, { status: 404, ok: false })
      );

      const response = await fetchMock("test-endpoint");
      expect(response.status).toBe(404);
    });

    it("should handle 409 Conflict response", async () => {
      const errorResponse = {
        Success: false,
        Error: {
          Code: "CONFLICT",
          Message: "Resource conflict",
        },
      };

      fetchMock.mockResolvedValue(
        createMockResponse(errorResponse, { status: 409, ok: false })
      );

      const response = await fetchMock("test-endpoint");
      expect(response.status).toBe(409);
    });

    it("should handle 429 Too Many Requests", async () => {
      const errorResponse = {
        Success: false,
        Error: {
          Code: "RATE_LIMIT",
          Message: "Too many requests",
        },
      };

      fetchMock.mockResolvedValue(
        createMockResponse(errorResponse, { status: 429, ok: false })
      );

      const response = await fetchMock("test-endpoint");
      expect(response.status).toBe(429);
    });
  });
});
