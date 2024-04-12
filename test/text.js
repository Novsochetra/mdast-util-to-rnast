import test from 'node:test'
import assert from 'node:assert/strict'
import {toRNast} from '../index.js'

test('text element', async function (t) {
  await t.test('should transform `text` to `Text`', async function () {
    const mdast = {
      type: 'text',
      value: 'text'
    }

    const actualOutput = toRNast(mdast)
    const expectOutput = {
      type: 'text',
      value: 'text',
      tagName: 'Text',
      properties: {}
    }

    assert.deepEqual(actualOutput, expectOutput)
  })
})
