require.register("./src/index", (module, exports, require)=> {
const { createButton } = require("./src/js/Button")
const { addProductToCart } = require("./src/js/functions")
const ProductStore = require("./src/js/product-store")
const Cart = require("./src/js/cart")

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
})