require.register("./src/js/product-store", (module, exports, require)=> {
module.exports = class ProductStore {
  constructor ({ price, amount, name }) {
    Object.assign(this, { price, amount, name })
    // Same as
    this.price = price
    this.amount = amount
    this.name = name
  }

  inspect () {
    return `Product(${this.name}|${this.amount})`
  }
}
})