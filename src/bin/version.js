'use strict'

const AbstractScript = require('./abstract.js')

class Version extends AbstractScript {
  run() {
    var pjson = require('../../package.json');
    this.shell.stdout('jsonsmash v' + pjson.version + ', © Robert Hafner <tedivm@tedivm.com>')
    this.shell.stdout('Released under the MIT License')
    this.shell.stdout('https://github.com/tedivm/jsonsmash')
  }
}


module.exports = Version
