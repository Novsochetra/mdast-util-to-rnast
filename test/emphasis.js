import test from 'node:test'
import assert from 'node:assert/strict'
import {toRNast} from '../index.js'

test('emphasis element', async function (t) {
  await t.test(
    'should transform `emphasis` to `<Text style={{fontStyle: "italic"}} />`',
    async function () {
      const mdast = {
        type: 'emphasis',
        value: 'emphasis'
      }

      const actualOutput = toRNast(mdast)
      const expectOutput = {
        type: 'emphasis',
        value: 'emphasis',
        tagName: 'Text',
        properties: {style: {fontStyle: 'italic'}}
      }

      assert.deepEqual(actualOutput, expectOutput)
    }
  )
})
