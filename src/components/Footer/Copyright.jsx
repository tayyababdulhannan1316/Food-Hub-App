import React from "react";
import {
  EnvironmentOutlined,
  PhoneOutlined,
  MailOutlined,
  FacebookFilled,
  TwitterSquareFilled,
  LinkedinFilled,
  InstagramFilled,
  PinterestOutlined,
} from "@ant-design/icons";


const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <div className="container text-center text-md-start">
        <div className="row align-items-start">
          {/* Contact Us */}
          <div className="col-md-4 mb-4 mb-md-0 text-md-start text-center">
            <h5 className="footer-title">Contact Us</h5>
            <p>
              <EnvironmentOutlined /> Pakistan
            </p>
            <p>
              <PhoneOutlined /> Call +92 3041686872
            </p>
            <p>
              <MailOutlined /> tayyab.abdulhannan@gmail.com
            </p>
          </div>

          {/* Brand Info */}
          <div className="col-md-4 mb-4 mb-md-0 text-center">
            <h3 className="footer-brand">Food-Hub</h3>
            <p className="footer-text">
              The best way to find yourself is to lose yourself in the service
              of others.              
            </p>
            <div className="social-icons mt-3">
              <FacebookFilled />
              <TwitterSquareFilled />
              <LinkedinFilled />
              <InstagramFilled />
              <PinterestOutlined />
            </div>
          </div>

          {/* Opening Hours */}
          <div className="col-md-4 mb-4 mb-md-0 text-md-end text-center">
            <h5 className="footer-title">Opening Hours</h5>
            <p>Everyday</p>
            <p>10.00 AM - 10.00 PM</p>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center mt-4 footer-bottom">
          <p>© {year} All Rights Reserved By Tayyab Abdul Hannan</p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
