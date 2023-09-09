import react from "react";
import { NavLink } from "react-router-dom";
import { Icon } from "semantic-ui-react";
import Navbar from "./Navbar";
const Header = () => {
  return (
    <div>
      <div className="container-fluid top-header-background ">
        <div className="container header container-pad">
          <div className="row justify-content-between ">
            <div className="col">
              <NavLink className="navbar-brand" to="/">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO1cjkXalC_9zv-o30AJk3QZtFYTwFzYVx4g&usqp=CAU"
                  width="50"
                  height="50"
                  className="brand-img"
                  alt="logo image"
                />
                <span>
                  <strong>BOOKSERVICE.COM </strong>
                </span>
              </NavLink>
            </div>
            <div className="col header-contact">
              <p>
                <Icon name="phone" />
                9705172636<br></br>
                <Icon name="mail" />
                harishreddypallapothula@gmail.com<br></br>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container-fluid bottom-header-background">
        <div className="container header container-pad">
          <div className="row justify-content-between header-navlink">
            <div className="col-sm">
              <NavLink className="nav-link" to="/">
                <Icon name="home"></Icon>Home
              </NavLink>
            </div>
            <div className="col-sm">
              <NavLink className="nav-link" to="/about">
                <Icon name="eye"></Icon>About Us
              </NavLink>
            </div>
            <div className="col-sm">
              <NavLink className="nav-link" to="/services">
                <Icon name="handshake"></Icon>Services
              </NavLink>
            </div>
            <div className="col-sm">
              <NavLink className="nav-link" to="/offers">
                <Icon name="tree"></Icon>Offers
              </NavLink>
            </div>
            <div className="col-sm">
              <NavLink className="nav-link" to="/bookservice">
                <Icon name="calendar check outline"></Icon>Book Service
              </NavLink>
            </div>
            <div className="col-sm">
              <NavLink className="nav-link" to="/contactus">
                <Icon name="paper plane"></Icon>Contact Us
              </NavLink>
            </div>
          </div>
        </div>
      </div> */}
      <Navbar />
    </div>
  );
};

export default Header;
