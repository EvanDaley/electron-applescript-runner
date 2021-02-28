import * as applescript from "applescript"
import inputMapping from "../inputMapping"

const fs = require("fs")

export default class {
  processFile(file) {
    const content = this.readFile(file)
    const name =  this.nameWithoutExtention(file)
    const shortcut = this.shortcutKeysForFile(name)
    const execute = () => { this.runApplescript(content) }

    return { name, content, shortcut, execute }
  }

  readFile(file) {
    return fs.readFileSync(file.path).toString('utf-8');
  }

  nameWithoutExtention(file) {
    return file.name.replace(file.extension, '')
  }

  shortcutKeysForFile(name) {
    return inputMapping.find(item => item.name === name)
  }

  displayText(name, shortcut) {
    return `${name}, (${shortcut})`
  }

  runApplescript(scriptContent) {
    applescript.execString(scriptContent, (error, result) => {
      if (error) {
        console.log(error)
      }
      console.log(result)
    })
  }
}
