import React from "react";
import Logo from "../../assets/weblanchlogo.png";

function Navbar() {
  const navigateToContact = () => {
    var elmntToView = document.getElementById("contact");
    elmntToView.scrollIntoView();
  };
  return (
    <div className="main-navbar">
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <span>
            <img style={{ maxWidth: "50px" }} src={Logo} />
            <span
              style={{
                fontSize: "1.5rem",
                fontFamily: "'Shadows Into Light', cursive",
              }}
              className="navbar-logo"
            >
              ebLanch
            </span>
          </span>
        </div>
        <div className="navbar-contact-btn" onClick={navigateToContact}>
          Contact Us
        </div>
      </div>
    </div>
  );
}

export default Navbar;
