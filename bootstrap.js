require('ignore-styles')
require('@babel/register')({
  presets: [
    "@babel/preset-env",
    "@babel/preset-react"
  ],
  plugins: [
    "@babel/plugin-proposal-class-properties"
  ],
  ignore: [ /(node_modules)/ ],
})

require('./server')
