import { Cart } from "./cart.js";

const cart = new Cart()

cart.addProductToCart({ id: 1, name: "T-shit", price: 200}, 3)
cart.addProductToCart({ id: 1, name: "T-shit", price: 200}, 3)
cart.addProductToCart({ id: 12, name: "Keps", price: 199})


cart.removeProductFromCart({ id: 1})


console.log(cart.items)
console.log(cart.getTotalPrice())