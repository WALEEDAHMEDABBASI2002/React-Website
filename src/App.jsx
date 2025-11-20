import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Navigation } from "./components/navigation";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./components/Home";
import ServicePage2 from "./pages/ServicePage2";
import AboutPage from "./pages/AboutPage";
import PartnershipsPage from "./pages/PartnershipsPage";
import EmbroideryPage from "./pages/EmbroideryPage";
import SmoothScroll from "smooth-scroll";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";

// Initialize smooth scroll
export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  // ✅ Initialize AOS animation
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div>
      <ScrollToTop />
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/service-page-2" element={<ServicePage2 />} />
        <Route path="/partnerships" element={<PartnershipsPage />} />
        <Route path="/embroidery" element={<EmbroideryPage />} />
      </Routes>
    </div>
  );
};

export default App;

 /*<Team data={landingPageData.Team} />*/