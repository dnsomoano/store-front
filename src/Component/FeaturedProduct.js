import React, { Component } from "react";

class FeaturedProduct extends Component {
  render() {
    return (
      <div>
        <section className="featured-wrapper">
          <h3>Featured products</h3>
          <img
            className="featured-item"
            src="https://c1.neweggimages.com/ProductImage/14-487-265-S99.jpg"
          />
          <img
            className="featured-item"
            src="https://c1.neweggimages.com/NeweggImage/ProductImage/34-316-435-V10.jpg"
          />
        </section>
      </div>
    );
  }
}

export default FeaturedProduct;
