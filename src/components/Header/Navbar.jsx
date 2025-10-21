import React, { useEffect, useState } from "react";
import { Button } from "antd";
import { Link, useLocation } from "react-router-dom";
import {
  UserOutlined,
  ShoppingCartOutlined,
  SearchOutlined,
} from "@ant-design/icons";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation();

  // Smooth scroll to section
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80, // offset for header height
        behavior: "smooth",
      });
    }
  };

  // Observe sections on home page
  useEffect(() => {
    if (location.pathname !== "/") return;

    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, [location.pathname]);

  return (
    <header className="navbar-container fixed-top">
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          {/* Brand */}
          <Link to="/" className="navbar-brand brand-text">
            Feane
          </Link>

          {/* Mobile Toggle */}
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
                <Link
                  to="/"
                  className={`nav-link ${activeSection === "hero-section" ? "active" : ""}`}
                  onClick={() => handleScroll("hero-section")}
                >
                  HOME
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/menu"
                  className={`nav-link ${activeSection === "menu-section" ? "active" : ""}`}
                  onClick={() => handleScroll("menu-section")}
                >
                  MENU
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/about"
                  className={`nav-link ${activeSection === "about-section" ? "active" : ""}`}
                  onClick={() => handleScroll("about-section")}
                >
                  ABOUT
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/book-table"
                  className={`nav-link ${activeSection === "booktable-section" ? "active" : ""}`}
                  onClick={() => handleScroll("booktable-section")}
                >
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





























// import React from "react";
// import { Button } from "antd";
// import { Link, useNavigate, useLocation } from "react-router-dom";
// import {
//   UserOutlined,
//   ShoppingCartOutlined,
//   SearchOutlined,
// } from "@ant-design/icons";

// const Navbar = () => {
//   const navigate = useNavigate();
//   const location = useLocation();

//   // Handles Menu click (scrolls if already on home, otherwise navigates)
//   const handleMenuClick = (e) => {
//     e.preventDefault();

//     if (location.pathname === "/") {
//       const menuSection = document.getElementById("menu-section");
//       if (menuSection) {
//         menuSection.scrollIntoView({ behavior: "smooth" });
//       }
//     } else {
//       navigate("/#menu-section");
//     }
//   };

//   return (
//     <header className="navbar-container">
//       <nav className="navbar navbar-expand-lg">
//         <div className="container">
//           {/* Brand */}
//           <Link to="/" className="navbar-brand brand-text">
//             Food-Hub
//           </Link>

//           {/* Toggle for mobile */}
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

//           {/* Links */}
//           <div
//             className="collapse navbar-collapse"
//             id="navbarSupportedContent"
//           >
//             <ul className="navbar-nav mx-auto mb-2 mb-lg-0 nav-links">
//               <li className="nav-item">
//                 <Link
//                   to="/"
//                   className={`nav-link ${
//                     location.pathname === "/" ? "active" : ""
//                   }`}
//                 >
//                   HOME
//                 </Link>
//               </li>

//               <li className="nav-item">
//                 {/* Smooth scroll handler */}
//                 <a
//                   href="/#menu-section"
//                   onClick={handleMenuClick}
//                   className={`nav-link ${
//                     location.pathname === "/menu" ? "active" : ""
//                   }`}
//                 >
//                   MENU
//                 </a>
//               </li>

//               <li className="nav-item">
//                 <Link
//                   to="/about"
//                   className={`nav-link ${
//                     location.pathname === "/about" ? "active" : ""
//                   }`}
//                 >
//                   ABOUT
//                 </Link>
//               </li>

//               <li className="nav-item">
//                 <Link
//                   to="/book-table"
//                   className={`nav-link ${
//                     location.pathname === "/book-table" ? "active" : ""
//                   }`}
//                 >
//                   BOOK TABLE
//                 </Link>
//               </li>
//             </ul>

//             {/* Icons + Button */}
//             <div className="d-flex align-items-center gap-3">
//               <UserOutlined className="nav-icon" />
//               <ShoppingCartOutlined className="nav-icon" />
//               <SearchOutlined className="nav-icon" />
//               <Button
//                 type="primary"
//                 className="order-btn"
//                 shape="round"
//                 size="large"
//               >
//                 Order Online
//               </Button>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;