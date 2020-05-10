import React, { Component } from "react";
import "./Cover.css";
import logo from "./logoPng.png";

export class Cover extends Component {
  constructor() {
    super();
    this.state = {
      mobileNavBarShow: false
    };
  }
  componentDidMount() {
    let video = document.getElementById("myVideo");
    video.play();
  }

  handleFaBarClick = () => {
    this.setState({ mobileNavBarShow: !this.state.mobileNavBarShow });
  };

  render() {
    return (
      <div className="coverMainContainer">
        <video
          className="backgroundVideo w3-hide-small"
          autoplay
          muted
          loop
          id="myVideo"
        >
          <source
            src="https://chickensnakefilms-files.s3.us-east-1.amazonaws.com/cover.mp4"
            type="video/mp4"
          />
          Your browser does not support HTML5 video.
        </video>
        <div className="content">
          <div className="topBar w3-row w3-hide-small">
            <div className="navBar w3-third">
              <span
                onClick={() => this.props.navItemClicked("About")}
                className="navBarItem"
              >
                About
              </span>
              <span
                onClick={() => this.props.navItemClicked("Services")}
                className="navBarItem"
              >
                Services
              </span>
              <span
                onClick={() => this.props.navItemClicked("Portfolio")}
                className="navBarItem"
              >
                Portfolio
              </span>
              <span
                onClick={() => this.props.navItemClicked("ContactUs")}
                className="navBarItem"
              >
                Contact Us
              </span>
            </div>
            <div className="logo w3-third">
              <img
                src={logo}
                className="logoImage"
                alt="chicken snake films logo"
              ></img>
              <span>ChickenSnake Films</span>
            </div>
            <div className="w3-third w3-xlarge socialIcons">
              <span className="navBarItem">
                <a
                  href="https://www.facebook.com/ChickenSnakeFilms/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fa fa-facebook-square"></i>
                </a>
              </span>

              <span className="navBarItem">
                <a
                  href="https://www.instagram.com/chickensnake_films/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fa fa-instagram"></i>
                </a>
              </span>
              <span className="navBarItem">
                <a
                  href="https://www.youtube.com/channel/UCF4rzglU88eEVJHmQtQ6kFw"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fa fa-youtube"></i>
                </a>
              </span>
              <span className="navBarItem">
                <a
                  href="https://twitter.com/ChickensnakeF"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fa fa-twitter"></i>
                </a>
              </span>
            </div>
          </div>
          <div className="w3-hide-large mobileNavBar">
            <div className="mobileSocialIcons">
              <span className="navBarItem">
                <a
                  href="https://www.facebook.com/ChickenSnakeFilms/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fa fa-facebook-square"></i>
                </a>
              </span>
              <span className="navBarItem">
                <a
                  href="https://www.instagram.com/chickensnake_films/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fa fa-instagram"></i>
                </a>
              </span>
              <span className="navBarItem">
                <a
                  href="https://www.youtube.com/channel/UCF4rzglU88eEVJHmQtQ6kFw"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fa fa-youtube"></i>
                </a>
              </span>
              <span className="navBarItem">
                <a
                  href="https://twitter.com/ChickensnakeF"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fa fa-twitter"></i>
                </a>
              </span>
            </div>
            <div className="w3-row">
              <div className="logoMobileView w3-col s8">
                <img
                  src={logo}
                  className="logoImage"
                  alt="chicken snake films logo"
                ></img>
                <span>ChickenSnake Films</span>
              </div>
              <div className=" w3-col s4 hamburgerMenu">
                <i
                  class="fa fa-bars"
                  aria-hidden="true"
                  onClick={this.handleFaBarClick}
                ></i>
              </div>
              <div
                className={`mobileNavBarContainer w3-animate-left ${
                  this.state.mobileNavBarShow ? "" : "w3-hide"
                }`}
              >
                <div
                  onClick={() => this.props.navItemClicked("About")}
                  className="navBarItem"
                >
                  About
                </div>
                <div
                  onClick={() => this.props.navItemClicked("Services")}
                  className="navBarItem"
                >
                  Services
                </div>
                <div
                  onClick={() => this.props.navItemClicked("Portfolio")}
                  className="navBarItem"
                >
                  Portfolio
                </div>
                <div
                  onClick={() => this.props.navItemClicked("ContactUs")}
                  className="navBarItem"
                >
                  Contact Us
                </div>
              </div>
            </div>
          </div>
          <div className="middleContent">
            <div className="motto">Influencing the era</div>
            <div className="tagline">
              Lights.Camera.<span style={{ color: "#729500" }}>Joy</span>
            </div>
            <button
              onClick={() => this.props.navItemClicked("ContactUs")}
              className="w3-btn button"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Cover;
