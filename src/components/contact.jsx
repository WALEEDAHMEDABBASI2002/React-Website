import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import emailjs from "emailjs-com";

const initialState = {
  name: "",
  email: "",
  message: "",
};

const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const clearState = () => setState({ ...initialState });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        "***************",   // 🔹 replace with your EmailJS service ID
        "***************",   // 🔹 replace with your EmailJS template ID
        e.target,
        "****************"   // 🔹 replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log("✅ Email sent:", result.text);
          setStatus("sent");
          clearState();
        },
        (error) => {
          console.error("❌ Email failed:", error.text);
          setStatus("error");
        }
      );
  };

  return (
    <div style={{ overflow: 'visible' }}>
      <div id="contact">
        <div className="container">
          {/* LEFT SIDE: Contact Form */}
          <div
            className="col-md-8"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            <div className="row">
              <div
                className="section-title"
                data-aos="flip-left"
                data-aos-delay="100"
                data-aos-duration="900"
              >
                <h2>Get a free consultation now!</h2>
                <p>
                  Please fill out the form below to send us an email and we will
                  get back to you as soon as possible.
                </p>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6" data-aos="flip-up" data-aos-delay="200">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Name"
                        value={name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="col-md-6" data-aos="flip-up" data-aos-delay="300">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        value={email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="form-group" data-aos="flip-up" data-aos-delay="400">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder="Message"
                    value={message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn btn-custom btn-lg"
                  data-aos="zoom-in"
                  data-aos-delay="500"
                  disabled={status === "sending"}
                >
                  {status === "sending" ? "Sending..." : "Send Message"}
                </button>

                {status === "sent" && (
                  <p style={{ color: "green", marginTop: "10px" }}>
                    ✅ Message sent successfully!
                  </p>
                )}
                {status === "error" && (
                  <p style={{ color: "red", marginTop: "10px" }}>
                    ❌ Something went wrong. Try again later.
                  </p>
                )}
              </form>
            </div>
          </div>

          {/* RIGHT SIDE: Contact Info */}
          <div
            className="col-md-3 col-md-offset-1 contact-info"
            data-aos="flip-right"
            data-aos-duration="1200"
            data-aos-once="true"
          >
            <div className="contact-item">
              <h3>Contact Info</h3>
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> Address
                </span>
                {props.data ? props.data.address : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> Phone
                </span>{" "}
                {props.data ? props.data.phone : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Email
                </span>{" "}
                {props.data ? props.data.email : "loading"}
              </p>
            </div>
          </div>

          {/* SOCIAL ICONS */}
          <div
            className="col-md-12"
            data-aos="fade-up"
            data-aos-delay="600"
            data-aos-duration="900"
          >
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    <a href={props.data ? props.data.facebook : "/"}>
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.twitter : "/"}>
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.youtube : "/"}>
                      <i className="fa fa-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div> 
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER - Only show on home page */}
      {isHomePage && (
        <div id="footer" data-aos="fade-up" data-aos-delay="800">
          <div className="container text-center">
            <p>&copy; Created by Waleed Ahmed Abbasi</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
