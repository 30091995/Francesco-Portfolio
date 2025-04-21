import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Projects } from "./components/Projects";

export const App = () => {
  return (
    <div className="fadeIn">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/projects" component={Projects} />
      </Switch>
    </div>
  );
};
