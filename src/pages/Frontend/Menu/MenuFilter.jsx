import React, { useState } from "react";

const categories = ["All", "Pizza", "Burger", "Pasta" , "Fries"];

const MenuFilter = ({ onFilter }) => {
  const [activeCategory, setActiveCategory] = useState("All");

  const handleClick = (category) => {
    setActiveCategory(category);
    onFilter(category);
  };

  return (
    <div className="menu-filter">
      {categories.map((cat) => (
        <button
          key={cat}
          className={`filter-btn ${activeCategory === cat ? "active" : ""}`}
          onClick={() => handleClick(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default MenuFilter;
