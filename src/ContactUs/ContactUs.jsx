import React, { Component } from "react";
import "./ContactUs.css";
import contactImage from "./contactUs.jpg";

export class ContactUs extends Component {
  render() {
    return (
      <div className="contactUsMainSection">
        <div className="sectionHeading">Contact Us</div>
        <div className="w3-row">
          <div className="w3-half contactUsSection">
            <img
              src={contactImage}
              alt="contactImage"
              className="contactUsImage"
            />
          </div>
          <div className="w3-half contactUsSection">
            <div className="contactUsInfo">
              <i class="fa fa-phone " style={{ marginRight: 10 }}></i>+91 90834
              55469
            </div>
            <div className="contactUsInfo">
              <i class="fa fa-phone " style={{ marginRight: 10 }}></i>+91 78903
              15448
            </div>
            <div className="contactUsInfo">
              <i class="fa fa-envelope" style={{ marginRight: 10 }}></i>
              chickensnakefilms@gmail.com
            </div>
            <div className="contactUsInfo">
              <i class="fa fa-skype" style={{ marginRight: 10 }}></i>
              arnmoitra
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactUs;
