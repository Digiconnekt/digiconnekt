import React, { useEffect } from "react";
import { useState } from "react";
import HeroSection from "../components/HeroSection";
import PopUpHome from "../components/PopUpHome";

const Home = () => {
  const [modal, setModal] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setModal(true);
    }, 5000);
  }, []);

  return (
    <>
      {modal ? <PopUpHome /> : ""}

      {/* hero section start */}
      <HeroSection />
      {/* hero section end */}

      <div className="page-content">
        {/* About us start */}
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
                <div className="section-title mb-0">
                  <h6>About Us</h6>
                </div>
                <p className="text-black">
                  DigiConnekt is an experienced digital marketing company with
                  headquarters in Singapore. Our primary focus is to provide
                  highly efficient designs and functional user interfaces,
                  integrating the latest technologies and frameworks to deliver
                  innovation and end-user delight.
                </p>
                <p className="text-black">
                  We boost your digital space with the latest technology by
                  deeply analyzing the latest tool and technology, the demand of
                  the market, and generating results accordingly.
                </p>
                <a className="btn btn-theme" href="/about-us">
                  <span>Learn More</span>
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* About us end */}

        {/* one liner start */}
        <section
          className="overflow-hidden dark-bg animatedBackground pt-5 pb-3 px-2"
          data-bg-img="../images/pattern/06.png"
          style={{
            backgroundImage: 'url("../images/pattern/06.png")',
          }}
        >
          <div className="row justify-content-center text-center">
            <div className="col-lg-12 col-md-12">
              <div className="section-title mb-0">
                <h2
                  className="title oneLiner"
                  style={{ fontSize: "70px", lineHeight: "90px" }}
                >
                  <span style={{ color: "#ff7810", fontSize: "85px" }}>
                    Think{" "}
                  </span>
                  with Digiconnekt <br />
                  <span style={{ color: "#ff7810", fontSize: "85px" }}>
                    Grow{" "}
                  </span>
                  with Digiconnekt
                </h2>
              </div>
            </div>
          </div>
        </section>
        {/* one liner end */}

        {/* how it works end */}
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
              <div
                className="col-lg-5 col-md-12 me-auto mt-5 mt-lg-0 ps-lg-11"
                style={{ margin: "0 auto" }}
              >
                <div className="section-title">
                  <h6>How It Works</h6>
                  <h5>
                    We address the need for digital literacy in this era.
                    Therefore, our team of experts helps you with your raw idea
                    blending them with the latest technologies and producing
                    result-oriented outputs
                  </h5>
                  <p className="text-black">
                    We primarily focus on the following three steps:
                  </p>
                </div>
                <div className="work-process style-2">
                  <div className="work-process-inner">
                    <span className="step-num" data-bg-color="#ff7810">
                      01
                    </span>
                    <h4>Analyze</h4>
                    <p className="mb-0">
                      Doing good R&D on market trends, and customers' needs and
                      finding solutions to increase the ROI.
                    </p>
                  </div>
                </div>
                <div className="work-process style-2 mt-5">
                  <div className="work-process-inner">
                    <span className="step-num" data-bg-color="#ff156a">
                      02
                    </span>
                    <h4>Advertise</h4>
                    <p className="mb-0">
                      We understand the importance of correct advertising. Our
                      team of professionals works intensely on advertising
                      forums to drive the desired results.
                    </p>
                  </div>
                </div>
                <div className="work-process style-2 mt-5">
                  <div className="work-process-inner">
                    <span className="step-num" data-bg-color="#ffb72f">
                      03
                    </span>
                    <h4>Optimize</h4>
                    <p className="mb-0">
                      Optimization according to your needs. From SEO to content
                      optimization we structure every sphere that suits your
                      needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* how it works end */}

        {/* what we do end */}
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
                <div className="section-title">
                  <h6>What</h6>
                  <h2 className="title">What We Do</h2>
                </div>
                <p className="text-black">
                  We leverage secure & scalable solutions with the integration
                  of technologies to develop solutions to translate your
                  visionary ideas into reality.
                </p>
                <p className="text-black">
                  This approach is used across all the digital marketing spheres
                  from Search Engine Optimization to Search Engine Marketing.
                  Some of our highlighted methodologies for personalized
                  marketing include Google Analytics for analyzing growth and
                  engagement, marketing automation inculcating Smart Bidding,
                  improving CRM, AI tools for improving website content, and
                  much more.
                </p>
                <p className="text-black">
                  DigiConnekt comes as a potent for your digitalization, from
                  transforming your visualization to real business innovation
                  and maximizing your ROI. We are ready to serve you with our
                  proficiency!
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* what we do end */}

        {/* why choose us end */}
        <section className="light-bg">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12 mt-5 mt-lg-0">
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
              <div className="col-lg-6 col-md-12 order-lg-1">
                <div className="section-title">
                  <h6>Why</h6>
                  <h2 className="title">Why Choose Us</h2>
                </div>
                <p className="text-black">
                  Our proficiency brings in brand development, analytics, and
                  consulting experience that enables you to understand client
                  needs and design robust systems, and user-friendly solutions
                  in an efficient way.
                </p>
                <p className="text-black">
                  We align to be a part of your journey to translate your
                  visionary ideas into user-centric solutions. We aim to expand
                  your brand name across dimensions, increase client engagement,
                  and maximize ROI by leveraging existing approaches and
                  integrating new technologies to drive digital excellence.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* why choose us end */}

        {/* services we provide start */}
        <section
          className="bg-contain bg-pos-r p-0 mt-10 mb-10"
          data-bg-img="images/pattern/02.png"
          style={{ backgroundImage: "url(../images/pattern/02.png)" }}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-4 col-md-6">
                <div className="section-title mb-0">
                  <h6>Services</h6>
                  <h2 className="title">Services we provide</h2>
                  <p className="mb-0">
                    Our services act as the fuel for the growth of your
                    business. Your growth is our primary priority. All our
                    services are focused on precision targeting for desired
                    results. All our ads and content are tailored for your
                    business to set a great impression of your brand.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mt-5 mt-md-0">
                <a href="/services/search-engine-optimization">
                  <div className="featured-item text-center">
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
                      <p className="text-black">
                        Design must be functional, and futionality must
                        translated into, and futionality must translated into.
                      </p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-md-6 mt-5 mt-lg-0">
                <a href="/services/social-media-optimization">
                  <div className="featured-item text-center">
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
                      <p className="text-black">
                        Design must be functional, and futionality must
                        translated into, and futionality must translated into.
                      </p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-md-6 mt-5">
                <a href="/services/email-marketing">
                  <div className="featured-item text-center">
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
                      <p className="text-black">
                        Design must be functional, and futionality must
                        translated into, and futionality must translated into.
                      </p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-md-6 mt-5">
                <a href="/services/content-marketing">
                  <div className="featured-item text-center">
                    <div className="featured-icon">
                      <img
                        className="img-fluid"
                        src="images/feature/07.png"
                        alt=""
                      />
                    </div>
                    <div className="featured-title">
                      <h5>Content Marketing</h5>
                    </div>
                    <div className="featured-desc">
                      <p className="text-black">
                        Design must be functional, and futionality must
                        translated into, and futionality must translated into.
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* services we provide end */}

        {/* feedback start */}
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
                  className="owl-carousel owl-loaded owl-drag"
                  data-items="1"
                  data-autoplay="true"
                >
                  <div className="owl-stage-outer">
                    <div
                      className="owl-stage"
                      style={{
                        transform: "translate3d(0px, 0px, 0px)",
                        transition: "all 1s ease 0s",
                        width: "9072px",
                      }}
                    >
                      <div
                        className="owl-item cloned"
                        style={{ width: "1296px" }}
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
                                    Professional recommended and great
                                    experience, Nam pulvinar vitae neque et
                                    porttitor, Praesent sed nisi eleifend,
                                    Consectetur adipisicing elit, sed do
                                    eiusmodas temporo incididunt
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
                      <div
                        className="owl-item cloned"
                        style={{ width: "1296px" }}
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
                                    Professional recommended and great
                                    experience, Nam pulvinar vitae neque et
                                    porttitor, Praesent sed nisi eleifend,
                                    Consectetur adipisicing elit, sed do
                                    eiusmodas temporo incididunt
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
                      <div
                        className="owl-item active"
                        style={{ width: "1296px" }}
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
                                    Professional recommended and great
                                    experience, Nam pulvinar vitae neque et
                                    porttitor, Praesent sed nisi eleifend,
                                    Consectetur adipisicing elit, sed do
                                    eiusmodas temporo incididunt
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
                      <div className="owl-item" style={{ width: "1296px" }}>
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
                                    Professional recommended and great
                                    experience, Nam pulvinar vitae neque et
                                    porttitor, Praesent sed nisi eleifend,
                                    Consectetur adipisicing elit, sed do
                                    eiusmodas temporo incididunt
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
                      <div className="owl-item" style={{ width: "1296px" }}>
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
                                    Professional recommended and great
                                    experience, Nam pulvinar vitae neque et
                                    porttitor, Praesent sed nisi eleifend,
                                    Consectetur adipisicing elit, sed do
                                    eiusmodas temporo incididunt
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
                      <div
                        className="owl-item cloned"
                        style={{ width: "1296px" }}
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
                                    Professional recommended and great
                                    experience, Nam pulvinar vitae neque et
                                    porttitor, Praesent sed nisi eleifend,
                                    Consectetur adipisicing elit, sed do
                                    eiusmodas temporo incididunt
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
                      <div
                        className="owl-item cloned"
                        style={{ width: "1296px" }}
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
                                    Professional recommended and great
                                    experience, Nam pulvinar vitae neque et
                                    porttitor, Praesent sed nisi eleifend,
                                    Consectetur adipisicing elit, sed do
                                    eiusmodas temporo incididunt
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
                  <div className="owl-nav disabled">
                    <button
                      type="button"
                      role="presentation"
                      className="owl-prev"
                    >
                      <span className="fas fa-long-arrow-alt-left">
                        <span></span>
                      </span>
                    </button>
                    <button
                      type="button"
                      role="presentation"
                      className="owl-next"
                    >
                      <span className="fas fa-long-arrow-alt-right"></span>
                    </button>
                  </div>
                  <div className="owl-dots">
                    <button
                      role="button"
                      className="owl-dot active"
                      fdprocessedid="5h5hln"
                    >
                      <span></span>
                    </button>
                    <button
                      role="button"
                      className="owl-dot"
                      fdprocessedid="y9g3d"
                    >
                      <span></span>
                    </button>
                    <button
                      role="button"
                      className="owl-dot"
                      fdprocessedid="tyvsbzj"
                    >
                      <span></span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* feedback end */}

        {/* blog start */}
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
                      Suspendisse et augue dui gravida{" "}
                      <a href="blog-details.html">read more...</a>
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
                      Suspendisse et augue dui gravida{" "}
                      <a href="blog-details.html">read more...</a>
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
                      Suspendisse et augue dui gravida{" "}
                      <a href="blog-details.html">read more...</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* blog end */}
      </div>
    </>
  );
};

export default Home;
