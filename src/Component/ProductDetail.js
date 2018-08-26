import React, { Component } from "react";
import products from "../Data/inventory.json";

class ProductDetail extends Component {
  render() {
    const _category = this.props.match.params.category;
    const _index = this.props.match.params.index;
    const _photoData = products[_category].details[_index];

    return (
      <div>
        <section>
          <section className="product-details">
            <ul>
              <header>{_photoData.name}</header>
              <img src={_photoData.imageURL} alt={_photoData.title} />
              <h4>{_photoData.price}</h4>
              <li>{_photoData.description1}</li>
              <li>{_photoData.description2}</li>
            </ul>
          </section>
        </section>
      </div>
    );
  }
}

export default ProductDetail;
