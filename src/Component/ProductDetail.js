import React, { Component } from "react";
import products from "../Data/inventory.json";

class ProductDetail extends Component {
  render() {
    const _category = this.props.match.params.category;
    const _index = this.props.match.params.index;
    const _photoData = products[_category].details[_index];

    return (
      <div>
        <section className="product-details">
          <section className="item-preview">
            <header>{_photoData.name}</header>
            <img
              className="photo-closeup"
              src={_photoData.img}
              alt={_photoData.title}
            />
          </section>
          <section className="item-preview">
            <h4>{_photoData.price}</h4>
            <h5>{_photoData.description1}</h5>
            <h5>{_photoData.description2}</h5>
          </section>
        </section>
      </div>
    );
  }
}

export default ProductDetail;
