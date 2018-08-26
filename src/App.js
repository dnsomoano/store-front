import React, { Component } from "react";
import "./App.css";
import Nav from "./Component/Nav";
import FeaturedProduct from "./Component/FeaturedProduct";
// WORKING ON
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            Resale2Retail Hardware
            {/* <ul>
            <li>
              <select>
                <option value="accessories">Accessories</option>
                <option value="cases">Cases</option>
                <option value="cpu">CPUs</option>
                <option value="gpu">Graphic Cards</option>
                <option value="fans">Fans/Water cooling</option>
                <option value="hard-drives">Hard Drives</option>
                <option value="motherboard">Motherboards</option>
                <option value="power-supply">Power Supplies</option>
                <option value="ram">Ram</option>
              </select>
            </li>
          </ul> */}
          </header>
          <section className="body">
            <Switch>
              <section className="featured-products">
                <Route path="/" exact component={FeaturedProduct} />
                <Nav />
              </section>
              {/* <Route path="/:category" exact component={PhotoList} />
              <Route path="/:category/:index" exact component={PhotoDetail} /> */}
            </Switch>
          </section>
        </div>
      </Router>
    );
  }
}

export default App;
