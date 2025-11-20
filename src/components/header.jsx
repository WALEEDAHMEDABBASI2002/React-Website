import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const Header = ({ data }) => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <header id="header">
      <div className="intro">
        {/* === Background Layers for Continuous Slideshow === */}
        <div className="intro-bg"></div>
        <div className="intro-bg"></div>
        <div className="intro-bg"></div>

        {/* === Overlay === */}
        <div className="overlay"></div>

        {/* === Intro Text === */}
        <div className="intro-content" data-aos="fade-up" data-aos-delay="800">
          <h1>{data ? data.title : "Loading..."}</h1>
          <p>{data ? data.paragraph : "Loading..."}</p>
          <a href="#about" className="btn btn-custom btn-lg page-scroll">
            Learn More
          </a>
        </div>
      </div>
    </header>
  );
};
