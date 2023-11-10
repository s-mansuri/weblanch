import React, { useEffect } from "react";
import { InlineWidget } from "react-calendly";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import GroupsIcon from "@mui/icons-material/Groups";

function Contact() {
  useEffect(() => {
    setTimeout(() => {
      const el1 = document.querySelector("[data-id='branding']");
      console.log(el1);
    }, 3000);
  }, []);
  return (
    <div className="main-contact-section">
      <div className="calendly-meeting-section">
        <div className="calendly-meeting-title">
          Schedule a meeting for further discussion?
        </div>
        <InlineWidget url="https://calendly.com/shakilmansuri/weblanch-initial-discussion" />
      </div>
      <div className="contact-details-section">
        <div className="contact-us-section">
          <div className="contact-us-call">
            <div className="contact-method">
              <CallIcon />{" "}
              <span className="contact-method-detail">+91-9665163088</span>
            </div>
          </div>
          <div className="contact-us-email">
            <div className="contact-method">
              <EmailIcon />{" "}
              <span className="contact-method-detail">
                smansuri960@gmail.com
              </span>
            </div>
          </div>
          <div className="contact-us-whatsapp">
            <div className="company-whatsapp-link contact-method">
              <WhatsAppIcon />
              <a href="https://wa.me/919665163088" target="_blank">
                <span className="contact-method-detail">Message</span>
              </a>
            </div>
          </div>
        </div>
        <div id="contact" className="company-section">
          <div className="address-section">
            B304, Kalpataru Vihar, Indore, Madhya Pradesh, India, 452001
          </div>
          <div className="company-meeting-link">
            <a
              href="https://calendly.com/shakilmansuri/weblanch-initial-discussion"
              target="_blank"
            >
              <GroupsIcon />{" "}
              <span className="company-meeting-content">
                {" "}
                Schedule Meeting Now
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
