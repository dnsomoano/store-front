import React, { Component } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import products from "../Data/inventory.json";

class ProductListing extends Component {
  render() {
    const _category = this.props.match.params.category;
    const _productData = products[_category];
    return (
      <div>
        <header>{_productData.title}</header>
        <p>{_productData.description}</p>
        <section className="product-listing">
          {_productData.details.map((photo, i) => {
            return (
              <Link to={`/${_category}/${i}`}>
                <section className="prod-listing-preview">
                <h3>{photo.name}</h3>
                  <img
                    className="photo-preview"
                    src={photo.img}
                    alt={photo.name}
                  />
                  <h5>{photo.price}</h5>
                </section>
              </Link>
            );
          })}
        </section>
      </div>
    );
  }
}

export default ProductListing;
