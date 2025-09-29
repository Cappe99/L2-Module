import DiscountRules from "./Rules/discountRules.js"
import { validDiscounts } from "./discountCodes.js"

export class DiscountManager {
    #appliedDiscounts = []
    #validDiscounts = validDiscounts
    #buyXPayForYRules = []
    #freeShippingThreshold = null
    shippingCost = undefined
    
    get appliedDiscounts() {
        return [...this.#appliedDiscounts]
    }

    get buyXPayForYRules() {
        return [...this.#buyXPayForYRules]
    }

    get setFreeShippingThreshold() {
        return [...this.#freeShippingThreshold]
    }

    get validDiscounts() {
        return this.#validDiscounts
    }

    get appliedDiscounts() {
        return this.#appliedDiscounts
    }

    _setAddAppliedDiscount(discount) {
        this.#appliedDiscounts.push(discount)
    }

    _setAddBuyXPayForYRule(x, y) {
        this.#buyXPayForYRules.push({ x, y })
    }

    _setFreeShippingThreshold(amount) {
        this.#freeShippingThreshold = amount
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
      return this.#freeShippingThreshold !== null && cartTotal >= this.#freeShippingThreshold
    }

    applayDiscounts(cartItems, totalPrice) {
    return DiscountRules.applyDiscountsRule(this, cartItems, totalPrice)
    }
}