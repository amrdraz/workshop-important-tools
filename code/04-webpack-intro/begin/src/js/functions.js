function addProductToCart(product, cart) {
  product.amount -= 1
  cart.products.push(product)
}