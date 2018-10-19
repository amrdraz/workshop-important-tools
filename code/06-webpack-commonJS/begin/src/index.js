const { createButton } = require("./js/Button")
const { addProductToCart } = require("./js/functions")
const ProductStore = require("./js/product-store")
const Cart = require("./js/cart")

let button = createButton("Click Me")

let productStore = new ProductStore({
  name: "phone",
  price: 200,
  amount: 20
})

let cart = new Cart()

button.addEventListener("click", () => {
  addProductToCart(productStore, cart)
  console.log("product.amount", productStore.amount)
  console.log(cart.products)
})

document.body.appendChild(button)
