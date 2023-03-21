import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App overflow-hidden">
      <nav>
        <Navbar />
      </nav>
      <header>
        <Home />
      </header>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
