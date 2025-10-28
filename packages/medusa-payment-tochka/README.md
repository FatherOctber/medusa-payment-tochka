<p align="center">
  <a href="https://www.medusajs.com">
    <img alt="Medusa and Tochka Bank" src="https://raw.githubusercontent.com/FatherOctber/medusa-payment-tochka/main/packages/medusa-payment-tochka/medusa_and_tochka.png" height="120">
  </a>

</p>

<h1 align="center">
Tochka Bank Payments for Medusa
</h1>

<p align="center">
  A Medusa plugin that provides Tochka Bank payment processing.
  <br/>
  <a href="https://github.com/FatherOctber/medusa-payment-tochka/blob/main/packages/medusa-payment-tochka/README.ru.md">Читать README на русском ↗</a>
</p>

<br/>

<p align="center">
  <a href="https://medusajs.com">
    <img src="https://img.shields.io/badge/Medusa-^2.7.0-blue?logo=medusa" alt="Medusa" />
  </a>
  <a href="https://medusajs.com">
    <img src="https://img.shields.io/badge/Tested_with_Medusa-v2.10.3-green?logo=checkmarx" alt="Medusa" />
  </a>
</p>

## Features

- 🔗 **Seamless integration** with the Tochka Bank payment system
- 🧾 **Receipt generation** compliant with Federal Law No. 54-FZ (Russian fiscal requirements)
- 1️⃣ **One-step** (autocapture) and 2️⃣ **two-step** (authorization/hold) payment flows
- 🔄 **Full refund** and **partial refund** support
- 🔔 **Webhook support** for real-time payment status updates
- 🛡 **JWT webhook verification** using JWK public keys for enhanced security
- 💳 **Multiple payment methods** - bank cards, SBP (Faster Payment System), and more
- 🔍 **Detailed logging** for debugging and monitoring
- 🏦 **Acquiring operations** - full integration with Tochka Bank's internet acquiring platform

## Requirements

- Medusa v2.7.0 or later
- Node.js v20 or later
- A Tochka Bank account with internet acquiring enabled
- JWT token and client ID from Tochka Bank
- Webhook public key from Tochka Bank (for webhook verification)

## Installation

```bash
yarn add medusa-payment-tochka
# or
npm install medusa-payment-tochka
```

## Configuration

Add the plugin to your `medusa-config.ts`:

```typescript
module.exports = defineConfig({
    modules: [
        // ... other modules
        {
            resolve: "@medusajs/medusa/payment",
            options:
                {
                    providers: [
                        {
                            resolve: "medusa-payment-tochka/providers/payment-tochka",
                            id: "tochka",
                            options: {
                                tochkaJwtToken: process.env.TOCHKA_JWT_TOKEN,
                                clientId: process.env.TOCHKA_CLIENT_ID,
                                webhookPublicKeyJson: process.env.TOCHKA_WEBHOOK_PUBLIC_KEY,
                                tochkaApiVersion: "v1.0", // optional, defaults to "v1.0"
                                developerMode: process.env.NODE_ENV !== "production", // optional, defaults to false
                                preAuthorization: false, // optional, enable two-step payments
                                paymentPurpose: "Payment for order", // optional, default payment description
                                withReceipt: true, // optional, enable receipt generation
                                taxSystemCode: "USN_INCOME", // required if withReceipt is true
                                taxItemDefault: "VAT_0", // required if withReceipt is true
                                taxShippingDefault: "VAT_0", // required if withReceipt is true
                            },
                        }
                    ]
                }
        }
    ]
})
```

## Environment Variables

Create a `.env` file with the following variables:

```bash
# Required
TOCHKA_JWT_TOKEN=your_jwt_token_from_tochka_bank
TOCHKA_CLIENT_ID=your_client_id_from_tochka_bank
TOCHKA_WEBHOOK_PUBLIC_KEY='{"kty":"RSA","e":"AQAB","n":"your_public_key_n_value"}'

# Optional
TOCHKA_API_VERSION=v1.0
TOCHKA_DEVELOPER_MODE=false
```

## API Support

This plugin provides comprehensive support for Tochka Bank's acquiring API:

### Payment Operations
- **Create payment operation** - Generate payment links
- **Get payment status** - Check payment operation status
- **Capture payment** - Complete two-step payments
- **Refund payment** - Process full or partial refunds
- **Payment with receipts** - Generate fiscal receipts for Russian 54-FZ compliance

### Webhook Support
- **JWT verification** - Secure webhook validation using JWK public keys
- **Real-time updates** - Instant payment status notifications
- **Status mapping** - Automatic conversion to Medusa payment statuses

### Supported Payment Methods
- **Bank cards** (Visa, Mastercard, Mir)
- **SBP** (Faster Payment System)
- **Installments** (Dolyame, Tinkoff)

## Testing

```bash
# Run tests
npm test

# Run tests in watch mode
npm run test:watch
```

## Development

```bash
# Start development mode
npm run dev

# Build the plugin
npm run build
```

## License

Licensed under the [MIT License](LICENSE).

## Support

If you encounter any issues or have questions about this plugin, please:

1. Check the [GitHub Issues](https://github.com/fatheroctober/medusa-payment-tochka/issues)
2. Create a new issue if your problem isn't already reported
3. Provide detailed information about your setup and the issue you're facing

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.