import React, { Component } from "react";

class ProductDetail extends Component {
  render() {
    return (
      <div>
        <section>
          {/* 1 */}
          <section className="details-container">
            <ul>
              <header>MSI</header>
              <h4>Price: $94.99</h4>
              <li>
                Supports 8th Gen Intel Core, Pentium Gold and Celeron Processors
                for Socket LGA1151
              </li>
              <li>Supports DDR4 2666/ 2400/ 2133 MHz</li>
            </ul>
          </section>
          {/* 2 */}
          <section className="details-container">
            <ul>
              <header>ASUS</header>
              <h4>Price: $239.99</h4>
              <li>
                Intel LGA1151 socket only for 8th Gen Intel Core Processors 4 x
                DDR4 Slots / Up to 64GB
              </li>
              <li>
                Designed exclusively for 8th generation Intel Core processors to
                maximize connectivity and speed
              </li>
            </ul>
          </section>
          {/* 3 */}
          <section className="details-container">
            <ul>
              <header>ASRock Fatal1ty</header>
              <h4>Price: $169.99</h4>
              <li>8th Gen Intel CPU supports DDR4 up to 2666.</li>
              <li>
                DDR4 4333+(OC)*/ 4266(OC)/ 4133(OC)/ 4000(OC)/ 3866(OC)/
                3800(OC)/ 3733(OC)/ 3600(OC)/ 3200(OC)/ 2933(OC)/ 2800(OC)/
                2666/ 2400/ 2133
              </li>
            </ul>
          </section>
          <section className="details-container">
            <ul>
              <header>EVGA Z370 FTW</header>
              <h4>Price: $179.95</h4>
              <li>
                Intel Z370 Chipset - supports Intel Core 8th Generation
                Processor Family for LGA1151 socket (i3/i5/i7)
              </li>
              <li>4 Metal Reinforced DDR4 DIMM Dual-Channel 4133MHz+</li>
            </ul>
          </section>
        </section>
      </div>
    );
  }
}

export default ProductDetail;
