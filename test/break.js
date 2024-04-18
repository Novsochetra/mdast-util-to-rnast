import test from 'node:test'
import assert from 'node:assert/strict'
import {toRNast} from '../index.js'

test('break element', async function (t) {
  await t.test('should transform `break` to `<Br />`', async function () {
    const mdast = {
      type: 'break'
    }

    const actualOutput = toRNast(mdast)
    const expectOutput = {
      type: 'break',
      tagName: 'Br',
      properties: {}
    }

    assert.deepEqual(actualOutput, expectOutput)
  })
})
