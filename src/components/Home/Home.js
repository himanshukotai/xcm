import React, { Component } from "react";
import "./Home.css";
import slide1 from "../../img/socialmedia2.png";
import slide2 from "../../img/figma.png";
import slide3 from "../../img/coding.png";
import slide4 from "../../img/diego.jpg";

export default function Home() {
  return (
    <div className="container-fluid">
      <div className="row bgcolor">
        <div className="col-sm-5">
          <div className="text-light container-set">
            <h1>Where Strategy meets Creativity</h1>
          </div>
        </div>

        <div
          id="carouselExampleSlidesOnly"
          className="carousel slide col-sm-7 justify-content-end "
          data-bs-ride="carousel"
          data-bs-interval="5000"
          data-bs-pause="false"
        >
          <div className="carousel-inner  justify-content-end">
            <div className="carousel-item carousel-fade active ">
              <img src={slide1} className="img-fluid shadows"></img>
            </div>
            <div className="carousel-item carousel-fade ">
              <img src={slide2} className="img-fluid shadows"></img>
            </div>
            <div className="carousel-item carousel-fade">
              <img src={slide3} className="img-fluid shadows"></img>
            </div>
          </div>
          <div className="text-white"></div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-2"></div>
        <div className="col-sm-10 backgreen fadeinRight">
          <div className="row">
            <div className="col-sm-7 justify-content-start">
              <h5 className="text-light container-set fst-italic">
                “XCM is not only a marketing agency, we are more than that. We
                believe that creativity triggers a unique way of approaching
                different tasks”
              </h5>
              <p className="quotealign text-light ">- Charan Nandwani</p>
            </div>
            <div className=" col-sm-5 justify-content-end">
              <img src={slide4} className="img-fluid"></img>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-10 backgreen fadeinLeft">
          <div className="row">
            <div className="col-sm-7 justify-content-start">
              <h5 className="text-light container-set"></h5>
              <p className="quotealign text-light"></p>
            </div>
            <div className=" col-sm-5 justify-content-end">
              <img src={slide4} className="img-fluid"></img>
            </div>
          </div>
        </div>
        <div className="col-sm-2"></div>
      </div>
    </div>
  );
}
