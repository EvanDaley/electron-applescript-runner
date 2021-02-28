import * as applescript from "applescript"
import inputMapping from "../inputMapping"

const fs = require("fs")
const get = require('lodash.get');
const humanizeString = require('humanize-string');

export default class {
  processFile(file) {
    const content = this.readFile(file)
    const name =  this.nameWithoutExtention(file)
    const shortcut = this.shortcutKeysForFile(name)
    const displayText = this.displayText(name, shortcut)
    const execute = () => { this.runApplescript(content) }

    return { name, content, shortcut, displayText, execute }
  }

  readFile(file) {
    return fs.readFileSync(file.path).toString('utf-8');
  }

  nameWithoutExtention(file) {
    return file.name.replace(file.extension, '')
  }

  shortcutKeysForFile(name) {
    const mapping = inputMapping.find(item => item.name === name)
    return get(mapping, 'shortcut', null)
  }

  displayText(name, shortcut) {
    let result = humanizeString(name)

    if (shortcut) {
      result = `[${shortcut}] ${result}`
    }

    return result
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
