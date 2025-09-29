# Developer Guide

Below are some tips to help you understand:

- The structure of the project  
- The important classes and how they are used  
- How to run the test suite  
- How to contribute to the project

## Project Architecture

The project is a simple shopping cart and discount system written in modern **JavaScript (ES Modules)**.  
It is divided into three main parts:

1. **Cart logic** (`src/cart.js`)  
   - Handles adding, removing, and clearing products from the cart.  
   - Calculates totals, shipping, and discounts.

2. **Discount management** (`src/discountManager.js`)  
   - Applies discount codes.  
   - Implements rules like *“Buy X, Pay for Y”* and free shipping thresholds.

 3. **Validation & Errors** (`src/Rules/validators.js`, `src/errors.js`)  
   - Ensures that products, quantities, totals, and discount codes are valid.  
   - Provides clear error types (`CartError`, `DiscountError`).

## Base Classes

There are two main classes that users will interact with:

- **`Cart`**: The central class for managing products, totals, shipping, and discounts.  
- **`DiscountManager`**: A helper class (used inside `Cart`) that applies discount rules. 

### Example Flow

```js
// Import Cart
import { Cart } from "l2-module-cart-and-discounts"

const cart = new Cart()

// Define products
const productA = { id: 1, name: "T-shirt", price: 299 }
const productB = { id: 2, name: "Sneakers", price: 1200 }

// Add products
cart.addProductToCart(productA, 1)
cart.addProductToCart(productB, 1)

// Apply free shipping and discounts
cart.discountManager.setFreeShippingThreshold(1000)
cart.discountManager.applyDiscountCode("SOMMAR25")

// Get final price
console.log("Final price:", cart.getFinalPrice())
```

## Test Structure

The project includes two levels of tests:

1. Integration tests `tests/testCart.js`
   - Demonstrates complete shopping cart flows (adding/removing products, applying discounts, free shipping, etc.).
2. Unit tests `test/validators.test.js`
   - Focus on validators and error handling.
   - Ensure that invalid inputs throw the correct errors.

### Running Tests

Install dependencies and run:

```bash
npm install
npm test
```

### Coding Norms & Expectations

When contributing, please follow these guidelines:

- Keep code modular (Cart handles cart logic, DiscountManager handles discounts, etc.).
- Add or update tests if you add/change functionality.
- Run `npm test` before opening a Pull Request.
- Follow existing naming conventions (camelCase for functions, PascalCase for classes).

## Contributing

The contribution flow is:

1. Fork the repository (your changes won’t affect the original until you make a Pull Request).
2. Clone your fork and create a feature branch.
3. Make your changes and ensure tests pass.
4. Submit a Pull Request with a clear description.

Forks are safe: they create your own copy of the repo. You can push changes to your fork freely, and the original repo will only change if the maintainers review and merge your Pull Request.

## External Resources

This project does not rely on external APIs, but uses Jest and Babel for testing and modern JavaScript compatibility.
All dependencies are listed in package.json.