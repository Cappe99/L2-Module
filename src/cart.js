import { DiscountManager } from "./discountManager.js"
import { validateProduct, validateQuantity } from "./validators.js"
import * as CartRules from "./cartRules.js"

export class Cart {
    constructor() {
        this.items = []
        this.discountManager = new DiscountManager()
    }

    addProductToCart(product, quantity = 1) {
        //validateProduct(product)
        //validateQuantity(quantity)
        this.items = CartRules.addProduct(this.items, product, quantity)

      // const existingItem = this.items.find(item => item.id === product.id)  // RAPORT: hittar ingen bra lösning men känns som try

      // if (existingItem) {
      //     existingItem.quantity += quantity
      // } else {
      //     this.items.push({ ...product, quantity })
      // } 
    }

    removeProductFromCart(product, quantity = 1) {
        validateProduct(product)
        validateQuantity(quantity)

       const index = this.items.findIndex(item => item.id === product.id) // RAPORT: hittar ingen bra lösning men känns som try
       
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

     getTotalPriceafterDiscounts() {
        let totalPrice = this.items.reduce((sum, item) => sum + item.price * item.quantity, 0)
        return this.discountManager.applayDiscounts(this.items, totalPrice)
    }

    getShippingCost() {
        const total = this.getTotalPriceafterDiscounts()
        if (this.discountManager.isFreeShipping(total)) {
            return 0
        }
        return this.discountManager.shippingCost ?? null
    }

    getFinalPrice() { // RAPORT: change name, unclear what it does or more specifik.
        return this.getTotalPriceafterDiscounts() + this.getShippingCost()
    }
}