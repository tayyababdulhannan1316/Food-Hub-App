import React, { useState } from "react";
import { Layout } from "antd";
import MenuFilter from "./MenuFilter";
import MenuItems from "./MenuItems";

const { Header, Content } = Layout;

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <Layout className="menu-layout">
      <Header className="menu-header">
        <h1>Our Menu</h1>
      </Header>

      <Content className="menu-content">
        <MenuFilter onFilter={setSelectedCategory} />
        <MenuItems filter={selectedCategory} />
      </Content>
    </Layout>
  );
};

export default Menu;
