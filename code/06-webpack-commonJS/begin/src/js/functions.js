function incrementProduct(product, amount = 1) {
  product.amount = product.amount + amount
}

function addProductToCart(product, cart) {
  product.amount -= 1
  cart.products.push(product)
}