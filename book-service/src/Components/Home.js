import React from "react";
import { NavLink } from "react-router-dom";
import Services from "./Services";
import Offers from "./Offers";

import CarouselOffer from "./Carousel";

const Home = () => {
  return (
    <div className="back-ground">
      <div className="bg-image">
        <div className="container">
          <h3>Yep, we make it comfy for you</h3>

          <p>
            {" "}
            🌟 Discover, Book, and Enjoy a Wide Range of Premium Services 🌟
          </p>
          <p>
            We are thrilled to extend a warm welcome to you at BOOKSERVICE.COM!{" "}
            <br></br>
            Whether you're in need of expert services or looking to indulge in a
            little self-care,<br></br>
            you've come to the right place.<br></br>
            Our platform is designed to make your life easier <br></br>
            by bringing an array of top-notch services right to your fingertips.
          </p>
          <h3>
            Discover about us{" "}
            <NavLink className="nav-link" to="/about">
              <button className="btn" style={{ backgroundColor: "aqua" }}>
                Here!
              </button>
            </NavLink>
          </h3>
        </div>
        <br></br>
      </div>
      <div>
        <CarouselOffer />
      </div>

      <Services />
      <br></br>
      <Offers />
    </div>
  );
};

export default Home;
