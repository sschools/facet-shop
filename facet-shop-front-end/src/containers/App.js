import React, { Component } from 'react';
import '../styles/App.css';

import { Route, Switch, HashRouter } from 'react-router-dom'

import Home from "./Home"
import Store from "./Store"
import axios from "axios"

class App extends Component {
constructor(){
  super()
  this.state= {
    user: ""
  }
}

  componentDidMount(){
      this._fetchProducts();
   }
   _fetchProducts = () => {
      axios.get('http://localhost:8080')
         .then(response => {
            console.log("response", response);
         })
   }

  makeUser = (userInfo) => {
    this.setState({
        user: userInfo
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header gem-header d-flex justify-content-center align-items-center">
          <h1 className="App-title facet-title">Facet</h1>
        </header>
        <HashRouter>
          <Switch>
            <Route exact path="/" component={(props) => <Home {...props} {...this.state} makeUser={this.makeUser}/>}/>
            <Route exact path="/store" component={() => <Store {...this.state}/>} />
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default App;
