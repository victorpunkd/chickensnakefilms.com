import React, { Component } from "react";
import "./Footer.css";
import victor from "./victor_icon.png";

export class Footer extends Component {
  render() {
    return (
      <div className="footerMainSection">
        <div className="footerText">Terms & Conditions</div>
        <div className="footerText" style={{ marginLeft: "-3%" }}>
          <span className="socialIcon">
            <a
              href="https://www.facebook.com/ChickenSnakeFilms/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fa fa-facebook-square"></i>
            </a>
          </span>
          <span className="socialIcon">
            <a
              href="https://www.instagram.com/chickensnake_films/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fa fa-instagram"></i>
            </a>
          </span>
          <span className="socialIcon">
            <a
              href="https://www.youtube.com/channel/UCF4rzglU88eEVJHmQtQ6kFw"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fa fa-youtube"></i>
            </a>
          </span>
          <span className="socialIcon">
            <a
              href="https://twitter.com/ChickensnakeF"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fa fa-twitter"></i>
            </a>
          </span>
        </div>
        <div className="footerText">
          <i class="w3-xxlarge fa fa-copyright" style={{ marginRight: 5 }}></i>
          2019 ChickenSnake Films all rights reserved
        </div>
        <div className="footerText">
          <a
            class="developer_link"
            href="https://victordeb.me"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <i class="fa fa-code"></i> Developed, Designed and Maintained by{" "}
            <img
              alt="victor"
              style={{ width: 25, height: 25, marginTop: -6 }}
              src={victor}
            />{" "}
            victordeb.me
          </a>
        </div>
      </div>
    );
  }
}

export default Footer;
