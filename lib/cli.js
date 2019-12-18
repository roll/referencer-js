const fs = require('fs')
const commander = require('commander')
const config = require('./config')
const { generateDocument } = require('./document')

// Module API

/**
 * Command-line interface
 *
 * ```
 * Usage: cli [options] <package> <document>
 *
 * Options:
 *  --in-place                             Output as JSON
 *  --package-pattern <package-pattern>    Package pattern (default: "const { (\w+) } = require\('\.\/(\w+)'\)")
 *  --document-section <document-section>  Document section (default: "## API Reference")
 *  -h, --help                             output usage information
 * ```
 */
const cli = commander
  .arguments('<package> <document>')
  .option('--in-place', 'Output as JSON')
  .option('--package-pattern <package-pattern>', 'Package pattern', config.PACKAGE_PATTERN)
  .option('--document-section <document-section>', 'Document section', config.DOCUMENT_SECTION)
  .action((packageName, document, { inPlace, packagePattern, documentSection }) => {
    const content = generateDocument(packageName, document, { packagePattern, documentSection })
    if (inPlace) return fs.writeFileSync(document, content, 'utf-8')
    console.log(content)
  })

// System
module.exports = {
  cli
}
