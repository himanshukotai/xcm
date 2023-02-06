import Logo from "./img/XCM_logo.jpg";
import "./App.css";
import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
// function Header() {}
function App() {
  return (
    <div className="App">
      <Navbar className="color-nav" expand="lg">
        <Navbar.Brand href="">
          <div className="">
            <img src={Logo} alt="logo" />
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-end flex-grow-1 pe-3">
            <Nav.Link href="#Home">Home</Nav.Link>
            <Nav.Link href="#About">About</Nav.Link>
            <Nav.Link href="#Blog">Blog</Nav.Link>
            <Nav.Link href="#Services">Services</Nav.Link>
            <Nav.Link href="#Contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <header className="App-header">
        <h1>Hello World</h1>

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
