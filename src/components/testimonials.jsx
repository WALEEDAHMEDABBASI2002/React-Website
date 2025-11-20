import React from "react";

const Testimonials = (props) => {
  return (
    <div id="testimonials">
      <div className="container">
        <div
          className="section-title text-center"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <h2>What our clients say</h2>
        </div>

        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div
                  key={`${d.name}-${i}`}
                  className="col-md-4"
                  data-aos="zoom-in"
                  data-aos-delay={i * 200}  // small staggered delay
                >
                  <div className="testimonial">
                    <div className="testimonial-image">
                      <img src={d.img} alt={d.name} />
                    </div>
                    <div className="testimonial-content">
                      <p>"{d.text}"</p>
                      <div className="testimonial-meta">- {d.name}</div>
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

export default Testimonials;
