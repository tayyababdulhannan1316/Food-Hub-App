import React from "react";
import { Button } from "antd";
import aboutimage from "../../../assets/images/about.jpg";

const AboutPage = () => {
  return (
    <section className="about-section">
      <div className="container about-container">
        <div className="row align-items-center">
          {/* Left: Burger Image */}
          <div className="col-lg-6 col-md-12 text-center mb-4 mb-lg-0">
            <img
              src={aboutimage}
              alt="Burger"
              className="about-burger-img"
            />
          </div>

          {/* Right: Content */}
          <div className="col-lg-6 col-md-12 text-white about-content">
            <h2 className="about-title">We Are Feane</h2>
            <p className="about-text">
              Welcome to <strong>Feane</strong> — where every bite tells a story.
              Our burgers are crafted with passion, freshness, and a touch of
              magic. Whether you're craving a juicy classic or something bold and
              new, we’ve got the perfect flavor waiting for you.
            </p>
            <Button
              type="primary"
              shape="round"
              size="large"
              className="about-btn"
            >
              Read More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
