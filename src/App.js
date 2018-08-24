import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          Welcome to my store!
          <ul>
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
          </ul>
        </header>
        <section className="body">
          <section className="main-container">
            <section className="featured-products">featured products</section>
            <section className="nav-bar">
            <ul>
              <li><a className="nav-button" value="accessories">Accessories</a></li>
              <li><a className="nav-button" value="cases">Cases</a></li>
              <li><a className="nav-button" value="cpu">CPUs</a></li>
              <li><a className="nav-button" value="gpu">Graphic Cards</a></li>
              <li><a className="nav-button" value="fans">Fans/Water cooling</a></li>
              <li><a className="nav-button" value="hard-drives">Hard Drives</a></li>
              <li><a className="nav-button" value="motherboard">Motherboards</a></li>
              <li><a className="nav-button" value="power-supply">Power Supplies</a></li>
              <li><a className="nav-button" value="ram">Ram</a></li>
            </ul>
            </section>
          </section>
        </section>
      </div>
    );
  }
}

export default App;
