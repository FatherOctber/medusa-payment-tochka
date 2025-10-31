import {formatCurrency} from "./format-currency"
import {
    Measure,
    PaymentObject,
    ReceiptClientModel,
    ReceiptItemModelInput,
    VatType
} from "tochka-sdk";


export function generateTochkaReceipt(cart: Record<string, any>, taxItem?: VatType, taxShipping?: VatType): {
    Client: ReceiptClientModel;
    Items: ReceiptItemModelInput[];
} {
    const email = cart?.email as string
    const phone = cart?.shipping_address?.phone as string
    const items = cart?.items as Array<Record<string, any>>
    const currencyCode = cart?.currency_code as string
    const shippingTotal = cart?.shipping_total as number
    const shippingMethods = cart?.shipping_methods as Array<Record<string, any>>
    const shippingAddress = cart?.shipping_address as Record<string, any>

    const fullName = `${shippingAddress?.last_name || ''} ${shippingAddress?.first_name || ''}`.trim()

    const client: ReceiptClientModel = {
        email: email,
        name: fullName || 'Customer somebody',
        ...(phone ? {phoneNumber: phone} : {}),
    }

    const receiptItems: ReceiptItemModelInput[] = items.map((item) => ({
        name: item.variant_title
            ? `${item.product_title} (${item.variant_title})`
            : item.product_title as string,
        quantity: item.quantity,
        amount: parseFloat(formatCurrency(item.total, currencyCode)),
        measure: Measure.ValueШт,
        paymentObject: item.product_type?.toLowerCase() === "service" ? PaymentObject.Service : PaymentObject.Goods,
        vatType: taxItem || VatType.Vat0,
    }))

    if (shippingTotal > 0) {
        const name = shippingMethods?.[0]?.name ?? 'Custom shipping'
        const amount = parseFloat(formatCurrency(shippingTotal, currencyCode))
        receiptItems.push({
            name: name.length > 128 ? name.slice(0, 125) + '…' : name,
            quantity: 1,
            amount: amount,
            vatType: taxShipping || VatType.Vat0,
        })
    }

    return {
        Client: client,
        Items: receiptItems
    }
}