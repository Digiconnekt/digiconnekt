import React from "react";

const GetFreeSiteAudit = () => {
  return (
    <>
      <section
        className="overflow-hidden dark-bg animatedBackground pt-4 pb-4 px-2"
        data-bg-img="../images/pattern/06.png"
        style={{
          backgroundImage: 'url("../images/pattern/06.png")',
        }}
      >
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-md-12">
              <div className="section-title" style={{ marginBottom: "30px" }}>
                <h2 className="title">
                  Get A <span style={{ color: "#ff7810" }}> Free</span> Site
                  Audit
                </h2>
              </div>
            </div>
            <div className="col-md-12">
              <form>
                <div className="row">
                  <div className="col-md-3 mb-3">
                    <input
                      id="form_name"
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Name"
                      required
                      style={{ background: "none", borderColor: "#ff7810" }}
                    />
                  </div>
                  <div className="col-md-3 mb-3">
                    <input
                      id="form_email"
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Email"
                      required
                      style={{ background: "none", borderColor: "#ff7810" }}
                    />
                  </div>
                  <div className="col-md-3 mb-3">
                    <input
                      id="form_phone"
                      type="text"
                      name="phone"
                      className="form-control"
                      placeholder="Website Link"
                      required
                      style={{ background: "none", borderColor: "#ff7810" }}
                    />
                  </div>
                  <div className="col-md-3 ">
                    <button
                      className="btn btn-theme btn-radius"
                      style={{ width: "100%" }}
                    >
                      <span>Get Audit</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GetFreeSiteAudit;
