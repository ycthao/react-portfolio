import React from "react";
import "../../style/Footer.css";

function Navbar() {
  return (
    <ul className="nav justify-content-end bckco">
      <li className="nav-item">
        <a className="nav-link" aria-current="page" href="/">
          Home
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/contact">
          Contact
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/portofolio">
          Portofolio
        </a>
      </li>
    </ul>
  );
}

export default Navbar;
