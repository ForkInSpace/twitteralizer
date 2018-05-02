import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch, Link } from "react-router-dom";
import createBrowserHistory from 'history/createBrowserHistory'
import Index from './components/Index';

const history = createBrowserHistory()
// <Router history={history}/>

class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" component={Index} />
        </Switch>
      </div>
    )
  }
}

let documentReady = () => {
  const reactNode = document.getElementById('react');
  if(reactNode){
    ReactDOM.render(
      <Router history={history}>
        <Route component={App} />
      </Router>
      , reactNode);
  }
};

$(documentReady)
