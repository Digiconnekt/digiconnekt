import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();

  const seo = () => {
    navigate("search-engine-optimization");
  };

  const smo = () => {
    navigate("social-media-optimization");
  };

  const emailMarketing = () => {
    navigate("email-marketing");
  };

  return (
    <>
      <section
        className="page-title overflow-hidden text-center light-bg bg-contain animatedBackground"
        data-bg-img="images/pattern/05.png"
        style={{ backgroundImage: "url(images/pattern/05.png)" }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-12">
              <h1 className="title">Services</h1>
              <nav aria-label="breadcrumb" className="page-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Services
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
        <div className="page-title-pattern">
          <img className="img-fluid" src="images/bg/06.png" alt="" />
        </div>
      </section>

      <div className="page-content">
        <section className="overflow-hidden">
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-lg-8 col-md-12">
                <div className="section-title">
                  <h6>Service</h6>
                  <h2 className="title">
                    We’r Provided Best Digital Marketing Services!
                  </h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div
                onClick={seo}
                className="col-lg-4 col-md-6 wow fadeInLeft"
                data-wow-duration="0.6"
                style={{ cursor: "pointer" }}
              >
                <div className="featured-item text-center style-2">
                  <div className="featured-icon">
                    <img
                      className="img-fluid"
                      src="images/feature/04.png"
                      alt=""
                    />
                  </div>
                  <div className="featured-title">
                    <h5>Search Engine Optimization</h5>
                  </div>
                  <div className="featured-desc">
                    <p>
                      Design must be functional, and futionality must translated
                      into, and futionality must translated into.
                    </p>
                  </div>
                </div>
              </div>
              <div
                onClick={smo}
                className="col-lg-4 col-md-6 mt-5 mt-md-0 wow fadeInUp"
                data-wow-duration="0.8"
                style={{ cursor: "pointer" }}
              >
                <div className="featured-item text-center style-2">
                  <div className="featured-icon">
                    <img
                      className="img-fluid"
                      src="images/feature/05.png"
                      alt=""
                    />
                  </div>
                  <div className="featured-title">
                    <h5>Social Media Optimization</h5>
                  </div>
                  <div className="featured-desc">
                    <p>
                      Design must be functional, and futionality must translated
                      into, and futionality must translated into.
                    </p>
                  </div>
                </div>
              </div>
              <div
                onClick={emailMarketing}
                className="col-lg-4 col-md-6 mt-5 mt-lg-0 wow fadeInRight"
                data-wow-duration="0.8"
                style={{ cursor: "pointer" }}
              >
                <div className="featured-item text-center style-2">
                  <div className="featured-icon">
                    <img
                      className="img-fluid"
                      src="images/feature/06.png"
                      alt=""
                    />
                  </div>
                  <div className="featured-title">
                    <h5>Email Marketing</h5>
                  </div>
                  <div className="featured-desc">
                    <p>
                      Design must be functional, and futionality must translated
                      into, and futionality must translated into.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 mt-5 wow fadeInLeft"
                data-wow-duration="0.6"
              >
                <div className="featured-item text-center style-2">
                  <div className="featured-icon">
                    <img
                      className="img-fluid"
                      src="images/feature/07.png"
                      alt=""
                    />
                  </div>
                  <div className="featured-title">
                    <h5>Email Marketing</h5>
                  </div>
                  <div className="featured-desc">
                    <p>
                      Design must be functional, and futionality must translated
                      into, and futionality must translated into.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 mt-5 wow fadeInUp"
                data-wow-duration="0.8"
              >
                <div className="featured-item text-center style-2">
                  <div className="featured-icon">
                    <img
                      className="img-fluid"
                      src="images/feature/08.png"
                      alt=""
                    />
                  </div>
                  <div className="featured-title">
                    <h5>Link Building</h5>
                  </div>
                  <div className="featured-desc">
                    <p>
                      Design must be functional, and futionality must translated
                      into, and futionality must translated into.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 mt-5 wow fadeInRight"
                data-wow-duration="0.8"
              >
                <div className="featured-item text-center style-2">
                  <div className="featured-icon">
                    <img
                      className="img-fluid"
                      src="images/feature/09.png"
                      alt=""
                    />
                  </div>
                  <div className="featured-title">
                    <h5>Quick Support</h5>
                  </div>
                  <div className="featured-desc">
                    <p>
                      Design must be functional, and futionality must translated
                      into, and futionality must translated into.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="position-relative bg-contain bg-pos-r"
          data-bg-img="images/bg/02.png"
        >
          <div className="container-fluid px-lg-3 px-md-8 px-3">
            <div className="row align-items-center">
              <div
                className="col-lg-5 bg-contain bg-pos-l"
                data-bg-img="images/pattern/07.png"
              >
                <img className="img-fluid" src="images/about/01.png" alt="" />
              </div>
              <div className="col-lg-5 col-md-12 me-auto mt-5 mt-lg-0 ps-lg-11">
                <div className="section-title">
                  <h6>How It Work</h6>
                  <h2 className="title">
                    Three Step For Started Working Process
                  </h2>
                </div>
                <div className="work-process style-2">
                  <div className="work-process-inner">
                    {" "}
                    <span className="step-num" data-bg-color="#ff7810">
                      01
                    </span>
                    <h4>Research Project</h4>
                    <p className="mb-0">
                      Fusce enim nulla mollis eu metus in sagittis fringilla
                      lnim nulla
                    </p>
                  </div>
                </div>
                <div className="work-process style-2 mt-5">
                  <div className="work-process-inner">
                    {" "}
                    <span className="step-num" data-bg-color="#ff156a">
                      02
                    </span>
                    <h4>Project Targeting</h4>
                    <p className="mb-0">
                      Fusce enim nulla mollis eu metus in sagittis fringilla
                      lnim nulla
                    </p>
                  </div>
                </div>
                <div className="work-process style-2 mt-5">
                  <div className="work-process-inner">
                    {" "}
                    <span className="step-num" data-bg-color="#ffb72f">
                      03
                    </span>
                    <h4>Reach Target</h4>
                    <p className="mb-0">
                      Fusce enim nulla mollis eu metus in sagittis fringilla
                      lnim nulla
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-3 col-sm-6">
                <div className="counter style-2">
                  <img
                    className="img-fluid"
                    src="images/counter/01.png"
                    alt=""
                  />{" "}
                  <span
                    className="count-number"
                    data-to="2304"
                    data-speed="10000"
                  >
                    2304
                  </span>
                  <h5>Project Done</h5>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6 mt-5 mt-sm-0">
                <div className="counter style-2">
                  <img
                    className="img-fluid"
                    src="images/counter/02.png"
                    alt=""
                  />{" "}
                  <span
                    className="count-number"
                    data-to="2304"
                    data-speed="10000"
                  >
                    2304
                  </span>
                  <h5>Success Rate</h5>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6 mt-5 mt-md-0">
                <div className="counter style-2">
                  <img
                    className="img-fluid"
                    src="images/counter/03.png"
                    alt=""
                  />{" "}
                  <span
                    className="count-number"
                    data-to="2304"
                    data-speed="10000"
                  >
                    2304
                  </span>
                  <h5>Awards</h5>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6 mt-5 mt-md-0">
                <div className="counter style-2">
                  <img
                    className="img-fluid"
                    src="images/counter/04.png"
                    alt=""
                  />{" "}
                  <span
                    className="count-number"
                    data-to="2304"
                    data-speed="10000"
                  >
                    2304
                  </span>
                  <h5>Happy Client</h5>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="overflow-hidden dark-bg custom-pb-18 animatedBackground"
          data-bg-img="images/pattern/06.png"
          style={{ backgroundImage: "url(images/pattern/06.png)" }}
        >
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-lg-8 col-md-12">
                <div className="section-title mb-0">
                  <h6>SUCCESS STORIES</h6>
                  <h2 className="title">Our Case Study</h2>
                  <p className="mb-0 text-white">
                    Deos et accusamus et iusto odio dignissimos qui blanditiis
                    praesentium voluptatum dele corrupti quos dolores et quas
                    molestias.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="overflow-hidden pt-0 custom-mt-10 position-relative z-index-1">
          <div className="container-fluid p-0">
            <div className="row">
              <div className="col-lg-12 col-md-12">
                <div
                  className="owl-carousel owl-center"
                  data-items="4"
                  data-md-items="2"
                  data-sm-items="2"
                  data-center="true"
                  data-dots="false"
                  data-nav="true"
                  data-autoplay="true"
                >
                  <div className="item">
                    <div className="cases-item">
                      <div className="cases-images">
                        <img
                          className="img-fluid"
                          src="images/case-studies/01.jpg"
                          alt=""
                        />
                      </div>
                      <div className="cases-description">
                        <h5>
                          <a href="case-studies-single.html">
                            Digital Marketing
                          </a>
                        </h5>
                        <span>Digital</span>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="cases-item">
                      <div className="cases-images">
                        <img
                          className="img-fluid"
                          src="images/case-studies/02.jpg"
                          alt=""
                        />
                      </div>
                      <div className="cases-description">
                        <h5>
                          <a href="case-studies-single.html">
                            Web & Mobile Apps
                          </a>
                        </h5>
                        <span>Digital</span>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="cases-item">
                      <div className="cases-images">
                        <img
                          className="img-fluid"
                          src="images/case-studies/03.jpg"
                          alt=""
                        />
                      </div>
                      <div className="cases-description">
                        <h5>
                          <a href="case-studies-single.html">
                            Traffic Management
                          </a>
                        </h5>
                        <span>Digital</span>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="cases-item">
                      <div className="cases-images">
                        <img
                          className="img-fluid"
                          src="images/case-studies/04.jpg"
                          alt=""
                        />
                      </div>
                      <div className="cases-description">
                        <h5>
                          <a href="case-studies-single.html">
                            Seo Optimization
                          </a>
                        </h5>
                        <span>Digital</span>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="cases-item">
                      <div className="cases-images">
                        <img
                          className="img-fluid"
                          src="images/case-studies/05.jpg"
                          alt=""
                        />
                      </div>
                      <div className="cases-description">
                        <h5>
                          <a href="case-studies-single.html">
                            Marketing Financing
                          </a>
                        </h5>
                        <span>Digital</span>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="cases-item">
                      <div className="cases-images">
                        <img
                          className="img-fluid"
                          src="images/case-studies/06.jpg"
                          alt=""
                        />
                      </div>
                      <div className="cases-description">
                        <h5>
                          <a href="case-studies-single.html">SEO Analiysis</a>
                        </h5>
                        <span>Digital</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="light-bg">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="ht-clients d-flex flex-wrap align-items-center text-center">
                  <div className="clients-logo">
                    <img
                      className="img-fluid"
                      src="images/client/07.png"
                      alt=""
                    />
                  </div>
                  <div className="clients-logo">
                    <img
                      className="img-fluid"
                      src="images/client/08.png"
                      alt=""
                    />
                  </div>
                  <div className="clients-logo">
                    <img
                      className="img-fluid"
                      src="images/client/09.png"
                      alt=""
                    />
                  </div>
                  <div className="clients-logo">
                    <img
                      className="img-fluid"
                      src="images/client/10.png"
                      alt=""
                    />
                  </div>
                  <div className="clients-logo">
                    <img
                      className="img-fluid"
                      src="images/client/11.png"
                      alt=""
                    />
                  </div>
                  <div className="clients-logo">
                    <img
                      className="img-fluid"
                      src="images/client/12.png"
                      alt=""
                    />
                  </div>
                  <div className="clients-logo">
                    <img
                      className="img-fluid"
                      src="images/client/12.png"
                      alt=""
                    />
                  </div>
                  <div className="clients-logo">
                    <img
                      className="img-fluid"
                      src="images/client/12.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-lg-8 col-md-12">
                <div className="section-title">
                  <h6>Blog</h6>
                  <h2 className="title">Read our latest news</h2>
                  <p className="mb-0 text-black">
                    Deos et accusamus et iusto odio dignissimos qui blanditiis
                    praesentium voluptatum dele corrupti quos dolores et quas
                    molestias.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-12">
                <div className="post style-2">
                  <div className="post-image">
                    <img
                      className="img-fluid h-100 w-100"
                      src="images/blog/01.jpg"
                      alt=""
                    />
                  </div>
                  <div className="post-desc">
                    <div className="post-date">
                      23 <span>November 2018</span>
                    </div>
                    <div className="post-title">
                      <h5>
                        <a href="blog-details.html">
                          The Powerfull look for best in 2018
                        </a>
                      </h5>
                    </div>
                    <p>
                      Phasellus eget purus id felis dignissim convallis
                      Suspendisse et augue dui gravida
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 mt-5 mt-lg-0">
                <div className="post style-2">
                  <div className="post-image">
                    <img
                      className="img-fluid h-100 w-100"
                      src="images/blog/02.jpg"
                      alt=""
                    />
                  </div>
                  <div className="post-desc">
                    <div className="post-date">
                      23 <span>November 2018</span>
                    </div>
                    <div className="post-title">
                      <h5>
                        <a href="blog-details.html">
                          Loptus It's Awesome, We need your help
                        </a>
                      </h5>
                    </div>
                    <p>
                      Phasellus eget purus id felis dignissim convallis
                      Suspendisse et augue dui gravida
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 mt-5 mt-lg-0">
                <div className="post style-2">
                  <div className="post-image">
                    <img
                      className="img-fluid h-100 w-100"
                      src="images/blog/03.jpg"
                      alt=""
                    />
                  </div>
                  <div className="post-desc">
                    <div className="post-date">
                      23 <span>November 2018</span>
                    </div>
                    <div className="post-title">
                      <h5>
                        <a href="blog-details.html">
                          We Become Best sale marketer in a year!
                        </a>
                      </h5>
                    </div>
                    <p>
                      Phasellus eget purus id felis dignissim convallis
                      Suspendisse et augue dui gravida
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;
