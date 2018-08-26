import React, { Component } from "react";
import { Link } from "react-router-dom";
import products from "../Data/inventory.json";

class FeaturedProduct extends Component {
  componentDidMount() {
    console.log({ data: products, keys: Object.keys(products) });
  }

  render() {
    return (
      <section className="featured-products">
        <h1>Featured Products</h1>
        <section className="featured-wrapper">
          {Object.keys(products).map((productKey, i) => {
            return (
              <section className="featured-preview" key={i}>
                <Link to={`/${productKey}`}>
                  <h3>{products[productKey].title}</h3>
                  <img
                    className="featured-item"
                    src={products[productKey].details[0].imageURL}
                    alt={products[productKey].details[0].title}
                  />
                </Link>
              </section>
            );
          })}
          ;
        </section>
      </section>
    );
  }
}

export default FeaturedProduct;
