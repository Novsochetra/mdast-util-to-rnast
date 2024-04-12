import test from 'node:test'
import assert from 'node:assert/strict'
import {toRNast} from '../index.js'

test('emphasis element', async function (t) {
  await t.test(
    'should transform `emphasis` to `<Text style={{fontStyle: "italic"}} />`',
    async function () {
      const mdast = {
        type: 'delete',
        value: 'delete'
      }

      const actualOutput = toRNast(mdast)
      const expectOutput = {
        type: 'delete',
        value: 'delete',
        tagName: 'Text',
        properties: {
          style: {
            textDecorationLine: 'line-through',
            textDecorationStyle: 'solid'
          }
        }
      }

      assert.deepEqual(actualOutput, expectOutput)
    }
  )
})
