import test from 'node:test'
import assert from 'node:assert/strict'
import {toRNast} from '../index.js'

test('strong element', async function (t) {
  await t.test(
    'should transform `strong` to `<Text style={{fontWeight: "bold"}} />`',
    async function () {
      const mdast = {
        type: 'strong',
        value: 'strong'
      }

      const actualOutput = toRNast(mdast)
      const expectOutput = {
        type: 'strong',
        value: 'strong',
        tagName: 'Text',
        properties: {style: {fontWeight: 'bold'}}
      }

      assert.deepEqual(actualOutput, expectOutput)
    }
  )
})
