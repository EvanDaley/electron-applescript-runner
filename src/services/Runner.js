import ApplescriptLoader from "./ApplescriptLoader"

export default class {
  constructor() {
    const applescriptLoader = new ApplescriptLoader()
    this.scripts = applescriptLoader.getScripts()
  }
}
