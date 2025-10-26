import { PaymentOptions, PaymentProviderKeys } from "../types"
import TochkaBase from "../core/tochka-base";

class TochkaService extends TochkaBase {
  static identifier = PaymentProviderKeys.TOCHKA

  constructor(_, options) {
    super(_, options)
  }

  get paymentOptions(): PaymentOptions {
    return {}
  }
}

export default TochkaService
