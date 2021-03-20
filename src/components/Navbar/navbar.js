import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";
import "../../style/style.css";

function NavbarTemplate() {
  return (
    <Navbar className="nvbg">
      <Nav className="mr-auto">
        <Nav.Link href="/">About Me</Nav.Link>
        <Nav.Link href="/contact">Contact</Nav.Link>
        <Nav.Link href="/portfolio">Portfolio</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default NavbarTemplate;
