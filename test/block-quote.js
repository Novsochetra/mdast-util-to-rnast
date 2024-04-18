import test from 'node:test'
import assert from 'node:assert/strict'
import {toRNast} from '../index.js'

test('blockquote element', async function (t) {
  await t.test(
    'should transform `blockquote` to `<BlockQuote />`',
    async function () {
      const mdast = {
        type: 'blockquote'
      }

      const actualOutput = toRNast(mdast)
      const expectOutput = {
        type: 'blockquote',
        tagName: 'BlockQuote',
        properties: {}
      }

      assert.deepEqual(actualOutput, expectOutput)
    }
  )
})
