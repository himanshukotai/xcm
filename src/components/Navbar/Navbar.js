import Logo from "../../img/XCM_logo.jpg";
import "./Navbar.css";
import React, { Component } from "react";
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg color-nav row">
      <div className="container-fluid">
        <div className="col">
          <a className="navbar-brand" href="/">
            <img src={Logo} alt="logo" className="logo-size" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div
          className="collapse navbar-collapse col justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav ">
            <li className="nav-item ">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="#Showcase">
                Showcase
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link " href="#Services">
                Services
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="#About">
                About
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="#Contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
