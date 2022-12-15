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
                  {/* logo start */}
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
                  {/* logo end */}
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
                      {/* home link start */}
                      <li className="nav-item dropdown">
                        <NavLink to="/" className="nav-link ">
                          Home
                        </NavLink>
                      </li>
                      {/* home link end */}

                      {/* about us link start */}
                      <li className="nav-item dropdown">
                        <NavLink to="/about-us" className="nav-link ">
                          About Us
                        </NavLink>
                      </li>
                      {/* about us link end */}

                      {/* services link start */}
                      <li className="nav-item dropdown">
                        <NavLink
                          to="/services"
                          className="nav-link dropdown-toggle"
                        >
                          Services
                        </NavLink>
                        <div className="dropdown-menu">
                          <ul className="list-unstyled">
                            <li>
                              <NavLink to="/services/search-engine-optimization">
                                Search Engine Optimization
                              </NavLink>
                            </li>
                            <li>
                              <NavLink to="/services/social-media-optimization">
                                Social Media Optimization
                              </NavLink>
                            </li>
                            <li>
                              <NavLink to="/services/email-marketing">
                                Email Marketing
                              </NavLink>
                            </li>
                            <li>
                              <NavLink to="/services/content-marketing">
                                Content Marketing
                              </NavLink>
                            </li>
                          </ul>
                        </div>
                      </li>
                      {/* services link end */}

                      {/* <li className="nav-item dropdown">
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
                      </li> */}

                      {/* contact link start */}
                      <li className="nav-item dropdown">
                        <NavLink to="/contact" className="nav-link ">
                          Contact
                        </NavLink>
                      </li>
                      {/* contact link end */}
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
