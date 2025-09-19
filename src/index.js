import { Cart } from "./cart.js";
import { DiscountManager } from "./discountManager.js";
import { CurrencyManager } from "./currencyManager.js";

const cart = new Cart()
const discount = new DiscountManager()
const cm = new CurrencyManager("SEK")


cart.addProductToCart({ id: 1, name: "T-shit", price: 200}, 3)
cart.addProductToCart({ id: 1, name: "T-shit", price: 200})
cart.addProductToCart({ id: 12, name: "Keps", price: 199})


//cart.removeProductFromCart({ id: 1})
//cart.clearCart()
//cart.discountManager.applyDiscountCode("SOMMAR25")

//cart.discountManager.applyDiscountCode("BLACKFRIDAY")

//await cart.currencyManager.updateRates()

//console.log("1000 SEK i USD:", cm.convert(1000, "USD"))
//console.log("1000 SEK i EUR:", cm.convert(1000, "EUR"))

cart.discountManager.buyXPayForY(3, 2)

console.log(cart.items)
cart.discountManager.setFreeShippingThreshold(600)
cart.discountManager.shippingCost = 78
console.log("Total price:", cart.getTotalPriceafterDiscounts())
console.log("Shipping cost:", cart.getShippingCost())
console.log(cart.getTotalPrice())
console.log("Total quantity in cart:", cart.getTotalQuantityInCart())


//TODO: Get total price in correct currency!