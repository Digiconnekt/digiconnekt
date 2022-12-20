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
              <div className="col-lg-6 col-md-7">
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
                    novalidate
                  >
                    <div className="messages"></div>

                    <div className="col-md-12">
                      <label className="mb-2" style={{ fontWeight: "500" }}>
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

                    <div className="col-md-12">
                      <label className="mb-2" style={{ fontWeight: "500" }}>
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

                    <div className="col-md-12">
                      <label className="mb-2" style={{ fontWeight: "500" }}>
                        And what is your main objective?
                      </label>
                      <div className="" style={{ ...style, ...bgStyle }}>
                        <div class="form-check mt-2 mb-2">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="increaseRevenue"
                          />
                          <label class="form-check-label" for="increaseRevenue">
                            Increase My Revenue
                          </label>
                        </div>
                        <div class="form-check mt-2 mb-2">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="getMoreLeads"
                          />
                          <label class="form-check-label" for="getMoreLeads">
                            Get More Leads
                          </label>
                        </div>
                        <div class="form-check mt-2 mb-2">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="growBrandAwareness"
                          />
                          <label
                            class="form-check-label"
                            for="growBrandAwareness"
                          >
                            Grow brand awareness
                          </label>
                        </div>
                        <div class="form-check mt-2 mb-2">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="startMyBusiness"
                          />
                          <label class="form-check-label" for="startMyBusiness">
                            Start My Business
                          </label>
                        </div>
                        <div class="form-check mt-2 mb-2">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="other"
                          />
                          <label class="form-check-label" for="other">
                            Other
                          </label>
                          <input
                            type="text"
                            name="name"
                            placeholder="Type here..."
                            style={{
                              border: "none",
                              borderBottom: "1px solid #333",
                              marginLeft: "8px",
                              color: "#333",
                            }}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="col-md-12">
                      <label className="mb-2" style={{ fontWeight: "500" }}>
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

                    <div className="col-md-12">
                      <label className="mb-2" style={{ fontWeight: "500" }}>
                        Have you ever collaborated with an organisation?
                      </label>
                      <div className="" style={{ ...style, ...bgStyle }}>
                        <div class="form-check mt-2 mb-2">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="yes"
                          />
                          <label class="form-check-label" for="yes">
                            Yes
                          </label>
                        </div>
                        <div class="form-check mt-2 mb-2">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="no"
                          />
                          <label class="form-check-label" for="no">
                            No
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-12">
                      <label className="mb-2" style={{ fontWeight: "500" }}>
                        What prior experience did you have?
                      </label>
                      <div
                        className="d-flex justify-content-between"
                        style={{ ...style, ...bgStyle, padding: "5px 5px" }}
                      >
                        <input
                          type="radio"
                          class="btn-check"
                          name="options"
                          id="zero"
                          autocomplete="off"
                        />
                        <label
                          class="btn btn-secondary btn-hover"
                          for="zero"
                          style={{ padding: "8px 15px" }}
                        >
                          0
                        </label>
                        <input
                          type="radio"
                          class="btn-check"
                          name="options"
                          id="one"
                          autocomplete="off"
                        />
                        <label
                          class="btn btn-secondary btn-hover"
                          for="one"
                          style={{ padding: "8px 15px" }}
                        >
                          1
                        </label>
                        <input
                          type="radio"
                          class="btn-check"
                          name="options"
                          id="two"
                          autocomplete="off"
                        />
                        <label
                          class="btn btn-secondary btn-hover"
                          for="two"
                          style={{ padding: "8px 15px" }}
                        >
                          2
                        </label>
                        <input
                          type="radio"
                          class="btn-check"
                          name="options"
                          id="three"
                          autocomplete="off"
                        />
                        <label
                          class="btn btn-secondary btn-hover"
                          for="three"
                          style={{ padding: "8px 15px" }}
                        >
                          3
                        </label>
                        <input
                          type="radio"
                          class="btn-check"
                          name="options"
                          id="four"
                          autocomplete="off"
                        />
                        <label
                          class="btn btn-secondary btn-hover"
                          for="four"
                          style={{ padding: "8px 15px" }}
                        >
                          4
                        </label>
                        <input
                          type="radio"
                          class="btn-check"
                          name="options"
                          id="five"
                          autocomplete="off"
                        />
                        <label
                          class="btn btn-secondary btn-hover"
                          for="five"
                          style={{ padding: "8px 15px" }}
                        >
                          5
                        </label>
                        <input
                          type="radio"
                          class="btn-check"
                          name="options"
                          id="six"
                          autocomplete="off"
                        />
                        <label
                          class="btn btn-secondary btn-hover"
                          for="six"
                          style={{ padding: "8px 15px" }}
                        >
                          6
                        </label>
                        <input
                          type="radio"
                          class="btn-check"
                          name="options"
                          id="seven"
                          autocomplete="off"
                        />
                        <label
                          class="btn btn-secondary btn-hover"
                          for="seven"
                          style={{ padding: "8px 15px" }}
                        >
                          7
                        </label>
                        <input
                          type="radio"
                          class="btn-check"
                          name="options"
                          id="eight"
                          autocomplete="off"
                        />
                        <label
                          class="btn btn-secondary btn-hover"
                          for="eight"
                          style={{ padding: "8px 15px" }}
                        >
                          8
                        </label>
                        <input
                          type="radio"
                          class="btn-check"
                          name="options"
                          id="nine"
                          autocomplete="off"
                        />
                        <label
                          class="btn btn-secondary btn-hover"
                          for="nine"
                          style={{ padding: "8px 15px" }}
                        >
                          9
                        </label>
                        <input
                          type="radio"
                          class="btn-check"
                          name="options"
                          id="ten"
                          autocomplete="off"
                        />
                        <label
                          class="btn btn-secondary btn-hover"
                          for="ten"
                          style={{ padding: "8px 15px" }}
                        >
                          10
                        </label>
                      </div>
                    </div>

                    <div className="col-md-12">
                      <label className="mb-2" style={{ fontWeight: "500" }}>
                        All right! Now, in what services are you looking?
                      </label>
                      <div className="" style={{ ...style, ...bgStyle }}>
                        <div class="form-check mt-2 mb-2">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="seo"
                          />
                          <label class="form-check-label" for="seo">
                            Search Engine Optimization
                          </label>
                        </div>
                        <div class="form-check mt-2 mb-2">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="smo"
                          />
                          <label class="form-check-label" for="smo">
                            Social Media Optimization
                          </label>
                        </div>
                        <div class="form-check mt-2 mb-2">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="emailMarketing"
                          />
                          <label class="form-check-label" for="emailMarketing">
                            Email Marketing
                          </label>
                        </div>
                        <div class="form-check mt-2 mb-2">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="contentMarketing"
                          />
                          <label
                            class="form-check-label"
                            for="contentMarketing"
                          >
                            Content Marketing
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-12">
                      <label className="mb-2" style={{ fontWeight: "500" }}>
                        How much money does your company now bring in each month
                        on average?
                      </label>
                      <div className="" style={{ ...style, ...bgStyle }}>
                        <div class="form-check mt-2 mb-2">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="launch"
                          />
                          <label class="form-check-label" for="launch">
                            I'm preparing to launch
                          </label>
                        </div>
                        <div class="form-check mt-2 mb-2">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="zeroToFiveK"
                          />
                          <label class="form-check-label" for="zeroToFiveK">
                            $0 - $5000
                          </label>
                        </div>
                        <div class="form-check mt-2 mb-2">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="fiveToTenK"
                          />
                          <label class="form-check-label" for="fiveToTenK">
                            $5000 - $10000
                          </label>
                        </div>
                        <div class="form-check mt-2 mb-2">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="tenToTwentyK"
                          />
                          <label class="form-check-label" for="tenToTwentyK">
                            $10000 - $20000
                          </label>
                        </div>
                        <div class="form-check mt-2 mb-2">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="twentyToFiftyK"
                          />
                          <label class="form-check-label" for="twentyToFiftyK">
                            $20000 - $50000
                          </label>
                        </div>
                        <div class="form-check mt-2 mb-2">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="fiftyToOneLac"
                          />
                          <label class="form-check-label" for="fiftyToOneLac">
                            $50000 - $100000
                          </label>
                        </div>
                        <div class="form-check mt-2 mb-2">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="OneLacPlus"
                          />
                          <label class="form-check-label" for="OneLacPlus">
                            $100000+
                          </label>
                        </div>
                        <div class="form-check mt-2 mb-2">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="hold"
                          />
                          <label class="form-check-label" for="hold">
                            I'd rather hold off for now.
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-12">
                      <label className="mb-2" style={{ fontWeight: "500" }}>
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

                    <div className="col-md-12">
                      <label className="mb-2" style={{ fontWeight: "500" }}>
                        When would you like to meet with us online?
                      </label>
                      <br />
                      <input type="datetime-local" />
                    </div>

                    <div className="col-md-12">
                      <button className="btn btn-theme btn-radius">
                        <span>Send Message</span>
                      </button>
                    </div>
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
