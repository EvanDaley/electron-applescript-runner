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
      runner: new Runner()
    };
  }

  handleChange = selectedOption => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  };

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
      }),
    }

    const { selectedOption } = this.state;

    return (
      <div>
        <h1>Script Runner</h1>

        <Select
          autoFocus="true"
          menuIsOpen={true}
          value={selectedOption}
          onChange={this.handleChange}
          styles={customStyles}
          width='300px'
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
