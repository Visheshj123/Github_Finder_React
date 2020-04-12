import React, { Fragment, useState, useEffect, useContext } from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink, Redirect } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import axios from 'axios'
import Alert from './components/layout/Alert'
import About from './components/pages/About'
import OneUser from './components/users/OneUser'
import GithubContext from './context/github/githubContext'
import Home from './components/pages/Home'
import './App.css';
import GithubState from './context/github/GithubState'
import AlertState from './context/alert/AlertState'

const App = (props) =>  {

  const githubContext = useContext(GithubContext)

    return (
      <GithubState>
        <AlertState>
        <Router>
      <div className="App">
    <Navbar title='Github Finder' icon='fab fa-github' ></Navbar>
    <div className="container">
          <Alert></Alert>
            <Switch>
              <Route exact path='/' component={Home}></Route>
              <Route exact path='/about' component={About}></Route>
              <Route exact path='/user/:login' component= {OneUser}></Route>
            </Switch>

    </div>
    </div>
  </Router>
   </AlertState>
</GithubState>);


}

export default App;
