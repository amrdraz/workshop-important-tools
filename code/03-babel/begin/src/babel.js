const babel = require("@babel/core")
const options = {
  presets: [
    "@babel/preset-env",
  ],
  plugins: []
}

const code = `
const add = (a, b) => a + b 
`

let output = babel.transform(code, options);

console.log(output);
