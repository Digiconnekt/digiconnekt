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
                    novalidate
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
                        class="form-select"
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
                        <div class="form-check">
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
                        <div class="form-check">
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
                        <div class="form-check">
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
                        <div class="form-check">
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
                      <div className="" style={{ ...style, ...bgStyle }}>
                        <label className="mb-2" style={{ fontWeight: "500" }}>
                          How did you find out about us?
                        </label>
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="instagram"
                          />
                          <label class="form-check-label" for="instagram">
                            Instagram
                          </label>
                        </div>
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="facebook"
                          />
                          <label class="form-check-label" for="facebook">
                            Facebook
                          </label>
                        </div>
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="google"
                          />
                          <label class="form-check-label" for="google">
                            Google
                          </label>
                        </div>
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="linkedIn"
                          />
                          <label class="form-check-label" for="linkedIn">
                            LinkedIn
                          </label>
                        </div>
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="other"
                          />
                          <label class="form-check-label" for="other">
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
