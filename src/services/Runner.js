import ApplescriptLoader from "./ApplescriptLoader"

export default class {
  constructor() {
    const applescriptLoader = new ApplescriptLoader()
    this.scripts = applescriptLoader.getScripts()
  }

  findScriptByShortcut(shortcut) {
    return this.scripts.find(item => item.shortcut === shortcut)
  }

  findScriptByName(name) {
    console.log(this.scripts)
    return this.scripts.find(item => item.name === name)
  }
}
