import React from "react"; 
import "./ServicePage2.css";
import Contact from "../components/contact";
import JsonData from "../data/data.json";

const ProductPage = () => {

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      const yOffset = -80; // adjust based on navbar height
      const y = contactSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };


  // ✅ Your actual 5 products
  const products = [
    {
      title: "Handheld POS Device",
      description:
        "Accept payments wherever your customers are — at the counter, curbside, or on the go. This all-in-one handheld POS combines wireless payment processing, inventory management, and built-in receipt printing, giving businesses freedom and flexibility with every transaction.",
      image: `${process.env.PUBLIC_URL}/img/portfolio/Image1.png`,
      features: [
        "Wireless Connectivity for Mobility",
        "Built-In Thermal Receipt Printer",
        "Long Battery Life for All-Day Use",
      ],
    },
    {
      title: "Self-Service Kiosk",
      description:
        "Empower guests to browse menus, place orders, and pay instantly using our interactive touchscreen kiosk. Ideal for restaurants and quick-service environments, it reduces waiting times, boosts efficiency, and offers a smoother, more engaging self-service experience.",
      image: `${process.env.PUBLIC_URL}/img/portfolio/Image2.png`,
      features: [
        "Large Touchscreen User Interface",
        "Multiple Payment Options Supported",
        "Automatic POS & Kitchen Sync",
      ],
    },
    {
      title: "Compact Countertop POS Terminal",
      description:
        "This compact POS terminal packs everything you need into a modern, space-saving design. Supporting EMV chip, swipe, and contactless payments, it’s perfect for cafés, boutiques, and retail stores looking for power and performance in a minimal setup.",
      image: `${process.env.PUBLIC_URL}/img/portfolio/Image3.png`,
      features: [
        "EMV, NFC & Contactless Payment Support",
        "Integrated Printer & Easy Setup",
        "Reliable for 24/7 Operation",
      ],
    },
    {
      title: "Kitchen Display System",
      description:
        "Streamline back-of-house operations with our purpose-built KDS. Orders appear instantly on heat-resistant digital displays, ensuring faster preparation and fewer mistakes. Designed for busy restaurants, it syncs perfectly with your POS and online ordering channels.",
      image: `${process.env.PUBLIC_URL}/img/portfolio/Image4.png`,
      features: [
        "Instant Order Synchronization",
        "Heat & Splash-Resistant Design",
        "Seamless POS and Online Order Integration",
      ],
    },
    {
      title: "Countertop POS System",
      description:
        "Our advanced countertop POS solution combines a large touchscreen, fast printing, and secure cash management in one sleek system. Built for speed and reliability, it handles sales, reporting, and staff management — making it perfect for high-volume businesses and retail environments.",
      image: `${process.env.PUBLIC_URL}/img/portfolio/Image5.png`,
      features: [
        "High-Speed Transaction Processing",
        "Integrated Cash & Receipt Management",
        "Real-Time Reporting and Analytics",
      ],
    },
  ];

  return (
    <div className="product-page">
      {/* ==============================
          HERO SECTION
      =============================== */}
      <section
  className="product-hero"
  style={{
    backgroundImage: `linear-gradient(rgba(2, 53, 96, 0.85), rgba(2, 53, 96, 0.85)), url(${process.env.PUBLIC_URL}/img/product-hero.png)`,
    backgroundSize: "100% 130%",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    width: "100%",
    minHeight: "500px", // adjust height for hero feel
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    color: "#fff",
  }}
>
  <div className="container">
    <h1 className="hero-heading">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
    <p className="hero-subtext">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod enim id facilisis 
      volutpat. Ut finibus fermentum feugiat.
    </p>
    <button className="cta-btn" onClick={scrollToContact}>
      Get a Consultation
    </button>
  </div>
</section>


      {/* ==============================
          QUICK HIGHLIGHTS
      =============================== */}
      <section className="highlights">
        <div className="container">
          <div className="highlight-grid">
            <div className="highlight-card">
              <i className="fa fa-lock"></i>
              <h4>Secure Transactions</h4>
              <p>End-to-end encrypted and PCI-DSS compliant for full peace of mind.</p>
            </div>
            <div className="highlight-card">
              <i className="fa fa-cogs"></i>
              <h4>Seamless Integration</h4>
              <p>Sync effortlessly with your accounting, ERP, and inventory tools.</p>
            </div>
            <div className="highlight-card">
              <i className="fa fa-line-chart"></i>
              <h4>Real-Time Insights</h4>
              <p>View detailed analytics to drive smarter business decisions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ==============================
          PRODUCT SECTIONS
      =============================== */}
      {products.map((item, index) => (
        <section
          key={index}
          className={`product-section ${index % 2 === 0 ? "layout-left" : "layout-right"}`}
        >
          <div className="container product-flex">
            <div className="product-image-block">
              <img src={item.image} alt={item.title} className="product-display" />
            </div>
            <div className="product-text-block">
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <ul>
                {item.features.map((feat, idx) => (
                  <li key={idx}>✔ {feat}</li>
                ))}
              </ul>
              
            </div>
          </div>
        </section>
      ))}
      
      <Contact data={JsonData.Contact} />
    </div>
  );
};

export default ProductPage;
