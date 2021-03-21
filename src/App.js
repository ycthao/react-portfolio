import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/navbar";
import Footer from "./components/Footer/footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Portfolio from "./pages/PortfolioPage";
import "./style/style.css";

function App() {
  return (
    <Router>
      <Navbar />
      <div>
        <Switch>
          <Route exact path="/react-portfolio" component={Home}></Route>
          <Route exact path="/react-portfolio/contact" component={Contact}></Route>
          <Route exact path="/react-portfolio/portfolio" component={Portfolio}></Route>
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
