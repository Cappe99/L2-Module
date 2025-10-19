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

    /**
    * Adds a product to the cart or increases its quantity if already present.
    * @param {Object} product - The product to add.
    * @param {number} quantity - Number of items to add (default 1).
    */
    addProductToCart(product, quantity = 1) {
        this.#items = CartRules.addProduct(this.#items, product, quantity)
    }

    /**
    * Removes a product from the cart or decreases its quantity.
    * @param {Object} product - The product to remove.
    * @param {number} quantity - Number of items to remove (default 1).
    */
    removeProductFromCart(product, quantity = 1) {
        this.#items = CartRules.removeProduct(this.#items, product, quantity)
    }

    /**
    * Clears all items from the cart.
    */
    clearCart() {
        this.#items = CartRules.clearCart()
    }

    /**
    * Returns the total quantity of items currently in the cart.
    * @returns {number} Total number of items.
    */
    getTotalQuantityInCart() {
        return CartRules.getTotalQuantity(this.#items)
    }

    /**
    * Calculates the total price after applying all discounts.
    * @returns {number} Total price after discounts.
    */
    getTotalPriceafterDiscounts() {
        return CartRules.getTotalPriceAfterDiscounts(this.#items, this.#discountManager)
    }

    /**
    * Returns the shipping cost for the current cart based on discounts and thresholds.
    * @returns {number} Shipping cost (0 if free shipping applies).
    */
    getShippingCost() {
       return CartRules.getShippingCost(this.#items, this.#discountManager)
    }

    /**
    * Calculates the final price including discounts and shipping costs.
    * @returns {number} Final price for the cart.
    */
    getFinalPrice() {
        return CartRules.getFinalPrice(this.#items, this.#discountManager)
    }
}