import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.global.css';
import Runner from "./services/Runner";
import Select from 'react-select';

class Main extends React.Component {
  constructor(props: any) {
    super(props);

    this.state = {
      selectedOption: null,
      runner: new Runner(),
      runImmediately: true,
    };
  }

  resetSelection = () => {
    this.setState({ selectedOption: null })
  }

  handleSelection = selectedOption => {
    console.log(`Option selected:`, selectedOption)

    if (selectedOption) {
      selectedOption.execute()
    }

    this.resetSelection()
  };

  handleKeyPress = event => {
    const inputText = event.nativeEvent.target.value + event.key
    const script = this.state.runner.findScriptByShortcut(inputText)

    if (script) {
      console.log(`Running script ${script.name}`)
      script.execute()
      this.resetSelection(event)
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
        {/*{ JSON.stringify(this.state.selectedOption)}*/}

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
