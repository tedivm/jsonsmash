'use strict'

const minimist = require('minimist')
const _ = require('lodash')

class Shell {
  constructor(session, screen=false, displaybox=false) {
    this.session = session
    this.screen = screen
    this.displaybox = displaybox
  }

  runCommand(command_text) {
    const split_args = command_text.split(' ')
    const argv = minimist(split_args, {
      'boolean': true,
    });
    const command = argv._[0]
    const script = this.getScript(command)
    new script(this, split_args).run()
  }

  getScript(name, argv) {
    return require('../bin/' + name + '.js')
  }

  stdout(text) {
    console.log(text)
  }


  getPathFromString(pathstring) {
    let path = []
    if(pathstring[0] != '/') {
      path = _.clone(this.session.cwd)
    }

    let pathpieces = pathstring.split('/')
    for(var piece of pathpieces) {
      if(piece.length <= 0) {
        continue
      }
      if(piece == '.') {
        continue;
      }
      if(piece == '..') {
        path.pop()
        continue;
      }
      path.push(piece)
    }

    return path
  }

  getDataFromPath(path) {
    let workingpath = _.clone(path)
    let current = this.session.data
    while(workingpath.length > 0) {
      let next = workingpath.shift()
      if(!current[next]) {
        return
      }
      current = current[next]
    }
    return current
  }

  getPathAsString(path) {
    let pathstring = '/'
    for(var pathpiece of path) {
      pathstring += pathpiece + '/'
    }
    return pathstring
  }

}


module.exports = Shell
