'use strict'

const Trailpack = require('trailpack')

module.exports = class JsonldTrailpack extends Trailpack {

  /**
   * TODO document method
   */
  validate () {
    if (!this.app.config.jsonld) {
      return Promise.reject(
        new Error('There is not jsonld.js under ./config,' +
          ' check it\'s load in ./config/index.js or create it !')
      )
    }
    return Promise.resolve()
  }

  constructor (app) {
    super(app, {
      config: require('./config'),
      api: require('./api'),
      pkg: require('./package')
    })
  }
}
