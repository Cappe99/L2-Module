import { validDiscounts } from "./discountCodes.js"

export class DiscountManager {
    constructor() {
        this.appliedDiscounts = []
        this.validDiscounts = validDiscounts
        this.buyXPayForYRules = []
        this.freeShippingThreshold = null
         this.shippingCost = undefined
    }

    applyDiscountCode(code) {
        const discount = this.validDiscounts.find(d => d.code === code)

        if (!discount) {
            return false
        }

        if (!this.appliedDiscounts.some(d => d.code === code)) {
            this.appliedDiscounts.push(discount)
        }
        return true
    }

    buyXPayForY(x, y) {
        this.buyXPayForYRules.push({ x, y })
    }

    setFreeShippingThreshold(amount) {
        this.freeShippingThreshold = amount
    }
    
    isFreeShipping(cartTotal) {
        if (!this.freeShippingThreshold) {
            return false
        }
        return cartTotal >= this.freeShippingThreshold
    }

    applayDiscounts(cartItems, totalPrice) {
        let discountedPrice = totalPrice
        for (let discount of this.appliedDiscounts) {
            discountedPrice *= (1 - discount.percentage / 100)
        }

        for (let rule of this.buyXPayForYRules) {
            for (let item of cartItems) {
                if (item.quantity >= rule.x) {
                    const groups = Math.floor(item.quantity / rule.x)
                    const discountAmount = groups * (rule.x - rule.y) * item.price
                    discountedPrice -= discountAmount
                }
            }
        }
        return discountedPrice
    }
}