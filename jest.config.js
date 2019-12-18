// Node
exports.displayName = 'node'
exports.testEnvironment = 'node'
exports.collectCoverage = false
exports.coverageReporters = [
  'text-summary',
  'html',
  'lcov',
]
exports.coverageThreshold = {
  global: {
    branches: 50,
    functions: 50,
    statements: 50,
    lines: 50,
  }
}
