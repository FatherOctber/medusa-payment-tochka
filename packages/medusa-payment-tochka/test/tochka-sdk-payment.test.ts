import {
    TochkaBankSDK,
    TochkaBankSDKOptions,
    TochkaBankPayment,
    ApiVersion
} from "../src/providers/payment-tochka/lib/tochka-sdk";

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
    const {status = 200, ok = status >= 200 && status < 300} = options;

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
        bytes: async () => new Uint8Array(),
    } as Response;
}

describe("TochkaBankSDK - payment", () => {
    let payment: TochkaBankPayment;
    let sdk: TochkaBankSDK;
    let fetchMock: jest.Mock;
    let originalFetch: typeof global.fetch;

    beforeEach(() => {
        originalFetch = global.fetch;

        sdk = new TochkaBankSDK({
            jwtToken: "test-jwt-token",
            clientId: "300000092",
        });

        payment = sdk.Payment;
        fetchMock = jest.fn();
        global.fetch = fetchMock;
    });

    afterEach(() => {
        global.fetch = originalFetch;
    });

    describe("createPaymentForSign", () => {
        it("should create payment for sign successfully", async () => {
            const mockRequest = {
                Data: {
                    accountCode: "40702810100000001234",
                    bankCode: "999999999",
                    counterpartyAccountNumber: "40817810100000005678",
                    counterpartyBankBic: "888888888",
                    counterpartyName: "ООО \"Контрагент\"",
                    counterpartyINN: "1234567890",
                    paymentAmount: 100000,
                    paymentPurpose: "Оплата за товары по договору №123",
                    paymentDate: "2024-01-15",
                    operationCode: "01",
                    urgency: "5"
                }
            };

            const mockResponse = {
                Success: true,
                Data: {
                    requestId: "payment-sign-123",
                    customerCode: "300000092",
                    status: "Created",
                    createdAt: "2024-01-15T10:30:00Z",
                },
            };

            fetchMock.mockResolvedValue(createMockResponse(mockResponse));

            const result = await payment.createPaymentForSign(ApiVersion.V10, mockRequest);

            expect(fetchMock).toHaveBeenCalledWith(
                "https://enter.tochka.com/uapi/payment/v1.0/for-sign",
                expect.objectContaining({
                    method: "POST",
                    headers: expect.objectContaining({
                        Authorization: "Bearer test-jwt-token",
                        "Content-Type": "application/json",
                    }),
                    body: JSON.stringify(mockRequest),
                })
            );

            const response = await result.json();
            expect(response.Success).toBe(true);
            expect(response.Data.requestId).toBe("payment-sign-123");
        });

        it("should handle createPaymentForSign validation error (400)", async () => {
            const mockRequest = {
                Data: {
                    accountCode: "",
                    bankCode: "",
                    counterpartyAccountNumber: "",
                    counterpartyBankBic: "",
                    counterpartyName: "",
                    counterpartyINN: "",
                    paymentAmount: -100,
                    paymentPurpose: "",
                    paymentDate: "",
                    operationCode: "",
                    urgency: ""
                }
            };

            const errorResponse = {
                Success: false,
                Error: {
                    Code: "VALIDATION_ERROR",
                    Message: "Invalid payment data",
                    Details: ["paymentAmount must be positive", "accountCode is required"],
                },
            };

            fetchMock.mockResolvedValue(
                createMockResponse(errorResponse, {status: 400, ok: false})
            );

            await payment.createPaymentForSign(ApiVersion.V10, mockRequest)
                .then(result => {
                        console.log("Hm... Is it ok?");
                        throw result
                    }
                ).catch(errorResponse => {
                        expect(errorResponse.status).toBe(400);
                        expect(errorResponse.error.Success).toBe(false);
                        expect(errorResponse.error.Error.Code).toBe("VALIDATION_ERROR");
                    }
                )
        });

        it("should handle createPaymentForSign unauthorized error (401)", async () => {
            const mockRequest = {
                Data: {
                    accountCode: "40702810100000001234",
                    bankCode: "999999999",
                    counterpartyAccountNumber: "40817810100000005678",
                    counterpartyBankBic: "888888888",
                    counterpartyName: "ООО \"Контрагент\"",
                    counterpartyINN: "1234567890",
                    paymentAmount: 100000,
                    paymentPurpose: "Оплата за товары по договору №123",
                    paymentDate: "2024-01-15",
                    operationCode: "01",
                    urgency: "5"
                }
            };

            const errorResponse = {
                Success: false,
                Error: {
                    Code: "UNAUTHORIZED",
                    Message: "Invalid or expired token",
                },
            };

            fetchMock.mockResolvedValue(
                createMockResponse(errorResponse, {status: 401, ok: false})
            );

            await payment.createPaymentForSign(ApiVersion.V10, mockRequest)
                .then(result => {
                        console.log("Hm... Is it ok?");
                        throw result
                    }
                ).catch(errorResponse => {
                        expect(errorResponse.status).toBe(401);
                        expect(errorResponse.error.Success).toBe(false);
                        expect(errorResponse.error.Error.Code).toBe("UNAUTHORIZED");
                    }
                )
        });

        it("should handle createPaymentForSign with minimal required fields", async () => {
            const mockRequest = {
                Data: {
                    accountCode: "40702810100000001234",
                    bankCode: "999999999",
                    counterpartyAccountNumber: "40817810100000005678",
                    counterpartyBankBic: "888888888",
                    counterpartyName: "ООО \"Контрагент\"",
                    paymentAmount: 50000,
                    paymentPurpose: "Минимальный платеж",
                    paymentDate: "2024-01-15"
                }
            };

            const mockResponse = {
                Success: true,
                Data: {
                    requestId: "payment-sign-minimal-123",
                    customerCode: "300000092",
                    status: "Created",
                    createdAt: "2024-01-15T10:30:00Z",
                },
            };

            fetchMock.mockResolvedValue(createMockResponse(mockResponse));

            const result = await payment.createPaymentForSign(ApiVersion.V10, mockRequest);

            const response = await result.json();
            expect(response.Success).toBe(true);
            expect(response.Data.requestId).toBe("payment-sign-minimal-123");
        });
    });

    describe("getPaymentForSignList", () => {
        it("should get payment for sign list successfully", async () => {
            const customerCode = "300000092";

            const mockResponse = {
                Success: true,
                Data: [
                    {
                        requestId: "payment-sign-123",
                        paymentAmount: 100000,
                        counterpartyName: "ООО \"Контрагент\"",
                        paymentPurpose: "Оплата за товары",
                        status: "WaitingForSign",
                        createdAt: "2024-01-15T10:30:00Z",
                    },
                    {
                        requestId: "payment-sign-124",
                        paymentAmount: 75000,
                        counterpartyName: "ИП Иванов",
                        paymentPurpose: "Оплата услуг",
                        status: "WaitingForSign",
                        createdAt: "2024-01-15T11:00:00Z",
                    }
                ],
            };

            fetchMock.mockResolvedValue(createMockResponse(mockResponse));

            const result = await payment.getPaymentForSignList(ApiVersion.V10, {customerCode});

            expect(fetchMock).toHaveBeenCalledWith(
                "https://enter.tochka.com/uapi/payment/v1.0/for-sign?customerCode=300000092",
                expect.objectContaining({
                    method: "GET",
                    headers: expect.objectContaining({
                        Authorization: "Bearer test-jwt-token",
                    }),
                })
            );

            const response = await result.json();
            expect(response.Success).toBe(true);
            expect(response.Data).toHaveLength(2);
            expect(response.Data[0].requestId).toBe("payment-sign-123");
        });

        it("should handle getPaymentForSignList with empty result", async () => {
            const customerCode = "300000092";

            const mockResponse = {
                Success: true,
                Data: [],
            };

            fetchMock.mockResolvedValue(createMockResponse(mockResponse));

            const result = await payment.getPaymentForSignList(ApiVersion.V10, {customerCode});

            const response = await result.json();
            expect(response.Success).toBe(true);
            expect(response.Data).toHaveLength(0);
        });

        it("should handle getPaymentForSignList unauthorized error (401)", async () => {
            const customerCode = "300000092";

            const errorResponse = {
                Success: false,
                Error: {
                    Code: "UNAUTHORIZED",
                    Message: "Invalid or expired token",
                },
            };

            fetchMock.mockResolvedValue(
                createMockResponse(errorResponse, {status: 401, ok: false})
            );

            await payment.getPaymentForSignList(ApiVersion.V10, {customerCode})
                .then(result => {
                        console.log("Hm... Is it ok?");
                        throw result
                    }
                ).catch(errorResponse => {
                        expect(errorResponse.status).toBe(401);
                        expect(errorResponse.error.Success).toBe(false);
                        expect(errorResponse.error.Error.Code).toBe("UNAUTHORIZED");
                    }
                )
        });
    });

    describe("createPayment", () => {
        it("should create payment successfully", async () => {
            const mockRequest = {
                Data: {
                    accountCode: "40702810100000001234",
                    bankCode: "999999999",
                    counterpartyAccountNumber: "40817810100000005678",
                    counterpartyBankBic: "888888888",
                    counterpartyName: "ООО \"Контрагент\"",
                    counterpartyINN: "1234567890",
                    paymentAmount: 100000,
                    paymentPurpose: "Оплата за товары по договору №123",
                    paymentDate: "2024-01-15",
                    operationCode: "01",
                    urgency: "5"
                }
            };

            const mockResponse = {
                Success: true,
                Data: {
                    requestId: "payment-order-123",
                    customerCode: "300000092",
                    status: "Sent",
                    paymentId: "pay-789",
                    createdAt: "2024-01-15T10:30:00Z",
                },
            };

            fetchMock.mockResolvedValue(createMockResponse(mockResponse));

            const result = await payment.createPayment(ApiVersion.V10, mockRequest);

            expect(fetchMock).toHaveBeenCalledWith(
                "https://enter.tochka.com/uapi/payment/v1.0/order",
                expect.objectContaining({
                    method: "POST",
                    headers: expect.objectContaining({
                        Authorization: "Bearer test-jwt-token",
                        "Content-Type": "application/json",
                    }),
                    body: JSON.stringify(mockRequest),
                })
            );

            const response = await result.json();
            expect(response.Success).toBe(true);
            expect(response.Data.requestId).toBe("payment-order-123");
            expect(response.Data.status).toBe("Sent");
        });

        it("should handle createPayment validation error (400)", async () => {
            const mockRequest = {
                Data: {
                    accountCode: "",
                    bankCode: "",
                    counterpartyAccountNumber: "invalid-account",
                    counterpartyBankBic: "",
                    counterpartyName: "",
                    paymentAmount: 0,
                    paymentPurpose: "",
                    paymentDate: "invalid-date"
                }
            };

            const errorResponse = {
                Success: false,
                Error: {
                    Code: "VALIDATION_ERROR",
                    Message: "Invalid payment order data",
                    Details: ["paymentAmount must be positive", "paymentDate format is invalid"],
                },
            };

            fetchMock.mockResolvedValue(
                createMockResponse(errorResponse, {status: 400, ok: false})
            );

            await payment.createPayment(ApiVersion.V10, mockRequest)
                .then(result => {
                        console.log("Hm... Is it ok?");
                        throw result
                    }
                ).catch(errorResponse => {
                        expect(errorResponse.status).toBe(400);
                        expect(errorResponse.error.Success).toBe(false);
                        expect(errorResponse.error.Error.Code).toBe("VALIDATION_ERROR");
                    }
                )
        });

        it("should handle createPayment forbidden error (403)", async () => {
            const mockRequest = {
                Data: {
                    accountCode: "40702810100000001234",
                    bankCode: "999999999",
                    counterpartyAccountNumber: "40817810100000005678",
                    counterpartyBankBic: "888888888",
                    counterpartyName: "ООО \"Контрагент\"",
                    paymentAmount: 100000,
                    paymentPurpose: "Оплата за товары",
                    paymentDate: "2024-01-15"
                }
            };

            const errorResponse = {
                Success: false,
                Error: {
                    Code: "FORBIDDEN",
                    Message: "Insufficient permissions to create payment",
                },
            };

            fetchMock.mockResolvedValue(
                createMockResponse(errorResponse, {status: 403, ok: false})
            );

            await payment.createPayment(ApiVersion.V10, mockRequest)
                .then(result => {
                        console.log("Hm... Is it ok?");
                        throw result
                    }
                ).catch(errorResponse => {
                        expect(errorResponse.status).toBe(403);
                        expect(errorResponse.error.Success).toBe(false);
                        expect(errorResponse.error.Error.Code).toBe("FORBIDDEN");
                    }
                )
        });

        it("should handle createPayment with budget payment fields", async () => {
            const mockRequest = {
                Data: {
                    accountCode: "40702810100000001234",
                    bankCode: "999999999",
                    counterpartyAccountNumber: "40817810100000005678",
                    counterpartyBankBic: "888888888",
                    counterpartyName: "Федеральная налоговая служба",
                    counterpartyINN: "7707329152",
                    payerKPP: "123456789",
                    paymentAmount: 50000,
                    paymentPurpose: "Налог на прибыль организаций",
                    paymentDate: "2024-01-15",
                    operationCode: "01",
                    budgetClassificationCode: "18210301000010000110"
                }
            };

            const mockResponse = {
                Success: true,
                Data: {
                    requestId: "payment-budget-123",
                    customerCode: "300000092",
                    status: "Sent",
                    paymentId: "pay-budget-789",
                    createdAt: "2024-01-15T10:30:00Z",
                },
            };

            fetchMock.mockResolvedValue(createMockResponse(mockResponse));

            const result = await payment.createPayment(ApiVersion.V10, mockRequest);

            const response = await result.json();
            expect(response.Success).toBe(true);
            expect(response.Data.requestId).toBe("payment-budget-123");
        });
    });

    describe("getPaymentStatus", () => {
        it("should get payment status successfully", async () => {
            const requestId = "payment-order-123";

            const mockResponse = {
                Success: true,
                Data: {
                    requestId: "payment-order-123",
                    status: "Processed",
                    paymentId: "pay-789",
                    paymentAmount: 100000,
                    counterpartyName: "ООО \"Контрагент\"",
                    processedAt: "2024-01-15T12:30:00Z",
                    bankReference: "REF123456789",
                },
            };

            fetchMock.mockResolvedValue(createMockResponse(mockResponse));

            const result = await payment.getPaymentStatus(ApiVersion.V10, requestId);

            expect(fetchMock).toHaveBeenCalledWith(
                `https://enter.tochka.com/uapi/payment/v1.0/status/${requestId}`,
                expect.objectContaining({
                    method: "GET",
                    headers: expect.objectContaining({
                        Authorization: "Bearer test-jwt-token",
                    }),
                })
            );

            const response = await result.json();
            expect(response.Success).toBe(true);
            expect(response.Data.requestId).toBe("payment-order-123");
            expect(response.Data.status).toBe("Processed");
        });

        it("should get payment status with pending status", async () => {
            const requestId = "payment-order-456";

            const mockResponse = {
                Success: true,
                Data: {
                    requestId: "payment-order-456",
                    status: "Processing",
                    paymentId: "pay-456",
                    paymentAmount: 75000,
                    counterpartyName: "ИП Иванов",
                    createdAt: "2024-01-15T11:00:00Z",
                },
            };

            fetchMock.mockResolvedValue(createMockResponse(mockResponse));

            const result = await payment.getPaymentStatus(ApiVersion.V10, requestId);

            const response = await result.json();
            expect(response.Data.status).toBe("Processing");
            expect(response.Data.paymentAmount).toBe(75000);
        });

        it("should get payment status with failed status", async () => {
            const requestId = "payment-order-789";

            const mockResponse = {
                Success: true,
                Data: {
                    requestId: "payment-order-789",
                    status: "Failed",
                    paymentId: "pay-789",
                    paymentAmount: 25000,
                    counterpartyName: "ООО \"Неверный контрагент\"",
                    errorCode: "INSUFFICIENT_FUNDS",
                    errorMessage: "Недостаточно средств на счете",
                    failedAt: "2024-01-15T13:00:00Z",
                },
            };

            fetchMock.mockResolvedValue(createMockResponse(mockResponse));

            const result = await payment.getPaymentStatus(ApiVersion.V10, requestId);

            const response = await result.json();
            expect(response.Data.status).toBe("Failed");
            expect(response.Data.errorCode).toBe("INSUFFICIENT_FUNDS");
        });

        it("should handle getPaymentStatus not found error (404)", async () => {
            const requestId = "non-existent-payment";

            const errorResponse = {
                Success: false,
                Error: {
                    Code: "NOT_FOUND",
                    Message: "Payment not found",
                },
            };

            fetchMock.mockResolvedValue(
                createMockResponse(errorResponse, {status: 404, ok: false})
            );

            await payment.getPaymentStatus(ApiVersion.V10, requestId)
                .then(result => {
                        console.log("Hm... Is it ok?");
                        throw result
                    }
                ).catch(errorResponse => {
                        expect(errorResponse.status).toBe(404);
                        expect(errorResponse.error.Success).toBe(false);
                        expect(errorResponse.error.Error.Code).toBe("NOT_FOUND");
                    }
                )
        });
    });

    describe("Error Handling - Common Scenarios", () => {
        it("should handle server error (500) for all payment methods", async () => {
            const errorResponse = {
                Success: false,
                Error: {
                    Code: "INTERNAL_SERVER_ERROR",
                    Message: "An internal error occurred",
                },
            };

            fetchMock.mockResolvedValue(
                createMockResponse(errorResponse, {status: 500, ok: false})
            );

            // Test createPaymentForSign with server error
            await payment.createPaymentForSign(ApiVersion.V10, {
                Data: {
                    accountCode: "40702810100000001234",
                    bankCode: "999999999",
                    counterpartyAccountNumber: "40817810100000005678",
                    counterpartyBankBic: "888888888",
                    counterpartyName: "ООО \"Контрагент\"",
                    paymentAmount: 100000,
                    paymentPurpose: "Оплата за товары",
                    paymentDate: "2024-01-15"
                }
            }).then(result => {
                    console.log("Hm... Is it ok?");
                    throw result
                }
            ).catch(errorResponse => {
                    expect(errorResponse.status).toBe(500);
                }
            )

            // Test getPaymentStatus with server error
            await payment.getPaymentStatus(ApiVersion.V10, "test-id")
                .then(result => {
                        console.log("Hm... Is it ok?");
                        throw result
                    }
                ).catch(errorResponse => {
                        expect(errorResponse.status).toBe(500);
                    }
                )

            // Test createPayment with server error
            await payment.createPayment(ApiVersion.V10, {
                Data: {
                    accountCode: "40702810100000001234",
                    bankCode: "999999999",
                    counterpartyAccountNumber: "40817810100000005678",
                    counterpartyBankBic: "888888888",
                    counterpartyName: "ООО \"Контрагент\"",
                    paymentAmount: 100000,
                    paymentPurpose: "Оплата за товары",
                    paymentDate: "2024-01-15"
                }
            }).then(result => {
                    console.log("Hm... Is it ok?");
                    throw result
                }
            ).catch(errorResponse => {
                    expect(errorResponse.status).toBe(500);
                }
            )
        });

        it("should handle network timeout for payment methods", async () => {
            fetchMock.mockRejectedValue(new Error("Network timeout"));

            await expect(payment.createPaymentForSign(ApiVersion.V10, {
                Data: {
                    accountCode: "40702810100000001234",
                    bankCode: "999999999",
                    counterpartyAccountNumber: "40817810100000005678",
                    counterpartyBankBic: "888888888",
                    counterpartyName: "ООО \"Контрагент\"",
                    paymentAmount: 100000,
                    paymentPurpose: "Оплата за товары",
                    paymentDate: "2024-01-15"
                }
            })).rejects.toThrow("Network timeout");

            await expect(payment.getPaymentStatus(ApiVersion.V10, "test-id"))
                .rejects.toThrow("Network timeout");
        });

        it("should handle rate limiting (429) for payment methods", async () => {
            const errorResponse = {
                Success: false,
                Error: {
                    Code: "RATE_LIMIT_EXCEEDED",
                    Message: "Too many requests",
                },
            };

            fetchMock.mockResolvedValue(
                createMockResponse(errorResponse, {status: 429, ok: false})
            );

            await payment.createPayment(ApiVersion.V10, {
                Data: {
                    accountCode: "40702810100000001234",
                    bankCode: "999999999",
                    counterpartyAccountNumber: "40817810100000005678",
                    counterpartyBankBic: "888888888",
                    counterpartyName: "ООО \"Контрагент\"",
                    paymentAmount: 100000,
                    paymentPurpose: "Оплата за товары",
                    paymentDate: "2024-01-15"
                }
            }).then(result => {
                    console.log("Hm... Is it ok?");
                    throw result
                }
            ).catch(errorResponse => {
                    expect(errorResponse.status).toBe(429);
                    expect(errorResponse.error.Error.Code).toBe("RATE_LIMIT_EXCEEDED");
                }
            )
        });
    });
});