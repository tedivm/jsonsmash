'use strict'

const AbstractScript = require('./abstract.js')

class About extends AbstractScript {
  run() {
    this.shell.stdout('JSON Smash, © Robert Hafner <tedivm@tedivm.com>')
    this.shell.stdout('Released under the MIT License')
    this.shell.stdout('https://github.com/tedivm/jsonsmash')
  }
}


module.exports = About
