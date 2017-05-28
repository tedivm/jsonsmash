'use strict'

const AbstractScript = require('./abstract.js')

class CD extends AbstractScript {
  run() {
    let path = this.getPathArgument()
    let data = this.shell.getDataFromPath(path)
    if(typeof data == 'undefined') {
      throw error('no such path')
    }
    this.shell.session.cwd = path
  }
}

module.exports = CD
