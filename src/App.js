import React, { Component } from "react";
import "./App.css";
import Nav from "./Component/Nav";
import FeaturedProduct from "./Component/FeaturedProduct";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          Welcome to my store!
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
          <section className="main-container">
            <section className="featured-products">
              <FeaturedProduct />
            </section>
            <Nav />
          </section>
        </section>
      </div>
    );
  }
}

export default App;
