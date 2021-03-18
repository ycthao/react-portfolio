import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "../../style/style.css";

function NavbarTemplate() {
  return (
    <Navbar className="nvbg">
      <Navbar.Brand>Yeem Chij Thao</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/">About Me</Nav.Link>
        <Nav.Link href="/contact">Contact</Nav.Link>
        <Nav.Link href="/portofolio">Portofolio</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default NavbarTemplate;
