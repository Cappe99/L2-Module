import { DiscountManager } from "./discountManager.js"
import * as CartRules from "./Rules/cartRules.js"

export class Cart {
    constructor() {
        this.items = []
        this.discountManager = new DiscountManager()
    }

    addProductToCart(product, quantity = 1) {
        this.items = CartRules.addProduct(this.items, product, quantity)
    }

    removeProductFromCart(product, quantity = 1) {
        this.items = CartRules.removeProduct(this.items, product, quantity)
    }

    clearCart() {
        this.items = CartRules.clearCart()
    }

    getTotalQuantityInCart() {
        return CartRules.getTotalQuantity(this.items)
    }

     getTotalPriceafterDiscounts() {
        return CartRules.getTotalPriceAfterDiscounts(this.items, this.discountManager)
    }

    getShippingCost() {
       return CartRules.getShippingCost(this.items, this.discountManager)
    }

    getFinalPrice() { // RAPORT: change name, unclear what it does or more specifik.
        return CartRules.getFinalPrice(this.items, this.discountManager)
    }
}