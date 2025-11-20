import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import "./gallery.css";

export const Gallery = (props) => {
  const data = props.data || [];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const totalItems = data.length;

  const nextSlide = useCallback(() => {
    if (isAnimating || totalItems <= 1) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
    setTimeout(() => setIsAnimating(false), 600);
  }, [isAnimating, totalItems]);

  const prevSlide = useCallback(() => {
    if (isAnimating || totalItems <= 1) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);
    setTimeout(() => setIsAnimating(false), 600);
  }, [isAnimating, totalItems]);

  useEffect(() => {
    if (totalItems > 1) {
      const interval = setInterval(nextSlide, 7000);
      return () => clearInterval(interval);
    }
  }, [nextSlide, totalItems]);

  if (!Array.isArray(data) || totalItems === 0) {
    return (
      <section id="portfolio" className="products-section text-center">
        <h2>Our Products</h2>
        <p>Loading products...</p>
      </section>
    );
  }

  return (
    <section id="portfolio" className="products-section">
      <div className="section-title text-center">
        <h2>Our Products</h2>
      </div>

      <div className="carousel-wrapper">
        {/* LEFT ARROW */}
        <button
          className="carousel-arrow left"
          onClick={prevSlide}
          disabled={isAnimating}
        >
          <i className="fa fa-chevron-left"></i>
        </button>

        {/* TRACK */}
        <div className="carousel-track-container">
          <div
            className="carousel-track"
            style={{
              width: `${totalItems * 100}%`,
              transform: `translateX(-${currentIndex * (100 / totalItems)}%)`,
            }}
          >
            {data.map((item, index) => (
              <div
                className="carousel-slide"
                key={index}
                style={{ width: `${100 / totalItems}%` }}
              >
                <div className="product-slide">
                  <div className="product-image-container">
                    <img
                      src={item.largeImage}
                      alt={item.title}
                      className="product-image"
                    />
                  </div>

                  <div className="product-info">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>

                    <ul className="features-list">
                      {Object.keys(item)
                        .filter((key) => key.startsWith("FeaturesList"))
                        .map((key, i) => (
                          <li key={i}>
                            <i className="fa fa-check-circle"></i> {item[key]}
                          </li>
                        ))}
                    </ul>

                    <Link to="/service-page-2" className="btn-product-learn-more">
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT ARROW */}
        <button
          className="carousel-arrow right"
          onClick={nextSlide}
          disabled={isAnimating}
        >
          <i className="fa fa-chevron-right"></i>
        </button>
      </div>

      {/* DOTS */}
      <div className="carousel-dots">
        {data.map((_, index) => (
          <button
            key={index}
            className={`carousel-dot ${
              index === currentIndex ? "active" : ""
            }`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
