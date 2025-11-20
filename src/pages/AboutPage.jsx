import React from "react";
import "./AboutPage.css";
import JsonData from "../data/data.json";
import Contact from "../components/contact";

const AboutPage = () => {
  return (
    <div className="about-page">
      {/* HERO / MISSION */}
      <section className="about-hero"
      style={{
        backgroundImage: `linear-gradient(rgba(2, 53, 96, 0.85), rgba(2, 53, 96, 0.85)), url(${process.env.PUBLIC_URL}/img/about-hero.png)`,
        backgroundSize: "100% 150%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
    }}>
        <div className="container text-center">
          <h1 className="hero-heading">Building Trust. Driving Growth.</h1>
          <p className="hero-subtext">
            <strong>Lorem ipsum dolor</strong> sit amet, consectetur adipiscing elit. Aenean euismod enim id facilisis 
            volutpat. Ut finibus fermentum feugiat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, 
            per inceptos himenaeos.
          </p>
          <p className="hero-mission">
            Lorem ipsum dolo —{" "}
            <b>
              sit amet, consectetur adipiscing elit. Aenean euismod enim id facilisis 
              volutpat. Ut finibus fermentum feugiat.
            </b>
          </p>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="about-overview">
        <div className="container">
          <h2 className="section-heading">Who We Are</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <b>Lorem ipsum dolor</b> 
            sit amet, consectetur adipiscing elit. Aenean euismod enim id facilisis 
            volutpat. Ut finibus fermentum feugiat. Class aptent taciti sociosqu ad litora 
            torquent per conubia nostra, per inceptos himenaeos.
          </p>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="leadership">
        <div className="container">
          <h2 className="section-heading">Our Leadership</h2>
          <div className="row align-items-center">
            <div className="col-md-5 text-center">
              <img
                src="/img/team/Tanzeel Ahmad(Founder).jpg"
                alt="Founder name"
                className="team-photo-large"
              />
              <h3 className="leader-name">Lorem ipsum dolor</h3>
              <p className="leader-title">
                Founder & Business Development Lead
              </p>
            </div>

            <div className="col-md-7 ceo-message">
              <h4 className="message-heading">A Message from Our Founder</h4>
              <p>
                "At <strong>Lorem ipsum dolor</strong>, our vision has always been clear —
                sit amet, consectetur adipiscing elit. Aenean euismod enim id facilisis 
                volutpat. Ut finibus fermentum feugiat. Class aptent taciti sociosqu ad litora 
                torquent per conubia nostra, per inceptos himenaeos."
              </p>
              <p>
                Esit amet, consectetur adipiscing elit. Aenean euismod enim id facilisis 
                volutpat. Ut finibus fermentum feugiat. Class aptent taciti sociosqu ad litora 
                torquent per conubia nostra, per inceptos himenaeos — <b>Integrity, Partnership, and Progress.</b>
              </p>
              <div className="founder-signature">
                <strong>— Lorem ipsum dolor</strong>
                <br />
                Founder & Business Development Lead
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team member */}
      <section className="leadership">
        <div className="container">
          
          <div className="row align-items-center">
            <div className="col-md-5 text-center">
              <img
                src="/img/team/Shahzaib Ahmed.png"
                alt="HOD Name"
                className="team-photo-large"
              />
              <h3 className="leader-name">Lorem ipsum dolor</h3>
              <p className="leader-title">
                Head of Sales
              </p>
            </div>

            <div className="col-md-7 ceo-message">
              
              <p>
                "At <strong>Lorem ipsum dolor</strong>,, sit amet, consectetur adipiscing elit. Aenean euismod enim id facilisis volutpat."
              </p>
              <p>
              Our mission is simple — sit amet, consectetur adipiscing elit. Aenean euismod enim id facilisis volutpat.
              </p>
              <div className="founder-signature">
                <strong>— Lorem ipsum dolor</strong>
                <br />
                Head of Sales
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===============================
     OUR TEAM SECTION
=============================== */}
<section className="team-section">
  <div className="container">
    <h2 className="section-heading text-center">OUR TEAM</h2>
    <p className="section-subtext text-center">
      Meet the passionate professionals driving merchant growth, partner success, 
      and client satisfaction at <strong>BPOS Digital</strong>.
    </p>

    <div className="team-grid">
      {/* Team Member 1 */}
      <div className="team-card">
        <h4 className="team-name">Sarah Malik</h4>
        <p className="team-role">Lead Generation Specialist</p>
        <p className="team-desc">
          Heads our front-end merchant acquisition and partner engagement initiatives. 
          Expert in B2B outreach, channel coordination, and strategic client onboarding.
        </p>
      </div>

      {/* Team Member 2 */}
      <div className="team-card">
        <h4 className="team-name">Hassan Raza</h4>
        <p className="team-role">Customer Support Team Lead</p>
        <p className="team-desc">
        Ensures smooth onboarding and post-sales partner communication. 
        Leads our partner relations and quality-assurance initiatives across all markets.
        </p>
      </div>

      {/* Team Member 3 */}
      <div className="team-card">
        <h4 className="team-name">Ayaz Hussain</h4>
        <p className="team-role">Head Of Design</p>
        <p className="team-desc">
        Oversees the creative direction and execution of all embroidery design projects.
        Leads the design team in developing high-quality, production-ready artwork that meets client and brand standards.
        </p>
      </div>
    </div>
  </div>
</section>

      {/* BUSINESS MODEL */}
      <section className="business-model">
        <div className="container">
          <h2 className="section-heading">Our Channel Partnership Model</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <b>Lorem ipsum dolor</b> 
            sit amet, consectetur adipiscing elit. Aenean euismod enim id facilisis 
            volutpat. Ut finibus fermentum feugiat. Class aptent taciti sociosqu ad litora 
            torquent per conubia nostra, per inceptos himenaeos.
          </p>

          <div className="row model-points">
            <div className="col-md-4 model-card">
              <i className="fa fa-bullseye"></i>
              <h4>Focused Sales Execution</h4>
              <p>We prospect, pitch, and close merchants under your brand — no overlap, no confusion.</p>
            </div>
            <div className="col-md-4 model-card">
              <i className="fa fa-link"></i>
              <h4>Partnership Alignment</h4>
              <p>Our sales process integrates seamlessly with your workflow for smooth merchant handoff.</p>
            </div>
            <div className="col-md-4 model-card">
              <i className="fa fa-line-chart"></i>
              <h4>Performance-Driven Growth</h4>
              <p>We track metrics, optimize campaigns, and scale efficiently to maximize portfolio results.</p>
            </div>
          </div>
        </div>
      </section>

      {/* COMPLIANCE */}
      <section className="compliance">
        <div className="container">
          <h2 className="section-heading">Compliance & Legal Integrity</h2>
          <p>
            We operate in full accordance with <b>PCI-DSS</b> data security standards and
            follow <b>KYC/AML</b> guidelines for all partner engagements.
            Our ethical operations ensure complete alignment with U.S. banking compliance.
          </p>

          <ul className="compliance-list">
            <li><i className="fa fa-check-circle"></i> PCI-DSS security adherence</li>
            <li><i className="fa fa-check-circle"></i> Verified KYC/AML partner onboarding</li>
            <li><i className="fa fa-check-circle"></i> Secure data handling and confidentiality</li>
            <li><i className="fa fa-check-circle"></i> Transparent reporting and ethical governance</li>
          </ul>
        </div>
      </section>

      <Contact data={JsonData.Contact} />
    </div>
  );
};

export default AboutPage;
