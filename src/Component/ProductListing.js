import React, { Component } from "react";

class ProductListing extends Component {
  render() {
    return (
      <div>
        <section className="listing-container">
          <header>Motherboards</header>
          {/* #1 */}
          <section className="prod-listing-container">
            <h3>MSI B360 GAMING PLUS LGA 1151</h3>
            <img src="c1.neweggimages.com/NeweggImage/ProductImageCompressAll1280/13-144-154-V11.jpg" />
            <h4>Price: $94.99</h4>
          </section>
          {/* 2 */}
          <section className="prod-listing-container">
            <h3>ASUS ROG Maximus X Hero (Wi-Fi AC) LGA 1151</h3>
            <img src="" />
            <h4>Price: $239.99</h4>
          </section>
          {/* 3 */}
          <section className="prod-listing-container">
            <h3>ASRock Fatal1ty Z370 Gaming K6 LGA 1151</h3>
            <img src="" />
            <h4>Price: $169.99</h4>
          </section>
          {/* 4 */}
          <section className="prod-listing-container">
            <h3>EVGA Z370 FTW, 134-KS-E377-KR, LGA 1151, Intel Z370</h3>
            <img src="" />
            <h4>Price: $179.95</h4>
          </section>
        </section>
      </div>
    );
  }
}

export default ProductListing;
