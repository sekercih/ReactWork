import React from "react";

import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import logo from "../img/logo.png";

function MyNav() {
  return (
    <div>
      <Navbar bg="light" variant="light" expand="lg">
        <Navbar.Brand href="#home"></Navbar.Brand>
        <img src={logo} alt="" />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Kurslar</Nav.Link>
            <Nav.Link href="#link">Kişiler</Nav.Link>
            <Nav.Link href="#link">İletişim</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default MyNav;
