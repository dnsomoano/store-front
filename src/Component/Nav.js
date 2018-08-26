import React, { Component } from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <div>
        <Router>
          <section className="nav-bar">
            <ul>
              {/* <li>
              <a className="nav-button" value="accessories">
                Accessories
              </a>
            </li>
            <li>
              <a className="nav-button" value="cases">
                Cases
              </a>
            </li> */}
              <li>
                <a className="nav-button" value="cpu">
                  CPUs
                </a>
              </li>
              <li>
                <a className="nav-button" value="gpu">
                  Graphic Cards
                </a>
              </li>
              {/* <li>
              <a className="nav-button" value="fans">
                Fans/Water cooling
              </a>
            </li>
            <li>
              <a className="nav-button" value="hard-drives">
                Hard Drives
              </a>
            </li> */}
              <li>
                <a className="nav-button" value="motherboard">
                  Motherboards
                </a>
              </li>
              {/* <li>
              <a className="nav-button" value="power-supply">
                Power Supplies
              </a>
            </li>
            <li>
              <a className="nav-button" value="ram">
                Ram
              </a>
            </li> */}
            </ul>
          </section>
        </Router>
      </div>
    );
  }
}

export default Nav;
