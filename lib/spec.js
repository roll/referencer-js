const { generateDocument } = require('./document')
const { generateReference } = require('./reference')

// Resource

test('generateDocument', async () => {
  const content = generateDocument('lib', 'README.md')
  expect(content)
})

test('generateReference', async () => {
  const content = generateReference('lib')
  expect(content)
})
