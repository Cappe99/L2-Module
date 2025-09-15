export class DiscountManager {
    constructor() {
        this.discounts = []
    }

    addDiscount(code, percentage) {
        this.discounts.push({ code, percentage })
    }

    applayDiscounts(totalPrice) {
        let discountedPrice = totalPrice
        for (let discount of this.discounts) {
            discountedPrice *= (1 - discount.percentage / 100)
        }
        return discountedPrice
    }
}