import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.global.css';
import Runner from "./services/Runner";

const ActionItem = ({ item = { execute: '', displayText: ''} }) => {
  return (
    <button type="button" onClick={item.execute}>
      { item.displayText }
    </button>
  )
}

const ActionItemsList = ({ items = [{ name: ''}] }) => {
  return (
    <div>
      { items.map(function(item) {
        // return <li key={item.name}>{item.name}</li>
        return <ActionItem key={item.name} item={item}/>
      })}
    </div>
  );
}

const Main = () => {
  const runner = new Runner()
  console.log(runner.scripts)

  return (
    <div>
      <h1>Script Runner</h1>
      <div className="Main">
        <ActionItemsList items={runner.scripts}/>
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
