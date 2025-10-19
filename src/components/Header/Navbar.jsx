import React from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";
import { UserOutlined, ShoppingCartOutlined, SearchOutlined } from "@ant-design/icons";


const Navbar = () => {
  return (
    <header className="navbar-container">
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          {/* Brand */}
          <Link to="/" className="navbar-brand brand-text">
            Feane
          </Link>

          {/* Toggle for mobile */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Links */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 nav-links">
              <li className="nav-item">
                <Link to="/" className="nav-link active">
                  HOME
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/menu" className="nav-link">
                  MENU
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  ABOUT
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/book-table" className="nav-link">
                  BOOK TABLE
                </Link>
              </li>
            </ul>

            {/* Icons + Button */}
            <div className="d-flex align-items-center gap-3">
              <UserOutlined className="nav-icon" />
              <ShoppingCartOutlined className="nav-icon" />
              <SearchOutlined className="nav-icon" />
              <Button
                type="primary"
                className="order-btn"
                shape="round"
                size="large"
              >
                Order Online
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;




















// import React, { useContext } from "react";
// import { Button } from "antd";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <header>
//       <nav className="navbar navbar-expand-lg bg-primary navbar-dark">
//         <div className="container">
//           <Link to="/" className="navbar-brand">
//             Food-Hub
//           </Link>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//               <li className="nav-item">
//                 <Link to="/" className="nav-link active">
//                   HOME
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link to="/menu" className="nav-link active">
//                   MENU
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link to="/about" className="nav-link active">
//                   ABOUT
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link to="/book-table" className="nav-link active">
//                   BOOKTABLE
//                 </Link>
//               </li>
//             </ul>
//             <form className="d-flex">
//               <Button type="primary"  shape="round" size="large">
//                 Order Online
//               </Button>
//             </form>
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;
