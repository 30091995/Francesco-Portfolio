import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavigationBar from './components/NavigationBar'
import { Router } from 'react-router-dom';
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects'

function App() {
  return (
    <div className="fadeIn">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/projects" component={Projects}/>
      </Switch>
    </div>
  );
}

export default App;
