import ApplescriptLoader from "./ApplescriptLoader"

const applescript = require("applescript")
const fs = require("fs")

export default class {
  constructor() {
    const applescriptLoader = new ApplescriptLoader()
    this.scripts = applescriptLoader.getScripts()
  }


}
