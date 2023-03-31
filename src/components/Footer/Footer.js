import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="bg-dark text-center text-white py-4">
      <div className="container">
        <section>
          <div className="row">
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase fw-bold mb-4">Contact</h5>
              <ul className="list-unstyled mb-0">
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
                </li>
              </ul>
            </div>

            <div className="col-lg-6 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">Links</h5>

              <div className="row">
                <div className="col-md-6">
                  <ul className="list-unstyled mb-0">
                    <li className="my-2">
                      <a href="#!" className="text-white text-decoration-none">
                        Link 1
                      </a>
                    </li>
                    <li className="my-2">
                      <a href="#!" className="text-white text-decoration-none">
                        Link 2
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <ul className="list-unstyled mb-0">
                    <li className="my-2">
                      <a href="#!" className="text-white text-decoration-none">
                        Link 3
                      </a>
                    </li>
                    <li className="my-2">
                      <a href="#!" className="text-white text-decoration-none">
                        Link 4
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
