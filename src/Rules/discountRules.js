import { validateBuyXPayForY,
    validateFreeShippingThreshold,
    validateDiscountCode,
    validateCartTotal,
    validateCartItems,
    validateTotalPrice
 } from "./validators.js"

function applyDiscountCodeRule(manager, code) {
    validateDiscountCode(code)

    const discount = manager.validDiscounts.find(d => d.code === code)

    if (!discount) {
        return false
    }

    if (!manager.appliedDiscounts.some(d => d.code === code)) {
            manager._setAddAppliedDiscount(discount)
    }
    return true
}

function addBuyXPayForYRule(manager, x, y) {
    validateBuyXPayForY(x, y)
    manager._setAddBuyXPayForYRule(x, y)
}

function setFreeShippingThresholdRule(manager, amount) {
    validateFreeShippingThreshold(amount)
    manager._setFreeShippingThreshold(amount)
}

function isFreeShippingRule(manager, cartTotal) {
    validateCartTotal(cartTotal)
    if (!manager.freeShippingThreshold) return false
    return cartTotal >= manager.freeShippingThreshold
}

function applyDiscountsRule(manager, cartItems, totalPrice) {
    validateCartItems(cartItems)
    validateTotalPrice(totalPrice)

    let discountedPrice = totalPrice

    for (let discount of manager.appliedDiscounts) {
        discountedPrice *= (1 - discount.percentage / 100)
    }

    for (let rule of manager.buyXPayForYRules) {
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

export default {
  applyDiscountCodeRule,
  addBuyXPayForYRule,
  setFreeShippingThresholdRule,
  isFreeShippingRule,
  applyDiscountsRule
}