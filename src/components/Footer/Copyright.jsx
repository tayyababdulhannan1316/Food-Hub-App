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
              <EnvironmentOutlined /> Location
            </p>
            <p>
              <PhoneOutlined /> Call +01 1234567890
            </p>
            <p>
              <MailOutlined /> demo@gmail.com
            </p>
          </div>

          {/* Brand Info */}
          <div className="col-md-4 mb-4 mb-md-0 text-center">
            <h3 className="footer-brand">Feane</h3>
            <p className="footer-text">
              Necessary, making this the first true generator on the Internet.
              It uses a dictionary of over 200 Latin words, combined with
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
            <p>10.00 Am - 10.00 Pm</p>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center mt-4 footer-bottom">
          <p>© {year} All Rights Reserved By Free Html Templates</p>
          <p>© Distributed By ThemeWagon</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;









// import React from 'react'

// const Copyright = () => {
//     const year = new Date().getFullYear()
//   return (
//     <footer className='bg-primary py-2'>
//       <div className='container'>
//         <div className='row'>
//             <div className='col'>
//                 <p className='mb-0 text-white text-center'>&copy; {year}. all Rights Reserved</p>
//             </div>
//         </div>
//       </div>
//     </footer>
//   )
// }

// export default Copyright
