import React from "react";
import { Row, Col, Card, Button } from "antd";
import pizzaImg from "../../../assets/images/pizzza.jpg";
import pizzzaImg2 from "../../../assets/images/pizzza2.jpg";
import pizzzaImg3 from "../../../assets/images/pizzza3.jpg";
import burgerImg from "../../../assets/images/burger.jpg";
import burgerImg2 from "../../../assets/images/burger2.jpg";
import pastaImg from "../../../assets/images/pasta.jpg";
import pastaImg2 from "../../../assets/images/pasta2.jpg";
import pastaImg3 from "../../../assets/images/pasta3.jpg";
import friesImg from "../../../assets/images/fries.jpg";

const menuData = [
  { id: 1, title: "Delicious Pizza", price: "$20", category: "Pizza", image: pizzaImg },
  { id: 2, title: "Cheese Burger", price: "$15", category: "Burger", image: burgerImg },
  { id: 3, title: "Creamy Pasta", price: "$18", category: "Pasta", image: pastaImg },
  { id: 4, title: "Spicy Pizza", price: "$22", category: "Pizza", image: pizzzaImg2 },
  { id: 5, title: "French Fries", price: "$17", category: "Fries", image: friesImg },
  { id: 6, title: "Italian Pasta", price: "$19", category: "Pasta", image: pastaImg2 },
  { id: 7, title: "Veggie Pizza", price: "$16", category: "Pizza", image: pizzzaImg3 },
  { id: 8, title: "Grilled Burger", price: "$20", category: "Burger", image: burgerImg2 },
  { id: 9, title: "Red Sauce Pasta", price: "$18", category: "Pasta", image: pastaImg3 },
];

const MenuItems = ({ filter }) => {
  const filteredItems =
    filter === "All" ? menuData : menuData.filter((item) => item.category === filter);

  return (
    <div className="menu-items">
      <Row gutter={[24, 24]}>
        {filteredItems.map((item) => (
          <Col xs={24} sm={12} lg={8} key={item.id}>
            <Card className="menu-card" hoverable>
              <div
                className="menu-image"
                style={{ backgroundImage: `url(${item.image})` }}
              ></div>
              <div className="menu-info">
                <h3>{item.title}</h3>
                <p>{item.price}</p>
                <Button type="primary" shape="round" size="large" className="order-btn">
                  Order Now
                </Button>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default MenuItems;
