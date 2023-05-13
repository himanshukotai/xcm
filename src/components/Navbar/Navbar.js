import { NavLink } from "react-router-dom";
import Logo from "../../img/logo.jfif";
import "./Navbar.css";
// import React, { Component } from "react";
// import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg color-nav row">
      <div className="container-fluid">
        <div className="col">
          <NavLink className="navbar-brand" to="/">
            <img src={Logo} alt="logo" className="logo-size" />
          </NavLink>
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
              <NavLink className="nav-link active" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink className="nav-link" to="/Showcase">
                Showcase
              </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink className="nav-link " to="/Services">
                Services
              </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink className="nav-link" to="/About">
                About
              </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink className="nav-link" to="/Contact">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
