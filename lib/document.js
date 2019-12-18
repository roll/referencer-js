const fs = require('fs')
const config = require('./config')
const { generateReference } = require('./reference')

// Module API

/**
 * Generate document
 */
const generateDocument = (
  packageName,
  document,
  { packagePattern = config.PACKAGE_PATTERN, documentSection = config.DOCUMENT_SECTION } = {}
) => {
  let content = ''
  let replace = false
  const reference = generateReference(packageName, { packagePattern })
  const file = fs.readFileSync(document, 'utf-8')
  for (const line of file.split('\n')) {
    if (line.startsWith(`${documentSection.split(' ')[0]} `)) {
      if (replace) content += `\n${reference}`
      replace = false
    }
    if (line.startsWith(documentSection)) {
      content += `\n${line}`
      replace = true
    }
    if (replace) continue
    content += content ? `\n${line}` : line
  }
  if (replace) content += `\n${reference}`
  return content
}

// System

module.exports = {
  generateDocument
}
