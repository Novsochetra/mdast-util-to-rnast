import test from 'node:test'
import assert from 'node:assert/strict'
import {toRNast} from '../index.js'

test('root element', async function (t) {
  await t.test('should transform `root` to `View`', async function () {
    const mdast = {
      type: 'root'
    }

    const expectOutput = {
      type: 'root',
      tagName: 'View',
      properties: {}
    }
    assert.deepEqual(toRNast(mdast), expectOutput)
  })
})
