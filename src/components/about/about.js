import React from "react";
import ReactLogo from "../../assets/applications/React.png";
import AngularLogo from "../../assets/applications/Angular.png";
import FigmaLogo from "../../assets/applications/Figma.png";
import NextLogo from "../../assets/applications/Next.png";
import NodeLogo from "../../assets/applications/Node.png";
import PostmanLogo from "../../assets/applications/Postman.png";
import VueLogo from "../../assets/applications/Vue.png";

function About() {
  return (
    <div className="main-about-section">
      <div className="about-title">
        Free design discussions and estimation | Bug fix warranty
      </div>
      <div className="about-subtitle">
        WebLanch founded by Software developers and the team comprises of proven
        and verstalie web development experts. Some of services we provide on
        these teck stacks but are not limited to these
      </div>
      <div className="d-flex justify-content-between parent-application-section">
        <div className="main-application-section">
          <div className="application-section">
            <img className="image-section" src={ReactLogo} />
          </div>
          <hr className="hr-line-application" />
          <div className="application-name">React </div>
        </div>
        <div className="main-application-section">
          <div className="application-section">
            <img className="image-section" src={NextLogo} />
          </div>
          <hr className="hr-line-application" />
          <div className="application-name">Next </div>
        </div>
        <div className="main-application-section">
          <div className="application-section">
            <img className="image-section" src={VueLogo} />
          </div>
          <hr className="hr-line-application" />
          <div className="application-name">Vue </div>
        </div>
        <div className="main-application-section">
          <div className="application-section">
            <img className="image-section" src={AngularLogo} />
          </div>
          <hr className="hr-line-application" />
          <div className="application-name">Angular </div>
        </div>
        <div className="main-application-section">
          <div className="application-section">
            <img className="image-section" src={NodeLogo} />
          </div>
          <hr className="hr-line-application" />
          <div className="application-name">Node </div>
        </div>
        <div className="main-application-section">
          <div className="application-section">
            <img className="image-section" src={FigmaLogo} />
          </div>
          <hr className="hr-line-application" />
          <div className="application-name">UI/Web Design</div>
        </div>
        <div className="main-application-section last-flex">
          <div className="application-section">
            <img className="image-section" src={PostmanLogo} />
          </div>
          <hr className="hr-line-application" />
          <div className="application-name">APIs development & Integration</div>
        </div>
      </div>
    </div>
  );
}

export default About;
