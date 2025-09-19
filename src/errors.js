export class CartError extends Error {
    constructor(message, code) {
        super(message)
        this.name = "CartError"
        this.code = code
    }
}

export class DiscountError extends Error {
    constructor(message, code) {
        super(message)
        this.name = "DiscountError"
        this.code = code
    }
}