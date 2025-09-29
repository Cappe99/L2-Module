import { DiscountManager } from "./discountManager.js"
import CartRules from "./Rules/cartRules.js"

export class Cart {
    #items = []
    #discountManager = new DiscountManager()

    get discountManager() {
        return this.#discountManager
    }

    get items() {
        return [...this.#items]
    }

    addProductToCart(product, quantity = 1) {
        this.#items = CartRules.addProduct(this.#items, product, quantity)
    }

    removeProductFromCart(product, quantity = 1) {
        this.#items = CartRules.removeProduct(this.#items, product, quantity)
    }

    clearCart() {
        this.#items = CartRules.clearCart()
    }

    getTotalQuantityInCart() {
        return CartRules.getTotalQuantity(this.#items)
    }

     getTotalPriceafterDiscounts() {
        return CartRules.getTotalPriceAfterDiscounts(this.#items, this.#discountManager)
    }

    getShippingCost() {
       return CartRules.getShippingCost(this.#items, this.#discountManager)
    }

    getFinalPrice() {
        return CartRules.getFinalPrice(this.#items, this.#discountManager)
    }
}