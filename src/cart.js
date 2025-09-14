export class Cart {
    constructor() {
        this.items = []
    }

    addProductToCart(product, quantity) {
         if (quantity === undefined) {
            quantity = 1
        }
        const existingItem = this.items.find(item => item.id === product.id)

        if (existingItem) {
            existingItem.quantity += quantity
        } else {
            this.items.push({ ...product, quantity })
        } 
    }

    removeProductFromCart(product, quantity) {
        if (quantity === undefined) {
            quantity = 1
        }

       const index = this.items.findIndex(item => item.id === product.id)
       
       if (index !== -1) {
        const cartItem = this.items[index]

        cartItem.quantity -= quantity

        if (cartItem.quantity <= 0) {
            this.items.splice(index, 1)
        }
       }
    }

    getTotalPrice() {
        let totalPrice = 0
        for (let items of this.items) {
            totalPrice += items.price * items.quantity
        }
        return totalPrice
    }
}