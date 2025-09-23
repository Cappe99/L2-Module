import { validDiscounts } from "./discountCodes.js"
import * as DiscountRules from "./Rules/discountRules.js"

export class DiscountManager {
    constructor() {
        this.appliedDiscounts = []
        this.validDiscounts = validDiscounts
        this.buyXPayForYRules = []
        this.freeShippingThreshold = null
        this.shippingCost = undefined
    }

    applyDiscountCode(code) {
       return DiscountRules.applyDiscountCodeRule(this, code)
    }

    buyXPayForY(x, y) {
        return DiscountRules.addBuyXPayForYRule(this, x, y)
    }

    setFreeShippingThreshold(amount) {
        return DiscountRules.setFreeShippingThresholdRule(this, amount)
    }
    
    isFreeShipping(cartTotal) {
      return DiscountRules.isFreeShippingRule(this, cartTotal)
    }

    applayDiscounts(cartItems, totalPrice) {
    return DiscountRules.applyDiscountsRule(this, cartItems, totalPrice)
    }
}