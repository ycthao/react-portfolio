import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Portofolio from "./pages/PortofolioPage";
import "./style/style.css";

function App() {
  return (
    <>
      THINGS
      <Router>
        <div>
          <Switch>
            <Route exact path="/react-portfolio" component={Home}></Route>
          </Switch>
          <Switch>
            <Route exact path="/contact" component={Contact}></Route>
          </Switch>
          <Switch>
            <Route exact path="/portofolio" component={Portofolio}></Route>
          </Switch>
          <Switch>
            <Route exact path="/Yeem_Chij_Vangsoua_Thao_Resume.pdf"></Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
