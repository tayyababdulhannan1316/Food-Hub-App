import React from "react";
import { Input, DatePicker, Select, Button } from "antd";


const { Option } = Select;

const Booking = () => {
  return (
    <section className="book-table-section">
      <div className="container">
        <div className="row align-items-start">
          {/* Left Side: Heading + Form */}
          <div className="col-lg-6 col-md-12 book-form">
            <h2 className="book-heading">Book a Table</h2>

            <form className="booking-form">
              <Input
                placeholder="Your Name"
                className="form-input"
                size="large"
              />
              <Input
                placeholder="Phone Number"
                className="form-input"
                size="large"
              />
              <Input
                placeholder="Your Email"
                className="form-input"
                size="large"
              />

              <Select
                placeholder="How Many Persons"
                className="form-input"
                size="large"
              >
                <Option value="1">1 Person</Option>
                <Option value="2">2 Persons</Option>
                <Option value="3">3 Persons</Option>
                <Option value="4">4 Persons</Option>
                <Option value="5">5+ Persons</Option>
              </Select>

              <DatePicker
                placeholder="Select Date"
                className="form-input"
                size="large"
                style={{ width: "100%" }}
              />

              <Button
                type="primary"
                shape="round"
                size="large"
                className="book-btn"
              >
                Book Now
              </Button>
            </form>
          </div>

          {/* Right Side: Google Map */}
          <div className="col-lg-6 col-md-12 map-section">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.9905569062363!2d67.05080757531647!3d24.799222247017544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f9f6e8d301f%3A0xd3b4c2b7e3b57a5!2sBurger%20O%20Clock!5e0!3m2!1sen!2s!4v1686982380098!5m2!1sen!2s"
              allowFullScreen=""
              loading="lazy"
              className="google-map"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
