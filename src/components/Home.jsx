import React, { useState, useEffect } from "react";
import { Header } from "./header";
import { Features } from "./features";
import About from "./about";
import Services from "./services";
import { Gallery } from "./gallery";
import Testimonials from "./testimonials";
import Contact from "./contact";
import JsonData from "../data/data.json";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  const [landingPageData, setLandingPageData] = useState({});

  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div>
      <Header data={landingPageData.Header} />
      <About data={landingPageData.About} />
      <Features data={landingPageData.Features} />
      <Gallery data={landingPageData.Gallery} />
      <Services data={landingPageData.Services} />
      <Testimonials data={landingPageData.Testimonials} />
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default Home;

