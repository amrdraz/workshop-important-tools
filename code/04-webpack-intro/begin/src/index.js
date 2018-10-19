let button = createButton("Click Me")

let product = new Product({
  name: "phone",
  price: 200,
  amount: 20
})

let cart = new Cart()

button.addEventListener("click", () => {
  addProductToCart(product, cart)
  console.log("product.amount", product.amount)
  console.log(cart.products)
})

document.body.appendChild(button)

