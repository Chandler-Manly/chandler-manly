import "./App.css";
import Home from "./screens/Home";
import Projects from "./screens/Projects";
import Connect from "./screens/Connect";
import ProjectDetails from "./screens/ProjectDetails";
import { Route, Switch } from "react-router-dom";
import React from "react";




const App = () => {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/portfolio" component={Projects} />
        <Route exact path="/projects/:id" component={ProjectDetails} />
        <Route exact path="/connect" component={Connect} />
      </Switch>
    </div>
  );
};

export default App;
