import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Portofolio from "./pages/Portofolio";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home}></Route>
        </Switch>
        <Switch>
          <Route exact path="/contact" component={Contact}></Route>
        </Switch>
        <Switch>
          <Route exact path="/portofolio" component={Portofolio}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
