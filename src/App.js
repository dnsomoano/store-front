import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Nav from "./Component/Nav";
import FeaturedProduct from "./Component/FeaturedProduct";
// WORKING ON TODO style these pages
import ProductListing from "./Component/ProductListing";
import ProductDetail from "./Component/ProductDetail";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            Resale2Retail Hardware
            {/* <Nav /> */}
          </header>
          <section className="body">
            <Switch>
              <Route path="/" exact component={FeaturedProduct} />
              <Route path="/:category" exact component={ProductListing} />
              <Route path="/:category/:index" exact component={ProductDetail} />
            </Switch>
          </section>
        </div>
      </Router>
    );
  }
}

export default App;
