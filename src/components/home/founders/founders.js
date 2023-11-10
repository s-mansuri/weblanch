import React from "react";
import Shakil from "../../../assets/founders/Shakil.jpg";
import Iliyas from "../../../assets/founders/Iliyas.jpg";
import Nadim from "../../../assets/founders/Nadim.jpg";

function Founders() {
  return (
    <div className="d-flex flex-column founder-section">
      <div className="team-meet-section">Meet the team</div>
      <div className="d-flex justify-content-around founder-images-section">
        <div className="founder-item">
          <img className="founder-image" src={Iliyas} />
          <div className="founder-name">Iliyas</div>
          <div>Co-Founder & MD</div>
        </div>
        <div className="founder-item">
          <img className="founder-image" src={Shakil} />
          <div className="founder-name">Shakil</div>
          <div className="founder-designation">Founder & CEO</div>
        </div>
        <div className="founder-item">
          <img className="founder-image" src={Nadim} />
          <div className="founder-name">Nadim</div>
          <div>SVP Engineering</div>
        </div>
      </div>
      <div className="mt-4 p-4 team-description-section">
        Our team comprises a talented group of 46 developers, each specializing
        in key areas such as UI/UX Design, Web Development, Front End Mastery,
        Backend Wizardry, Full Stack Prowess, and Project Management. Together,
        we bring a diverse range of skills and expertise to the table, ensuring
        that your project is in capable hands from start to finish. Explore the
        collective brilliance that powers WebLanch and discover the unlimited
        possibilities we can unlock for you.
      </div>
    </div>
  );
}

export default Founders;
