export class Cart {
    constructor() {
        this.item = []
    }

    addProductToCart(product, quantity) {
        this.item.push({ ...product, quantity })
    }

    getTotalPrice() {
        let totalPrice = 0
        for (let item of this.item) {
            totalPrice += item.price * item.quantity
        }
        return totalPrice
    }
}