require.register("./src/js/Button", (module, exports, require)=> {
  function createButton(textContent) {
  let button = document.createElement('button')
  button.textContent = textContent
  return button
}

exports.createButton = createButton
})