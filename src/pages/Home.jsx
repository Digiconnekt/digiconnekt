import React, { useEffect } from "react";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import OneLiner from "../components/OneLiner";
import PopUpHome from "../components/PopUpHome";

const Home = () => {
  const [modal, setModal] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setModal(true);
    }, 5000);
  }, []);

  const navigate = useNavigate();

  const seo = () => {
    navigate("services/search-engine-optimization");
  };

  const smo = () => {
    navigate("services/social-media-optimization");
  };

  const emailMarketing = () => {
    navigate("services/email-marketing");
  };

  const contentMarketing = () => {
    navigate("services/content-marketing");
  };

  return (
    <>
      {/* {modal ? <PopUpHome /> : ""} */}

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
                <NavLink className="btn btn-theme" to="/about-us">
                  <span>Learn More</span>
                </NavLink>
              </div>
            </div>
          </div>
        </section>
        {/* About us end */}

        {/* one liner start */}
        <OneLiner
          textBeforeHighlight="Think with Digiconnekt "
          highlightText="Grow "
          textAfterHighlight="with Digiconnekt"
        />
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
              <div
                className="col-lg-4 col-md-6 mt-5 mt-md-0"
                onClick={seo}
                style={{ cursor: "pointer" }}
              >
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
                    <p>
                      Design must be functional, and futionality must translated
                      into, and futionality must translated into.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 mt-5 mt-lg-0"
                onClick={smo}
                style={{ cursor: "pointer" }}
              >
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
                    <p>
                      Design must be functional, and futionality must translated
                      into, and futionality must translated into.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 mt-5"
                onClick={emailMarketing}
                style={{ cursor: "pointer" }}
              >
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
                    <p>
                      Design must be functional, and futionality must translated
                      into, and futionality must translated into.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 mt-5"
                onClick={contentMarketing}
                style={{ cursor: "pointer" }}
              >
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
        {/* services we provide end */}
      </div>
    </>
  );
};

export default Home;
