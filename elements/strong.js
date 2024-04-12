export function strong(node) {
  Object.assign(node, {
    tagName: 'Text',
    properties: {style: {fontWeight: 'bold'}}
  })
}
