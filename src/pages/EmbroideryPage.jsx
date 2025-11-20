import React, { useState } from "react";
import "./EmbroideryPage.css";
import Contact from "../components/contact";
import JsonData from "../data/data.json";

const EmbroideryPage = () => {
  const services = [
    {
      title: "Embroidery Designing",
      description:
        "From monograms to custom logo stitching, our embroidery design team creates detailed, production-ready files for apparel and branding.",
      images: [
        "/img/Embroidery/embroidery1.png",
        "/img/Embroidery/embroidery2.png",
        "/img/Embroidery/embroidery3.png",
        "/img/Embroidery/embroidery4.png",
        "/img/Embroidery/embroidery5.png",
        "/img/Embroidery/embroidery6.png",
      ],
    },
    {
      title: "Vector Art Designing",
      description:
        "We convert and design crisp, scalable vector graphics ideal for printing, screen production, and logo enhancement.",
      images: [
        "/img/Embroidery/vector1.png",
        "/img/Embroidery/vector2.png",
        "/img/Embroidery/vector3.png",
        "/img/Embroidery/vector4.png",
        "/img/Embroidery/vector5.png",
        "/img/Embroidery/vector6.png",
      ],
    },
    {
      title: "Logo Designing",
      description:
        "Our creative team develops strong, memorable logos that define your brand identity and enhance visual recognition.",
      images: [
        "/img/Embroidery/logo1.png",
        "/img/Embroidery/logo2.png",
        "/img/Embroidery/logo3.png",
        "/img/Embroidery/logo4.png",
        "/img/Embroidery/logo5.png",
      ],
    },
    {
      title: "Patches Designing",
      description:
        "We design custom embroidered patches for uniforms, clubs, and businesses — crafted to perfection with fine stitching detail.",
      images: [
        "/img/Embroidery/patches1.png",
        "/img/Embroidery/patches2.png",
        "/img/Embroidery/patches3.jpg",
        "/img/Embroidery/patches4.png",
        "/img/Embroidery/patches5.png",
        "/img/Embroidery/patches6.png",
      ],
    },
  ];

  // ===== Carousel state tracking =====
  const [currentIndexes, setCurrentIndexes] = useState(
    services.map(() => 0)
  );

  // ===== Navigation (looping) =====
  const handleNext = (serviceIndex, totalImages) => {
    setCurrentIndexes((prev) => {
      const updated = [...prev];
      updated[serviceIndex] = (updated[serviceIndex] + 2) % totalImages; // move forward by 2
      return updated;
    });
  };

  const handlePrev = (serviceIndex, totalImages) => {
    setCurrentIndexes((prev) => {
      const updated = [...prev];
      updated[serviceIndex] =
        (updated[serviceIndex] - 2 + totalImages) % totalImages; // move backward by 2
      return updated;
    });
  };

  return (
    <div className="embroidery-page">
      {/* ===== HERO SECTION ===== */}
      <section
        className="embroidery-hero"
        style={{
          background: `
            linear-gradient(rgba(2, 53, 96, 0.75), rgba(2, 53, 96, 0.75)),
            url(${process.env.PUBLIC_URL}/img/Embroidery/EmbrioderHero.png)
            center / cover no-repeat
          `,
        }}
      >
        <div className="hero-content left-aligned">
          <h1>Embroidery Designing</h1>
          <p>
            We transform creativity into reality with innovative embroidery,
            vector, and logo designing. From brands to boutiques, our solutions
            blend art with precision for a seamless, professional finish.
          </p>
          <button
            className="hero-btn"
            onClick={() => {
              const el = document.getElementById("contact");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Get Your Logo Now
          </button>
        </div>
      </section>

      {/* ===== SERVICE SECTIONS ===== */}
      {services.map((service, index) => {
        const total = service.images.length;
        const start = currentIndexes[index];
        const visible = [
          service.images[start],
          service.images[(start + 1) % total],
        ];

        return (
          <section key={index} className="service-section">
            <div className="container service-flex">
              <div className="service-text">
                <h2>{service.title}</h2>
                <p>{service.description}</p>
              </div>

              {/* Carousel Section */}
              <div className="carousel-wrapper">
                {/* Left Arrow */}
                <button
                  className="arrow arrow-left"
                  onClick={() => handlePrev(index, total)}
                >
                  &#8249;
                </button>

                {/* Visible two images */}
                <div className="carousel-track">
                  {visible.map((img, idx) => (
                    <div key={idx} className="carousel-item">
                      <img src={img} alt={`${service.title} ${idx + 1}`} />
                    </div>
                  ))}
                </div>

                {/* Right Arrow */}
                <button
                  className="arrow arrow-right"
                  onClick={() => handleNext(index, total)}
                >
                  &#8250;
                </button>
              </div>
            </div>
          </section>
        );
      })}

      <Contact data={JsonData.Contact} />
    </div>
  );
};

export default EmbroideryPage;
