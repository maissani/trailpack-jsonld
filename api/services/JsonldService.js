'use strict'

const Service = require('trails-service')
const _ = require('lodash')
const jsonld = require('jsonld')

/**
 * @module JsonldService
 * @description Json Ld shorthand for trails functions
 */
module.exports = class JsonldService extends Service {

  legacy(){
    return jsonld
  }

  setDictonary(dictionaryName){
    if(!_.isString(dictionaryName)){
      dictionaryName = this.app.config.defaultDictonary
    }
    const config = this.app.config.jsonld
    const dictionaryConfig =  _.pick(_.find(config.dictionaries, {name: dictionaryName}),['name','url'])
    return this.dictionary
  }
}

