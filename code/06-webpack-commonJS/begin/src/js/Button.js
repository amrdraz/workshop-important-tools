function createButton(textContent) {
  let button = document.createElement('button')
  button.textContent = textContent
  return button
}

exports.createButton = createButton