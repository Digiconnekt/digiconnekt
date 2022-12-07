import React from "react";

const Home = () => {
  return (
    <>
      <section
        className="fullscreen-banner banner banner-2 p-0 overflow-hidden bg-contain bg-pos-r animatedBackground"
        data-bg-img="images/bg/05.png"
        style={{ backgroundImage: "url(images/bg/05.png)" }}
      >
        <div
          className="mouse-parallax"
          data-bg-img="images/pattern/01.png"
        ></div>
        <div
          className="h-100 bg-contain bg-pos-rb sm-bg-cover"
          data-bg-img="images/bg/04.png"
        >
          <div className="align-center">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 col-md-12">
                  <div
                    className="white-bg box-shadow px-5 py-5 sm-px-3 sm-py-3 xs-px-2 xs-py-2 bg-contain bg-pos-l radius"
                    data-bg-img="images/bg/01.png"
                  >
                    <div className="row align-items-center">
                      <div className="col-lg-6 col-md-12 text-center">
                        <img
                          className="img-fluid animated zoomIn delay-2 duration-2"
                          src="images/banner/03.png"
                          alt=""
                        />
                      </div>
                      <div className="col-lg-6 col-md-12 mt-5 mt-lg-0">
                        <h1 className="mb-4 animated fadeInUp duration-2">
                          Powerfull
                          <span className="font-w-5">Digital Marketing</span>
                          Template
                        </h1>
                        <p className="animated fadeInUp delay-1 duration-2">
                          Start working with an company that provide everything
                          you need to generate awareness, drive traffic, connect
                          with customers.
                        </p>
                        <div className="animated fadeInUp delay-2 duration-2">
                          <a className="btn btn-theme" href="#">
                            <span>Learn More</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="position-relative">
          <div className="pattern-3">
            <img
              className="img-fluid rotateme"
              src="images/pattern/03.png"
              alt=""
            />
          </div>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5 col-md-12">
                <div className="section-title">
                  <h6>About Us</h6>
                  <h2 className="title">
                    We help our Digital marketing and SEO development.
                  </h2>
                </div>
                <ul className="list-unstyled list-icon">
                  <li className="mb-3">
                    <i className="flaticon-tick"></i> Mattis effic iturut magna
                    pelle ntesque sit
                  </li>
                  <li className="mb-3">
                    <i className="flaticon-tick"></i> Phasellus eget purus id
                    felis dignissim convallis
                  </li>
                  <li>
                    <i className="flaticon-tick"></i> Fusce enim nulla mollis eu
                    metus in sagittis fringilla
                  </li>
                </ul>
              </div>
              <div className="col-lg-7 col-md-12 mt-5 mt-lg-0">
                <div
                  className="owl-carousel no-pb"
                  data-dots="false"
                  data-items="2"
                  data-sm-items="1"
                  data-autoplay="true"
                >
                  <div className="item">
                    <div className="featured-item text-center style-2 mx-3 my-3">
                      <div className="featured-icon">
                        <img
                          className="img-fluid"
                          src="images/feature/01.png"
                          alt=""
                        />
                      </div>
                      <div className="featured-title">
                        <h5>Online Marketing</h5>
                      </div>
                      <div className="featured-desc">
                        <p>
                          Design must be functional, and futionality must
                          translated into, and futionality must translated into.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="featured-item text-center style-2 mx-3 my-3">
                      <div className="featured-icon">
                        <img
                          className="img-fluid"
                          src="images/feature/02.png"
                          alt=""
                        />
                      </div>
                      <div className="featured-title">
                        <h5>Data Analysis</h5>
                      </div>
                      <div className="featured-desc">
                        <p>
                          Design must be functional, and futionality must
                          translated into, and futionality must translated into.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="featured-item text-center style-2 mx-3 my-3">
                      <div className="featured-icon">
                        <img
                          className="img-fluid"
                          src="images/feature/03.png"
                          alt=""
                        />
                      </div>
                      <div className="featured-title">
                        <h5>SEO Optimization</h5>
                      </div>
                      <div className="featured-desc">
                        <p>
                          Design must be functional, and futionality must
                          translated into, and futionality must translated into.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-0 pb-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-3 col-sm-6">
                <div className="counter style-2">
                  <img
                    className="img-fluid"
                    src="images/counter/01.png"
                    alt=""
                  />
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
                  />
                  <span
                    className="count-number"
                    data-to="3585"
                    data-speed="10000"
                  >
                    3585
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
                  />
                  <span
                    className="count-number"
                    data-to="1365"
                    data-speed="10000"
                  >
                    1365
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
                  />
                  <span
                    className="count-number"
                    data-to="4328"
                    data-speed="10000"
                  >
                    4328
                  </span>
                  <h5>Happy Client</h5>
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
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12 order-lg-1">
                <div className="row">
                  <div className="col-md-6">
                    <div className="image-block">
                      <img
                        className="img-fluid box-shadow radius w-100"
                        src="images/about/04.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-md-6 mt-4">
                    <div className="image-block">
                      <img
                        className="img-fluid box-shadow radius w-100"
                        src="images/about/05.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-md-6 sm-mt-3">
                    <div className="image-block">
                      <img
                        className="img-fluid box-shadow radius w-100"
                        src="images/about/06.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-md-6 mt-4">
                    <div className="image-block">
                      <img
                        className="img-fluid box-shadow radius w-100"
                        src="images/about/07.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 mt-5 mt-lg-0">
                <div className="section-title mb-3">
                  <h6>What We Do</h6>
                  <h2>
                    We iusto Creative Digital Agency, We Provide professional
                    Web page.
                  </h2>
                </div>
                <p className="text-black">
                  Deos et accusamus et iusto odio dignissimos qui blanditiis
                  praesentium voluptatum dele corrupti quos dolores et quas
                  molestias a orci facilisis rutrum.
                </p>
                <ul className="custom-li list-unstyled list-icon-2 my-3 d-inline-block">
                  <li>Design must be functional</li>
                  <li>Futionality must into</li>
                  <li>Aenean pellentes vitae</li>
                  <li>Mattis effic iturut magna</li>
                  <li>Lusce enim nulla mollis</li>
                  <li>Phasellus eget felis</li>
                </ul>{" "}
                <a className="btn btn-theme" href="#">
                  <span>Learn More</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12">
                <div className="round-animation">
                  <div className="video-box">
                    <img
                      className="img-fluid"
                      src="images/about/08.png"
                      alt=""
                    />
                    <div className="video-btn video-btn-pos">
                      {" "}
                      <a
                        className="play-btn popup-youtube d-flex align-items-center"
                        href="https://www.youtube.com/watch?v=P_wKDMcr1Tg"
                      >
                        <span className="btn btn-white">Play Now</span>
                        <img
                          className="img-fluid pulse radius-4"
                          src="images/play.png"
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 mt-5 mt-lg-0">
                <div className="section-title mb-3">
                  <h6>What We Do</h6>
                  <h2>We Provide best Digital Marketing Solution.</h2>
                </div>
                <p className="text-black">
                  Deos et accusamus et iusto odio dignissimos qui blanditiis
                  praesentium voluptatum dele corrupti quos dolores et quas
                  molestias a orci facilisis rutrum.
                </p>
                <ul className="custom-li list-unstyled list-icon-2 my-3 d-inline-block">
                  <li>Design must be functional</li>
                  <li>Futionality must into</li>
                  <li>Aenean pellentes vitae</li>
                  <li>Mattis effic iturut magna</li>
                  <li>Lusce enim nulla mollis</li>
                  <li>Phasellus eget felis</li>
                </ul>{" "}
                <a className="btn btn-theme" href="#">
                  <span>Learn More</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section
          className="bg-contain bg-pos-r p-0"
          data-bg-img="images/pattern/02.png"
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-4 col-md-6">
                <div className="section-title mb-0">
                  <h6>Service</h6>
                  <h2 className="title">We have best feature</h2>
                  <p className="mb-0">
                    Deos et accusamus et iusto odio dignissimos qui blanditiis
                    praesentium voluptatum dele corrupti quos dolores et quas
                    molestias.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mt-5 mt-md-0">
                <div className="featured-item text-center">
                  <div className="featured-icon">
                    <img
                      className="img-fluid"
                      src="images/feature/04.png"
                      alt=""
                    />
                  </div>
                  <div className="featured-title">
                    <h5>Digital Marketing</h5>
                  </div>
                  <div className="featured-desc">
                    <p>
                      Design must be functional, and futionality must translated
                      into, and futionality must translated into.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mt-5 mt-lg-0">
                <div className="featured-item text-center">
                  <div className="featured-icon">
                    <img
                      className="img-fluid"
                      src="images/feature/05.png"
                      alt=""
                    />
                  </div>
                  <div className="featured-title">
                    <h5>Content marketing</h5>/
                  </div>
                  <div className="featured-desc">
                    <p>
                      Design must be functional, and futionality must translated
                      into, and futionality must translated into.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mt-5">
                <div className="featured-item text-center">
                  <div className="featured-icon">
                    <img
                      className="img-fluid"
                      src="images/feature/06.png"
                      alt=""
                    />
                  </div>
                  <div className="featured-title">
                    <h5>Market analysis</h5>
                  </div>
                  <div className="featured-desc">
                    <p>
                      Design must be functional, and futionality must translated
                      into, and futionality must translated into.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mt-5">
                <div className="featured-item text-center">
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
              <div className="col-lg-4 col-md-6 mt-5">
                <div className="featured-item text-center">
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
            </div>
          </div>
        </section>

        <section>
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

        <section
          className="light-bg animatedBackground"
          data-bg-img="images/pattern/05.png"
        >
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="tab style-2 ">
                  <nav>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                      <a
                        className="nav-link active"
                        id="nav-tab1"
                        data-bs-toggle="tab"
                        href="#tab1-1"
                        role="tab"
                        aria-selected="true"
                      >
                        Marketing
                      </a>
                      <a
                        className="nav-link"
                        id="nav-tab2"
                        data-bs-toggle="tab"
                        href="#tab1-2"
                        role="tab"
                        aria-selected="false"
                      >
                        Planning
                      </a>
                      <a
                        className="nav-link"
                        id="nav-tab3"
                        data-bs-toggle="tab"
                        href="#tab1-3"
                        role="tab"
                        aria-selected="false"
                      >
                        Anlysis
                      </a>
                      <a
                        className="nav-link"
                        id="nav-tab4"
                        data-bs-toggle="tab"
                        href="#tab1-4"
                        role="tab"
                        aria-selected="false"
                      >
                        Stratergy
                      </a>
                    </div>
                  </nav>
                  <div className="tab-content" id="nav-tabContent">
                    <div
                      role="tabpanel"
                      className="tab-pane fade show active"
                      id="tab1-1"
                    >
                      <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                          <img
                            className="img-fluid"
                            src="images/about/02.png"
                            alt=""
                          />
                        </div>
                        <div className="col-lg-6 col-md-12 mt-5 mt-lg-0">
                          <h4 className="title">
                            Powerful & Awesome Marketing
                          </h4>
                          <p>
                            Simply dummy text of the printing and typesetting
                            industry. standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book.
                          </p>
                          <ul className="list-unstyled list-icon">
                            <li className="mb-3">
                              <i className="flaticon-tick"></i> Mattis effic
                              iturut magna pelle ntesque sit
                            </li>
                            <li className="mb-3">
                              <i className="flaticon-tick"></i> Phasellus eget
                              purus id felis dignissim convallis
                            </li>
                            <li>
                              <i className="flaticon-tick"></i> Fusce enim nulla
                              mollis eu metus in sagittis fringilla
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div role="tabpanel" className="tab-pane fade" id="tab1-2">
                      <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                          <img
                            className="img-fluid"
                            src="images/about/02.png"
                            alt=""
                          />
                        </div>
                        <div className="col-lg-6 col-md-12 mt-5 mt-lg-0">
                          <h4 className="title">
                            Powerful & Awesome Marketing
                          </h4>
                          <p>
                            Simply dummy text of the printing and typesetting
                            industry. standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book.
                          </p>
                          <ul className="list-unstyled list-icon">
                            <li className="mb-3">
                              <i className="flaticon-tick"></i> Mattis effic
                              iturut magna pelle ntesque sit
                            </li>
                            <li className="mb-3">
                              <i className="flaticon-tick"></i> Phasellus eget
                              purus id felis dignissim convallis
                            </li>
                            <li>
                              <i className="flaticon-tick"></i> Fusce enim nulla
                              mollis eu metus in sagittis fringilla
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div role="tabpanel" className="tab-pane fade" id="tab1-3">
                      <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                          <img
                            className="img-fluid"
                            src="images/about/02.png"
                            alt=""
                          />
                        </div>
                        <div className="col-lg-6 col-md-12 mt-5 mt-lg-0">
                          <h4 className="title">
                            Powerful & Awesome Marketing
                          </h4>
                          <p>
                            Simply dummy text of the printing and typesetting
                            industry. standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book.
                          </p>
                          <ul className="list-unstyled list-icon">
                            <li className="mb-3">
                              <i className="flaticon-tick"></i> Mattis effic
                              iturut magna pelle ntesque sit
                            </li>
                            <li className="mb-3">
                              <i className="flaticon-tick"></i> Phasellus eget
                              purus id felis dignissim convallis
                            </li>
                            <li>
                              <i className="flaticon-tick"></i> Fusce enim nulla
                              mollis eu metus in sagittis fringilla
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div role="tabpanel" className="tab-pane fade" id="tab1-4">
                      <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                          <img
                            className="img-fluid"
                            src="images/about/02.png"
                            alt=""
                          />
                        </div>
                        <div className="col-lg-6 col-md-12 mt-5 mt-lg-0">
                          <h4 className="title">
                            Powerful & Awesome Marketing
                          </h4>
                          <p>
                            Simply dummy text of the printing and typesetting
                            industry. standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book.
                          </p>
                          <ul className="list-unstyled list-icon">
                            <li className="mb-3">
                              <i className="flaticon-tick"></i> Mattis effic
                              iturut magna pelle ntesque sit
                            </li>
                            <li className="mb-3">
                              <i className="flaticon-tick"></i> Phasellus eget
                              purus id felis dignissim convallis
                            </li>
                            <li>
                              <i className="flaticon-tick"></i> Fusce enim nulla
                              mollis eu metus in sagittis fringilla
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-contain" data-bg-img="images/pattern/02.png">
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-lg-8 col-md-12">
                <div className="section-title">
                  <h6>Creative Team</h6>
                  <h2 className="title">
                    Meet Our Expert team member will ready for your service
                  </h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-12">
                <div className="team-member">
                  <div className="team-images">
                    <img
                      className="img-fluid"
                      src="images/team/01.jpg"
                      alt=""
                    />
                  </div>
                  <div className="team-description">
                    {" "}
                    <span>Manager</span>
                    <h5>
                      <a href="team-single.html">Jemy Lusto</a>
                    </h5>
                    <div className="team-social-icon">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fab fa-facebook-f"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-google-plus-g"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-linkedin-in"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 mt-5 mt-lg-0">
                <div className="team-member active">
                  <div className="team-images">
                    <img
                      className="img-fluid"
                      src="images/team/02.jpg"
                      alt=""
                    />
                  </div>
                  <div className="team-description">
                    {" "}
                    <span>Manager</span>
                    <h5>
                      <a href="team-single.html">Jemy Lusto</a>
                    </h5>
                    <div className="team-social-icon">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fab fa-facebook-f"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-google-plus-g"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-linkedin-in"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 mt-5 mt-lg-0">
                <div className="team-member">
                  <div className="team-images">
                    <img
                      className="img-fluid"
                      src="images/team/03.jpg"
                      alt=""
                    />
                  </div>
                  <div className="team-description">
                    {" "}
                    <span>Manager</span>
                    <h5>
                      <a href="team-single.html">Jemy Lusto</a>
                    </h5>
                    <div className="team-social-icon">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fab fa-facebook-f"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-google-plus-g"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-linkedin-in"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="bg-contain bg-pos-r pt-0"
          data-bg-img="images/bg/02.png"
          style={{ backgroundImage: "url(images/bg/02.png)" }}
        >
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-lg-8 col-md-12">
                <div className="section-title">
                  <h6>Testimonial</h6>
                  <h2 className="title">
                    You Can See our clients feedback What You Say?
                  </h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div
                  className="owl-carousel"
                  data-items="1"
                  data-autoplay="true"
                >
                  <div className="item">
                    <div className="testimonial style-2">
                      <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                          <div className="testimonial-img info-img round-animation">
                            <img
                              className="img-fluid leftRight"
                              src="images/testimonial/01.png"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="col-lg-5 col-md-12 ms-auto mt-5 mt-lg-0">
                          <div className="testimonial-content">
                            <div className="testimonial-quote">
                              <i className="flaticon-quotation"></i>
                            </div>
                            <p>
                              Professional recommended and great experience, Nam
                              pulvinar vitae neque et porttitor, Praesent sed
                              nisi eleifend, Consectetur adipisicing elit, sed
                              do eiusmodas temporo incididunt
                            </p>
                            <div className="testimonial-caption">
                              <h5>Lana Roadse</h5>
                              <label>CEO of Loptus</label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="testimonial style-2">
                      <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                          <div className="testimonial-img info-img round-animation">
                            <img
                              className="img-fluid leftRight"
                              src="images/testimonial/01.png"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="col-lg-5 col-md-12 ms-auto mt-5 mt-lg-0">
                          <div className="testimonial-content">
                            <div className="testimonial-quote">
                              <i className="flaticon-quotation"></i>
                            </div>
                            <p>
                              Professional recommended and great experience, Nam
                              pulvinar vitae neque et porttitor, Praesent sed
                              nisi eleifend, Consectetur adipisicing elit, sed
                              do eiusmodas temporo incididunt
                            </p>
                            <div className="testimonial-caption">
                              <h5>Lana Roadse</h5>
                              <label>CEO of Loptus</label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="testimonial style-2">
                      <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                          <div className="testimonial-img info-img round-animation">
                            <img
                              className="img-fluid leftRight"
                              src="images/testimonial/01.png"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="col-lg-5 col-md-12 ms-auto mt-5 mt-lg-0">
                          <div className="testimonial-content">
                            <div className="testimonial-quote">
                              <i className="flaticon-quotation"></i>
                            </div>
                            <p>
                              Professional recommended and great experience, Nam
                              pulvinar vitae neque et porttitor, Praesent sed
                              nisi eleifend, Consectetur adipisicing elit, sed
                              do eiusmodas temporo incididunt
                            </p>
                            <div className="testimonial-caption">
                              <h5>Lana Roadse</h5>
                              <label>CEO of Loptus</label>
                            </div>
                          </div>
                        </div>
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
            <div className="row justify-content-center text-center">
              <div className="col-lg-8 col-md-12">
                <div className="section-title">
                  <h6>Price Table</h6>
                  <h2 className="title">Choose Your Pricing plan</h2>
                  <p className="mb-0">
                    Deos et accusamus et iusto odio dignissimos qui blanditiis
                    praesentium voluptatum dele corrupti quos dolores et quas
                    molestias.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <div
                  className="price-table style-2 bg-contain bg-pos-r"
                  data-bg-img="images/bg/02.png"
                >
                  <div className="price-header d-md-flex justify-content-between">
                    <h3 className="price-title">Starter</h3>
                    <div className="price-value">
                      <h2>
                        $29<span>/Month</span>
                      </h2>
                    </div>
                  </div>
                  <div className="price-list">
                    <ul className="list-unstyled custom-li">
                      <li>
                        <i className="flaticon-tick"></i> 15 Analytics Compaign
                      </li>
                      <li>
                        <i className="flaticon-tick"></i> Unlimited Site
                        licenses
                      </li>
                      <li>
                        <i className="flaticon-tick"></i> 1 Database
                      </li>
                      <li>
                        <i className="flaticon-tick"></i> 10 Free Optimization
                      </li>
                      <li>
                        <i className="flaticon-tick"></i> Html5 + Css3
                      </li>
                      <li>
                        <i className="flaticon-tick"></i> 24/7 Customer Support
                      </li>
                    </ul>
                  </div>
                  <a className="btn btn-theme" href="#">
                    {" "}
                    <span>Get Started</span>
                  </a>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 mt-5 mt-lg-0">
                <div
                  className="price-table style-2 bg-contain bg-pos-r"
                  data-bg-img="images/bg/02.png"
                >
                  <div className="price-header d-md-flex justify-content-between">
                    <h3 className="price-title">Premium</h3>
                    <div className="price-value">
                      <h2>
                        $99<span>/Month</span>
                      </h2>
                    </div>
                  </div>
                  <div className="price-list">
                    <ul className="list-unstyled custom-li">
                      <li>
                        <i className="flaticon-tick"></i> 15 Analytics Compaign
                      </li>
                      <li>
                        <i className="flaticon-tick"></i> Unlimited Site
                        licenses
                      </li>
                      <li>
                        <i className="flaticon-tick"></i> 1 Database
                      </li>
                      <li>
                        <i className="flaticon-tick"></i> 10 Free Optimization
                      </li>
                      <li>
                        <i className="flaticon-tick"></i> Html5 + Css3
                      </li>
                      <li>
                        <i className="flaticon-tick"></i> 24/7 Customer Support
                      </li>
                    </ul>
                  </div>
                  <a className="btn btn-theme" href="#">
                    {" "}
                    <span>Get Started</span>
                  </a>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 mt-5">
                <div
                  className="price-table style-2 bg-contain bg-pos-r"
                  data-bg-img="images/bg/02.png"
                >
                  <div className="price-header d-md-flex justify-content-between">
                    <h3 className="price-title">Professional</h3>
                    <div className="price-value">
                      <h2>
                        $199<span>/Month</span>
                      </h2>
                    </div>
                  </div>
                  <div className="price-list">
                    <ul className="list-unstyled custom-li">
                      <li>
                        <i className="flaticon-tick"></i> 15 Analytics Compaign
                      </li>
                      <li>
                        <i className="flaticon-tick"></i> Unlimited Site
                        licenses
                      </li>
                      <li>
                        <i className="flaticon-tick"></i> 1 Database
                      </li>
                      <li>
                        <i className="flaticon-tick"></i> 10 Free Optimization
                      </li>
                      <li>
                        <i className="flaticon-tick"></i> Html5 + Css3
                      </li>
                      <li>
                        <i className="flaticon-tick"></i> 24/7 Customer Support
                      </li>
                    </ul>
                  </div>
                  <a className="btn btn-theme" href="#">
                    {" "}
                    <span>Get Started</span>
                  </a>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 mt-5">
                <div
                  className="price-table style-2 bg-contain bg-pos-r"
                  data-bg-img="images/bg/02.png"
                >
                  <div className="price-header d-md-flex justify-content-between">
                    <h3 className="price-title">Standard</h3>
                    <div className="price-value">
                      <h2>
                        $299<span>/Month</span>
                      </h2>
                    </div>
                  </div>
                  <div className="price-list">
                    <ul className="list-unstyled custom-li">
                      <li>
                        <i className="flaticon-tick"></i> 15 Analytics Compaign
                      </li>
                      <li>
                        <i className="flaticon-tick"></i> Unlimited Site
                        licenses
                      </li>
                      <li>
                        <i className="flaticon-tick"></i> 1 Database
                      </li>
                      <li>
                        <i className="flaticon-tick"></i> 10 Free Optimization
                      </li>
                      <li>
                        <i className="flaticon-tick"></i> Html5 + Css3
                      </li>
                      <li>
                        <i className="flaticon-tick"></i> 24/7 Customer Support
                      </li>
                    </ul>
                  </div>
                  <a className="btn btn-theme" href="#">
                    {" "}
                    <span>Get Started</span>
                  </a>
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
                  <p className="mb-0">
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

export default Home;
