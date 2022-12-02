import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header id="site-header" className="header">
        <div id="header-wrap">
          <div className="container">
            <div className="row">
              <div className="col">
                <nav className="navbar navbar-expand-lg">
                  <NavLink
                    to="/"
                    className="navbar-brand logo"
                    href="index.html"
                  >
                    <img
                      id="logo-img"
                      className="img-fluid"
                      src="images/logo.png"
                      alt=""
                    />
                  </NavLink>
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto position-relative">
                      <li className="nav-item dropdown">
                        <NavLink
                          to="/"
                          className="nav-link active dropdown-toggle"
                          href="#"
                          data-bs-toggle="dropdown"
                        >
                          Home
                        </NavLink>
                        <ul className="dropdown-menu">
                          <li>
                            <NavLink to="/">Home 1</NavLink>
                          </li>
                          <li>
                            <a href="#">Home 2</a>
                          </li>
                          <li>
                            <a href="#">Home 3</a>
                          </li>
                          <li>
                            <a href="#">Home 4</a>
                          </li>
                          <li>
                            <a href="#">Home 5</a>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item dropdown">
                        <a
                          className="nav-link dropdown-toggle"
                          href="#"
                          data-bs-toggle="dropdown"
                        >
                          Pages
                        </a>
                        <div className="dropdown-menu">
                          <ul className="list-unstyled">
                            <li>
                              <a href="about-us.html">About Us 1</a>
                            </li>
                            <li>
                              <a href="about-us-2.html">About Us 2</a>
                            </li>
                            <li>
                              <a href="team.html">Team</a>
                            </li>
                            <li>
                              <a href="team-single.html">Team Single</a>
                            </li>
                            <li>
                              <a href="faq.html">Faq</a>
                            </li>
                            <li className="dropdown-submenu">
                              <a href="#" className="dropdown-toggle">
                                Case Studies
                              </a>
                              <ul className="dropdown-menu">
                                <li>
                                  <a href="case-studies-grid-2.html">
                                    Case Studies Column 2
                                  </a>
                                </li>
                                <li>
                                  <a href="case-studies-grid-3.html">
                                    Case Studies Column 3
                                  </a>
                                </li>
                                <li>
                                  <a href="case-studies-fullwidth.html">
                                    Case Studies FullWidth
                                  </a>
                                </li>
                                <li>
                                  <a href="case-studies-single.html">
                                    Case Studies Single
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li className="dropdown-submenu">
                              <a href="#" className="dropdown-toggle">
                                Features
                              </a>
                              <ul className="dropdown-menu">
                                <li>
                                  <a href="shortcode-accordions.html">
                                    Accordion
                                  </a>
                                </li>
                                <li>
                                  <a href="shortcode-blog-post.html">
                                    Blog Post
                                  </a>
                                </li>
                                <li>
                                  <a href="shortcode-counter.html">Counter</a>
                                </li>
                                <li>
                                  <a href="shortcode-feature-box.html">
                                    Featured Box
                                  </a>
                                </li>
                                <li>
                                  <a href="shortcode-pricing.html">
                                    Pricing Table
                                  </a>
                                </li>
                                <li>
                                  <a href="shortcode-team.html">Team</a>
                                </li>
                                <li>
                                  <a href="shortcode-testimonial.html">
                                    Testimonials
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a href="coming-soon.html">Coming Soon</a>
                            </li>
                            <li>
                              <a href="error-404.html">Error 404</a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="nav-item dropdown">
                        <NavLink
                          to="/service"
                          className="nav-link dropdown-toggle"
                          href="#"
                          data-bs-toggle="dropdown"
                        >
                          Services
                        </NavLink>
                        <div className="dropdown-menu">
                          <ul className="list-unstyled">
                            <li>
                              <NavLink to="/services">Service 1</NavLink>
                            </li>
                            <li>
                              <a href="service-2.html">Service 2</a>
                            </li>
                            <li>
                              <NavLink to="/services/single-service">
                                Service Single
                              </NavLink>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="nav-item dropdown">
                        <a
                          className="nav-link dropdown-toggle"
                          href="#"
                          data-bs-toggle="dropdown"
                        >
                          Project
                        </a>
                        <div className="dropdown-menu">
                          <ul className="list-unstyled">
                            <li>
                              <a href="project-grid-2.html">Project Grid 2</a>
                            </li>
                            <li>
                              <a href="project-grid-3.html">Project Grid 3</a>
                            </li>
                            <li>
                              <a href="project-fullwidth.html">
                                Project FullWidth
                              </a>
                            </li>
                            <li>
                              <a href="project-details.html">Project Details</a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="nav-item dropdown">
                        <a
                          className="nav-link dropdown-toggle"
                          href="#"
                          data-bs-toggle="dropdown"
                        >
                          News
                        </a>
                        <div className="dropdown-menu">
                          <ul className="list-unstyled">
                            <li>
                              <a href="blog-classic.html">Blog Classic</a>
                            </li>
                            <li>
                              <a href="blog-grid-2.html">Blog Grid 2</a>
                            </li>
                            <li>
                              <a href="blog-grid-3.html">Blog Grid 3</a>
                            </li>
                            <li>
                              <a href="blog-left-sidebar.html">
                                Blog left sidebar
                              </a>
                            </li>
                            <li>
                              <a href="blog-right-sidebar.html">
                                Blog right sidebar
                              </a>
                            </li>
                            <li>
                              <a href="blog-details.html">Blog Single</a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="nav-item dropdown">
                        <NavLink
                          to="/contact"
                          className="nav-link dropdown-toggle"
                          href="#"
                          data-bs-toggle="dropdown"
                        >
                          Contact
                        </NavLink>
                        <div className="dropdown-menu">
                          <ul className="list-unstyled">
                            <li>
                              <NavLink to="/contact">Contact us 1</NavLink>
                            </li>
                            <li>
                              <a href="#">Contact us 2</a>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="right-nav align-items-center d-flex justify-content-end">
                    <a className="btn btn-white btn-sm" href="login.html">
                      Login
                    </a>
                    <div className="search">
                      <div className="search-content">
                        <div className="search-button">
                          <i className="fas fa-search"></i>
                        </div>
                        <form id="search-form" className="search-form">
                          <input
                            type="search"
                            className="search-input"
                            placeholder="Search Here..."
                          />
                        </form>
                      </div>
                    </div>
                    <a href="#" className="ht-nav-toggle">
                      <span></span>
                    </a>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>

      <nav id="ht-main-nav">
        <a href="#" className="ht-nav-toggle active">
          <span></span>
        </a>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <img
                className="img-fluid side-logo mb-3"
                src="images/logo.png"
                alt=""
              />
              <p className="mb-5">
                Loptus - Digital Marketing Agency Responsive HTML5 Template is
                Most PowerFull template 2018 For Everyone, Start working with an
                company that provide everything you need to generate awareness.
              </p>
              <div className="form-info">
                <h4 className="title">Contact info</h4>
                <ul className="contact-info list-unstyled mt-4">
                  <li className="mb-4">
                    <i className="flaticon-location"></i>
                    <span>Address:</span>
                    <p>423B, Road Wordwide Country, USA</p>
                  </li>
                  <li className="mb-4">
                    <i className="flaticon-call"></i>
                    <span>Phone:</span>
                    <a href="tel:+912345678900">+91-234-567-8900</a>
                  </li>
                  <li>
                    <i className="flaticon-email"></i>
                    <span>Email</span>
                    <a href="mailto:themeht23@gmail.com">themeht23@gmail.com</a>
                  </li>
                </ul>
              </div>
              <div className="social-icons social-colored mt-5">
                <ul className="list-inline">
                  <li className="mb-2 social-facebook">
                    <a href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li className="mb-2 social-twitter">
                    <a href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li className="mb-2 social-linkedin">
                    <a href="#">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li className="mb-2 social-gplus">
                    <a href="#">
                      <i className="fab fa-google-plus-g"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
