import React, { useState, useEffect } from "react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";


const reviews = [
  {
    id: 1,
    text: "Absolutely delicious! The burger I ordered was juicy, flavorful, and cooked perfectly. Highly recommend Feane to all food lovers!",
    name: "Sarah Ahmed",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    id: 2,
    text: "The pizza was hot and cheesy, and the crust was so soft! Loved the atmosphere and friendly service. Definitely coming again.",
    name: "Ali Khan",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 3,
    text: "Excellent food and even better service! The pasta was creamy and flavorful — truly the best I’ve had in town!",
    name: "Fatima Noor",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    id: 4,
    text: "Feane never disappoints. The food is top-notch, the ambiance is cozy, and everything is reasonably priced!",
    name: "Hassan Raza",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
];

const CustomerReviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 2) % reviews.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 2 + reviews.length) % reviews.length
    );
  };

  const getVisibleReviews = () => {
    return [
      reviews[currentIndex],
      reviews[(currentIndex + 1) % reviews.length],
    ];
  };

  return (
    <section className="customer-section">
      <div className="container">
        <h2 className="section-heading">What Says Our Customers</h2>

        <div className="review-wrapper">
          {getVisibleReviews().map((review) => (
            <div key={review.id} className="review-card">
              <p className="review-text">“{review.text}”</p>
              <div className="reviewer">
                <img src={review.image} alt={review.name} />
                <h4>{review.name}</h4>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="navigation">
          <button onClick={prevSlide} className="nav-btn">
            <LeftOutlined />
          </button>
          <div className="dots">
            <span className={`dot ${currentIndex === 0 ? "active" : ""}`}></span>
            <span className={`dot ${currentIndex === 2 ? "active" : ""}`}></span>
          </div>
          <button onClick={nextSlide} className="nav-btn">
            <RightOutlined />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
