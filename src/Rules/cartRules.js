import { validateProduct, validateQuantity } from "./validators.js"

export function addProduct(items, product, quantity = 1) {
    validateProduct(product)
    validateQuantity(quantity)

    if (quantity === undefined) {
        quantity = 1
    }

    const existingItem = items.find(item => item.id === product.id)

    if (existingItem) {
        existingItem.quantity += quantity
    } else {
        items.push({ ...product, quantity })
    }

    return items
}

export function removeProduct(items, product, quantity) {
    validateProduct(product)
    validateQuantity(quantity)

    if (quantity === undefined) {
        quantity = 1
    }

    const index = items.findIndex(item => item.id === product.id)

    if (index !== -1) {
        const cartItem = items[index]

        cartItem.quantity -= quantity

        if (cartItem.quantity <= 0) {
            items.splice(index, 1)
        }
       }
       return items
}

export function clearCart() {
    return []
}

export function getTotalQuantity(items) {
    return items.reduce((total, item) => total + item.quantity, 0)
}

export function getTotalPriceAfterDiscounts(items, discountManager) {
    let totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
    return discountManager.applayDiscounts(items, totalPrice)
}

export function getShippingCost(items, discountManager) {
    const total = getTotalPriceAfterDiscounts(items, discountManager)
    if (discountManager.isFreeShipping(total)) {
        return 0
    }
    return discountManager.shippingCost ?? null
}

export function getFinalPrice(items, discountManager) {
    return getTotalPriceAfterDiscounts(items, discountManager) + getShippingCost(items, discountManager)
}

