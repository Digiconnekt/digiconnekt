import React from "react";
import TitleSection from "../components/Title";

const ProgramLanding = () => {
  return (
    <>
      {/* title section start */}
      <TitleSection title="Welcome to DigiConnekt's Student Ambassador Programme!" />
      {/* title section end */}

      <section className="overflow-hidden">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="info-img position-relative">
                <img
                  className="img-fluid topBottom"
                  src="../images/student-amb-program.jpeg"
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-12 mt-5 mt-lg-0">
              <div className="section-title mb-4">
                <h2 className="title">Student Ambassador Programme!</h2>
                <p className="text-black" style={{ textAlign: "justify" }}>
                  Are you a motivated and driven student looking for an exciting
                  opportunity to earn rewards while gaining real-world business
                  experience? Look no further!
                </p>
                <p className="text-black" style={{ textAlign: "justify" }}>
                  Join our Student Ambassador Programme and become an integral
                  part of our growing community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="text-center overflow-hidden">
        <div className="section-title mb-0">
          <h2 className="title">Here's how it works</h2>
          <div className="row">
            <div className="col-md-8 mx-auto">
              <p className="text-black">
                We address the need for digital literacy in this era. Therefore,
                our team of experts helps you with your raw idea blending them
                with the latest technologies and producing result-oriented
                outputs
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="text-center overflow-hidden">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-6 col-md-10">
              <div className="section-title">
                <h2 className="title">
                  What are the perks of joining the Programme?
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="work-process">
                <div className="work-process-inner">
                  <div className="work-img">
                    <img
                      className="img-fluid"
                      src="images/how-it-work/02.png"
                      alt=""
                    />
                    <span className="step-num">01</span>
                  </div>
                  <p className="mb-0">
                    As a Student Ambassador, you'll gain 5% rewards for every
                    successful referral, along with a valuable experience in
                    sales, marketing, and client relationship management.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 mt-5 mt-lg-0">
              <div className="work-process">
                <div className="work-process-inner">
                  <div className="work-img">
                    <img
                      className="img-fluid"
                      src="./images/about/analyzeIcon.png"
                      alt=""
                    />
                    <span className="step-num">02</span>
                  </div>
                  <p className="mb-0">
                    This programme offers a unique chance for the best performer
                    to be DigiConnekt’s Student Ambassador.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="text-center overflow-hidden">
        <div className="row">
          <div className="col-md-8 mx-auto">
            <h4>
              Ready to take the first step towards a rewarding experience?
            </h4>
          </div>
        </div>
      </section>

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
                Join the DigiConnekt <br />{" "}
                <span>Student Ambassador Programme</span> <br /> today and
                unlock a world of possibilities.
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section className="text-center overflow-hidden">
        <div className="row">
          <div className="col-md-8 mx-auto">
            <h4>
              We address the need for digital literacy in this era. Therefore,
              our team of experts helps you with your raw idea blending them
              with the latest technologies and producing result-oriented outputs
            </h4>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProgramLanding;
