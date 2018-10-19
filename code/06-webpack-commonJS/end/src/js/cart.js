require.register("./src/js/cart", (module, exports, require)=> {
module.exports = class Cart {
  constructor () {
    this.products = []
  }
}
})