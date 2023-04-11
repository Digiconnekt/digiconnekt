import React from "react";
import TitleSection from "../components/Title";
import ImgContent from "../components/ImgContent";

const Packages = () => {
  // what is seo start
  const seo = {
    img: "../images/services/seo/whatIsSeo.png",
    title: "Search Engine Optimization",
    para: [
      `is a crucial component of any online marketing strategy, and DigiConnekt recognizes the importance of having a comprehensive and effective SEO plan in place. As a leading digital marketing agency, we provide customized SEO packages tailored to the specific needs and goals of each client.`,

      `Our SEO package includes a range of services designed to boost a website's search engine rankings, increase website traffic, and improve overall online visibility. These services include:`,
    ],
  };
  // what is seo end

  return (
    <>
      {/* title section start */}
      <TitleSection title="SEO Packages" />
      {/* title section end */}

      {/* page content start */}
      <div className="page-content">
        {/* seo start */}
        <ImgContent img={seo.img} title={seo.title} para={seo.para} />
        {/* seo end */}

        <section className=" position-relative text-center overflow-hidden">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="featured-item text-center">
                  <div className="featured-icon" style={{ maxWidth: "80px" }}>
                    <img
                      className="img-fluid"
                      src="../images/services/seo/dataDrivenIcon.png"
                      alt=""
                    />
                  </div>
                  <div className="featured-title">
                    <h5>Keyword research and analysis</h5>
                  </div>
                  <div className="featured-desc">
                    <p style={{ textAlign: "justify" }}>
                      This involves identifying the most relevant and profitable
                      keywords related to a client's business and industry, and
                      analyzing their search volume and competition levels.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 sm-mt-3">
                <div className="featured-item text-center">
                  <div className="featured-icon" style={{ maxWidth: "80px" }}>
                    <img
                      className="img-fluid"
                      src="../images/services/seo/resultOrientedIcon.png"
                      alt=""
                    />
                  </div>
                  <div className="featured-title">
                    <h5>On-page optimization</h5>
                  </div>
                  <div className="featured-desc">
                    <p style={{ textAlign: "justify" }}>
                      DigiConnekt's team of SEO experts optimize the website's
                      content, metadata, and HTML tags to make it more search
                      engine-friendly.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 md-mt-3">
                <div className="featured-item text-center">
                  <div className="featured-icon" style={{ maxWidth: "80px" }}>
                    <img
                      className="img-fluid"
                      src="../images/services/seo/industryExpertIcon.png"
                      alt=""
                    />
                  </div>
                  <div className="featured-title">
                    <h5>Off-page optimization</h5>
                  </div>
                  <div className="featured-desc">
                    <p style={{ textAlign: "justify" }}>
                      This involves building high-quality backlinks from
                      authoritative websites to increase the website's authority
                      and credibility.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 md-mt-3">
                <div className="featured-item text-center">
                  <div className="featured-icon" style={{ maxWidth: "80px" }}>
                    <img
                      className="img-fluid"
                      src="../images/services/seo/seoConsultingIcon.png"
                      alt=""
                    />
                  </div>
                  <div className="featured-title">
                    <h5>Content creation</h5>
                  </div>
                  <div className="featured-desc">
                    <p style={{ textAlign: "justify" }}>
                      DigiConnekt's team of professional writers create
                      high-quality, engaging, and SEO-friendly content that
                      helps to attract and retain website visitors.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 md-mt-3">
                <div className="featured-item text-center">
                  <div className="featured-icon" style={{ maxWidth: "80px" }}>
                    <img
                      className="img-fluid"
                      src="../images/services/seo/seoOptimizationIcon.png"
                      alt=""
                    />
                  </div>
                  <div className="featured-title">
                    <h5>Technical SEO</h5>
                  </div>
                  <div className="featured-desc">
                    <p style={{ textAlign: "justify" }}>
                      This includes optimizing the website's structure, speed,
                      and mobile responsiveness, among other factors, to ensure
                      it meets the technical requirements of search engines.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 md-mt-3">
                <div className="featured-item text-center">
                  <div className="featured-icon" style={{ maxWidth: "80px" }}>
                    <img
                      className="img-fluid"
                      src="../images/services/seo/seoAuditIcon.png"
                      alt=""
                    />
                  </div>
                  <div className="featured-title">
                    <h5>Analytics and reporting</h5>
                  </div>
                  <div className="featured-desc">
                    <p style={{ textAlign: "justify" }}>
                      DigiConnekt provides regular reports that track the
                      progress of the SEO campaign, including website traffic,
                      keyword rankings, and other metrics.
                    </p>
                  </div>
                </div>
              </div>

              <p className="col-12 col-md-8 mx-auto mt-3 mb-0 text-black">
                Whether the goal is to increase website traffic, generate more
                leads, or improve online visibility, DigiConnekt has the
                expertise and experience to deliver results.
              </p>
            </div>
          </div>
        </section>

        {/* 3 cards start */}
        <section className="bg-contain bg-pos-r" data-bg-img="images/bg/02.png">
          <div className="container">
            <div className="row justify-content-center text-center mb-4">
              <div className="col-lg-8 col-md-12">
                <div className="section-title mb-0">
                  <h2 className="title">Our SEO Packages</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="tab text-center">
                  <div className="tab-content px-0 pb-0" id="nav-tabContent">
                    <div
                      role="tabpanel"
                      className="tab-pane fade show active"
                      id="tab1-1"
                    >
                      <div className="row">
                        <div className="col-lg-4 col-md-12">
                          <div className="price-table">
                            <div className="round-p-animation"></div>
                            <div className="price-header">
                              <h3 className="price-title">
                                Local SEO <br /> Packages
                              </h3>
                            </div>
                            <img
                              className="img-fluid my-4"
                              src="images/price/01.png"
                              alt=""
                            />
                            <div className="price-value">
                              <h2>
                                $275<span>/Month</span>
                              </h2>
                            </div>
                            <div className="">
                              <ul className="list-unstyled list-icon">
                                <li
                                  className="mb-3"
                                  style={{ textAlign: "left" }}
                                >
                                  <i
                                    className="flaticon-tick"
                                    style={{ fontSize: "22px" }}
                                  ></i>
                                  <span
                                    style={{
                                      color: "#1c2045",
                                      fontWeight: "bold",
                                    }}
                                  >
                                    Target:
                                  </span>{" "}
                                  Google Maps
                                </li>
                                <li
                                  className="mb-3"
                                  style={{ textAlign: "left" }}
                                >
                                  <i
                                    className="flaticon-tick"
                                    style={{ fontSize: "22px" }}
                                  ></i>
                                  <span
                                    style={{
                                      color: "#1c2045",
                                      fontWeight: "bold",
                                    }}
                                  >
                                    Best suited for:
                                  </span>{" "}
                                  Local / Niche Business
                                </li>
                                <li
                                  className="mb-3"
                                  style={{ textAlign: "left" }}
                                >
                                  <i
                                    className="flaticon-tick"
                                    style={{ fontSize: "22px" }}
                                  ></i>
                                  <span
                                    style={{
                                      color: "#1c2045",
                                      fontWeight: "bold",
                                    }}
                                  >
                                    Keywords are generally:
                                  </span>{" "}
                                  Long Tail / City/ Town Specific
                                </li>
                                <li
                                  className="mb-3"
                                  style={{ textAlign: "left" }}
                                >
                                  <i
                                    className="flaticon-tick"
                                    style={{ fontSize: "22px" }}
                                  ></i>
                                  <span
                                    style={{
                                      color: "#1c2045",
                                      fontWeight: "bold",
                                    }}
                                  >
                                    Covers:
                                  </span>{" "}
                                  SEO Related Technical Audits + On Page + Off
                                  Page + Content Syndication + Local Listings
                                </li>
                                <li
                                  className="mb-3"
                                  style={{ textAlign: "left" }}
                                >
                                  <i
                                    className="flaticon-tick"
                                    style={{ fontSize: "22px" }}
                                  ></i>
                                  <span
                                    style={{
                                      color: "#1c2045",
                                      fontWeight: "bold",
                                    }}
                                  >
                                    What to expect:
                                  </span>{" "}
                                  Better Rankings on Google Maps + More Calls /
                                  Enquiries
                                </li>
                                <li
                                  className="mb-3"
                                  style={{ textAlign: "left" }}
                                >
                                  <i
                                    className="flaticon-tick"
                                    style={{ fontSize: "22px" }}
                                  ></i>
                                  <span
                                    style={{
                                      color: "#1c2045",
                                      fontWeight: "bold",
                                    }}
                                  >
                                    Improvements Expected:
                                  </span>{" "}
                                  From 1 month onwards
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-12 mt-5 mt-lg-0">
                          <div className="price-table">
                            <div className="round-p-animation"></div>
                            <div className="price-header">
                              <h3 className="price-title">
                                National SEO <br /> Packages
                              </h3>
                            </div>
                            <img
                              className="img-fluid my-4"
                              src="images/price/01.png"
                              alt=""
                            />
                            <div className="price-value">
                              <h2>
                                $200<span>/Month</span>
                              </h2>
                            </div>
                            <div className="">
                              <ul className="list-unstyled list-icon">
                                <li
                                  className="mb-3"
                                  style={{ textAlign: "left" }}
                                >
                                  <i
                                    className="flaticon-tick"
                                    style={{ fontSize: "22px" }}
                                  ></i>
                                  <span
                                    style={{
                                      color: "#1c2045",
                                      fontWeight: "bold",
                                    }}
                                  >
                                    Target:
                                  </span>{" "}
                                  Organic Search Results
                                </li>
                                <li
                                  className="mb-3"
                                  style={{ textAlign: "left" }}
                                >
                                  <i
                                    className="flaticon-tick"
                                    style={{ fontSize: "22px" }}
                                  ></i>
                                  <span
                                    style={{
                                      color: "#1c2045",
                                      fontWeight: "bold",
                                    }}
                                  >
                                    Best suited for:
                                  </span>{" "}
                                  Business that targets Nation Wide or with
                                  Audience
                                </li>
                                <li
                                  className="mb-3"
                                  style={{ textAlign: "left" }}
                                >
                                  <i
                                    className="flaticon-tick"
                                    style={{ fontSize: "22px" }}
                                  ></i>
                                  <span
                                    style={{
                                      color: "#1c2045",
                                      fontWeight: "bold",
                                    }}
                                  >
                                    Keywords are generally:
                                  </span>{" "}
                                  Competitive, Mid Competitive & Low Competitive
                                  Keywords
                                </li>
                                <li
                                  className="mb-3"
                                  style={{ textAlign: "left" }}
                                >
                                  <i
                                    className="flaticon-tick"
                                    style={{ fontSize: "22px" }}
                                  ></i>
                                  <span
                                    style={{
                                      color: "#1c2045",
                                      fontWeight: "bold",
                                    }}
                                  >
                                    Covers:
                                  </span>{" "}
                                  SEO Related Technical Audits + On Page + Off
                                  Page + Content Syndication
                                </li>
                                <li
                                  className="mb-3"
                                  style={{ textAlign: "left" }}
                                >
                                  <i
                                    className="flaticon-tick"
                                    style={{ fontSize: "22px" }}
                                  ></i>
                                  <span
                                    style={{
                                      color: "#1c2045",
                                      fontWeight: "bold",
                                    }}
                                  >
                                    What to expect:
                                  </span>{" "}
                                  Better Rankings + More, Calls + Enquiries
                                </li>
                                <li
                                  className="mb-3"
                                  style={{ textAlign: "left" }}
                                >
                                  <i
                                    className="flaticon-tick"
                                    style={{ fontSize: "22px" }}
                                  ></i>
                                  <span
                                    style={{
                                      color: "#1c2045",
                                      fontWeight: "bold",
                                    }}
                                  >
                                    Improvements Expected:
                                  </span>{" "}
                                  From 2 month onwards
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-12 mt-5 mt-lg-0">
                          <div className="price-table">
                            <div className="round-p-animation"></div>
                            <div className="price-header">
                              <h3 className="price-title">
                                Ecommerce SEO <br /> Packages
                              </h3>
                            </div>
                            <img
                              className="img-fluid my-4"
                              src="images/price/01.png"
                              alt=""
                            />
                            <div className="price-value">
                              <h2>
                                $425<span>/Month</span>
                              </h2>
                            </div>
                            <div className="">
                              <ul className="list-unstyled list-icon">
                                <li
                                  className="mb-3"
                                  style={{ textAlign: "left" }}
                                >
                                  <i
                                    className="flaticon-tick"
                                    style={{ fontSize: "22px" }}
                                  ></i>
                                  <span
                                    style={{
                                      color: "#1c2045",
                                      fontWeight: "bold",
                                    }}
                                  >
                                    Target:
                                  </span>{" "}
                                  Organic Search Results + Product Listings
                                </li>
                                <li
                                  className="mb-3"
                                  style={{ textAlign: "left" }}
                                >
                                  <i
                                    className="flaticon-tick"
                                    style={{ fontSize: "22px" }}
                                  ></i>
                                  <span
                                    style={{
                                      color: "#1c2045",
                                      fontWeight: "bold",
                                    }}
                                  >
                                    Best suited for:
                                  </span>{" "}
                                  Business that sells Products / Services
                                </li>
                                <li
                                  className="mb-3"
                                  style={{ textAlign: "left" }}
                                >
                                  <i
                                    className="flaticon-tick"
                                    style={{ fontSize: "22px" }}
                                  ></i>
                                  <span
                                    style={{
                                      color: "#1c2045",
                                      fontWeight: "bold",
                                    }}
                                  >
                                    Keywords are generally:
                                  </span>{" "}
                                  Product Centric + Category, Oriented Keywords
                                </li>
                                <li
                                  className="mb-3"
                                  style={{ textAlign: "left" }}
                                >
                                  <i
                                    className="flaticon-tick"
                                    style={{ fontSize: "22px" }}
                                  ></i>
                                  <span
                                    style={{
                                      color: "#1c2045",
                                      fontWeight: "bold",
                                    }}
                                  >
                                    Covers:
                                  </span>{" "}
                                  SEO Related Technical Audits + On Page + Off
                                  Page + Content Syndication + Product Listings
                                </li>
                                <li
                                  className="mb-3"
                                  style={{ textAlign: "left" }}
                                >
                                  <i
                                    className="flaticon-tick"
                                    style={{ fontSize: "22px" }}
                                  ></i>
                                  <span
                                    style={{
                                      color: "#1c2045",
                                      fontWeight: "bold",
                                    }}
                                  >
                                    What to expect:
                                  </span>{" "}
                                  Better Rankings + More Sales
                                </li>
                                <li
                                  className="mb-3"
                                  style={{ textAlign: "left" }}
                                >
                                  <i
                                    className="flaticon-tick"
                                    style={{ fontSize: "22px" }}
                                  ></i>
                                  <span
                                    style={{
                                      color: "#1c2045",
                                      fontWeight: "bold",
                                    }}
                                  >
                                    Improvements Expected:
                                  </span>{" "}
                                  From 2 month onwards
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
            </div>
          </div>
        </section>
        {/* 3 cards end */}

        {/* 4 cards start */}
        <section className="light-bg position-relative overflow-hidden">
          <div className="container">
            <div className="row justify-content-center text-center mb-4">
              <div className="col-lg-8 col-md-12">
                <div className="section-title mb-0">
                  <h2 className="title">
                    We can grow your business Exponentially
                  </h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <div className="featured-item style-3 text-center">
                  <div className="featured-icon">
                    <img
                      className="img-fluid"
                      src="images/feature/04.png"
                      alt=""
                    />
                  </div>
                  <div className="featured-title">
                    <h5 className="fw-bold">E-Commerce</h5>
                  </div>
                  <div className="featured-desc">
                    <div class="row">
                      <div class="col-sm-6">
                        <div class="counter ps-0">
                          <span style={{ fontSize: "35px" }}>+150%</span>
                          <h6>Organic Revenue</h6>
                        </div>
                      </div>
                      <div class="col-sm-6 mt-5 mt-sm-0">
                        <div class="counter ps-0">
                          <span style={{ fontSize: "35px" }}>+80%</span>
                          <h6>Website Traffic</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 mt-5 mt-lg-0">
                <div className="featured-item style-3 text-center">
                  <div className="featured-icon">
                    <img
                      className="img-fluid"
                      src="images/feature/04.png"
                      alt=""
                    />
                  </div>
                  <div className="featured-title">
                    <h5 className="fw-bold">Real Estate</h5>
                  </div>
                  <div className="featured-desc">
                    <div class="row">
                      <div class="col-sm-6">
                        <div class="counter ps-0">
                          <span style={{ fontSize: "35px" }}>+180%</span>
                          <h6>Online Leads</h6>
                        </div>
                      </div>
                      <div class="col-sm-6 mt-5 mt-sm-0">
                        <div class="counter ps-0">
                          <span style={{ fontSize: "35px" }}>+243%</span>
                          <h6>Website Sales</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 mt-5">
                <div className="featured-item style-3 text-center">
                  <div className="featured-icon">
                    <img
                      className="img-fluid"
                      src="images/feature/04.png"
                      alt=""
                    />
                  </div>
                  <div className="featured-title">
                    <h5 className="fw-bold">Health Care</h5>
                  </div>
                  <div className="featured-desc">
                    <div class="row">
                      <div class="col-sm-6">
                        <div class="counter ps-0">
                          <span style={{ fontSize: "35px" }}>+210%</span>
                          <h6>Qualified Leads</h6>
                        </div>
                      </div>
                      <div class="col-sm-6 mt-5 mt-sm-0">
                        <div class="counter ps-0">
                          <span style={{ fontSize: "35px" }}>+98%</span>
                          <h6>Keywords Ranked Page #1</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 mt-5">
                <div className="featured-item style-3 text-center">
                  <div className="featured-icon">
                    <img
                      className="img-fluid"
                      src="images/feature/04.png"
                      alt=""
                    />
                  </div>
                  <div className="featured-title">
                    <h5 className="fw-bold">Law Firm</h5>
                  </div>
                  <div className="featured-desc">
                    <div class="row">
                      <div class="col-sm-6">
                        <div class="counter ps-0">
                          <span style={{ fontSize: "35px" }}>+95%</span>
                          <h6>Keywords Ranked in Top 5</h6>
                        </div>
                      </div>
                      <div class="col-sm-6 mt-5 mt-sm-0">
                        <div class="counter ps-0">
                          <span style={{ fontSize: "35px" }}>+140%</span>
                          <h6>Organic Search Traffic</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* 4 cards end */}

        <section className=" position-relative text-center overflow-hidden">
          <div className="container">
            <div className="row justify-content-center text-center mb-4">
              <div className="col-lg-8 col-md-12">
                <div className="section-title mb-0">
                  <h2 className="title">
                    Benefits of DigiConnekt's SEO Package
                  </h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="featured-item text-center">
                  <div className="featured-icon" style={{ maxWidth: "80px" }}>
                    <img
                      className="img-fluid"
                      src="../images/services/seo/dataDrivenIcon.png"
                      alt=""
                    />
                  </div>
                  <div className="featured-title">
                    <h5>Increased website traffic</h5>
                  </div>
                  <div className="featured-desc">
                    <p style={{ textAlign: "justify" }}>
                      By improving a website's search engine rankings,
                      DigiConnekt's SEO package can help to drive more targeted
                      traffic to a website.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 sm-mt-3">
                <div className="featured-item text-center">
                  <div className="featured-icon" style={{ maxWidth: "80px" }}>
                    <img
                      className="img-fluid"
                      src="../images/services/seo/resultOrientedIcon.png"
                      alt=""
                    />
                  </div>
                  <div className="featured-title">
                    <h5>Better online visibility</h5>
                  </div>
                  <div className="featured-desc">
                    <p style={{ textAlign: "justify" }}>
                      By optimizing a website's content and structure,
                      DigiConnekt's SEO package can help to improve a website's
                      online visibility, making it easier for potential
                      customers to find it online.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 md-mt-3">
                <div className="featured-item text-center">
                  <div className="featured-icon" style={{ maxWidth: "80px" }}>
                    <img
                      className="img-fluid"
                      src="../images/services/seo/industryExpertIcon.png"
                      alt=""
                    />
                  </div>
                  <div className="featured-title">
                    <h5>Higher search engine rankings</h5>
                  </div>
                  <div className="featured-desc">
                    <p style={{ textAlign: "justify" }}>
                      DigiConnekt's SEO package is designed to improve a
                      website's search engine rankings, which can lead to
                      increased brand awareness, credibility, and trust.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 md-mt-3">
                <div className="featured-item text-center">
                  <div className="featured-icon" style={{ maxWidth: "80px" }}>
                    <img
                      className="img-fluid"
                      src="../images/services/seo/seoAuditIcon.png"
                      alt=""
                    />
                  </div>
                  <div className="featured-title">
                    <h5>Improved user experience</h5>
                  </div>
                  <div className="featured-desc">
                    <p style={{ textAlign: "justify" }}>
                      By optimizing a website's structure, speed, and content,
                      DigiConnekt's SEO package can help to improve the user
                      experience, making it easier for visitors to navigate and
                      find the information they need.
                    </p>
                  </div>
                </div>
              </div>

              <p className="col-12 col-md-10 mx-auto mt-3 mb-0 text-black">
                In conclusion, DigiConnekt's SEO package is a comprehensive and
                effective solution for businesses looking to improve their
                online visibility, attract more targeted traffic, and increase
                their search engine rankings. With a team of experienced SEO
                experts and a range of customizable services, DigiConnekt is the
                ideal partner for businesses looking to succeed online.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Packages;
