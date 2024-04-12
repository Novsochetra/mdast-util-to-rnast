import {
  root,
  text,
  strong,
  heading,
  emphasis,
  strikethrough
} from './elements/index.js'

export function toRNast(mdast) {
  const nodeTree = structuredClone(mdast)

  convertToRNNode(nodeTree)

  return nodeTree
}

function convertToRNNode(node) {
  if (node.children && node.children.length) {
    node.children.forEach((child) => {
      convertToRNNode(child)
    })
  }

  return toRNNode(node)
}

// TODO: handle support for basic markdown syntax:
// 1. blockquote
// 2. break
// 3. code
// 4. delete (✅)
// 5. emphasis (✅)
// 6. footnote-reference
// 7. heading
// 8. image-reference
// 9. image
// 10. inline-code
// 11. link-reference
// 12. link
// 13. list
// 14. paragraph (✅)
// 15. root (✅)
// 16. strong (✅)
// 17. table-cell
// 18. table-row
// 19. table
// 20. text (✅)
// 21. thematic-break
// 21. footer

function toRNNode(node) {
  switch (node.type) {
    case 'root':
      root(node)
      break

    case 'text':
    case 'paragraph':
      text(node)
      break

    case 'strong':
      strong(node)
      break

    case 'emphasis':
      emphasis(node)
      break

    case 'delete':
      strikethrough(node)
      break

    case 'heading': {
      heading(node)
      return
    }

    default:
      console.warn('Unsupported node type: ', node.type)
      break
  }
}
