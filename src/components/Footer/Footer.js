import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <section>
          <div className="row">
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase fw-bold mb-4">Contact</h5>
              <ul className="list-unstyled mb-0">
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
                </li>
              </ul>
            </div>

            <div className="col-lg-6 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase fw-bold mb-4">Follow us</h5>

              <div className="row">
                <div className="col-md-6">
                  <ul className="list-unstyled mb-0">
                    <li className="my-2">
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
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <ul className="list-unstyled mb-0">
                    <li className="my-2">
                      <a href="#!" className="text-white text-decoration-none">
                        <FontAwesomeIcon icon="fab fa-brands fa-square-facebook" />{" "}
                        Facebook
                      </a>
                    </li>
                    <li className="my-2">
                      <a href="#!" className="text-white text-decoration-none">
                        <FontAwesomeIcon icon="fab fa-brands fa-square-twitter" />{" "}
                        Twitter
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
