export function emphasis(node) {
  Object.assign(node, {
    tagName: 'Text',
    properties: {style: {fontStyle: 'italic'}}
  })
}
