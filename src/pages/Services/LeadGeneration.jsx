import React from "react";
import ImgContent from "../../components/ImgContent";
import ServicesLinkCarousel from "../../components/ServicesLinkCarousel";
import TitleSection from "../../components/Title";
import "./scrollBar.css";

const LeadGeneration = () => {
  // lead generation start
  const leadGeneration = {
    img: "../images/services/lead-generation/lead-generation.png",
    title: "The Initial Step: Lead Generation",
    para: [
      `Since lead generation is the first step in bringing clients to the business, it is given a lot of attention. The team assists in creating leads for the company to attract additional clients, and the CRM team will turn those leads into clients. `,

      `Our team plans the campaigns from their initialization to generating leads. They put their research, and strategies to obtain authenticated leads for you.`,

      `The lead generation concept helps to establish pricing based on the number of leads. The corporation can select the product they want to sell and the region where they want to grow its business. It engages a more precisely targeted audience.`,

      `It regulates the number of leads a company receives each month. Only the leads that the business receives are paid for.`,
    ],
  };
  // lead generation end

  return (
    <>
      {/* title section start */}
      <TitleSection title="Lead Generation" />
      {/* title section end */}

      {/* page content start */}
      <div className="page-content">
        {/* lead generation start */}
        <ImgContent
          img={leadGeneration.img}
          title={leadGeneration.title}
          para={leadGeneration.para}
        />
        {/* lead generation end */}

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
                <h2 className="title oneLiner">
                  Reach your customer at the <br />
                  <span> Right Place </span>
                  and at
                  <span> Right Time! </span>
                </h2>
              </div>
            </div>
          </div>
        </section>
        {/* one liner end */}

        {/* How do we help? start */}
        <section
          className="overflow-hidden light-bg animatedBackground"
          data-bg-img="../images/pattern/05.png"
          style={{
            backgroundImage: 'url("../images/pattern/05.png")',
          }}
        >
          <div className="container" style={{ maxWidth: "1080px" }}>
            <div className="row justify-content-center text-center mb-5">
              <div className="col-lg-8 col-md-12">
                <div className="section-title mb-0">
                  <h2 className="title" style={{ color: "#ff7810" }}>
                    How do we help?
                  </h2>
                </div>
              </div>
            </div>

            <div className="row align-items-center mb-10">
              <div className="col-lg-6 col-md-12 order-lg-1">
                <div className="info-img position-relative">
                  <img
                    className="img-fluid topBottom"
                    src="../images/services/lead-generation/viral-ads.png"
                    alt="Viral Ads"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-12 mt-5 mt-lg-0">
                <div className="section-title mb-4">
                  <h2 className="title">Viral Ads</h2>
                  <p
                    className="mb-0 text-black"
                    style={{ textAlign: "justify" }}
                  >
                    We will present the ideal customer to your company.
                    Digiconnekt is a team of highly experienced and creative
                    people.
                  </p>
                </div>
              </div>
            </div>

            <div className="row align-items-center mb-10">
              <div className="col-lg-6 col-md-12">
                <div className="info-img position-relative">
                  <img
                    className="img-fluid topBottom"
                    src="../images/services/lead-generation/increasing-graph.png"
                    alt="Increasing Graph"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-12 mt-5 mt-lg-0">
                <div className="section-title mb-4">
                  <h2 className="title">Increasing Conversion Graph</h2>
                  <p
                    className="mb-0 text-black"
                    style={{ textAlign: "justify" }}
                  >
                    Every firm aims to create a landing page that increases the
                    conversion rate. We design landing pages that convert your
                    traffic into potential leads.
                  </p>
                </div>
              </div>
            </div>

            <div className="row align-items-center mb-10">
              <div className="col-lg-6 col-md-12 order-lg-1">
                <div className="info-img position-relative">
                  <img
                    className="img-fluid topBottom"
                    src="../images/services/lead-generation/retention-system.png"
                    alt="Retention System"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-12 mt-5 mt-lg-0">
                <div className="section-title mb-4">
                  <h2 className="title">Retention System to maximize </h2>
                  <p
                    className="mb-0 text-black"
                    style={{ textAlign: "justify" }}
                  >
                    Increase your closing % with the help of our retention
                    techniques. To make sure you're constantly top-of-mind, we
                    follow up with prospects.
                  </p>
                </div>
              </div>
            </div>

            <div className="row align-items-center mb-10">
              <div className="col-lg-6 col-md-12">
                <div className="info-img position-relative">
                  <img
                    className="img-fluid topBottom"
                    src="../images/services/lead-generation/lead-perfection.png"
                    alt="Lead Perfection"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-12 mt-5 mt-lg-0">
                <div className="section-title mb-4">
                  <h2 className="title">Lead Perfection</h2>
                  <p
                    className="mb-0 text-black"
                    style={{ textAlign: "justify" }}
                  >
                    In order to optimize for very profitable and high set-rate
                    campaigns, we analyze reports three times each week back to
                    our internal campaigns to update our strategies.
                  </p>
                </div>
              </div>
            </div>

            <div className="row align-items-center mb-10">
              <div className="col-lg-6 col-md-12 order-lg-1">
                <div className="info-img position-relative">
                  <img
                    className="img-fluid topBottom"
                    src="../images/services/lead-generation/optimizing-area.png"
                    alt="Optimizing Areas"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-12 mt-5 mt-lg-0">
                <div className="section-title mb-4">
                  <h2 className="title">Optimizing Areas</h2>
                  <p
                    className="mb-0 text-black"
                    style={{ textAlign: "justify" }}
                  >
                    With strong analytics, we monitor and improve the success of
                    your marketing initiatives. Before you do, we are aware of
                    your most lucrative Zips, counties, and cities.
                  </p>
                </div>
              </div>
            </div>

            <div className="row align-items-center mb-10">
              <div className="col-lg-6 col-md-12">
                <div className="info-img position-relative">
                  <img
                    className="img-fluid topBottom"
                    src="../images/services/lead-generation/success-strategies.png"
                    alt="Success Strategies"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-12 mt-5 mt-lg-0">
                <div className="section-title mb-4">
                  <h2 className="title">Success Strategies</h2>
                  <p
                    className="mb-0 text-black"
                    style={{ textAlign: "justify" }}
                  >
                    To increase sales, we will talk with you about our sales
                    strategy. In certain ways, we see ourselves as an extension
                    of your company.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* How do we help? end */}

        {/* services links start */}
        <ServicesLinkCarousel />
        {/* services links end */}

        {/* contact btn start */}
        <section
          className="overflow-hidden dark-bg animatedBackground mb-10"
          data-bg-img="../images/pattern/06.png"
          style={{
            backgroundImage: 'url("../images/pattern/06.png")',
          }}
        >
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-lg-8 col-md-12">
                <div className="section-title mb-0">
                  <div className="row">
                    <div className="col-lg-11 col-md-12 me-auto">
                      <div className="align-items-center white-bg box-shadow px-3 py-3 radius d-md-flex justify-content-between">
                        <h4 className="mb-0">Let's Discuss</h4>
                        <div className="subscribe-form sm-mt-2">
                          <form id="mc-form" className="group">
                            <input
                              type="email"
                              name="EMAIL"
                              className="email"
                              id="mc-email"
                              placeholder="Email Address"
                              required
                            />
                            <input
                              className="btn btn-theme"
                              type="submit"
                              name="subscribe"
                              value="Subscribe"
                            />
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* contact btn end */}
      </div>
      {/* page content end */}
    </>
  );
};

export default LeadGeneration;
