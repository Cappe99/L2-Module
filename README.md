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

# Dependencies, Language and Versions

### Language & Runtime

- The module is implemented in JavaScrip
- Requires Node.js

### Dependencies

All dependencies are managed with npm and defined in `package.json`.

**DevDependencies**:
- `jest` - used for unit testing
- `babel-jest` – integrates Babel with Jest for ES module support.
- `@babel/core` and `@babel/preset-env` – ensure compatibility with modern JavaScript features.

There are currently **no runtime dependencies**, meaning the module can be used without extra installations apart from Node.js itself.

### Versioning
- This project follows **Semantic Versioning (SemVer)**:
- **MAJOR** – Breaking changes  
- **MINOR** – Backwards-compatible new features  
- **PATCH** – Bug fixes  

The current version is **1.0.1**.

### Installation of Dependencies
To install all dependencies, run:

```bash
npm install
```

# Contributing

Contributions are welcome!

If you want to help improve this project, here’s how you can get started:

[developer guide](https://github.com/Cappe99/L2-Module/blob/main/docs/CONTRIBUTING.md)


## TEST

[Test report](https://github.com/Cappe99/L2-Module/blob/main/docs/testRapport.md)

## License

[MIT](https://github.com/Cappe99/L2-Module/blob/main/LICENSE)

