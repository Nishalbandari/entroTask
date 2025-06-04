import React from "react";
import "./home.css";

const Home = () => {

    const features = [
        {
            icon: "bi bi-hospital",
            desc: "Optimized Store Operations for streamlined workflow.",
            borderColor: "#007bff",
        },
        {
            icon: "bi bi-graph-up-arrow",
            desc: "Innovative Inventory Model for strategic stock management.",
            borderColor: "#00bcd4",
        },
        {
            icon:"bi bi-diagram-3-fill",
            desc: "Unique Procurement Process for cost-effective sourcing.",
            borderColor: "#4caf50",
        },
        {
            icon: "bi bi-braces-asterisk",
            desc: "End-to-End Pharmacy Software for seamless operations.",
            borderColor: "#00bcd4",
        },
    ];

    return (
        <div classNameName="home">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <img src="images/logo.png" alt="" />

                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                            <ul className="navbar-nav align-items-lg-center">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/home">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/services">Services</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/about">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/contact">Contact Us</a>
                                </li>
                                <li className="nav-item ms-lg-3">
                                    <button className="btn btn-success">
                                        <i className="bi bi-telephone-fill me-1"></i> +91 7288877959
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            <div className="tech-content">
                <div className="d-flex justify-content-between align-items-center">
                    <div className="part-one">
                        <h1>First <span>Tech enabled</span><br />Omni present<br /><span>Pharmacy</span> Retail chain</h1>
                        <button >
                            <span className="fill-bg"></span>
                            <span className="btn-label">COMING SOON</span>
                        </button>
                    </div>
                    <div className="part-two">
                        <img src="images/tech.png" alt="Pharmacy" />
                    </div>
                </div>
            </div>
            <div className="features-wrapper">
                <h2 className="features-title">Maximize Your Revenue & Efficiency</h2>
                <div className="cards-grid">
                    {features.map((item, index) => (
                        <div
                            key={index}
                            className="feature-card"
                            style={{ borderTop: `3px solid ${item.borderColor}` }}
                        >
                            <div className="icon"><i className={item.icon} style={{ color: item.borderColor }}></i></div>
                            <p className="desc">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="convenience-content d-flex justify-content-between align-items-center">
                <div className="convenience-paragraphs">
                    <h2>Unmatched Convenience</h2>
                    <p>
                        <i className="bi bi-check-circle-fill check-icon"></i>
                        Provide Seamless Home Deliveries for ultimate customer satisfaction.
                    </p>
                    <p>
                        <i className="bi bi-check-circle-fill check-icon"></i>
                        Comprehensive Support: From setup to supply chain, we ensure resources you need.
                    </p>
                    <button className="cta-button">Call us to know more</button>
                </div>
                <div>
                    <img src="images/deliveries.png" alt="Convenience" className="convenience-image" />
                </div>
            </div>

            <div className="footer">
                <div className="footer-content">
                    <div className="footer-logo">
                        <img src="images/conguralations.png" alt="Footer" className="footer-image" />
                        <div className="footer-text">
                            <p>Partner with EL Pharmacy Chain<br />
                                and Multiply Your Revenue!</p>
                            <button className="footer-button">Contact us for more information</button>
                        </div>
                    </div>
                    <h4>Get In Touch</h4>
                    <div className="footer-address d-flex justify-content-between align-items-center">
                        <p><i className="bi bi-telephone-fill"></i> +91 7288877959</p>
                        <p><i className="bi bi-envelope-fill"></i>info@pharmacy.in</p>
                        <p><i className="bi bi-geo-alt-fill"></i> First Floor, Plot No:479, Road No:10, Kakatiya Hills, Madhapur, Hyderabad, Telangana, 500081</p>
                    </div>
                    <div className="footer-social-icons">
                        <p>Made With Love By Entro Labs It sollutions, All Right Reserved .</p>
                        <div className="social-icons">
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                <i className="bi bi-facebook"></i>
                            </a>
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                <i className="bi bi-instagram"></i>
                            </a>
                            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                                <i className="bi bi-linkedin"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
