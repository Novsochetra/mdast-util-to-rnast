export function link(node) {
  Object.assign(node, {
    tagName: 'Link',
    properties: {
      url: node.url
    }
  })
}
