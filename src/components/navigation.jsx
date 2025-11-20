import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Logo } from "./Logo";

export const Navigation = (props) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <Link className="navbar-brand page-scroll" to="/" aria-label="BPOS Digital">
            <Logo size="small" className="logo" />
            <span className="brand-stack">
            </span>
          </Link>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <Link to="/about" onClick={() => window.$ && window.$('.navbar-collapse').collapse('hide')}>
                About
              </Link>
            </li>
            <li>
              {isHomePage ? (
                <a href="#features" className="page-scroll">
                  Features
                </a>
              ) : (
                <Link 
                  to="/" 
                  onClick={(e) => {
                    window.$ && window.$('.navbar-collapse').collapse('hide');
                    setTimeout(() => {
                      const element = document.getElementById('features');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }, 100);
                  }}
                >
                  Features
                </Link>
              )}
            </li>
            <li>
              <Link to="/service-page-2" onClick={() => window.$ && window.$('.navbar-collapse').collapse('hide')}>
                Products
              </Link>
            </li>
            <li>
              {isHomePage ? (
                <a href="#services" className="page-scroll">
                  Services
                </a>
              ) : (
                <Link 
                  to="/" 
                  onClick={(e) => {
                    window.$ && window.$('.navbar-collapse').collapse('hide');
                    setTimeout(() => {
                      const element = document.getElementById('services');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }, 100);
                  }}
                >
                  Services
                </Link>
              )}
            </li>
            <li>
              {isHomePage ? (
                <a href="#testimonials" className="page-scroll">
                  Testimonials
                </a>
              ) : (
                <Link 
                  to="/" 
                  onClick={(e) => {
                    window.$ && window.$('.navbar-collapse').collapse('hide');
                    setTimeout(() => {
                      const element = document.getElementById('testimonials');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }, 100);
                  }}
                >
                  Testimonials
                </Link>
              )}
            </li>
            <li>
              <Link to="/partnerships" onClick={() => window.$ && window.$('.navbar-collapse').collapse('hide')}>
                Partnerships
              </Link>
            </li>
            <li>
              <Link to="/embroidery" onClick={() => window.$ && window.$('.navbar-collapse').collapse('hide')}>
                Embroidery
              </Link>
            </li>
            <li>
              {isHomePage ? (
                <a href="#contact" className="page-scroll">
                  Contact
                </a>
              ) : (
                <Link 
                  to="/" 
                  onClick={(e) => {
                    window.$ && window.$('.navbar-collapse').collapse('hide');
                    setTimeout(() => {
                      const element = document.getElementById('contact');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }, 100);
                  }}
                >
                  Contact
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};


/*<li>
              <a href="#team" className="page-scroll">
                Team
              </a>
            </li>*/