import React from "react";

const OneLiner = ({
  textBeforeHighlight,
  highlightText,
  textAfterHighlight,
}) => {
  return (
    <>
      {/* one liner start */}
      <section
        className="overflow-hidden dark-bg animatedBackground"
        data-bg-img="../images/pattern/06.png"
        style={{
          backgroundImage: 'url("../images/pattern/06.png")',
        }}
      >
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-12 col-md-12">
              <div className="section-title mb-0">
                <h2 className="title oneLiner">
                  {textBeforeHighlight}
                  <span style={{ color: "#ff7810" }}>{highlightText}</span>
                  {textAfterHighlight}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* one liner end */}
    </>
  );
};

export default OneLiner;
