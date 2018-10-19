const babel = require("babel-core")
const options = {
  presets: [
    "@babel/preset-env",
    // "@babel/preset-react"
  ],
  plugins: [
    // "@babel/plugin-proposal-class-properties",
    // "captains-log",
  ]
}

const code = `
const add = (a, b) => a + b 
`

let output = babel.transform(code, options);

console.log(output);
