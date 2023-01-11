import React from "react";
import { useState } from "react";
import TitleSection from "../components/Title";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    joinWithUs: "Of Course!",
    requireAssistanceWith: [],
    findOutAboutUs: "",
  });

  const onChangeHandler = (e) => {
    const handlerName = e.target.name;
    const handlerValue = e.target.value;

    if (handlerName === "requireAssistanceWith") {
      let copyOfFormData = { ...formData };
      if (e.target.checked) {
        copyOfFormData.requireAssistanceWith.push(handlerValue);
      } else {
        copyOfFormData.requireAssistanceWith =
          copyOfFormData.requireAssistanceWith.filter(
            (elem) => elem !== handlerValue
          );
      }
      setFormData(copyOfFormData);
    } else {
      setFormData(() => ({ ...formData, [handlerName]: handlerValue }));
      // console.log(handlerName, handlerValue);
      // console.log(e);
    }
  };

  const getFormData = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const style = {
    borderRadius: "5px",
    fontSize: "15px",
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
              <div className="col-lg-8 col-md-7">
                <div className="section-title mb-2">
                  <h6>Get In Touch</h6>
                  <h2 className="title">Contact Us</h2>
                </div>
                <div className="contact-main">
                  <form
                    // id="contact-form"
                    className="row g-4"
                    noValidate
                    onSubmit={getFormData}
                  >
                    <div className="messages"></div>
                    {/* name start */}
                    <div className="col-md-6">
                      <input
                        id="form_name"
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Full Name"
                        required
                        onChange={onChangeHandler}
                      />
                      <div className="invalid-feedback">Name is required.</div>
                    </div>
                    {/* name end */}

                    {/* email start */}
                    <div className="col-md-6">
                      <input
                        id="form_email"
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        required
                        onChange={onChangeHandler}
                      />
                      <div className="invalid-feedback">
                        Valid email is required.
                      </div>
                    </div>
                    {/* email end */}

                    {/* phone start */}
                    <div className="col-md-12">
                      <input
                        id="form_phone"
                        type="tel"
                        name="phone"
                        className="form-control"
                        placeholder="Phone"
                        required
                        onChange={onChangeHandler}
                      />
                      <div className="invalid-feedback">Phone is required</div>
                    </div>
                    {/* phone end */}

                    {/* message start */}
                    <div className="col-md-12">
                      <textarea
                        id="form_message"
                        name="message"
                        className="form-control"
                        placeholder="Message"
                        rows="3"
                        required
                        onChange={onChangeHandler}
                      ></textarea>
                      <div className="invalid-feedback">
                        Please,leave us a message.
                      </div>
                    </div>
                    {/* message end */}

                    {/* would you mind start */}
                    <div className="col-md-12">
                      <div className="" style={{ ...style, ...bgStyle }}>
                        <label
                          className="mb-2"
                          style={{ fontWeight: "500", fontSize: "15px" }}
                        >
                          Would you mind joining our email list?
                        </label>
                        <select
                          className="form-select mb-2"
                          style={{
                            ...style,
                            paddingTop: "14px",
                            paddingBottom: "14px",
                          }}
                          aria-label="Default select example"
                          name="joinWithUs"
                          onChange={onChangeHandler}
                        >
                          <option value="Of Course!">Of Course!</option>
                          <option value="No, Thank You">No, Thank You</option>
                        </select>
                      </div>
                    </div>
                    {/* would you mind end */}

                    {/* I require assistance start */}
                    <div className="col-md-12">
                      <div className="" style={{ ...style, ...bgStyle }}>
                        <label
                          className="mb-2"
                          style={{ fontWeight: "500", fontSize: "15px" }}
                        >
                          I require assistance with:
                        </label>
                        <div className="form-check mb-2">
                          <input
                            className="form-check-input checkbox-color"
                            type="checkbox"
                            id="seo"
                            value="Search Engine Optimization"
                            name="requireAssistanceWith"
                            onChange={onChangeHandler}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="seo"
                            style={{ fontSize: "15px" }}
                          >
                            Search Engine Optimization
                          </label>
                        </div>
                        <div className="form-check mb-2">
                          <input
                            className="form-check-input checkbox-color"
                            type="checkbox"
                            value="Social Media Optimization"
                            id="smo"
                            name="requireAssistanceWith"
                            onChange={onChangeHandler}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="smo"
                            style={{ fontSize: "15px" }}
                          >
                            Social Media Optimization
                          </label>
                        </div>
                        <div className="form-check mb-2">
                          <input
                            className="form-check-input checkbox-color"
                            type="checkbox"
                            value="Email Marketing"
                            id="emailMarketing"
                            name="requireAssistanceWith"
                            onChange={onChangeHandler}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="emailMarketing"
                            style={{ fontSize: "15px" }}
                          >
                            Email Marketing
                          </label>
                        </div>
                        <div className="form-check mb-2">
                          <input
                            className="form-check-input checkbox-color"
                            type="checkbox"
                            value="Content Marketing"
                            id="contentMarketing"
                            name="requireAssistanceWith"
                            onChange={onChangeHandler}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="contentMarketing"
                            style={{ fontSize: "15px" }}
                          >
                            Content Marketing
                          </label>
                        </div>
                        <div className="form-check mb-2">
                          <input
                            className="form-check-input checkbox-color"
                            type="checkbox"
                            value="Lead Generation"
                            id="leadGeneration"
                            name="requireAssistanceWith"
                            onChange={onChangeHandler}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="leadGeneration"
                            style={{ fontSize: "15px" }}
                          >
                            Lead Generation
                          </label>
                        </div>
                        <div className="form-check mb-2">
                          <input
                            className="form-check-input checkbox-color"
                            type="checkbox"
                            value="Programmatic Advertising"
                            id="programmaticAdvertising"
                            name="requireAssistanceWith"
                            onChange={onChangeHandler}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="programmaticAdvertising"
                            style={{ fontSize: "15px" }}
                          >
                            Programmatic Advertising
                          </label>
                        </div>
                        <div className="form-check mb-2">
                          <input
                            className="form-check-input checkbox-color"
                            type="checkbox"
                            value="Pay Per Click"
                            id="payPerClick"
                            name="requireAssistanceWith"
                            onChange={onChangeHandler}
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
                    {/* I require assistance end */}

                    {/* How did you find start */}
                    {/* <div className="col-md-12">
                      <div className="" style={{ ...style, ...bgStyle }}>
                        <label
                          className="mb-2"
                          style={{ fontWeight: "500", fontSize: "15px" }}
                        >
                          How did you find out about us?
                        </label>
                        <div className="form-check">
                          <input
                            className="form-check-input checkbox-color"
                            type="checkbox"
                            value="Instagram"
                            id="instagram"
                            name="findOutAboutUs"
                            onChange={onChangeHandler}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="instagram"
                            style={{ fontSize: "15px" }}
                          >
                            Instagram
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input checkbox-color"
                            type="checkbox"
                            value="Facebook"
                            id="facebook"
                            name="findOutAboutUs"
                            onChange={onChangeHandler}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="facebook"
                            style={{ fontSize: "15px" }}
                          >
                            Facebook
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input checkbox-color"
                            type="checkbox"
                            value="Google"
                            id="google"
                            name="findOutAboutUs"
                            onChange={onChangeHandler}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="google"
                            style={{ fontSize: "15px" }}
                          >
                            Google
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input checkbox-color"
                            type="checkbox"
                            value="LinkedIn"
                            id="linkedIn"
                            name="findOutAboutUs"
                            onChange={onChangeHandler}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="linkedIn"
                            style={{ fontSize: "15px" }}
                          >
                            LinkedIn
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input checkbox-color"
                            type="checkbox"
                            value="Other"
                            id="other"
                            name="findOutAboutUs"
                            onChange={onChangeHandler}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="other"
                            style={{ fontSize: "15px" }}
                          >
                            Other
                          </label>
                        </div>
                      </div>
                    </div> */}
                    {/* How did you find end */}

                    {/* TEST TEST How did you find start */}
                    <div className="col-md-12">
                      <div className="" style={{ ...style, ...bgStyle }}>
                        <label
                          className="mb-2"
                          style={{ fontWeight: "500", fontSize: "15px" }}
                        >
                          How did you find out about us?
                        </label>
                        <div className="form-check">
                          <div
                            className="form-check"
                            style={{ paddingLeft: "0" }}
                          >
                            <input
                              className="form-check-input checkbox-color"
                              type="radio"
                              name="findOutAboutUs"
                              id="instagram"
                              value="Instagram"
                              onChange={onChangeHandler}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="instagram"
                              style={{ fontSize: "15px" }}
                            >
                              Instagram
                            </label>
                          </div>
                          <div
                            className="form-check"
                            style={{ paddingLeft: "0" }}
                          >
                            <input
                              className="form-check-input checkbox-color"
                              type="radio"
                              name="findOutAboutUs"
                              id="facebook"
                              value="Facebook"
                              onChange={onChangeHandler}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="facebook"
                              style={{ fontSize: "15px" }}
                            >
                              Facebook
                            </label>
                          </div>
                          <div
                            className="form-check"
                            style={{ paddingLeft: "0" }}
                          >
                            <input
                              className="form-check-input checkbox-color"
                              type="radio"
                              name="findOutAboutUs"
                              id="google"
                              value="Google"
                              onChange={onChangeHandler}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="google"
                              style={{ fontSize: "15px" }}
                            >
                              Google
                            </label>
                          </div>
                          <div
                            className="form-check"
                            style={{ paddingLeft: "0" }}
                          >
                            <input
                              className="form-check-input checkbox-color"
                              type="radio"
                              name="findOutAboutUs"
                              id="linkedin"
                              value="Linkedin"
                              onChange={onChangeHandler}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="linkedin"
                              style={{ fontSize: "15px" }}
                            >
                              Linkedin
                            </label>
                          </div>
                          <div
                            className="form-check"
                            style={{ paddingLeft: "0" }}
                          >
                            <input
                              className="form-check-input checkbox-color"
                              type="radio"
                              name="findOutAboutUs"
                              id="other"
                              value="Other"
                              onChange={onChangeHandler}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="other"
                              style={{ fontSize: "15px" }}
                            >
                              Other
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* TEST TEST How did you find end */}

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

export default Contact;
