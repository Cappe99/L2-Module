export class Cart {
    constructor() {
        this.items = []
    }

    addProductToCart(product, quantity) {
         if (quantity === undefined) {
            quantity = 1
        }
        this.items.push({ ...product, quantity })
    }

    getTotalPrice() {
        let totalPrice = 0
        for (let items of this.items) {
            totalPrice += items.price * items.quantity
        }
        return totalPrice
    }
}