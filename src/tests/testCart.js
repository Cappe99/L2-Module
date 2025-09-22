import { Cart } from "../cart.js"

console.log("===== START TEST =====")

const cart = new Cart()

const productA = { id: 1, name: "T-shirt", price: 299 }
const productB = { id: 2, name: "Sneakers", price: 1200 }
const productC = { id: 3, name: "Hoodie", price: 600 }

cart.discountManager.setFreeShippingThreshold(1000)
cart.discountManager.shippingCost = 49

console.log("\n--- STEP 1: ADD A PRODUCT ---")
cart.addProductToCart(productA, 1)
console.log("Cart:", cart.items)
console.log("Total price:", cart.getTotalPriceafterDiscounts())
console.log("Shipping fee:", cart.getShippingCost())
console.log("Total prrice to pay:", cart.getTotalPrice())

console.log("\n--- STEP 2: ADDING 2 T-SHIRTS ---")
cart.addProductToCart(productA, 2)
console.log("Cart:", cart.items)
console.log("Total price:", cart.getTotalPriceafterDiscounts())
console.log("Shipping fee:", cart.getShippingCost())
console.log("Total prrice to pay:", cart.getTotalPrice())

console.log("\n--- STEP 3: ADDING 1 Sneakers ---")
cart.addProductToCart(productB, 1)
console.log("Cart:", cart.items)
console.log("Total price:", cart.getTotalPriceafterDiscounts())
console.log("Shipping fee:", cart.getShippingCost())
console.log("Total prrice to pay:", cart.getTotalPrice())

console.log("\n--- TESTAR RABATTKOD ---")

console.log("\n--- STEP 4: ADDING DISCOUNT CODE 'SOMMAR25' ---")
cart.discountManager.applyDiscountCode("SOMMAR25")
console.log("Active discounts:", cart.discountManager.appliedDiscounts.map(d => d.code))
console.log("Total price after discounts:", cart.getTotalPriceafterDiscounts())
console.log("Shipping fee:", cart.getShippingCost())
console.log("Total prrice to pay:", cart.getTotalPrice())

console.log("\n--- STEP 5: TEST '3 FOR 2' ON HOODIES ---")
cart.addProductToCart(productC, 3)
cart.discountManager.buyXPayForY(3, 2)
console.log("Cart:", cart.items)
console.log("BuyXPayY rule:", cart.discountManager.buyXPayForYRules)
console.log("Total price aster '3 for 2':", cart.getTotalPriceafterDiscounts())
console.log("Shipping fee:", cart.getShippingCost())
console.log("Total prrice to pay:", cart.getTotalPrice())

console.log("\n--- STEP 6: REMOVE 1 T-shirt ---")
cart.removeProductFromCart(productA, 1)
console.log("Cart:", cart.items)
console.log("Total quantity:", cart.getTotalQuantityInCart())
console.log("Total price to pay:", cart.getTotalPriceafterDiscounts())


console.log("\n--- STEP 7: CLEAR CART ---")
cart.clearCart()
console.log("Cart after clearCart():", cart.items)

console.log("\n===== ALL TESTS DONE =====")