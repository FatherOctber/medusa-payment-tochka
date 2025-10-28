import {
    TochkaBankSDK,
    TochkaBankSDKOptions,
    TochkaBankInvoice,
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

/**
 * Create a mock file response
 */
function createMockFileResponse(
    fileContent: Blob,
    contentType: string = "application/pdf",
    filename: string = "document.pdf"
): Response {
    return {
        status: 200,
        ok: true,
        headers: new Headers({
            "content-type": contentType,
            "content-disposition": `attachment; filename="${filename}"`,
        }),
        blob: async () => fileContent,
        arrayBuffer: async () => new ArrayBuffer(0),
        json: async () => {
            throw new Error("Not JSON");
        },
        text: async () => "File content",
        clone: function () {
            return this;
        },
        body: null,
        bodyUsed: false,
        redirected: false,
        statusText: "OK",
        type: "basic" as ResponseType,
        url: "",
        formData: async () => new FormData(),
        bytes: async () => new Uint8Array(),
    } as Response;
}

describe("TochkaBankSDK - invoice", () => {
    let invoice: TochkaBankInvoice;
    let sdk: TochkaBankSDK;
    let fetchMock: jest.Mock;
    let originalFetch: typeof global.fetch;

    beforeEach(() => {
        originalFetch = global.fetch;

        sdk = new TochkaBankSDK({
            jwtToken: "test-jwt-token",
            clientId: "300000092",
        });

        invoice = sdk.Invoice;
        fetchMock = jest.fn();
        global.fetch = fetchMock;
    });

    afterEach(() => {
        global.fetch = originalFetch;
    });

    describe("createInvoice", () => {
        it("should create invoice successfully", async () => {
            const mockRequest = {
                Data: {
                    accountId: "acc-123",
                    customerCode: "300000092",
                    SecondSide: {
                        taxCode: "1234567890",
                        type: "LEGAL_ENTITY" as any,
                        secondSideName: "Test Customer",
                        kpp: "123456789",
                        legalAddress: "Test Address"
                    },
                    Content: {
                        Invoice: {
                            Positions: [{
                                positionName: "Test item",
                                quantity: 1,
                                price: 100000,
                                unitCode: "PCE" as any,
                                ndsKind: "NDS_20" as any,
                                totalAmount: 100000,
                                totalNds: 20000
                            }],
                            totalAmount: 100000,
                            number: "INV-001"
                        }
                    }
                }
            };

            const mockResponse = {
                Success: true,
                Data: {
                    documentId: "invoice-123",
                    customerCode: "300000092",
                    documentUrl: "https://example.com/invoice/123",
                    createdAt: "2024-01-15T10:30:00Z",
                },
            };

            fetchMock.mockResolvedValue(createMockResponse(mockResponse));

            const result = await invoice.createInvoice(ApiVersion.V10, mockRequest);

            expect(fetchMock).toHaveBeenCalledWith(
                "https://enter.tochka.com/uapi/invoice/v1.0/bills",
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
            expect(response.Data.documentId).toBe("invoice-123");
        });

        it("should handle createInvoice validation error (400)", async () => {
            const mockRequest = {
                Data: {
                    accountId: "",
                    customerCode: "",
                    SecondSide: {
                        taxCode: "",
                        type: "LEGAL_ENTITY" as any,
                        secondSideName: "",
                        kpp: "",
                        legalAddress: ""
                    },
                    Content: {
                        Invoice: {
                            Positions: [{
                                positionName: "",
                                quantity: 0,
                                price: -100,
                                unitCode: "PCE" as any,
                                ndsKind: "NDS_20" as any,
                                totalAmount: -100,
                                totalNds: 0
                            }],
                            totalAmount: -100,
                            number: ""
                        }
                    }
                }
            };

            const errorResponse = {
                Success: false,
                Error: {
                    Code: "VALIDATION_ERROR",
                    Message: "Invalid request data",
                    Details: ["customerCode is required", "amount must be positive"],
                },
            };

            fetchMock.mockResolvedValue(
                createMockResponse(errorResponse, {status: 400, ok: false})
            );

            await invoice.createInvoice(ApiVersion.V10, mockRequest)
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

        it("should handle createInvoice unauthorized error (401)", async () => {
            const mockRequest = {
                Data: {
                    accountId: "acc-123",
                    customerCode: "300000092",
                    SecondSide: {
                        taxCode: "1234567890",
                        type: "LEGAL_ENTITY" as any,
                        secondSideName: "Test Customer",
                        kpp: "123456789",
                        legalAddress: "Test Address"
                    },
                    Content: {
                        Invoice: {
                            Positions: [{
                                positionName: "Test item",
                                quantity: 1,
                                price: 100000,
                                unitCode: "PCE" as any,
                                ndsKind: "NDS_20" as any,
                                totalAmount: 100000,
                                totalNds: 20000
                            }],
                            totalAmount: 100000,
                            number: "INV-002"
                        }
                    }
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

            await invoice.createInvoice(ApiVersion.V10, mockRequest)
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

        it("should handle createInvoice with minimal required fields", async () => {
            const mockRequest = {
                Data: {
                    accountId: "acc-123",
                    customerCode: "300000092",
                    SecondSide: {
                        taxCode: "1234567890",
                        type: "LEGAL_ENTITY" as any,
                        secondSideName: "Test Customer",
                        kpp: "123456789",
                        legalAddress: "Test Address"
                    },
                    Content: {
                        Invoice: {
                            Positions: [{
                                positionName: "Minimal item",
                                quantity: 1,
                                price: 50000,
                                unitCode: "PCE" as any,
                                ndsKind: "NDS_20" as any,
                                totalAmount: 50000,
                                totalNds: 10000
                            }],
                            totalAmount: 50000,
                            number: "INV-MIN"
                        }
                    }
                }
            };

            const mockResponse = {
                Success: true,
                Data: {
                    documentId: "invoice-minimal-123",
                    customerCode: "300000092",
                    documentUrl: "https://example.com/invoice/minimal-123",
                    createdAt: "2024-01-15T10:30:00Z",
                },
            };

            fetchMock.mockResolvedValue(createMockResponse(mockResponse));

            const result = await invoice.createInvoice(ApiVersion.V10, mockRequest);

            const response = await result.json();
            expect(response.Success).toBe(true);
            expect(response.Data.documentId).toBe("invoice-minimal-123");
        });
    });

    describe("deleteInvoice", () => {
        it("should delete invoice successfully", async () => {
            const customerCode = "300000092";
            const documentId = "invoice-123";

            const mockResponse = {
                Success: true,
                Data: true,
            };

            fetchMock.mockResolvedValue(createMockResponse(mockResponse));

            const result = await invoice.deleteInvoice(ApiVersion.V10, customerCode, documentId);

            expect(fetchMock).toHaveBeenCalledWith(
                `https://enter.tochka.com/uapi/invoice/v1.0/bills/${customerCode}/${documentId}`,
                expect.objectContaining({
                    method: "DELETE",
                    headers: expect.objectContaining({
                        Authorization: "Bearer test-jwt-token",
                    }),
                })
            );

            const response = await result.json();
            expect(response.Success).toBe(true);
            expect(response.Data).toBe(true);
        });

        it("should handle deleteInvoice not found error (404)", async () => {
            const customerCode = "300000092";
            const documentId = "non-existent-invoice";

            const errorResponse = {
                Success: false,
                Error: {
                    Code: "NOT_FOUND",
                    Message: "Invoice not found",
                },
            };

            fetchMock.mockResolvedValue(
                createMockResponse(errorResponse, {status: 404, ok: false})
            );

            await invoice.deleteInvoice(ApiVersion.V10, customerCode, documentId)
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

        it("should handle deleteInvoice forbidden error (403)", async () => {
            const customerCode = "300000092";
            const documentId = "restricted-invoice";

            const errorResponse = {
                Success: false,
                Error: {
                    Code: "FORBIDDEN",
                    Message: "Access denied to this invoice",
                },
            };

            fetchMock.mockResolvedValue(
                createMockResponse(errorResponse, {status: 403, ok: false})
            );

            await invoice.deleteInvoice(ApiVersion.V10, customerCode, documentId)
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
    });

    describe("sendInvoiceToEmail", () => {
        it("should send invoice to email successfully", async () => {
            const customerCode = "300000092";
            const documentId = "invoice-123";
            const emailRequest = {
                Data: {
                    email: "customer@example.com",
                    subject: "Your Invoice",
                    message: "Please find your invoice attached.",
                }
            };

            const mockResponse = {
                Success: true,
                Data: true,
            };

            fetchMock.mockResolvedValue(createMockResponse(mockResponse));

            const result = await invoice.sendInvoiceToEmail(ApiVersion.V10, customerCode, documentId, emailRequest);

            expect(fetchMock).toHaveBeenCalledWith(
                `https://enter.tochka.com/uapi/invoice/v1.0/bills/${customerCode}/${documentId}/email`,
                expect.objectContaining({
                    method: "POST",
                    headers: expect.objectContaining({
                        Authorization: "Bearer test-jwt-token",
                        "Content-Type": "application/json",
                    }),
                    body: JSON.stringify(emailRequest),
                })
            );

            const response = await result.json();
            expect(response.Success).toBe(true);
            expect(response.Data).toBe(true);
        });

        it("should handle sendInvoiceToEmail with invalid email (400)", async () => {
            const customerCode = "300000092";
            const documentId = "invoice-123";
            const emailRequest = {
                Data: {
                    email: "invalid-email",
                    subject: "",
                    message: "",
                }
            };

            const errorResponse = {
                Success: false,
                Error: {
                    Code: "VALIDATION_ERROR",
                    Message: "Invalid email format",
                },
            };

            fetchMock.mockResolvedValue(
                createMockResponse(errorResponse, {status: 400, ok: false})
            );

            await invoice.sendInvoiceToEmail(ApiVersion.V10, customerCode, documentId, emailRequest)
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

        it("should handle sendInvoiceToEmail with minimal data", async () => {
            const customerCode = "300000092";
            const documentId = "invoice-123";
            const emailRequest = {
                Data: {
                    email: "customer@example.com",
                }
            };

            const mockResponse = {
                Success: true,
                Data: true,
            };

            fetchMock.mockResolvedValue(createMockResponse(mockResponse));

            const result = await invoice.sendInvoiceToEmail(ApiVersion.V10, customerCode, documentId, emailRequest);

            const response = await result.json();
            expect(response.Success).toBe(true);
        });
    });

    describe("getInvoice", () => {
        it("should get invoice file successfully", async () => {
            const customerCode = "300000092";
            const documentId = "invoice-123";

            const mockFileContent = new Blob(["PDF content"], {type: "application/pdf"});

            fetchMock.mockResolvedValue(
                createMockFileResponse(mockFileContent, "application/pdf", "invoice-123.pdf")
            );

            const result = await invoice.getInvoice(ApiVersion.V10, customerCode, documentId);

            expect(fetchMock).toHaveBeenCalledWith(
                `https://enter.tochka.com/uapi/invoice/v1.0/bills/${customerCode}/${documentId}/file`,
                expect.objectContaining({
                    method: "GET",
                    headers: expect.objectContaining({
                        Authorization: "Bearer test-jwt-token",
                    }),
                })
            );

            expect(result.status).toBe(200);
            expect(result.headers.get("content-type")).toBe("application/pdf");
        });

        it("should handle getInvoice not found error (404)", async () => {
            const customerCode = "300000092";
            const documentId = "non-existent-invoice";

            const errorResponse = {
                Success: false,
                Error: {
                    Code: "NOT_FOUND",
                    Message: "Invoice file not found",
                },
            };

            fetchMock.mockResolvedValue(
                createMockResponse(errorResponse, {status: 404, ok: false})
            );


            await invoice.getInvoice(ApiVersion.V10, customerCode, documentId)
                .then(result => {
                        console.log("Hm... Is it ok?");
                        throw result
                    }
                ).catch(errorResponse => {
                        expect(errorResponse.status).toBe(404);
                    }
                )
        });

        it("should handle getInvoice with different file formats", async () => {
            const customerCode = "300000092";
            const documentId = "invoice-123";

            const mockFileContent = new Blob(["Excel content"], {type: "application/vnd.ms-excel"});

            fetchMock.mockResolvedValue(
                createMockFileResponse(mockFileContent, "application/vnd.ms-excel", "invoice-123.xlsx")
            );

            const result = await invoice.getInvoice(ApiVersion.V10, customerCode, documentId);

            expect(result.status).toBe(200);
            expect(result.headers.get("content-type")).toBe("application/vnd.ms-excel");
        });
    });

    describe("getInvoicePaymentStatus", () => {
        it("should get invoice payment status successfully", async () => {
            const customerCode = "300000092";
            const documentId = "invoice-123";

            const mockResponse = {
                Success: true,
                Data: {
                    documentId: "invoice-123",
                    paymentStatus: "Paid",
                    paidAmount: 100000,
                    paidDate: "2024-01-15T15:30:00Z",
                    remainingAmount: 0,
                },
            };

            fetchMock.mockResolvedValue(createMockResponse(mockResponse));

            const result = await invoice.getInvoicePaymentStatus(ApiVersion.V10, customerCode, documentId);

            expect(fetchMock).toHaveBeenCalledWith(
                `https://enter.tochka.com/uapi/invoice/v1.0/bills/${customerCode}/${documentId}/payment-status`,
                expect.objectContaining({
                    method: "GET",
                    headers: expect.objectContaining({
                        Authorization: "Bearer test-jwt-token",
                    }),
                })
            );

            const response = await result.json();
            expect(response.Success).toBe(true);
            expect(response.Data.paymentStatus).toBe("Paid");
            expect(response.Data.paidAmount).toBe(100000);
        });

        it("should get unpaid invoice status", async () => {
            const customerCode = "300000092";
            const documentId = "invoice-456";

            const mockResponse = {
                Success: true,
                Data: {
                    documentId: "invoice-456",
                    paymentStatus: "Pending",
                    paidAmount: 0,
                    paidDate: null,
                    remainingAmount: 50000,
                },
            };

            fetchMock.mockResolvedValue(createMockResponse(mockResponse));

            const result = await invoice.getInvoicePaymentStatus(ApiVersion.V10, customerCode, documentId);

            const response = await result.json();
            expect(response.Data.paymentStatus).toBe("Pending");
            expect(response.Data.remainingAmount).toBe(50000);
        });

        it("should get partially paid invoice status", async () => {
            const customerCode = "300000092";
            const documentId = "invoice-789";

            const mockResponse = {
                Success: true,
                Data: {
                    documentId: "invoice-789",
                    paymentStatus: "PartiallyPaid",
                    paidAmount: 30000,
                    paidDate: "2024-01-15T12:00:00Z",
                    remainingAmount: 20000,
                },
            };

            fetchMock.mockResolvedValue(createMockResponse(mockResponse));

            const result = await invoice.getInvoicePaymentStatus(ApiVersion.V10, customerCode, documentId);

            const response = await result.json();
            expect(response.Data.paymentStatus).toBe("PartiallyPaid");
            expect(response.Data.paidAmount).toBe(30000);
            expect(response.Data.remainingAmount).toBe(20000);
        });
    });

    describe("createClosingDocument", () => {
        it("should create closing document successfully", async () => {
            const mockRequest = {
                Data: {
                    accountId: "acc-123",
                    customerCode: "300000092",
                    SecondSide: {
                        taxCode: "1234567890",
                        type: "LEGAL_ENTITY" as any,
                        secondSideName: "Test Customer",
                        kpp: "123456789",
                        legalAddress: "Test Address"
                    },
                    Content: {
                        Act: {
                            Positions: [{
                                positionName: "Service item",
                                quantity: 1,
                                price: 100000,
                                unitCode: "PCE" as any,
                                ndsKind: "NDS_20" as any,
                                totalAmount: 100000,
                                totalNds: 20000
                            }],
                            totalAmount: 100000,
                            number: "ACT-001"
                        }
                    } as any
                }
            };

            const mockResponse = {
                Success: true,
                Data: {
                    documentId: "closing-doc-123",
                    customerCode: "300000092",
                    documentUrl: "https://example.com/closing-doc/123",
                    createdAt: "2024-01-15T16:30:00Z",
                },
            };

            fetchMock.mockResolvedValue(createMockResponse(mockResponse));

            const result = await invoice.createClosingDocument(ApiVersion.V10, mockRequest);

            expect(fetchMock).toHaveBeenCalledWith(
                "https://enter.tochka.com/uapi/invoice/v1.0/closing-documents",
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
            expect(response.Data.documentId).toBe("closing-doc-123");
        });

        it("should handle createClosingDocument validation error", async () => {
            const mockRequest = {
                Data: {
                    accountId: "",
                    customerCode: "",
                    SecondSide: {
                        taxCode: "",
                        type: "LEGAL_ENTITY" as any,
                        secondSideName: "",
                        kpp: "",
                        legalAddress: ""
                    },
                    Content: {
                        Act: {
                            Positions: [],
                            totalAmount: 0,
                            number: ""
                        }
                    } as any
                }
            };

            const errorResponse = {
                Success: false,
                Error: {
                    Code: "VALIDATION_ERROR",
                    Message: "Invalid document type",
                },
            };

            fetchMock.mockResolvedValue(
                createMockResponse(errorResponse, {status: 400, ok: false})
            );

            await invoice.createClosingDocument(ApiVersion.V10, mockRequest)
                .then(result => {
                        console.log("Hm... Is it ok?");
                        throw result
                    }
                ).catch(errorResponse => {
                        expect(errorResponse.status).toBe(400);
                        expect(errorResponse.error.Error.Code).toBe("VALIDATION_ERROR");

                    }
                )
        });
    });

    describe("deleteClosingDocuments", () => {
        it("should delete closing document successfully", async () => {
            const customerCode = "300000092";
            const documentId = "closing-doc-123";

            const mockResponse = {
                Success: true,
                Data: true,
            };

            fetchMock.mockResolvedValue(createMockResponse(mockResponse));

            const result = await invoice.deleteClosingDocuments(ApiVersion.V10, customerCode, documentId);

            expect(fetchMock).toHaveBeenCalledWith(
                `https://enter.tochka.com/uapi/invoice/v1.0/closing-documents/${customerCode}/${documentId}`,
                expect.objectContaining({
                    method: "DELETE",
                    headers: expect.objectContaining({
                        Authorization: "Bearer test-jwt-token",
                    }),
                })
            );

            const response = await result.json();
            expect(response.Success).toBe(true);
            expect(response.Data).toBe(true);
        });

        it("should handle deleteClosingDocuments not found error", async () => {
            const customerCode = "300000092";
            const documentId = "non-existent-doc";

            const errorResponse = {
                Success: false,
                Error: {
                    Code: "NOT_FOUND",
                    Message: "Closing document not found",
                },
            };

            fetchMock.mockResolvedValue(
                createMockResponse(errorResponse, {status: 404, ok: false})
            );

            await invoice.deleteClosingDocuments(ApiVersion.V10, customerCode, documentId)
                .then(result => {
                        console.log("Hm... Is it ok?");
                        throw result
                    }
                ).catch(errorResponse => {
                        expect(errorResponse.status).toBe(404);
                        expect(errorResponse.error.Error.Code).toBe("NOT_FOUND");

                    }
                )
        });
    });

    describe("sendClosingDocumentsToEmail", () => {
        it("should send closing document to email successfully", async () => {
            const customerCode = "300000092";
            const documentId = "closing-doc-123";
            const emailRequest = {
                Data: {
                    email: "customer@example.com",
                    subject: "Your Closing Document",
                    message: "Please find your closing document attached.",
                }
            };

            const mockResponse = {
                Success: true,
                Data: true,
            };

            fetchMock.mockResolvedValue(createMockResponse(mockResponse));

            const result = await invoice.sendClosingDocumentsToEmail(ApiVersion.V10, customerCode, documentId, emailRequest);

            expect(fetchMock).toHaveBeenCalledWith(
                `https://enter.tochka.com/uapi/invoice/v1.0/closing-documents/${customerCode}/${documentId}/email`,
                expect.objectContaining({
                    method: "POST",
                    headers: expect.objectContaining({
                        Authorization: "Bearer test-jwt-token",
                        "Content-Type": "application/json",
                    }),
                    body: JSON.stringify(emailRequest),
                })
            );

            const response = await result.json();
            expect(response.Success).toBe(true);
            expect(response.Data).toBe(true);
        });

        it("should handle sendClosingDocumentsToEmail validation error", async () => {
            const customerCode = "300000092";
            const documentId = "closing-doc-123";
            const emailRequest = {
                Data: {
                    email: "invalid-email-format",
                }
            };

            const errorResponse = {
                Success: false,
                Error: {
                    Code: "VALIDATION_ERROR",
                    Message: "Invalid email format",
                },
            };

            fetchMock.mockResolvedValue(
                createMockResponse(errorResponse, {status: 400, ok: false})
            );

            await invoice.sendClosingDocumentsToEmail(ApiVersion.V10, customerCode, documentId, emailRequest)
                .then(result => {
                        console.log("Hm... Is it ok?");
                        throw result
                    }
                ).catch(errorResponse => {
                        expect(errorResponse.status).toBe(400);
                        expect(errorResponse.error.Error.Code).toBe("VALIDATION_ERROR");

                    }
                )
        });
    });

    describe("getClosingDocument", () => {
        it("should get closing document file successfully", async () => {
            const customerCode = "300000092";
            const documentId = "closing-doc-123";

            const mockFileContent = new Blob(["PDF content"], {type: "application/pdf"});

            fetchMock.mockResolvedValue(
                createMockFileResponse(mockFileContent, "application/pdf", "closing-doc-123.pdf")
            );

            const result = await invoice.getClosingDocument(ApiVersion.V10, customerCode, documentId);

            expect(fetchMock).toHaveBeenCalledWith(
                `https://enter.tochka.com/uapi/invoice/v1.0/closing-documents/${customerCode}/${documentId}/file`,
                expect.objectContaining({
                    method: "GET",
                    headers: expect.objectContaining({
                        Authorization: "Bearer test-jwt-token",
                    }),
                })
            );

            expect(result.status).toBe(200);
            expect(result.headers.get("content-type")).toBe("application/pdf");
        });

        it("should handle getClosingDocument not found error", async () => {
            const customerCode = "300000092";
            const documentId = "non-existent-doc";

            const errorResponse = {
                Success: false,
                Error: {
                    Code: "NOT_FOUND",
                    Message: "Closing document file not found",
                },
            };

            fetchMock.mockResolvedValue(
                createMockResponse(errorResponse, {status: 404, ok: false})
            );

            await invoice.getClosingDocument(ApiVersion.V10, customerCode, documentId)
                .then(result => {
                        console.log("Hm... Is it ok?");
                        throw result
                    }
                ).catch(errorResponse => {
                        expect(errorResponse.status).toBe(404);

                    }
                )
        });
    });

    describe("Error Handling - Common Scenarios", () => {
        it("should handle server error (500) for all invoice methods", async () => {
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

            // Test createInvoice with server error
            await invoice.createInvoice(ApiVersion.V10, {
                Data: {
                    accountId: "acc-123",
                    customerCode: "300000092",
                    SecondSide: {
                        taxCode: "1234567890",
                        type: "LEGAL_ENTITY" as any,
                        secondSideName: "Test Customer",
                        kpp: "123456789",
                        legalAddress: "Test Address"
                    },
                    Content: {
                        Invoice: {
                            Positions: [{
                                positionName: "Test item",
                                quantity: 1,
                                price: 100000,
                                unitCode: "PCE" as any,
                                ndsKind: "NDS_20" as any,
                                totalAmount: 100000,
                                totalNds: 20000
                            }],
                            totalAmount: 100000,
                            number: "INV-500"
                        }
                    }
                }
            }).then(result => {
                    console.log("Hm... Is it ok?");
                    throw result
                }
            ).catch(errorResponse => {
                    expect(errorResponse.status).toBe(500);
                }
            )

            // Test getInvoicePaymentStatus with server error
            await invoice.getInvoicePaymentStatus(ApiVersion.V10, "300000092", "test-id")
                .then(result => {
                        console.log("Hm... Is it ok?");
                        throw result
                    }
                ).catch(errorResponse => {
                        expect(errorResponse.status).toBe(500);
                    }
                )

            // Test deleteInvoice with server error
            await invoice.deleteInvoice(ApiVersion.V10, "300000092", "test-id")
                .then(result => {
                        console.log("Hm... Is it ok?");
                        throw result
                    }
                ).catch(errorResponse => {
                        expect(errorResponse.status).toBe(500);
                    }
                )
        });

        it("should handle network timeout for invoice methods", async () => {
            fetchMock.mockRejectedValue(new Error("Network timeout"));

            await expect(invoice.createInvoice(ApiVersion.V10, {
                Data: {
                    accountId: "acc-123",
                    customerCode: "300000092",
                    SecondSide: {
                        taxCode: "1234567890",
                        type: "LEGAL_ENTITY" as any,
                        secondSideName: "Test Customer",
                        kpp: "123456789",
                        legalAddress: "Test Address"
                    },
                    Content: {
                        Invoice: {
                            Positions: [{
                                positionName: "Test item",
                                quantity: 1,
                                price: 100000,
                                unitCode: "PCE" as any,
                                ndsKind: "NDS_20" as any,
                                totalAmount: 100000,
                                totalNds: 20000
                            }],
                            totalAmount: 100000,
                            number: "INV-TIMEOUT"
                        }
                    }
                }
            })).rejects.toThrow("Network timeout");

            await expect(invoice.getInvoicePaymentStatus(ApiVersion.V10, "300000092", "test-id"))
                .rejects.toThrow("Network timeout");
        });

        it("should handle rate limiting (429) for invoice methods", async () => {
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

            await invoice.createInvoice(ApiVersion.V10, {
                Data: {
                    accountId: "acc-123",
                    customerCode: "300000092",
                    SecondSide: {
                        taxCode: "1234567890",
                        type: "LEGAL_ENTITY" as any,
                        secondSideName: "Test Customer",
                        kpp: "123456789",
                        legalAddress: "Test Address"
                    },
                    Content: {
                        Invoice: {
                            Positions: [{
                                positionName: "Test item",
                                quantity: 1,
                                price: 100000,
                                unitCode: "PCE" as any,
                                ndsKind: "NDS_20" as any,
                                totalAmount: 100000,
                                totalNds: 20000
                            }],
                            totalAmount: 100000,
                            number: "INV-RATE"
                        }
                    }
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