import { CartError, DiscountError } from "../errors.js";

export function validateProduct(product) {
    if (!product || typeof product !== "object") {
        throw new CartError("Product not valid, have to be an object", "INVALID_PRODUCT")
    }
    if (typeof product.id === "undefined") {
        throw new CartError("The product missing an id.", "MISSING_PRODUCT:ID")
    }
    if (typeof product.price !== "number" || product.price < 0) {
        throw new CartError("Product missing price or invalid price", "INVALID_PRICE")
    }
    if (typeof product.name !== "string") {
        throw new CartError("Product must have a name", "INVALID_NAME")
    }
}

export function validateQuantity(quantity) {
     if (quantity === undefined || quantity === null) {
        quantity = 1
    }
    if (!Number.isInteger(quantity) || quantity <= 0) {
        throw new CartError("Quantity must be a positive integer.", "INVALID_QUANTITY")
    }
}

export function validateDiscountCode(code) {
    if (typeof code !== "string" || !code.trim()) {
        throw new DiscountError("Discount code must be a non-empty string.", "INVALID_CODE")
    }
}

export function validateBuyXPayForY(x, y) {
    if (!Number.isInteger(x) || !Number.isInteger(y) || x <= 0 || y <= 0 || y >= x) {
        throw new DiscountError("Invalid Buy X Pay For Y rule. Ensure X > Y and both are positive integers.",
             "INVALID_BUYX_PAYY_RULE")
    }
}

export function validateFreeShippingThreshold(amount) {
    if (typeof amount !== "number" || amount < 0) {
        throw new DiscountError("Free shipping threshold must be a positive number.", "INVALID_THRESHOLD")
    }
}

export function validateCartTotal(cartTotal) {
    if (typeof cartTotal !== "number" || cartTotal < 0) {
        throw new DiscountError("Cart total must be a non-negative number.", "INVALID_CART_TOTAL")
    }
}

export function validateCartItems(cartItems) {
    if (!Array.isArray(cartItems)) {
        throw new DiscountError("Cart items must be an array.", "INVALID_CART_ITEMS")
    }

    for (let item of cartItems) {
        if (typeof item.price !== "number" || typeof item.quantity !== "number") {
            throw new DiscountError("Cart item must have valid price and quantity.", "INVALID_CART_ITEM");
        }
    }
}

export function  validateTotalPrice(totalPrice) {
    if (typeof totalPrice !== "number" || totalPrice < 0) {
        throw new DiscountError("Total price must be a non-negative number.", "INVALID_TOTAL_PRICE")
    }
}