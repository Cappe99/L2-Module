# Shopping Cart module

### HEADS UP

This is a basic modul that is written by me, Casper a student at linnaeus university. Bugs may occur.

---

The shopping cart is a simplel tool for building a webb store. It manages the cart functionality, handles shipping costs, and applies discount rules.

## Installation

This is a Node.js module available through the npm registry.

Before installing, make sure you have Node.js installed.

If this is a brand new project, initialize it with:

`npm init -y`

Install the package using npm:

`npm i l2-module-cart-and-discounts`

## Example Usage

A full test script is included with the package to demonstrate all features of the shopping cart and discount system. You can find it in the test folder:

Here’s a short example from the test script:

```javascript
import { Cart } from "l2-module-cart-and-discounts"

const cart = new Cart()

const productA = { id: 1, name: "T-shirt", price: 299 }
const productB = { id: 2, name: "Sneakers", price: 1200 }
const productC = { id: 3, name: "Hoodie", price: 600 }

cart.discountManager.setFreeShippingThreshold(1000)
cart.discountManager.shippingCost = 49

cart.addProductToCart(productA, 1)
console.log("Cart:", cart.items)
console.log("Total price:", cart.getTotalPriceafterDiscounts())
console.log("Shipping fee:", cart.getShippingCost())
console.log("Total prrice to pay:", cart.getFinalPrice())
```

For a complete demonstration including discounts, “Buy X Pay for Y” rules, and free shipping, run the full test script included in the package.

### TEST

Test Report [Test rapport](../L2-Module/tests/testRapport.md)

