'use strict'

const Trailpack = require('trailpack')

module.exports = class JsonldTrailpack extends Trailpack {

  /**
   * TODO document method
   */
  validate () {
    return Promise.resolve();
  }

  constructor (app) {
    super(app, {
      config: require('./config'),
      api: require('./api'),
      pkg: require('./package')
    })
  }
}

