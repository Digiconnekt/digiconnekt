import React from "react";
import TitleSection from "../components/Title";
import "../App.css";

const Proposal = () => {
  const style = {
    borderRadius: "5px",
    fontSize: "13px",
    color: "#111121",
    border: "1px solid transparent",
    boxShadow: "0px 15px 35px rgb(0 0 0 / 10%)",
    padding: "0.375rem 2.25rem 0.375rem 0.75rem",
  };

  const bgStyle = {
    background: "#ffffff",
  };

  return (
    <>
      {/* title section start */}
      <TitleSection title="Get A Proposal" />
      {/* title section end */}

      <div className="page-content">
        <section
          className="contact-1"
          data-bg-img="images/pattern/02.png"
          style={{ backgroundImage: "url(images/pattern/01.png)" }}
        >
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-8 col-md-7">
                <div className="section-title mb-2">
                  <h6>Proposal</h6>
                  <h2 className="title">Get A Proposal</h2>
                </div>
                <div className="contact-main">
                  <form
                    id="contact-form"
                    className="row g-4 needs-validation"
                    method="post"
                    action="php/contact.php"
                    noValidate
                  >
                    <div className="messages"></div>

                    {/* first name start */}
                    <div className="col-md-12 mb-3">
                      <label
                        className="mb-2"
                        style={{ fontSize: "18px", fontWeight: "500" }}
                      >
                        Let's start by asking you for your first name.
                      </label>
                      <input
                        id="form_name"
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Enter Your First Name here..."
                        required
                      />
                    </div>
                    {/* first name end */}

                    {/* website name start */}
                    <div className="col-md-12 mb-3">
                      <label
                        className="mb-2"
                        style={{ fontSize: "18px", fontWeight: "500" }}
                      >
                        What is your website, then?
                      </label>
                      <input
                        id="form_name"
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Enter Your Website link here..."
                        required
                      />
                    </div>
                    {/* website name end */}

                    {/* main objective start */}
                    <div className="col-md-12 mb-3">
                      <label
                        className="mb-2"
                        style={{ fontSize: "18px", fontWeight: "500" }}
                      >
                        And what is your main objective?
                      </label>
                      <div className="" style={{ ...style, ...bgStyle }}>
                        <div className="form-check mt-2 mb-2">
                          <input
                            className="form-check-input checkbox-color"
                            type="checkbox"
                            value=""
                            id="increaseRevenue"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="increaseRevenue"
                            style={{ fontSize: "15px" }}
                          >
                            Increase My Revenue
                          </label>
                        </div>
                        <div className="form-check mt-2 mb-2">
                          <input
                            className="form-check-input checkbox-color"
                            type="checkbox"
                            value=""
                            id="getMoreLeads"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="getMoreLeads"
                            style={{ fontSize: "15px" }}
                          >
                            Get More Leads
                          </label>
                        </div>
                        <div className="form-check mt-2 mb-2">
                          <input
                            className="form-check-input checkbox-color"
                            type="checkbox"
                            value=""
                            id="growBrandAwareness"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="growBrandAwareness"
                            style={{ fontSize: "15px" }}
                          >
                            Grow brand awareness
                          </label>
                        </div>
                        <div className="form-check mt-2 mb-2">
                          <input
                            className="form-check-input checkbox-color"
                            type="checkbox"
                            value=""
                            id="startMyBusiness"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="startMyBusiness"
                            style={{ fontSize: "15px" }}
                          >
                            Start My Business
                          </label>
                        </div>
                        <div className="form-check mt-2 mb-2">
                          <input
                            className="form-check-input checkbox-color"
                            type="checkbox"
                            value=""
                            id="other"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="other"
                            style={{ fontSize: "15px" }}
                          >
                            Other
                          </label>
                          {/* <input
                            type="text"
                            name="name"
                            placeholder="Type here..."
                            style={{
                              border: "none",
                              borderBottom: "1px solid #333",
                              marginLeft: "8px",
                              color: "#333",
                              fontSize: "15px",
                            }}
                          /> */}
                        </div>
                      </div>
                    </div>
                    {/* main objective end */}

                    {/* which concern start */}
                    <div className="col-md-12 mb-3">
                      <label
                        className="mb-2"
                        style={{ fontSize: "18px", fontWeight: "500" }}
                      >
                        Which concern do you have the most at the moment? How
                        come?
                      </label>
                      <input
                        id="form_name"
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Type here..."
                        required
                      />
                    </div>
                    {/* which concern end */}

                    {/* have you ever collab start */}
                    <div className="col-md-12 mb-3">
                      <label
                        className="mb-2"
                        style={{ fontSize: "18px", fontWeight: "500" }}
                      >
                        Have you ever collaborated with an organisation?
                      </label>
                      <div className="" style={{ ...style, ...bgStyle }}>
                        <div className="form-check mt-2 mb-2">
                          <input
                            className="form-check-input checkbox-color"
                            type="checkbox"
                            value=""
                            id="yes"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="yes"
                            style={{ fontSize: "15px" }}
                          >
                            Yes
                          </label>
                        </div>
                        <div className="form-check mt-2 mb-2">
                          <input
                            className="form-check-input checkbox-color"
                            type="checkbox"
                            value=""
                            id="no"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="no"
                            style={{ fontSize: "15px" }}
                          >
                            No
                          </label>
                        </div>
                      </div>
                    </div>
                    {/* have you ever collab end */}

                    {/* what prior experience start */}
                    <div className="col-md-12 mb-3">
                      <label
                        className="mb-2"
                        style={{ fontSize: "18px", fontWeight: "500" }}
                      >
                        What prior experience did you have?
                      </label>
                      <div
                        className="d-flex justify-content-between"
                        style={{ ...style, ...bgStyle, padding: "5px 5px" }}
                      >
                        <input
                          type="radio"
                          className="btn-check"
                          name="options"
                          id="zero"
                          autoComplete="off"
                        />
                        <label
                          className="btn btn-secondary btn-hover"
                          htmlFor="zero"
                          style={{ padding: "8px 12px" }}
                        >
                          0
                        </label>
                        <input
                          type="radio"
                          className="btn-check"
                          name="options"
                          id="one"
                          autoComplete="off"
                        />
                        <label
                          className="btn btn-secondary btn-hover"
                          htmlFor="one"
                          style={{ padding: "8px 12px" }}
                        >
                          1
                        </label>
                        <input
                          type="radio"
                          className="btn-check"
                          name="options"
                          id="two"
                          autoComplete="off"
                        />
                        <label
                          className="btn btn-secondary btn-hover"
                          htmlFor="two"
                          style={{ padding: "8px 12px" }}
                        >
                          2
                        </label>
                        <input
                          type="radio"
                          className="btn-check"
                          name="options"
                          id="three"
                          autoComplete="off"
                        />
                        <label
                          className="btn btn-secondary btn-hover"
                          htmlFor="three"
                          style={{ padding: "8px 12px" }}
                        >
                          3
                        </label>
                        <input
                          type="radio"
                          className="btn-check"
                          name="options"
                          id="four"
                          autoComplete="off"
                        />
                        <label
                          className="btn btn-secondary btn-hover"
                          htmlFor="four"
                          style={{ padding: "8px 12px" }}
                        >
                          4
                        </label>
                        <input
                          type="radio"
                          className="btn-check"
                          name="options"
                          id="five"
                          autoComplete="off"
                        />
                        <label
                          className="btn btn-secondary btn-hover"
                          htmlFor="five"
                          style={{ padding: "8px 12px" }}
                        >
                          5
                        </label>
                        <input
                          type="radio"
                          className="btn-check"
                          name="options"
                          id="six"
                          autoComplete="off"
                        />
                        <label
                          className="btn btn-secondary btn-hover"
                          htmlFor="six"
                          style={{ padding: "8px 12px" }}
                        >
                          6
                        </label>
                        <input
                          type="radio"
                          className="btn-check"
                          name="options"
                          id="seven"
                          autoComplete="off"
                        />
                        <label
                          className="btn btn-secondary btn-hover"
                          htmlFor="seven"
                          style={{ padding: "8px 12px" }}
                        >
                          7
                        </label>
                        <input
                          type="radio"
                          className="btn-check"
                          name="options"
                          id="eight"
                          autoComplete="off"
                        />
                        <label
                          className="btn btn-secondary btn-hover"
                          htmlFor="eight"
                          style={{ padding: "8px 12px" }}
                        >
                          8
                        </label>
                        <input
                          type="radio"
                          className="btn-check"
                          name="options"
                          id="nine"
                          autoComplete="off"
                        />
                        <label
                          className="btn btn-secondary btn-hover"
                          htmlFor="nine"
                          style={{ padding: "8px 12px" }}
                        >
                          9
                        </label>
                        <input
                          type="radio"
                          className="btn-check"
                          name="options"
                          id="ten"
                          autoComplete="off"
                        />
                        <label
                          className="btn btn-secondary btn-hover"
                          htmlFor="ten"
                          style={{ padding: "8px 12px" }}
                        >
                          10
                        </label>
                      </div>
                    </div>
                    {/* what prior experience end */}

                    {/* what service looking start */}
                    <div className="col-md-12 mb-3">
                      <label
                        className="mb-2"
                        style={{ fontSize: "18px", fontWeight: "500" }}
                      >
                        All right! Now, in what services are you looking?
                      </label>
                      <div className="" style={{ ...style, ...bgStyle }}>
                        <div className="form-check mt-2 mb-2">
                          <input
                            className="form-check-input checkbox-color"
                            type="checkbox"
                            value=""
                            id="seo"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="seo"
                            style={{ fontSize: "15px" }}
                          >
                            Search Engine Optimization
                          </label>
                        </div>
                        <div className="form-check mt-2 mb-2">
                          <input
                            className="form-check-input checkbox-color"
                            type="checkbox"
                            value=""
                            id="smo"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="smo"
                            style={{ fontSize: "15px" }}
                          >
                            Social Media Optimization
                          </label>
                        </div>
                        <div className="form-check mt-2 mb-2">
                          <input
                            className="form-check-input checkbox-color"
                            type="checkbox"
                            value=""
                            id="emailMarketing"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="emailMarketing"
                            style={{ fontSize: "15px" }}
                          >
                            Email Marketing
                          </label>
                        </div>
                        <div className="form-check mt-2 mb-2">
                          <input
                            className="form-check-input checkbox-color"
                            type="checkbox"
                            value=""
                            id="contentMarketing"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="contentMarketing"
                            style={{ fontSize: "15px" }}
                          >
                            Content Marketing
                          </label>
                        </div>
                        <div className="form-check mt-2 mb-2">
                          <input
                            className="form-check-input checkbox-color"
                            type="checkbox"
                            value=""
                            id="leadGeneration"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="leadGeneration"
                            style={{ fontSize: "15px" }}
                          >
                            Lead Generation
                          </label>
                        </div>
                        <div className="form-check mt-2 mb-2">
                          <input
                            className="form-check-input checkbox-color"
                            type="checkbox"
                            value=""
                            id="programmaticAdvertising"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="programmaticAdvertising"
                            style={{ fontSize: "15px" }}
                          >
                            Programmatic Advertising
                          </label>
                        </div>
                        <div className="form-check mt-2 mb-2">
                          <input
                            className="form-check-input checkbox-color"
                            type="checkbox"
                            value=""
                            id="payPerClick"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="payPerClick"
                            style={{ fontSize: "15px" }}
                          >
                            Pay Per Click
                          </label>
                        </div>
                      </div>
                    </div>
                    {/* what service looking end */}

                    {/* how much money start */}
                    <div className="col-md-12 mb-3">
                      <label
                        className="mb-2"
                        style={{ fontSize: "18px", fontWeight: "500" }}
                      >
                        How much money does your company now bring in each month
                        on average?
                      </label>
                      <div className="" style={{ ...style, ...bgStyle }}>
                        <div className="form-check mt-2 mb-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="launch"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="launch"
                            style={{ fontSize: "15px" }}
                          >
                            I'm preparing to launch
                          </label>
                        </div>
                        <div className="form-check mt-2 mb-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="zeroToFiveK"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="zeroToFiveK"
                            style={{ fontSize: "15px" }}
                          >
                            $0 - $5000
                          </label>
                        </div>
                        <div className="form-check mt-2 mb-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="fiveToTenK"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="fiveToTenK"
                            style={{ fontSize: "15px" }}
                          >
                            $5000 - $10000
                          </label>
                        </div>
                        <div className="form-check mt-2 mb-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="tenToTwentyK"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="tenToTwentyK"
                            style={{ fontSize: "15px" }}
                          >
                            $10000 - $20000
                          </label>
                        </div>
                        <div className="form-check mt-2 mb-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="twentyToFiftyK"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="twentyToFiftyK"
                            style={{ fontSize: "15px" }}
                          >
                            $20000 - $50000
                          </label>
                        </div>
                        <div className="form-check mt-2 mb-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="fiftyToOneLac"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="fiftyToOneLac"
                            style={{ fontSize: "15px" }}
                          >
                            $50000 - $100000
                          </label>
                        </div>
                        <div className="form-check mt-2 mb-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="OneLacPlus"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="OneLacPlus"
                            style={{ fontSize: "15px" }}
                          >
                            $100000+
                          </label>
                        </div>
                        <div className="form-check mt-2 mb-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="hold"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="hold"
                            style={{ fontSize: "15px" }}
                          >
                            I'd rather hold off for now.
                          </label>
                        </div>
                      </div>
                    </div>
                    {/* how much money end */}

                    {/* provide contact info start */}
                    <div className="col-md-12 mb-3">
                      <label
                        className="mb-2"
                        style={{ fontSize: "18px", fontWeight: "500" }}
                      >
                        Please provide your contact information so that we may
                        contact you with your quote.
                      </label>
                      <div className="row">
                        <div className="col-md-6 mt-2 mb-2">
                          <input
                            id="form_phone"
                            type="tel"
                            name="phone"
                            className="form-control"
                            placeholder="Phone"
                            required
                          />
                          <div className="invalid-feedback">
                            Phone is required
                          </div>
                        </div>
                        <div className="col-md-6  mt-2 mb-2">
                          <input
                            id="form_email"
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder="Email"
                            required
                          />
                          <div className="invalid-feedback">
                            Valid email is required.
                          </div>
                        </div>
                        <div className="col-md-12  mt-2 mb-2">
                          <input
                            id="form_name"
                            type="text"
                            name="company"
                            className="form-control"
                            placeholder="Company name"
                            required
                          />
                          <div className="invalid-feedback">
                            Company Name is required.
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* provide contact info end */}

                    {/* when would you like to meet start */}
                    <div className="col-md-12 mb-3">
                      <label
                        className="mb-2"
                        style={{ fontSize: "18px", fontWeight: "500" }}
                      >
                        When would you like to meet with us online?
                      </label>
                      <br />
                      <input className="text-black" type="datetime-local" />
                    </div>
                    {/* when would you like to meet end */}

                    {/* send button start */}
                    <div className="col-md-12">
                      <button className="btn btn-theme btn-radius">
                        <span>Send Message</span>
                      </button>
                    </div>
                    {/* send button end */}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Proposal;
