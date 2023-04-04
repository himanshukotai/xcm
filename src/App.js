import "./App.css";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import ShowcasePage from "./components/Showcase/ShowcasePage";
import { motion } from "framer-motion";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Contact from "./components/Contact/Contact";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab);

function App() {
  return (
    <div>
      <body>
        <Router>
          <nav>
            <Navbar />
          </nav>
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Showcase" element={<ShowcasePage />} />
              <Route path="/About" element={<About />} />
              <Route path="/Services" element={<Services />} />
              <Route path="/Contact" element={<Contact />} />
            </Routes>
          </div>
          <footer>
            <Footer />
          </footer>
        </Router>
      </body>
    </div>
  );
}

export default App;
