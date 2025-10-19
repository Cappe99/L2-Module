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

    /**
    * Applies a discount.
    * Updates internal state by adding the discount if valid.
    * @param {string} code - The discount code to apply.
    */
    applyDiscountCode(code) {
       return DiscountRules.applyDiscountCodeRule(this, code)
    }

    /**
    * Adds a Buy X Pay Y rule.
    * Updates internal state with the new rule.
    * @param {number} x - Quantity to buy.
    * @param {number} y - Quantity to pay for.
    */
    buyXPayForY(x, y) {
        return DiscountRules.addBuyXPayForYRule(this, x, y)
    }

    /**
    * Sets the free shipping threshold amount.
    * Updates internal state to define minimum cart total for free shipping.
    * @param {number} amount - Minimum cart total for free shipping.
    */
    setFreeShippingThreshold(amount) {
        return DiscountRules.setFreeShippingThresholdRule(this, amount)
    }
    
    /**
    * Checks if the cart total qualifies for free shipping.
    * @param {number} cartTotal - Total price of the cart.
    * @returns {boolean} True if free shipping applies, false otherwise.
    */
    isFreeShipping(cartTotal) {
      return this.#freeShippingThreshold !== null && cartTotal >= this.#freeShippingThreshold
    }

    /**
    * Applies all applicable discounts to the cart items.
    * @param {Array} cartItems - Array of items in the cart.
    * @param {number} totalPrice - Total price after applying discounts.
    */
    applayDiscounts(cartItems, totalPrice) {
    return DiscountRules.applyDiscountsRule(this, cartItems, totalPrice)
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
}