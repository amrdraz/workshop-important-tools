(() => {
  const increment = window.incrementProduct

  function decrementProduct (product, amount) {
    return increment(product, -amount)
  }
})()

console.log(incrementProduct)
console.log(decrementProduct)
