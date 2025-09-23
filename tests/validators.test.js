import { 
  validateProduct,
  validateQuantity,
  validateDiscountCode,
  validateBuyXPayForY,
  validateFreeShippingThreshold,
  validateCartTotal,
  validateCartItems,
  validateTotalPrice
 } from "../src/Rules/validators.js"
import { CartError, DiscountError } from "../src/errors.js"

describe("validateProduct", () => {
  test("accepts a valid product", () => {
    expect(() => validateProduct({ id: 1, name: "T-shirt", price: 200 })).not.toThrow()
  })

  test("throws error if product is missing id", () => {
    expect(() => validateProduct({ name: "T-shirt", price: 200 })).toThrow(CartError)
  })

  test("throws error if product has invalid price", () => {
    expect(() => validateProduct({ id: 1, name: "T-shirt", price: -100 })).toThrow(CartError)
  })

  test("throws error if product is missing name", () => {
    expect(() => validateProduct({ id: 1, price: 200 })).toThrow(CartError)
  })
})

describe("validateQuantity", () => {
  test("accepts valid quantity", () => {
    expect(() => validateQuantity(2)).not.toThrow()
  })

  test("throws error for 0 or negative quantity", () => {
    expect(() => validateQuantity(0)).toThrow(CartError)
    expect(() => validateQuantity(-5)).toThrow(CartError)
  })

  test("throws error for non-integer quantity", () => {
    expect(() => validateQuantity(1.5)).toThrow(CartError)
  })
})

describe("validateDiscountCode", () => {
  test("accepts a valid discount code", () => {
    expect(() => validateDiscountCode("SOMMAR25")).not.toThrow()
  })

  test("throws error for empty string", () => {
    expect(() => validateDiscountCode("")).toThrow(DiscountError)
  })
})

describe("validateBuyXPayForY", () => {
  test("accepts valid values (3 for 2)", () => {
    expect(() => validateBuyXPayForY(3, 2)).not.toThrow()
  })

  test("throws error for invalid values", () => {
    expect(() => validateBuyXPayForY(2, 3)).toThrow(DiscountError)
    expect(() => validateBuyXPayForY(0, 0)).toThrow(DiscountError)
    expect(() => validateBuyXPayForY(3, 3)).toThrow(DiscountError)
  })
})

describe("validateFreeShippingThreshold", () => {
  test("accepts a valid threshold", () => {
    expect(() => validateFreeShippingThreshold(500)).not.toThrow()
  })

  test("throws error for negative threshold", () => {
    expect(() => validateFreeShippingThreshold(-1)).toThrow(DiscountError)
  })
})

describe("validateCartTotal", () => {
  test("accepts a valid cart total", () => {
    expect(() => validateCartTotal(1000)).not.toThrow()
  })

  test("throws error for negative cart total", () => {
    expect(() => validateCartTotal(-10)).toThrow(DiscountError)
  })
})

describe("validateCartItems", () => {
  test("accepts a valid cart items array", () => {
    expect(() => validateCartItems([{ price: 200, quantity: 2 }])).not.toThrow()
  })

  test("throws error if input is not an array", () => {
    expect(() => validateCartItems("notArray")).toThrow(DiscountError)
  })

  test("throws error for invalid items", () => {
    expect(() => validateCartItems([{ price: "200", quantity: 2 }])).toThrow(DiscountError)
    expect(() => validateCartItems([{ price: 200, quantity: "2" }])).toThrow(DiscountError)
  })
})

describe("validateTotalPrice", () => {
  test("accepts valid total price", () => {
    expect(() => validateTotalPrice(250)).not.toThrow()
  })

  test("throws error for negative total price", () => {
    expect(() => validateTotalPrice(-1)).toThrow(DiscountError)
  })
})