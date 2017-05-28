'use strict'

const AbstractScript = require('./abstract.js')
const yaml = require('js-yaml');


class Cat extends AbstractScript {
  run() {
    let path = this.getPathArgument()
    let data = this.shell.getDataFromPath(path)
    if(this.args['json']) {
      this.shell.stdout(JSON.stringify(data))
    } else {
      this.shell.stdout(yaml.safeDump(data))
    }
  }
}


module.exports = Cat
