const fs = require('fs')
const jsdoc2md = require('jsdoc-to-markdown')
const config = require('./config')

// Module API

/**
 * Generate reference
 */
const generateReference = (packageName, { packagePattern = config.PACKAGE_PATTERN } = {}) => {
  let content = ''

  // Extract reference
  const file = fs.readFileSync(`${packageName}/index.js`, 'utf-8')
  for (const line of file.split('\n')) {
    const match = line.match(new RegExp(packagePattern))
    if (!match) continue
    const module = match[2]
    let block = jsdoc2md.renderSync({ files: `${packageName}/${module}.js`, 'heading-depth': 3 })
    block = block
      .split('\n')
      .filter(line => !line.startsWith('<a'))
      .join('\n')
    block = block
      .split('\n')
      .filter(line => !line.startsWith('**Kind'))
      .join('\n')
    if (!block) throw new Error(`No docs for: ${line}`)
    content += block
  }

  if (!content) throw new Error(`No docs for: ${packageName}`)
  return content
}

// System

module.exports = {
  generateReference
}
