import test from 'node:test'
import assert from 'node:assert/strict'
import {toRNast} from '../index.js'

test('link element', async function (t) {
  await t.test('should transform `link` to `<Link />`', async function () {
    const mdast = {
      type: 'link',
      value: 'link',
      url: 'https://www.google.com'
    }

    const actualOutput = toRNast(mdast)

    const expectOutput = {
      ...mdast,
      tagName: 'Link',
      properties: {
        url: mdast.url
      }
    }

    assert.deepEqual(actualOutput, expectOutput)
  })
})
