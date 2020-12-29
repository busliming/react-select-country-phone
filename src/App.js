import React, { Component } from 'react'
import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import Login from './views/login/Login'
import Home from './views/home/Home'
import Code from './views/code/Code'
import Real from './views/real/Real'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Redirect exact path="/" to="/login" />
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/home" component={Home}></Route>
          <Route exact path="/code" component={Code}></Route>
          <Route exact path="/real" name="real" component={Real}></Route>
        </Switch>
      </Router>
    )
  }
}

export default App;
