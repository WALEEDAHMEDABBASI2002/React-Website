// src/components/about.jsx

import React from "react";
import { Link } from "react-router-dom";

const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          {/* Left Side Image */}
          <div className="col-xs-12 col-md-6" data-aos="fade-right">
            <img
              src="img/about.jpg"
              className="img-responsive"
              alt="About"
            />
          </div>

          {/* Right Side Content */}
          <div className="col-xs-12 col-md-6" data-aos="fade-left">
            <div className="about-text">
              <h2>About Us</h2>

              {/* First Paragraph */}
              <p>{props.data ? props.data.paragraph : "loading..."}</p>

              {/* Second Paragraph (optional) */}
              {props.data && props.data.paragraph2 && (
                <p>{props.data.paragraph2}</p>
              )}

              <h3>Why Choose Us?</h3>

              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>

                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why2.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
              </div>

              {/* Learn More Button */}
              <div className="about-learn-more-btn">
                <Link 
                  to="/about" 
                  className="btn btn-custom btn-lg"
                >
                  Get to know us more.
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// 👇 Export the component properly
export default About;
