import { ModuleProvider, Modules } from "@medusajs/framework/utils"
import {
    TochkaService,
} from "./services"

const services = [
  TochkaService,
]

export default ModuleProvider(Modules.PAYMENT, {
  services,
})
