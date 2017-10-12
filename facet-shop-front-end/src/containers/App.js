import React, { Component } from 'react';
import '../styles/App.css';

import { Route, Switch, HashRouter } from 'react-router-dom'

import Home from "./Home"
import Store from "./Store"

class App extends Component {
constructor(){
  super()
  this.state= {
    user: ""
  }
}
  makeUser = (userInfo) => {
    this.setState({
        user: userInfo
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header d-flex justify-content-start align-items-center">
          <h1 className="App-title">Facet</h1>
        </header>
        <HashRouter>
          <Switch>
            <Route exact path="/" component={() => <Home {...this.state} makeUser={this.makeUser}/>}/>
            <Route exact path="/store" component={() => <Store {...this.state}/>} />
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default App;
