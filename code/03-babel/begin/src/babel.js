const babel = require("babel-core")
const options = {
  preset: [
    "@babel/preset-env",
    // "@babel/preset-react"
  ],
  plugins: [
    // "@babel/plugin-proposal-class-properties",
    // "captains-log",
  ]
}

const code = `

`

let output = babel.transform(code, options);

console.log(output);
