import { validateProduct, validateQuantity } from "./validators.js"

function addProduct(items, product, quantity = 1) {
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

function removeProduct(items, product, quantity) {
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

function clearCart() {
    return []
}

function getTotalQuantity(items) {
    return items.reduce((total, item) => total + item.quantity, 0)
}

function getTotalPriceAfterDiscounts(items, discountManager) {
    let totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
    return discountManager.applayDiscounts(items, totalPrice)
}

function getShippingCost(items, discountManager) {
    const total = getTotalPriceAfterDiscounts(items, discountManager)
    if (discountManager.isFreeShipping(total)) {
        return 0
    }
    return discountManager.shippingCost ?? null
}

function getFinalPrice(items, discountManager) {
    return getTotalPriceAfterDiscounts(items, discountManager) + getShippingCost(items, discountManager)
}

export default {
  addProduct,
  removeProduct,
  clearCart,
  getTotalQuantity,
  getTotalPriceAfterDiscounts,
  getShippingCost,
  getFinalPrice
}