export function strikethrough(node) {
  Object.assign(node, {
    tagName: 'Text',
    properties: {
      style: {textDecorationLine: 'line-through', textDecorationStyle: 'solid'}
    }
  })
}
