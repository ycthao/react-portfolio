import React from "react";
import "../../style/Footer.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bckco">
      <div className="container-fluid">
        <span>Yeem Chij Thao</span>

        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link" href="/">
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
      </div>
    </nav>
  );
}

export default Navbar;
