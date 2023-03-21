import React, { Component } from "react";
export default function Footer() {
  return (
    <footer className="bg-dark text-center text-white">
      <div className="container p-4">
        <section className="">
          <div className="row">
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase fw-bold mb-4">Contact</h5>
              <ul className="list-unstyled mb-0">
                <p>
                  <i className="fas fa-home me-3 text-secondary"></i> Charan
                  Nandwani
                </p>
                <p>
                  <i className="fas fa-envelope me-3 text-secondary"></i>
                  charzoxd@gmail.com,
                </p>
                <p>
                  <i className="fas fa-phone me-3 text-secondary"></i> Eindhoven
                </p>
                <p>
                  <i className="fas fa-print me-3 text-secondary"></i>{" "}
                  Netherlands
                </p>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">Links</h5>

              <ul className="list-unstyled mb-0">
                <a href="#!" className="text-white">
                  Link 1
                </a>
                <li></li>
                <li>
                  <a href="#!" className="text-white">
                    Link 2
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Link 3
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Link 4
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      <div className="text-center p-3" background-color="rgba(0, 0, 0, 0.2);">
        © 2023 Copyright:
        <a className="text-white" href="https://mdbootstrap.com/">
          XCM.com
        </a>
      </div>
    </footer>
  );
}
