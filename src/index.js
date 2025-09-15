import { Cart } from "./cart.js";
import { DiscountManager } from "./discountManager.js";

const cart = new Cart()
const discount = new DiscountManager()

cart.addProductToCart({ id: 1, name: "T-shit", price: 200}, 3)
cart.addProductToCart({ id: 1, name: "T-shit", price: 200}, 3)
cart.addProductToCart({ id: 12, name: "Keps", price: 199})


cart.removeProductFromCart({ id: 1})
//cart.clearCart()
cart.discountManager.addDiscount("Hej", 50)


console.log(cart.items)
//console.log(discount.applayDiscounts())
console.log(cart.getTotalPrice())
console.log("Total quantity in cart:", cart.getTotalQuantityInCart())