import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.global.css';
import Runner from "./services/Runner";
import Select from 'react-select';
import { ipcRenderer }  from 'electron'

class Main extends React.Component {
  constructor(props: any) {
    super(props);

    this.state = {
      selectedOption: null,
      runner: new Runner(),
      runImmediately: true,
    };

    ipcRenderer.on('asynchronous-message', (evt, message) => {
      // TODO: Improve this line. Theres a few limitations here:
      // 1. This depends on the script existing
      // 2. It depends on the file by name
      // 3. For the real release, the app won't be called electron!
      const launchScript = this.state.runner.findScriptByName('Electron_Activate')
      launchScript.execute();
    });
  }

  resetSelection = () => {
    this.setState({ selectedOption: null })
  }

  handleSelection = (selectedOption: any) => {
    console.log(`Option selected:`, selectedOption)

    if (selectedOption) {
      selectedOption.execute()
    }

    this.resetSelection()
  };

  handleKeyPress = (event: any) => {
    const inputText = event.nativeEvent.target.value + event.key
    const script = this.state.runner.findScriptByShortcut(inputText)

    if (script) {
      console.log(`Running script ${script.name}`)
      script.execute()
      this.resetSelection()
    }
  };

  handleCheckboxChange = () => {
    this.setState({runImmediately: !this.state.runImmediately})
  }

  render() {
    const customStyles = {
      menu: (provided, state) => ({
        ...provided,
        width: state.selectProps.width,
        color: state.selectProps.menuColor,
      }),

      control: (provided, state) => ({
        ...provided,
        width: state.selectProps.width,
        color: state.selectProps.menuColor,
        marginTop: '5px'
      }),
    }

    return (
      <div>
        <h1>Script Runner</h1>

        <Select
          autoFocus="true"
          menuIsOpen={true}
          value={this.state.selectedOption}
          onChange={this.handleSelection}
          onKeyDown={this.handleKeyPress}
          styles={customStyles}
          width='600px'
          options={this.state.runner.scripts}
        />
      </div>

    );
  }
}

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Main} />
      </Switch>
    </Router>
  )
}
