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