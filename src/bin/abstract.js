'use strict'

const minimist = require('minimist')

class abstract {
  constructor(shell, args) {
    this.shell = shell
    this.args = minimist(args, this.getShellOptions());
  }

  getShellOptions() {
    return {'boolean': true}
  }

  getPathArgument () {
    let path = this.shell.session.cwd
    if(this.args['_'].length > 1) {
      path = this.shell.getPathFromString(this.args['_'][1])
    }
    return path
  }
}

module.exports = abstract