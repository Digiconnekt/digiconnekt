import React from "react";
import TitleSection from "../components/Title";

const Contact = () => {
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
      <TitleSection title="Contact" />
      {/* title section end */}

      <div className="page-content">
        <section
          className="contact-1"
          data-bg-img="images/pattern/02.png"
          style={{ backgroundImage: "url(images/pattern/02.png)" }}
        >
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-6 col-md-7">
                <div className="section-title mb-2">
                  <h6>Get In Touch</h6>
                  <h2 className="title">Contact Us</h2>
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
                    <div className="col-md-6">
                      <input
                        id="form_name"
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Name"
                        required
                      />
                      <div className="invalid-feedback">Name is required.</div>
                    </div>
                    <div className="col-md-6">
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
                    <div className="col-md-12">
                      <input
                        id="form_phone"
                        type="tel"
                        name="phone"
                        className="form-control"
                        placeholder="Phone"
                        required
                      />
                      <div className="invalid-feedback">Phone is required</div>
                    </div>
                    <div className="col-md-12">
                      <textarea
                        id="form_message"
                        name="message"
                        className="form-control"
                        placeholder="Message"
                        rows="3"
                        required
                      ></textarea>
                      <div className="invalid-feedback">
                        Please,leave us a message.
                      </div>
                    </div>
                    <div className="col-md-12">
                      <select
                        className="form-select"
                        style={{
                          ...style,
                          paddingTop: "14px",
                          paddingBottom: "14px",
                        }}
                        aria-label="Default select example"
                      >
                        <option selected disabled>
                          Would you mind joining our email list?
                        </option>
                        <option value="1">Of Course!</option>
                        <option value="2">No, Thank You</option>
                      </select>
                    </div>
                    <div className="col-md-12">
                      <div className="" style={{ ...style, ...bgStyle }}>
                        <label className="mb-2" style={{ fontWeight: "500" }}>
                          I require assistance with:
                        </label>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="seo"
                            value="Search Engine Optimization"
                          />
                          <label className="form-check-label" htmlFor="seo">
                            Search Engine Optimization
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="Social Media Optimization"
                            id="smo"
                          />
                          <label className="form-check-label" htmlFor="smo">
                            Social Media Optimization
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="Email Marketing"
                            id="emailMarketing"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="emailMarketing"
                          >
                            Email Marketing
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="Content Marketing"
                            id="contentMarketing"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="contentMarketing"
                          >
                            Content Marketing
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="" style={{ ...style, ...bgStyle }}>
                        <label className="mb-2" style={{ fontWeight: "500" }}>
                          How did you find out about us?
                        </label>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="Instagram"
                            id="instagram"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="instagram"
                          >
                            Instagram
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="Facebook"
                            id="facebook"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="facebook"
                          >
                            Facebook
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="Google"
                            id="google"
                          />
                          <label className="form-check-label" htmlFor="google">
                            Google
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="LinkedIn"
                            id="linkedIn"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="linkedIn"
                          >
                            LinkedIn
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="Other"
                            id="other"
                          />
                          <label className="form-check-label" htmlFor="other">
                            Other
                          </label>
                        </div>
                      </div>
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

export default Contact;
