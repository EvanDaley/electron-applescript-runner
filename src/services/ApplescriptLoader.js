import ApplescriptFileProcessor from "./ApplescriptFileProcessor"

const dirTree = require("directory-tree")

export default class {
  getScripts() {
    const files = this.readScriptsDirectory()
    return this.readAndMapScripts(files)
  }

  readScriptsDirectory() {
    return dirTree('./applescripts').children
  }

  readAndMapScripts(fileTree) {
    const processor = new ApplescriptFileProcessor()

    return fileTree.map((file) => {
      return processor.processFile(file)
    })
  }
}
