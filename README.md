# trailpack-jsonld
[![Gitter][gitter-image]][gitter-url]
[![NPM version][npm-image]][npm-url]
[![NPM downloads][npm-download]][npm-url]
[![Build status][ci-image]][ci-url]
[![Dependency Status][daviddm-image]][daviddm-url]
[![Code Climate][codeclimate-image]][codeclimate-url]

:package: Add a Trails service to warp jsonld features

This package is an implementation of [jsonld](https://github.com/digitalbazaar/jsonld.js) in Trails framework.

For the moment it's just a wrapper but in a short amount of time it will symplify the json-ld calls

## Intallation
With yo : 

```
npm install -g yo generator-trails
yo trails:trailpack trailpack-jsonld
```

With npm (you will have to create config file manually) :
 
`npm install --save trailpack-jsonld`

## Configuration
Enable JsonLD
```js
// config/main.js

  packs: [
    ...
    require('trailpack-jsonld')
  ],
```
Check that jsonld config is loaded on index.js
```js
// config/index.js
...
exports.srcds = require('./jsonld')
```

Configure
```js
// config/jsonld.js

module.exports = {

  dictionaries: [{
    name: "schema.org",
    url: "http://schema.org"
  }],

  defaultDictonary: "schema.org"
}

```


## Usage



### Quick Examples

```js
let jsonldLegacyService = this.app.services.JsonldService.legacy()

var doc = {
  "http://schema.org/name": "Manu Sporny",
  "http://schema.org/url": {"@id": "http://manu.sporny.org/"},
  "http://schema.org/image": {"@id": "http://manu.sporny.org/images/manu.png"}
};
var context = {
  "name": "http://schema.org/name",
  "homepage": {"@id": "http://schema.org/url", "@type": "@id"},
  "image": {"@id": "http://schema.org/image", "@type": "@id"}
};

// compact a document according to a particular context
// see: http://json-ld.org/spec/latest/json-ld/#compacted-document-form

jsonldLegacyService.compact(doc, context, function(err, compacted) {
  console.log(JSON.stringify(compacted, null, 2));
  /* Output:
  {
    "@context": {...},
    "name": "Manu Sporny",
    "homepage": "http://manu.sporny.org/",
    "image": "http://manu.sporny.org/images/manu.png"
  }
  */
});
```
For more information check the jsonld repo to see the possibilities : [here](https://github.com/digitalbazaar/jsonld.js) 


## License
A part of this docs are owned by Digitalbazaar the creator of jsonld package.

[MIT](https://github.com/jaumard/trailpack-jsonld/blob/master/LICENSE)

[npm-image]: https://img.shields.io/npm/v/trailpack-jsonld.svg?style=flat-square
[npm-url]: https://npmjs.org/package/trailpack-jsonld
[npm-download]: https://img.shields.io/npm/dt/trailpack-jsonld.svg
[ci-image]: https://travis-ci.org/maissani/trailpack-jsonld.svg?branch=master
[ci-url]: https://travis-ci.org/maissani/trailpack-jsonld
[daviddm-image]: http://img.shields.io/david/maissani/trailpack-jsonld.svg?style=flat-square
[daviddm-url]: https://david-dm.org/maissani/trailpack-jsonld
[codeclimate-image]: https://img.shields.io/codeclimate/github/maissani/trailpack-jsonld.svg?style=flat-square
[codeclimate-url]: https://codeclimate.com/github/maissani/trailpack-jsonld
[gitter-image]: http://img.shields.io/badge/+%20GITTER-JOIN%20CHAT%20%E2%86%92-1DCE73.svg?style=flat-square
[gitter-url]: https://gitter.im/trailsjs/trails
