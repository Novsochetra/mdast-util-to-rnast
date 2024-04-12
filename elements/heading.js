export function heading(node) {
  Object.assign(node, {
    tagName: 'Text',
    properties: {
      style: {fontSize: 32 - node.depth * 1.5}
    }
  })
}
