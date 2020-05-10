import React, { Component } from "react";
import "./Portfolio.css";
import thumbnail1 from "./thumbnail1.jpeg";
import thumbnail2 from "./thumbnail2.jpeg";

export class Portfolio extends Component {
  render() {
    return (
      <div className="portfolioMainConatiner">
        <div className="sectionHeading">Portfolio</div>
        <div className="w3-row" style={{ marginTop: 20 }}>
          <div className="w3-half portfolioSection w3-display-container">
            <a
              href="https://youtu.be/msYDYRiPYhM"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: 10,
                  marginTop: 10
                }}
                src={thumbnail1}
                alt="Bride and Groom lying down in wedding dress for photoshoot"
              />
            </a>
            <div className="w3-display-middle">
              <i class="fa fa-youtube-play" aria-hidden="true"></i>
            </div>
          </div>
          <div className="w3-half portfolioSection w3-display-container">
            <a
              href="https://youtu.be/Q5lOaf6cghs"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: 10,
                  marginTop: 10
                }}
                src={thumbnail2}
                alt="Class is going on in some college, students are listening to the teachers lecture"
              />
            </a>
            <div className="w3-display-middle">
              <i class="fa fa-youtube-play" aria-hidden="true"></i>
            </div>
          </div>
          <div className="moreOnYoutube">
            <a
              style={{ textDecoration: "none" }}
              target="blank"
              href="https://www.youtube.com/channel/UCF4rzglU88eEVJHmQtQ6kFw/featured"
            >
              More on YouTube{" "}
              <i
                class="fa fa-youtube-play w3-xxlarge w3-text-red"
                aria-hidden="true"
              ></i>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
