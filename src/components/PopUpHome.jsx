import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const PopUpHome = () => {
  const [show, setShow] = useState("");
  const [ariaHidden, setAriaHidden] = useState(true);
  const [ariaModal, setAriaModal] = useState(false);
  const [role, setRole] = useState("");
  const [style, setStyle] = useState({ display: "none" });

  useEffect(() => {
    setShow("show");
    setAriaHidden(false);
    setAriaModal(true);
    setRole("dialog");
    setStyle({
      display: "block",
      backdropFilter: "blur(5px)",
      zIndex: "1300",
    });
  }, []);

  const closePopUp = () => {
    setShow("");
    setAriaHidden(true);
    setAriaModal(false);
    setRole("");
    setStyle({ display: "none" });
  };

  return (
    <>
      <div
        className={`modal fade ${show}`}
        id="exampleModalToggle"
        aria-labelledby="exampleModalToggleLabel"
        tabindex="-1"
        aria-hidden={ariaHidden}
        aria-modal={ariaModal}
        role={role}
        style={style}
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalToggleLabel">
                Select Service
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={closePopUp}
              ></button>
            </div>
            <div className="modal-body">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-5 col-md-12">
                    <div className="info-img position-relative">
                      <img
                        className="img-fluid topBottom"
                        src="images/about/02.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-lg-7 col-md-12 mt-5 mt-lg-0">
                    <div className="card mb-3" style={{ maxWidth: "540px" }}>
                      <div className="row g-0">
                        <div
                          className="col-md-2"
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <img
                            src="images/feature/01.png"
                            className="img-fluid rounded-start"
                            alt="..."
                            style={{
                              maxWidth: "60px",
                            }}
                          />
                        </div>
                        <div className="col-md-10">
                          <div className="card-body">
                            <h5
                              className="card-title"
                              style={{ fontSize: "16px" }}
                            >
                              Search Engine Optimization
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card mb-3" style={{ maxWidth: "540px" }}>
                      <div className="row g-0">
                        <div
                          className="col-md-2"
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <img
                            src="images/feature/02.png"
                            className="img-fluid rounded-start"
                            alt="..."
                            style={{
                              maxWidth: "60px",
                            }}
                          />
                        </div>
                        <div className="col-md-10">
                          <div className="card-body">
                            <h5
                              className="card-title"
                              style={{ fontSize: "16px" }}
                            >
                              Social Media Optimization
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card mb-3" style={{ maxWidth: "540px" }}>
                      <div className="row g-0">
                        <div
                          className="col-md-2"
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <img
                            src="images/feature/03.png"
                            className="img-fluid rounded-start"
                            alt="..."
                            style={{
                              maxWidth: "60px",
                            }}
                          />
                        </div>
                        <div className="col-md-10">
                          <div className="card-body">
                            <h5
                              className="card-title"
                              style={{ fontSize: "16px" }}
                            >
                              Email Marketing
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card mb-3" style={{ maxWidth: "540px" }}>
                      <div className="row g-0">
                        <div
                          className="col-md-2"
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <img
                            src="images/feature/04.png"
                            className="img-fluid rounded-start"
                            alt="..."
                            style={{
                              maxWidth: "60px",
                            }}
                          />
                        </div>
                        <div className="col-md-10">
                          <div className="card-body">
                            <h5
                              className="card-title"
                              style={{ fontSize: "16px" }}
                            >
                              Digital Marketing
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-primary"
                data-bs-target="#exampleModalToggle2"
                data-bs-toggle="modal"
              >
                Open second modal
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="exampleModalToggle2"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel2"
        tabindex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalToggleLabel2">
                Modal 2
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              Hide this modal and show the first with the button below.
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-primary"
                data-bs-target="#exampleModalToggle"
                data-bs-toggle="modal"
              >
                Back to first
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <a
        className="btn btn-primary"
        data-bs-toggle="modal"
        href="#exampleModalToggle"
        role="button"
      >
        Open first modal
      </a> */}
    </>
  );
};

export default PopUpHome;
