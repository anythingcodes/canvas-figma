figma.showUI(__html__, { width: 500, height: 500 })

// TODO: Populate with page-level interactivity
figma.ui.onmessage = msg => {
  figma.closePlugin()
}
