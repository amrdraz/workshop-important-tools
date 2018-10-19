(() => {
  const App = window.App || {}

  App.clearCart = function clearCart(cart) {
    cart.products = []
    return cart
  }
  App.removeProductFromCart = function removeProductFromCart(product, cart) {
    cart.products = cart.products.filter(prod => prod !== product)
    return cart
  }

  window.App = App

})()