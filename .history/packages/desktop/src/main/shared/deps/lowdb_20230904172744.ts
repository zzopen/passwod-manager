// eslint-disable-next-line @typescript-eslint/no-var-requires
const newRequire = require('esm')(module /*, options*/)
module.exports = newRequire('lowdb')

import esm from 'esm'
