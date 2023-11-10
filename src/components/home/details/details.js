import React from "react";
import BrushIcon from "@mui/icons-material/Brush";
import CodeIcon from "@mui/icons-material/Code";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

function Details() {
  return (
    <div className="main-details-section">
      <div className="d-flex justify-content-center mb-4 details-subsection-1">
        Web Development at its Finest
      </div>
      <div className="d-flex justify-content-center details-subsection-2">
        Welcome to WebLanch Technologies where we provide lightning-fast
        creation and solution for web development! This website was born from
        the ground up in just 2 hours. Witness the power of efficient design and
        development as we deliver a seamless and stylish online experience.
        Explore, enjoy, and marvel at what can be achieved in such a short span.
        Innovation meets speed right here!
      </div>
      <div class="d-flex justify-content-around main-icons-section">
        <div className="design-icon-section">
          <BrushIcon className="section-icon" />
          <div>Design</div>
        </div>
        <div className="code-icon-section">
          <CodeIcon className="section-icon" />
          <div>Develop</div>
        </div>
        <div className="deliver-icon-section">
          <LocalShippingIcon className="section-icon" />
          <div>Deliver</div>
        </div>
      </div>
      <div className="d-flex justify-content-center details-subsection-3">
        At our core, we're all about delivering excellence. Experience the
        epitome of smooth, reliable, and fast websites, crafted with precision
        and adhering to the best industry standards. Your digital journey just
        got an upgrade—expect nothing less than perfection from us!
      </div>
    </div>
  );
}

export default Details;
