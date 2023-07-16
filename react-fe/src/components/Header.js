import React from "react";

function Header() {
  return (
    <header>
      <nav
        className="d-flex justify-content-between navbar navbar-expand-lg bg-dark px-3 fixed-top"
        data-bs-theme="dark"
      >
        <div className="container-fluid justify-content-start">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="fa-solid fa-bars-staggered"></span>
          </button>
          <a className="navbar-brand" href="index.html">
            BLAC COFFEE
          </a>
        </div>

        <div className=" collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="index2.html">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="menu.html">
                Menu
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="products.html">
                Products
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                data-bs-toggle="modal"
                data-bs-target="#contact"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
