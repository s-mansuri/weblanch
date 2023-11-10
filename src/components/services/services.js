import React from "react";
import ContactForm from "./contactform";

function Services() {
  return (
    <div className="d-flex flex-colum justify-content-between main-services-section">
      <div className="col-6 p-4 service-section-1">
        <div style={{ fontSize: "1.4rem", fontWeight: "bold" }}>
          Empower Your Digital Journey with Seamless Web Development
        </div>
        <hr />
        <div>
          Experience end-to-end web development services from UI/UX design to
          solution delivery, deployment assistance, and post go-live support.
          With over 8 years of expertise, our developer team, ranging from 5 to
          12 years of experience, ensures your project's success. Just share
          your requirements, and consider us your one-stop shop for stress-free
          web development. Elevate your brand with our captivating UI/UX design
          and ongoing support, setting new standards in excellence.
        </div>
      </div>
      <div className="col-6 p-4 service-section-2">
        <div>
          <div style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
            We are just one message away. How we can help you?
          </div>
          <hr />
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default Services;
