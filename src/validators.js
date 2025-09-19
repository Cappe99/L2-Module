import { CartError } from "./errors.js";

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