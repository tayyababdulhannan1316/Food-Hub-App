import React from "react";
import { Button } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import burgerImg from "../../../assets/images/burger.jpg";
import pizzaImg from "../../../assets/images/pizzza.jpg";


const discounts = [
  {
    id: 1,
    title: "Tasty Sundays",
    discount: "20% Off",
    img: burgerImg,
  },
  {
    id: 2,
    title: "Pizza Days",
    discount: "15% Off",
    img: pizzaImg,
  },
];

const Discount = () => {
  return (
    <section className="discount-section">
      <div className="container">
        <div className="row">
          {discounts.map((item) => (
            <div key={item.id} className="col-md-6 mb-4">
              <div className="discount-card">
                <div className="img-wrapper">
                  <img src={item.img} alt={item.title} />
                </div>
                <div className="content">
                  <h3>{item.title}</h3>
                  <h2>{item.discount}</h2>
                  <Button
                    type="primary"
                    shape="round"
                    icon={<ShoppingCartOutlined />}
                    className="order-btn"
                  >
                    Order Now
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Discount;
