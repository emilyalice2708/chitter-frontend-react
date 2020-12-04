import './App.css';
import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PeepList from './peepList.js'

class App extends Component {
  constructor() {
    super()
    this.state = {
      peeps: [],
      isLoaded: false
    }
    this.allPeeps()
  }

  async allPeeps() {
    try {
      const result = await fetch(
        "https://chitter-backend-api-v2.herokuapp.com/peeps"
      );
      const data = await result.json()
      this.setState({
        isLoaded: true,
        peeps: data
      })
    } catch (e) {
      return null;
    }
  }
  

  render() {
    return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path={"/"} render={(props) => (
            <PeepList {...props} peeps={this.state.peeps}
            />
          )}>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
    );
  }
}

export default App;
