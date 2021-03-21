import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Portfolio from "./pages/PortfolioPage";
import "./style/style.css";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/react-portfolio" component={Home}></Route>
        </Switch>
        <Switch>
          <Route exact path="/react-portfolio/contact" component={Contact}></Route>
        </Switch>
        <Switch>
          <Route exact path="/react-portfolio/portfolio" component={Portfolio}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
