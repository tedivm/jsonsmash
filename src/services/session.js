'use strict'

const fs = require('fs');
const request = require('request')
const url = require("url");


class Session {
  constructor () {

  }

  initialize (path_to_json) {
    this.cwd = []
    this.json = '{}'
    this.data = {}
    var that = this
    if(!!url.parse(path_to_json).hostname) {
      return request.get(path_to_json, function (error, response, body) {
        if (!!error) {
          throw error
        }
        if(response.statusCode >= 400) {

        }
        that.json = body
        that.data = JSON.parse(body)
      });
    } else {
      if(path_to_json[0] != '/') {
          path_to_json = process.cwd() + '/' + path_to_json
      }
      return fs.readFile(path_to_json, function (err, json) {
        if (err) {
          throw err;
        }
        that.json = json
        that.data = JSON.parse(json)
      });
    }
  }
}


module.exports = Session
