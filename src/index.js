import { Cart } from "./cart.js";

const cart = new Cart()

cart.addProductToCart({ id: 1, name: "T-shit", price: 200}, 3)
cart.addProductToCart({ id: 12, name: "Keps", price: 199})
// TODO: If no quantity is selected, Total price is NaN


console.log(cart.item)
console.log(cart.getTotalPrice())