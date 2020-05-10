import React, { Component } from "react";
import "./About.css";
import arnab from "./arnab.jpg";

export class About extends Component {
  render() {
    return (
      <div className="aboutMainContainer">
        <div className="sectionHeading">About</div>
        <div className="w3-row" style={{ marginTop: "5%" }}>
          <div className="w3-half">
            <div className="aboutContentDesc">
              ChickenSnake, is a video production hub founded by Arnab Moitra,
              the madman ! Acting as an 'axis' where 50+ handpicked artists are
              involved, ChickenSnake provides Film & Photography Services for
              Weddings, Music Videos, Corporate ADs and many more. ​We
              collaborate with Media houses, Consultants and Brands towards
              creating one of the most distinctive Films independently. At
              ChickenSnake, the term 'concept' is taken a little seriously and
              the thought of 'experiment' - a little curiously ! The blend of
              both makes it all.
            </div>
          </div>
          <div className="w3-half">
            <div className="aboutContentImage">
              <img src={arnab} alt="Arnab" className="aboutImage" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
