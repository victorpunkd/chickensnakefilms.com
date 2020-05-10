import React, { Component } from "react";
import "./Services.css";
import corporatePhoto from "./corporate.png";
import wedding from "./wedding.jpg";
import music from "./music.jpg";

export class Services extends Component {
  render() {
    return (
      <div className="servicesMainContainer">
        <div className="sectionHeading">Services</div>
        <div className="w3-row" style={{ marginTop: "5%" }}>
          <div className="w3-third servicesSection">
            <div className="servicesBox">
              <img
                src={music}
                className="serviceImage"
                alt="man playing guitar"
              />
              <div className="serviceHeading">Music Videos</div>
              <div className="serviceDescription">
                A video that fits your music is all you need to hit the market
                hard. Let those eyes hear your music too !
              </div>
            </div>
          </div>
          <div className="w3-third servicesSection">
            <div className="servicesBox">
              <img
                src={wedding}
                className="serviceImage"
                alt="wedding photoshoot of a couple"
              />
              <div className="serviceHeading">
                Wedding Videos Pre Wedding Videos
              </div>
              <div className="serviceDescription">
                Your most awaited event will last for a few days, but the
                memories captured will last forever !
              </div>
            </div>
          </div>
          <div className="w3-third servicesSection">
            <div className="servicesBox">
              <img
                src={corporatePhoto}
                className="serviceImage"
                alt="old corporate man smilling"
              />
              <div className="serviceHeading">
                Corporate Films Promotional Videos Documentary Films
              </div>
              <div className="serviceDescription">
                Your brand deserves a unique visibility. A well tailored story
                can open all doors !
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Services;
