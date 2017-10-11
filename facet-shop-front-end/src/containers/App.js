import React, { Component } from 'react';
import '../styles/App.css';

import { Route, Switch, HashRouter } from 'react-router-dom'

import Home from "./Home"
import Store from "./Store"

class App extends Component {
constructor(){
  super()
  this.state= {
    user: {
      name: "",
      finalTotal: 0,
      Items: []
    }
  }
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <HashRouter>
          <Switch>
            <Route exact path="/" component={() => <Home {...this.state}/>}/>
            <Route exact path="/store" component={() => <Store {...this.state}/>}/>
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default App;
