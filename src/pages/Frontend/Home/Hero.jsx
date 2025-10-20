import React, { useState, useEffect } from "react";
import { Button } from "antd";
import burgerBg from "../../../assets/images/home1.jpg";

const slides = [
  {
    title: "Fast Food Restaurant",
    desc: "Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente ad mollitia laborum quam quisquam esse error unde.",
  },
  {
    title: "Delicious Burgers",
    desc: "Enjoy our freshly made burgers with melted cheese and soft buns. Perfect for your cravings!",
  },
  {
    title: "Crispy Fries & Drinks",
    desc: "Pair your burger with crispy golden fries and a refreshing drink today!",
  },
];

const HeroSection = () => {
  const [index, setIndex] = useState(0);

  // Auto slide every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="hero-section"
      style={{ backgroundImage: `url(${burgerBg})` }}
    >
      <div className="hero-overlay">
        <div className="text-wrapper">
          <div key={index} className="text-slide">
            <h1>{slides[index].title}</h1>
            <p>{slides[index].desc}</p>
            <Button
              type="primary"
              size="large"
              shape="round"
              className="hero-btn"
            >
              Order Now
            </Button>
          </div>

          {/* 🔸 Dot indicators section */}
          <div className="dots">
            {slides.map((_, i) => (
              <span
                key={i}
                className={`dot ${index === i ? "active" : ""}`}
                onClick={() => setIndex(i)}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;


















// import React from "react";
// import { Typography } from "antd";
// import homeImage from "../../../assets/images/home1.jpg"; // ✅ correct import

// const { Title } = Typography;

// const Hero = () => {
//   return (
//     <div
//       className="hero-section"
//       style={{
//         backgroundImage: `url(${homeImage})`, // ✅ dynamic usage
//       }}
//     >
//       <div className="row">
//         <div className="col">
//           <Title level={1}>Hero</Title>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;









