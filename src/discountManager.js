import { validDiscounts } from "./discountCodes.js"

export class DiscountManager {
    constructor() {
        this.appliedDiscounts = []
        this.validDiscounts = validDiscounts
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

    applayDiscounts(totalPrice) {
        let discountedPrice = totalPrice
        for (let discount of this.appliedDiscounts) {
            discountedPrice *= (1 - discount.percentage / 100)
        }
        return discountedPrice
    }
}