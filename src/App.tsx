import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.global.css';
import Runner from "./services/Runner";

const ActionItem = (actionItem) => {
  return (
    <button type="button" onClick={runner.runApplescript}>
      Write a log
    </button>
  )
}

const ActionItemList = () => {
  const numbers = [1, 2, 3, 4, 5];
  const listItems = numbers.map((number) =>
    <li>{number}</li>
  )

  return listItems
}

const Main = () => {
  // const runner = new Runner()

  return (
    <div>
      <h1>Script Runner</h1>
      <div className="Main">
        {/*<button type="button" onClick={runner.runApplescript}>*/}
        {/*  Write a log*/}
        {/*</button>*/}
      </div>
    </div>
  )
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
