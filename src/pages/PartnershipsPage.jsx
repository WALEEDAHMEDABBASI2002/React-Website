import React from "react";
import "./PartnershipsPage.css";
import JsonData from "../data/data.json";
import Contact from "../components/contact";


const PartnersPage = () => {
    return (
        <div className="partners-page">
            {/* ==============================
            HERO SECTION
        =============================== */}
            <section
                className="partners-hero"
                style={{
                    backgroundImage: `linear-gradient(rgba(2, 53, 96, 0.85), rgba(2, 53, 96, 0.85)), url(${process.env.PUBLIC_URL}/img/PartnerShip/partners-hero.png)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <div className="container">
                    <h1 className="partners-heading">Why Partner With Lorem ipsum dolor</h1>
                    <p className="partners-subtext">
                        Empowering Master Agents & ISOs with scalable sales execution and trusted channel operations.
                    </p>
                </div>
            </section>

            {/* ==============================
            OUR SALES MODEL
        =============================== */}
            <section className="partners-section light-bg">
                <div className="container text-center">
                    <h2 className="section-heading">Our Sales Model</h2>
                    <p className="section-text">
                        We act as your <b>dedicated sales extension</b> — managing
                        prospecting, demos, and merchant onboarding while you retain full
                        control of merchant processing. Our team integrates seamlessly into
                        your operational workflow to ensure a smooth merchant handoff and a
                        unified brand experience.
                    </p>

                    <div className="model-diagram">
                        <div className="model-step">Prospect</div>
                        <div className="model-arrow">→</div>
                        <div className="model-step">Demo</div>
                        <div className="model-arrow">→</div>
                        <div className="model-step">Onboard</div>
                        <div className="model-arrow">→</div>
                        <div className="model-step">Process</div>
                    </div>
                </div>
            </section>

            {/* ==============================
            OUR EXPERTISE
        =============================== */}
            <section className="partners-section dark-bg">
                <div className="container text-center">
                    <h2 className="section-heading text-white">Our Expertise</h2>
                    <div className="row">
                        <div className="col-md-4 expertise-card">
                            <i className="fa fa-briefcase"></i>
                            <h4>10+ Years in B2B Payments</h4>
                            <p>
                                Deep experience across payment technologies, merchant onboarding,
                                and ISO partnership models.
                            </p>
                        </div>
                        <div className="col-md-4 expertise-card">
                            <i className="fa fa-building-o"></i>
                            <h4>Industry-Proven Sales Execution</h4>
                            <p>
                                Success in retail, hospitality, and service sectors through
                                structured campaigns and performance tracking.
                            </p>
                        </div>
                        <div className="col-md-4 expertise-card">
                            <i className="fa fa-globe"></i>
                            <h4>Multilingual Market Reach</h4>
                            <p>
                                Engaging ethnic business communities in multiple languages for
                                deeper, more effective outreach.
                            </p>
                        </div>
                    </div>
                </div>
            </section>


            {/* ==============================
            OUR SALES PROCESS (TIMELINE)
        =============================== */}
            <section className="partners-section light-bg">
                <div className="container text-center">
                    <h2 className="section-heading">Our Sales Process</h2>
                    <div className="timeline">
                        <div className="timeline-step">
                            <span className="circle">1</span>
                            <h5>Lead Generation</h5>
                            <p>We identify and qualify high-value merchant leads.</p>
                        </div>
                        <div className="timeline-step">
                            <span className="circle">2</span>
                            <h5>Consultation</h5>
                            <p>Personalized discussion to understand merchant requirements.</p>
                        </div>
                        <div className="timeline-step">
                            <span className="circle">3</span>
                            <h5>Product Demo</h5>
                            <p>Live demonstration showcasing your POS solutions and benefits.</p>
                        </div>
                        <div className="timeline-step">
                            <span className="circle">4</span>
                            <h5>Deal Closure</h5>
                            <p>End-to-end handling of documentation, pricing, and follow-up.</p>
                        </div>
                        <div className="timeline-step">
                            <span className="circle">5</span>
                            <h5>Seamless Handoff</h5>
                            <p>Merchant transferred to your processing team for activation.</p>
                        </div>
                    </div>
                </div>
            </section>





            {/* ==============================
            PARTNER BENEFITS
        =============================== */}
            <section className="partners-section benefits dark-bg">
                <div className="container text-center">
                    <h2 className="section-heading text-white">Partner Benefits</h2>
                    <div className="row">
                        <div className="col-md-4 benefit-card">
                            <i className="fa fa-expand"></i>
                            <h4>Scalable Reach</h4>
                            <p>Expand your market presence without adding internal headcount.</p>
                        </div>
                        <div className="col-md-4 benefit-card">
                            <i className="fa fa-users"></i>
                            <h4>Dedicated Sales Professionals</h4>
                            <p>
                                Our trained merchant acquisition teams work exclusively under
                                your brand identity.
                            </p>
                        </div>
                        <div className="col-md-4 benefit-card">
                            <i className="fa fa-line-chart"></i>
                            <h4>Real-Time Transparency</h4>
                            <p>
                                Gain full visibility into leads, conversions, and campaign
                                performance dashboards.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ==============================
CALL TO ACTION
=============================== */}
            <Contact data={JsonData.Contact} />
        </div>
    );
};

export default PartnersPage;


