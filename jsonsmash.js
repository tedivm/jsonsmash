#!/usr/bin/env node
'use strict'

// entry point for application
require('./src/prototypes/number.js')
const Session = require('./src/services/session.js')
const Shell = require('./src/services/shell.js')
const prompt = require('cli-input')
const setTitle = require('node-bash-title')
const minimist = require('minimist')


const argv = minimist(process.argv, {
  'boolean': true,
});

if(argv['v'] || argv._[2] == 'version') {
  var pjson = require('./package.json');
  console.log('jsonsmash v' + pjson.version);
  return process.exit(0)
}

if(!process.argv[2]) {
  throw Error('Missing path to json')
}

const current_session = new Session()
const current_shell = new Shell(current_session)
const path_to_json = process.argv[2]

setTitle('JSON SMASH + ' + path_to_json)
current_session.initialize(path_to_json)


const shutdown = function () {
  setTitle('')
  return process.exit(0)
}

process.on('SIGHUP', shutdown)
process.on('SIGINT', shutdown)
process.on('SIGQUIT', shutdown)
process.on('SIGABRT', shutdown)
process.on('SIGTERM', shutdown)

const ps = prompt({
  infinite: true,
  delimiter: ' ',
  name: '>'
});

ps.on('value', function (value, options, ps) {
  let text = value.join(' ')
  if(text === 'q' || text === 'exit') {
    return shutdown()
  }
  current_shell.runCommand(text)
})
ps.run()

