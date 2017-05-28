'use strict'

const AbstractScript = require('./abstract.js')

class Echo extends AbstractScript {
  run() {
    this.shell.stdout(this.args._.join(' '))
  }
}


module.exports = Echo