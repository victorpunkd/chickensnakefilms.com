import React, { Component } from "react";
import "./App.css";
import { Cover } from "./Cover/Cover";
import { About } from "./About/About";
import { Services } from "./Services/Services";
import { Portfolio } from "./Portfolio/Portfolio";
import { ContactUs } from "./ContactUs/ContactUs";
import { Footer } from "./Footer/Footer";

export class App extends Component {
  handleNavItemClick = navItem => {
    let yPos =
      navItem === "About"
        ? document.getElementById("about").offsetTop
        : navItem === "Services"
        ? document.getElementById("services").offsetTop
        : navItem === "Portfolio"
        ? document.getElementById("portfolio").offsetTop
        : navItem === "ContactUs"
        ? document.getElementById("contactus").offsetTop
        : 0;
    window.scrollTo(0, yPos);
  };

  render() {
    return (
      <div className="App">
        <Cover navItemClicked={this.handleNavItemClick} />
        <div id="about">
          <About />
        </div>
        <div id="services">
          <Services />
        </div>
        <div id="portfolio">
          <Portfolio />
        </div>
        <div id="contactus">
          <ContactUs />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
