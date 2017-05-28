'use strict'

const AbstractScript = require('./abstract.js')
const _ = require('lodash')
const pad = require('pad')

class LS extends AbstractScript {
  run() {
    let path = this.getPathArgument()
    let data = this.shell.getDataFromPath(path)
    var keys = Object.keys(data)
    let sizepad = this.args['h'] ? 4 : 8

    let metadata = {}
    for(var key of keys) {
      let newpath = _.clone(path)
      newpath.push(key)
      let size = JSON.stringify(this.shell.getDataFromPath(newpath)).length
      // Add key, colon delimiter, and if not a number quotations for key.
      size += key.length + (typeof key === 'number' ? 1 : 3)
      metadata[key] = {
        'size' : size,
        'type': typeof data[key]
      }
    }

    if(this.args['S'] || this.args['sort'] == 'size') {
      // Sort largest to smallest.
      keys.sort((a,b) => metadata[b]['size'] - metadata[a]['size'])
    } else {
      // Alphabetical Orger
      keys.sort((a,b) => a.toLowerCase().localeCompare(b.toLowerCase()))
    }

    if(this.args['r']) {
      keys.reverse()
    }

    for(var key of keys) {
      if(this.args['l']) {
        let size = metadata[key]['size']
        let type = metadata[key]['type']
        if(this.args['h']) {
          size = size.toAbbreviatedBytes()
        }
        this.shell.stdout(pad(sizepad, size.toString()) + ' ' + pad(6, type) + ' ' + key)
      } else {
        this.shell.stdout(key)
      }
    }
  }

  getShellOptions() {
    return {'boolean': ['h', 'l']}
  }
}


module.exports = LS
