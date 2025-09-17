import { DiscountManager } from "./discountManager.js"

export class Cart {
    constructor() {
        this.items = []
        this.discountManager = new DiscountManager()
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

    clearCart() {
        this.items = []
    }

    getTotalQuantityInCart() {
        return this.items.reduce((total, item) => total + item.quantity, 0)
    }

     getTotalPrice() {
        let totalPrice = this.items.reduce((sum, item) => sum + item.price * item.quantity, 0)
        return this.discountManager.applayDiscounts(this.items, totalPrice)
    }

    getShippingCost() {
        const total = this.getTotalPrice()
        if (this.discountManager.isFreeShipping(total)) {
            return 0
        }
        return this.discountManager.shippingCost ?? null
        console.log(total)
    }
}