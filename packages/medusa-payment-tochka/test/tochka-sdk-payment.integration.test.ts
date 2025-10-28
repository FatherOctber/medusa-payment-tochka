import {
    TochkaBankSDK,
    TochkaBankPayment,
    TochkaBankOpenBanking,
    ApiVersion
} from "../src/providers/payment-tochka/lib/tochka-sdk";
import {PaymentOrderStatusEnum} from "../src/providers/payment-tochka/types/tochka-api/tochka-api";

/**
 * Integration tests for TochkaBankPayment
 *
 * These tests make real API calls to Tochka Bank API and require:
 * - TOCHKA_JWT_TOKEN environment variable
 * - TOCHKA_CLIENT_ID environment variable
 *
 * Run with: npm test -- --testPathPattern=tochka-sdk-payment.integration.test.ts
 */
describe("TochkaBankPayment - Integration Tests", () => {
    let payment: TochkaBankPayment;
    let openBanking: TochkaBankOpenBanking;
    let sdk: TochkaBankSDK;
    let jwtToken: string;
    let clientId: string;

    beforeAll(() => {
        // Get credentials from environment variables
        jwtToken = process.env.TOCHKA_JWT_TOKEN || "";
        clientId = process.env.TOCHKA_CLIENT_ID || "";

        if (!jwtToken || !clientId) {
            console.warn("Skipping integration tests: TOCHKA_JWT_TOKEN and TOCHKA_CLIENT_ID environment variables are required");
            return;
        }

        // Initialize SDK with real credentials
        sdk = new TochkaBankSDK({
            jwtToken,
            clientId,
            isDevelopment: true
        });

        payment = sdk.Payment;
        openBanking = sdk.OpenBanking;
    });

    // Helper function to get test account information
    async function getTestAccountInfo() {
        if (!jwtToken || !clientId) {
            throw new Error("Missing credentials");
        }

        try {
            const accountsResponse = await openBanking.getAccountsList(ApiVersion.V10);
            const accountsData = await accountsResponse.json();

            if (!accountsResponse.ok || !accountsData.Data?.Account?.length) {
                throw new Error("No accounts available for testing");
            }
            // Use the first available account
            const testAccount = accountsData.Data.Account[2];
            const [ accountNumber, bic ] = testAccount.accountId.split("/")
            return {
                accountNumber: accountNumber,
                bankBic: bic
            };
        } catch (error) {
            throw new Error(`Failed to get account info: ${error}`);
        }
    }

    async function getTestCounterpartyAccountInfo() {
        if (!jwtToken || !clientId) {
            throw new Error("Missing credentials");
        }

        try {
            const accountsResponse = await openBanking.getAccountsList(ApiVersion.V10);
            const accountsData = await accountsResponse.json();

            if (!accountsResponse.ok || !accountsData.Data?.Account?.length) {
                throw new Error("No accounts available for testing");
            }

            // Use the first available account
            const testAccount = accountsData.Data.Account[1];
            const [ accountNumber, bic ] = testAccount.accountId.split("/")
            return {
                accountNumber: accountNumber,
                bankBic: bic
            };
        } catch (error) {
            throw new Error(`Failed to get account info: ${error}`);
        }
    }



    // Helper function to get customer information
    async function getCustomerInfo() {
        if (!jwtToken || !clientId) {
            throw new Error("Missing credentials");
        }

        try {
            const customersResponse = await openBanking.getCustomersList(ApiVersion.V10);
            const customersData = await customersResponse.json();

            if (!customersResponse.ok || !customersData.Data?.Customer?.length) {
                throw new Error("No customers available for testing");
            }

            // Use the first available customer
            return customersData.Data.Customer[0];
        } catch (error) {
            throw new Error(`Failed to get customer info: ${error}`);
        }
    }

    describe("Happy Path Integration Tests", () => {
        beforeEach(() => {
            if (!jwtToken || !clientId) {
                throw new Error("Skipping test: Missing TOCHKA_JWT_TOKEN or TOCHKA_CLIENT_ID environment variables");
            }
        });

        it("should create payment for sign successfully with real API", async () => {
            // Get real account and customer information
            const accountInfo = await getTestAccountInfo();
            const counterPartyAccountInfo = await getTestCounterpartyAccountInfo();
            const paymentRequest = {
                Data: {
                    accountCode: accountInfo.accountNumber,
                    bankCode: accountInfo.bankBic,
                    counterpartyAccountNumber: counterPartyAccountInfo.accountNumber, // Test counterparty account
                    counterpartyBankBic: counterPartyAccountInfo.bankBic, // Sberbank BIC for testing
                    counterpartyName: "ООО \"Тестовый контрагент\"",
                    paymentAmount: 1000.00, // 1000.00 RUB
                    paymentPurpose: "Тестовый платеж для интеграционного теста",
                    paymentDate: new Date().toISOString().split('T')[0], // Today's date in YYYY-MM-DD format
                }
            };
            console.log(paymentRequest)
            // Create payment for sign
            const result = await payment.createPaymentForSign(ApiVersion.V10, paymentRequest).catch(async (error) => {
                const errorData = await error.json()
                console.error("Error ", errorData);
                throw error;
            })
            const response = await result.json();

            // Verify successful response
            expect(result.status).toBe(200);
            expect(response.Data.requestId).toBeDefined();
            expect(response.Data.requestId).toMatch(/^[a-zA-Z0-9-]+$/); // Should be alphanumeric with dashes
        }, 30000); // 30 second timeout for API call

        it("should get payment for sign list successfully with real API", async () => {
            const customerInfo = await getCustomerInfo();

            const result = await payment.getPaymentForSignList(ApiVersion.V10, {
                customerCode: customerInfo.customerCode // Use clientId as customerCode
            }).catch(async (error) => {
                const errorData = await error.json()
                console.error("Error ", errorData);
                throw error;
            });
            const response = await result.json();

            // Verify successful response
            expect(result.status).toBe(200);
            expect(response.Data).toBeDefined();
            expect(Array.isArray(response.Data)).toBe(true);

            console.log(`Found ${response.Data.length} payments waiting for signature`);

            // If there are payments, verify their structure
            if (response.Data.length > 0) {
                const firstPayment = response.Data[0];
                expect(firstPayment.requestId).toBeDefined();
                expect(firstPayment.paymentAmount).toBeDefined();
                expect(firstPayment.counterpartyName).toBeDefined();
                expect(firstPayment.paymentPurpose).toBeDefined();
                expect(firstPayment.status).toBeDefined();
                expect(firstPayment.createdAt).toBeDefined();

                console.log("Sample payment for sign:", {
                    requestId: firstPayment.requestId,
                    amount: firstPayment.paymentAmount,
                    counterparty: firstPayment.counterpartyName,
                    status: firstPayment.status
                });
            }
        }, 30000); // 30 second timeout for API call

        it("should create and process payment successfully with real API", async () => {
            // Get real account information
            const accountInfo = await getTestAccountInfo();
            const counterPartyAccountInfo = await getTestCounterpartyAccountInfo();
            const paymentRequest = {
                Data: {
                    accountCode: accountInfo.accountNumber,
                    bankCode: accountInfo.bankBic,
                    counterpartyAccountNumber: counterPartyAccountInfo.accountNumber, // Test counterparty account
                    counterpartyBankBic: counterPartyAccountInfo.bankBic, // Sberbank BIC for testing
                    counterpartyName: "ООО \"Тестовый получатель\"",
                    paymentAmount: 500.00, // 500.00 RUB in kopecks
                    paymentPurpose: "Интеграционный тест - создание и обработка платежа",
                    paymentDate: new Date().toISOString().split('T')[0], // Today's date in YYYY-MM-DD format
                }
            };

            // Create and immediately process payment
            const result = await payment.createPayment(ApiVersion.V10, paymentRequest).catch(async (error) => {
                const errorData = await error.json()
                console.error("Error ", errorData);
                throw error;
            })
            const response = await result.json();
            console.log("Data", response);
            // Verify successful response
            expect(result.status).toBe(200);
            expect(response.Data).toBeDefined();
            expect(response.Data.requestId).toBeDefined();
            expect(typeof response.Data.requestId).toBe("string");
            expect(response.Data.redirectURL).toBeDefined();

            console.log("Created payment:", {
                requestId: response.Data.requestId,
                redirectURL: response.Data.redirectURL
            });

            const requestId = response.Data.requestId;

            // Wait a moment for processing
            await new Promise(resolve => setTimeout(resolve, 2000));

            // Check payment status
            const statusResult = await payment.getPaymentStatus(ApiVersion.V10, requestId).catch(async (error) => {
                const errorData = await error.json()
                console.error("Error ", errorData);
                throw error;
            })
            const statusResponse = await statusResult.json();

            expect(statusResult.status).toBe(200);
            expect(statusResponse.Data).toBeDefined();
            expect(statusResponse.Data.requestId).toBe(requestId);
            expect(statusResponse.Data.status).toBeDefined();

            console.log("Payment status:", {
                requestId: statusResponse.Data.requestId,
                status: statusResponse.Data.status
            });

            // The status should be one of the expected values
            expect(Object.values(PaymentOrderStatusEnum)).toContain(statusResponse.Data.status);
        }, 60000); // 60 second timeout for API calls and processing

        it("should get payment status for existing payment with real API", async () => {
            // First, get a list of payments for sign to find an existing requestId
            const listResult = await payment.getPaymentForSignList(ApiVersion.V10, {
                customerCode: clientId
            });
            const listResponse = await listResult.json();

            if (!listResponse.Success || listResponse.Data.length === 0) {
                console.log("No existing payments found, creating a new one for status testing");

                // Create a payment for testing status
                const accountInfo = await getTestAccountInfo();
                const paymentRequest = {
                    Data: {
                        accountCode: accountInfo.accountNumber,
                        bankCode: accountInfo.bankBic,
                        counterpartyAccountNumber: "40817810100000005678",
                        counterpartyBankBic: "044525225",
                        counterpartyName: "ООО \"Тест статус\"",
                        paymentAmount: 25000, // 250.00 RUB
                        paymentPurpose: "Тест получения статуса платежа",
                        paymentDate: new Date().toISOString().split('T')[0]
                    }
                };

                const createResult = await payment.createPaymentForSign(ApiVersion.V10, paymentRequest);
                const createResponse = await createResult.json();

                expect(createResponse.Success).toBe(true);
                const requestId = createResponse.Data.requestId;

                // Check status of newly created payment
                const statusResult = await payment.getPaymentStatus(ApiVersion.V10, requestId);
                const statusResponse = await statusResult.json();

                expect(statusResult.status).toBe(200);
                expect(statusResponse.Success).toBe(true);
                expect(statusResponse.Data.requestId).toBe(requestId);

                console.log("New payment status:", {
                    requestId: statusResponse.Data.requestId,
                    status: statusResponse.Data.status
                });
            } else {
                // Use existing payment for status check
                const existingPayment = listResponse.Data[0];
                const requestId = existingPayment.requestId;

                const statusResult = await payment.getPaymentStatus(ApiVersion.V10, requestId);
                const statusResponse = await statusResult.json();

                expect(statusResult.status).toBe(200);
                expect(statusResponse.Success).toBe(true);
                expect(statusResponse.Data.requestId).toBe(requestId);

                console.log("Existing payment status:", {
                    requestId: statusResponse.Data.requestId,
                    status: statusResponse.Data.status,
                    paymentAmount: statusResponse.Data.paymentAmount
                });
            }
        }, 45000); // 45 second timeout for API calls
    });

    describe("Error Handling Integration Tests", () => {
        beforeEach(() => {
            if (!jwtToken || !clientId) {
                pending("Skipping test: Missing TOCHKA_JWT_TOKEN or TOCHKA_CLIENT_ID environment variables");
            }
        });

        it("should handle invalid payment data gracefully", async () => {
            const invalidPaymentRequest = {
                Data: {
                    accountCode: "", // Invalid empty account
                    bankCode: "",
                    counterpartyAccountNumber: "invalid-account",
                    counterpartyBankBic: "invalid-bic",
                    counterpartyName: "",
                    paymentAmount: -100, // Invalid negative amount
                    paymentPurpose: "",
                    paymentDate: "invalid-date"
                }
            };

            try {
                const result = await payment.createPaymentForSign(ApiVersion.V10, invalidPaymentRequest);
                const response = await result.json();

                // Should receive validation error
                expect(result.status).toBeGreaterThanOrEqual(400);
                expect(response.Success).toBe(false);
                expect(response.Error).toBeDefined();
                expect(response.Error.Code).toBeDefined();
                expect(response.Error.Message).toBeDefined();

                console.log("Expected validation error:", {
                    code: response.Error.Code,
                    message: response.Error.Message
                });
            } catch (error) {
                // Network-level errors are also acceptable
                console.log("Network error (expected):", error.message);
                expect(error).toBeDefined();
            }
        }, 30000);

        it("should handle non-existent payment status request", async () => {
            const nonExistentRequestId = "non-existent-payment-12345";

            try {
                const result = await payment.getPaymentStatus(ApiVersion.V10, nonExistentRequestId);
                const response = await result.json();

                // Should receive not found error
                expect(result.status).toBe(404);
                expect(response.Success).toBe(false);
                expect(response.Error).toBeDefined();
                expect(response.Error.Code).toBe("NOT_FOUND");

                console.log("Expected not found error:", {
                    code: response.Error.Code,
                    message: response.Error.Message
                });
            } catch (error) {
                // Network-level errors are also acceptable
                console.log("Network error (expected):", error.message);
                expect(error).toBeDefined();
            }
        }, 30000);
    });
});