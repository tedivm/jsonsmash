'use strict'

const AbstractScript = require('./abstract.js')

class PWD extends AbstractScript {
  run() {
    this.shell.stdout(this.shell.getPathAsString(this.shell.session.cwd))
  }
}


module.exports = PWD
