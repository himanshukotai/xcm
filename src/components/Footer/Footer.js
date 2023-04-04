import React from "react";
import "./Footer.css";
<<<<<<< HEAD

export default function Footer() {
  return (
    <footer className="bg-dark text-center text-white py-4">
=======
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-4">
>>>>>>> main
      <div className="container">
        <section>
          <div className="row">
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase fw-bold mb-4">Contact</h5>
              <ul className="list-unstyled mb-0">
<<<<<<< HEAD
                <li className="mb-3">
                  <i className="fas fa-home me-3 text-secondary"></i> Charan
                  Nandwani
                </li>
                <li className="mb-3">
                  <i className="fas fa-envelope me-3 text-secondary"></i>
                  charzoxd@gmail.com
                </li>
                <li className="mb-3">
                  <i className="fas fa-phone me-3 text-secondary"></i>{" "}
                  Eindhoven, Netherlands
=======
                <li className="my-2">
                  <FontAwesomeIcon icon={faPhone} /> +31 6 12 34 56 78
                  {/* +31 6 57 81 96 38 */}
                </li>
                <li className="my-2">
                  <FontAwesomeIcon icon={faEnvelope} /> charzoxd@gmail.com
                </li>
                <li className="my-2">
                  <FontAwesomeIcon icon={faLocationDot} /> Eindhoven,
                  Netherlands
>>>>>>> main
                </li>
              </ul>
            </div>

            <div className="col-lg-6 col-md-6 mb-4 mb-md-0">
<<<<<<< HEAD
              <h5 className="text-uppercase">Links</h5>
=======
              <h5 className="text-uppercase fw-bold mb-4">Follow us</h5>
>>>>>>> main

              <div className="row">
                <div className="col-md-6">
                  <ul className="list-unstyled mb-0">
                    <li className="my-2">
<<<<<<< HEAD
                      <a href="#!" className="text-white text-decoration-none">
                        Link 1
                      </a>
                    </li>
                    <li className="my-2">
                      <a href="#!" className="text-white text-decoration-none">
                        Link 2
=======
                      <a
                        href="https://www.linkedin.com/company/xchrzomarketing/about/"
                        target="_blank"
                        rel="noreferrer"
                        className="text-white text-decoration-none"
                      >
                        <FontAwesomeIcon icon="fab fa-linkedin-in" /> Linkedin
                      </a>
                    </li>
                    <li className="my-2">
                      <a
                        href="https://www.instagram.com/xchrzomarketing/"
                        target="_blank"
                        rel="noreferrer"
                        className="text-white text-decoration-none"
                      >
                        <FontAwesomeIcon icon="fab fa-instagram" /> Instagram
>>>>>>> main
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <ul className="list-unstyled mb-0">
                    <li className="my-2">
                      <a href="#!" className="text-white text-decoration-none">
<<<<<<< HEAD
                        Link 3
=======
                        <FontAwesomeIcon icon="fab fa-brands fa-square-facebook" />{" "}
                        Facebook
>>>>>>> main
                      </a>
                    </li>
                    <li className="my-2">
                      <a href="#!" className="text-white text-decoration-none">
<<<<<<< HEAD
                        Link 4
=======
                        <FontAwesomeIcon icon="fab fa-brands fa-square-twitter" />{" "}
                        Twitter
>>>>>>> main
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div
        className="text-center"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        <p className="mb-0">© 2023 XCM.com. All rights reserved.</p>
      </div>
    </footer>
  );
}
