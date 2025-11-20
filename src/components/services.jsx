import React from "react";

const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div
          className="section-title"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <h2>Our Services</h2>
          <p>We provide the following services to our clients.</p>
        </div>

        <div className="row services-row">
          {props.data
            ? props.data.map((d, i) => (
                <div
                  key={`${d.name}-${i}`}
                  className="col-md-4"
                  data-aos="zoom-in"
                  data-aos-delay={i * 200} // 🎯 cascading delay
                  data-aos-duration="1000"
                >
                  <div className="service-card">
                    <i className={d.icon}></i>
                    <div className="service-desc">
                      <h3>{d.name}</h3>
                      <p>{d.text}</p>
                    </div>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};

export default Services;
