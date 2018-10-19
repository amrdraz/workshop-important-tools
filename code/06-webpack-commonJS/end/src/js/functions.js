require.register("./src/js/functions", (module, exports, require)=> {
function incrementProduct (product, amount = 1) {
  product.amount = product.amount + amount
}

function addProductToCart (product, cart) {
  product.amount -= 1
  cart.products.push(product)
}

exports.incrementProduct = incrementProduct
exports.addProductToCart = addProductToCart
})