export class Cart {
    constructor() {
        this.item = []
    }

    addProductToCart(product, quantity) {
        this.item.push({ ...product, quantity })
    }
}