'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

NODE_ENV: '"development"'
module.exports = merge(prodEnv, {
})
