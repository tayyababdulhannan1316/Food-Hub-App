import React from "react";
import Hero from "./Hero";
import Discount from "./Discount";
import Menu from "../Menu";
import About from "../About";
import BookTable from "../BookTable";
import CustomerReviews from "../../../components/Customers/CustomerReviews";

const Home = () => {
  return (
    <main>
      <section id="hero-section">
        <Hero />
      </section>

      <Discount />

      <section id="menu-section">
        <Menu />
      </section>

      <section id="about-section">
        <About />
      </section>

      <section id="booktable-section">
        <BookTable />
      </section>

      <section id="reviews-section">
        <CustomerReviews />
      </section>
    </main>
  );
};

export default Home;






























// import React from 'react'

// import Hero from "./Hero"
// import Discount from './Discount'
// import Menu from '../Menu'
// import About from '../About'
// import BookTable from '../BookTable'
// import CustomerReviews from '../../../components/Customers/CustomerReviews'

// const Home = () => {
//   return (
//     <main>
//     <Hero />
//     <Discount />
//     <section id="menu-section">
//         <Menu />
//       </section>
//       <section id="about-section">
//       <About />
//       </section>
//       <section id="booktable-section">
//         <BookTable />
//       </section>
//       <CustomerReviews />
//     </main>
//   )
// }

// export default Home
