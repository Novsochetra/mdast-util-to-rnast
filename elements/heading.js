export const FONT_SIZE_MULTIPLIER = 4

export function heading(node) {
  Object.assign(node, {
    tagName: 'Text',
    properties: {
      style: {
        fontSize: 36 - node.depth * FONT_SIZE_MULTIPLIER,
        fontWeight: 'bold'
      }
    }
  })
}
