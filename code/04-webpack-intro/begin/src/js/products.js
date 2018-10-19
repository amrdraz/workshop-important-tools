
class Product {
  constructor ({ price, amount, name }) {
    Object.assign(this, { price, amount, name })
    // Same as
    this.price = price
    this.amount = amount
    this.name = name
  }
}