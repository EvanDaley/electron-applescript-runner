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
    const label = this.displayText(name, shortcut)
    const execute = () => { this.runApplescript(content) }

    return { name, content, shortcut, label, execute, value: name }
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
    let formattedString = name

    const words = formattedString.split(/(?=[A-Z])/);
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }

    formattedString = words.join(" ").replace("_", ":")

    if (shortcut) {
      formattedString = `[${shortcut}] ${formattedString}`
    }

    return formattedString
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
