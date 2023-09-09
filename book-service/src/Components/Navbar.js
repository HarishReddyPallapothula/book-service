import React from "react";
import { NavLink } from "react-router-dom";
import { Icon } from "semantic-ui-react";
import { Navbar, Nav } from "react-bootstrap";
const NavbarHeader = () => {
  return (
    <div className="container-fluid bottom-header-background">
      <div className="container header-navlink">
        <Navbar expand="lg">
          <div className="container-fluid">
            <Navbar.Toggle aria-controls="navbarNav" />
            <Navbar.Collapse id="navbarNav">
              <Nav
                className="ml-auto"
                style={{ width: "100%", justifyContent: "space-between" }}
              >
                <NavLink exact className="nav-link flex-fill " to="/">
                  <Icon name="home"></Icon>Home
                </NavLink>
                <NavLink className="nav-link flex-fill " to="/about">
                  <Icon name="eye"></Icon>About Us
                </NavLink>
                <NavLink className="nav-link flex-fill " to="/services">
                  <Icon name="handshake"></Icon>Services
                </NavLink>
                <NavLink className="nav-link flex-fill" to="/offers">
                  <Icon name="tree"></Icon>Offers
                </NavLink>
                <NavLink className="nav-link flex-fill " to="/bookservice">
                  <Icon name="calendar check outline"></Icon>Book Service
                </NavLink>

                <NavLink className="nav-link flex-fill" to="/contactus">
                  <Icon name="paper plane"></Icon>Contact Us
                </NavLink>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
      </div>
    </div>
  );
};

export default NavbarHeader;
