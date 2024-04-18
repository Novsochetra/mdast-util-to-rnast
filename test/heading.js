import test from 'node:test'
import assert from 'node:assert/strict'
import {toRNast} from '../index.js'
import {FONT_SIZE_MULTIPLIER} from '../elements/heading.js'

test('heading element', async function (t) {
  await t.test(
    'should transform `heading 1` to `<Text style={{fontSize: 30.5}} />`',
    async function () {
      const mdast = adastHeading(1)

      const actualOutput = toRNast(mdast)
      const expectOutput = expectedOutputRNast(1)

      assert.deepEqual(actualOutput, expectOutput)
    }
  )

  await t.test(
    'should transform `heading 2` to `<Text style={{fontSize: 29}} />`',
    async function () {
      const mdast = adastHeading(2)

      const actualOutput = toRNast(mdast)
      const expectOutput = expectedOutputRNast(2)

      assert.deepEqual(actualOutput, expectOutput)
    }
  )

  await t.test(
    'should transform `heading 3` to `<Text style={{fontSize: 27.5}} />`',
    async function () {
      const mdast = adastHeading(3)

      const actualOutput = toRNast(mdast)
      const expectOutput = expectedOutputRNast(3)

      assert.deepEqual(actualOutput, expectOutput)
    }
  )

  await t.test(
    'should transform `heading 4` to `<Text style={{fontSize: 26}} />`',
    async function () {
      const mdast = adastHeading(4)

      const actualOutput = toRNast(mdast)
      const expectOutput = expectedOutputRNast(4)

      assert.deepEqual(actualOutput, expectOutput)
    }
  )

  await t.test(
    'should transform `heading 5` to `<Text style={{fontSize: 24.5}} />`',
    async function () {
      const mdast = adastHeading(5)

      const actualOutput = toRNast(mdast)
      const expectOutput = expectedOutputRNast(5)

      assert.deepEqual(actualOutput, expectOutput)
    }
  )

  await t.test(
    'should transform `heading 6` to `<Text style={{fontSize: 23}} />`',
    async function () {
      const mdast = adastHeading(6)

      const actualOutput = toRNast(mdast)
      const expectOutput = expectedOutputRNast(6)

      assert.deepEqual(actualOutput, expectOutput)
    }
  )
})

function adastHeading(type) {
  return {
    type: 'heading',
    value: `heading ${type}`,
    depth: type
  }
}

function expectedOutputRNast(type) {
  return {
    type: 'heading',
    value: `heading ${type}`,
    depth: type,
    tagName: 'Text',
    properties: {
      style: {
        fontSize: 32 - type * FONT_SIZE_MULTIPLIER,
        fontWeight: 'bold'
      }
    }
  }
}
