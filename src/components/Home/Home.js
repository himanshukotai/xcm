import React, { Component } from "react";
import "./Home.css";
import slide1 from "../../img/socialmedia2.png";
import slide2 from "../../img/figma.png";
import slide3 from "../../img/coding.png";
import slide4 from "../../img/diego.jpg";
import websvg from "../../img/webdev.svg";
import copywritepng from "../../img/copywriting.png";
import mediamanagementsvg from "../../img/mediamanagement.svg";
import analyticssvg from "../../img/analytics.svg";
import custombrandpng from "../../img/coffee-cup.png";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import useMeasure from "react-use-measure";
import "react-bootstrap";

export default function Home() {
  let { ref, inView } = useInView({ threshold: 0.1 });
  let [ref1, { height }] = useMeasure();
  const services = [
    {
      type: "Web Development",
      image: websvg,
      description:
        "  Lorem ipsum dolor, sit amet consectetur adipisicing elit Repellendus praesentium labore accusamus sequi, voluptatedebitis tenetur in deleniti possimus modi voluptatum neque maiores dolorem unde? Aut dolorum quod excepturi fugit",
    },
    {
      type: "Google Analytics",
      image: analyticssvg,
      description:
        "  Lorem ipsum dolor, sit amet consectetur adipisicing elit Repellendus praesentium labore accusamus sequi, voluptatedebitis tenetur in deleniti possimus modi voluptatum neque maiores dolorem unde? Aut dolorum quod excepturi fugit",
    },
    {
      type: "Social Media Copywriting",
      image: copywritepng,
      description:
        "  Lorem ipsum dolor, sit amet consectetur adipisicing elit Repellendus praesentium labore accusamus sequi, voluptatedebitis tenetur in deleniti possimus modi voluptatum neque maiores dolorem unde? Aut dolorum quod excepturi fugit",
    },
    {
      type: "Content Creation",
      image: mediamanagementsvg,
      description:
        "  Lorem ipsum dolor, sit amet consectetur adipisicing elit Repellendus praesentium labore accusamus sequi, voluptatedebitis tenetur in deleniti possimus modi voluptatum neque maiores dolorem unde? Aut dolorum quod excepturi fugit",
    },
    {
      type: "Custom Brand Logos",
      image: custombrandpng,
      description:
        "  Lorem ipsum dolor, sit amet consectetur adipisicing elit Repellendus praesentium labore accusamus sequi, voluptatedebitis tenetur in deleniti possimus modi voluptatum neque maiores dolorem unde? Aut dolorum quod excepturi fugit",
    },
  ];

  const fadeInAnimation = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
      height: { height },
    },
    exit: { opacity: 0, y: -50 },
  };

  return (
    <div className="container-fluid position-relative">
      <div className="row  bgcolor">
        <div className="col-sm-5 d-flex align-items-center">
          <div className="fadeinTop text-light text-center">
            <p className="h1">Where Strategy meets Creativity</p>
          </div>
        </div>

        <div
          id="carouselExampleSlidesOnly"
          className="carousel slide col-sm-7 d-flex align-items-center "
          data-bs-ride="carousel"
          data-bs-interval="5000"
          data-bs-pause="false"
        >
          <div className="carousel-inner text-center">
            <div className="carousel-item  active ">
              <img src={slide1} className="img-fluid shadows"></img>
            </div>
            <div className="carousel-item  ">
              <img src={slide2} className="img-fluid shadows"></img>
            </div>
            <div className="carousel-item ">
              <img src={slide3} className=" img-fluid shadows"></img>
            </div>
          </div>
          <div className="text-white"></div>
        </div>
      </div>
      <div className="row ">
        <div className="col-sm-2"></div>
        <div className="col-sm-8 backgreen fadeinTop rounded-bottom">
          <div className="row align-items-center">
            <div className="col-sm-5">
              <img src={slide4} className="img-fluid"></img>
            </div>
            <div className=" col-sm-7 text-light justify-content-center">
              <p className=" h5 text-light text-fluid fst-italic">
                “XCM is not only a marketing agency, we are more than that. We
                believe that creativity triggers a unique way of approaching
                different tasks”
              </p>
              <p className="quotealign text-light ">- Charan Nandwani</p>
              <div className="text-end">
                <span>
                  <i class="fa fa-angle-left"></i>
                </span>
                <div class="vr"></div>
                <span>
                  <i class="fa fa-angle-right"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-2"></div>
      </div>
      <AnimatePresence>
        <motion.div ref={ref} className="row div-height">
          {inView && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={fadeInAnimation}
              className="services-container"
            >
              <div className="row text-center m-5">
                <h1>What services we offer?</h1>
              </div>
              <div ref={ref1} className="row align-items-center text-center">
                <div className="row justify-content-center">
                  {services.map((service, i) => (
                    <motion.div
                      key={service.type}
                      className="col-lg-2 col-xs-12 col-centered text-black"
                      initial={{ scale: 1, opacity: 0, translateY: 50 }}
                      animate={{ opacity: 1, translateY: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.3 }}
                    >
                      <motion.div
                        whileHover={{
                          scale: 0.8,
                        }}
                        className=" p-5 text-center shadow-1-strong rounded mb-5 "
                      >
                        <img
                          src={service.image}
                          className=" bg-image img-fluid iconsize"
                        ></img>
                        <h3 class="mb-3">{service.type}</h3>
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
