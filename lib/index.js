const { cli } = require('./cli')
const { generateDocument } = require('./document')
const { generateReference } = require('./reference')

// Module API

module.exports = {
  cli,
  generateDocument,
  generateReference
}
