import React from "react";
import TitleSection from "../components/Title";

const Blogs = () => {
  return (
    <>
      {/* title section start */}
      <TitleSection title="Blogs" />
      {/* title section end */}

      {/* page content start */}
      <div className="page-content">
        <section>
          <div className="container">
            <div className="row">
              {/* right side content start */}
              <div className="col-lg-8 col-md-12 order-lg-1">
                {/* blog 1 start */}
                <div className="blog-classic">
                  <div className="post">
                    <div className="post-image">
                      <img
                        className="img-fluid h-100 w-100"
                        src="images/blog/blog1.png"
                        alt="Blog 1"
                      />
                    </div>
                    <div className="post-desc">
                      <div className="post-date">
                        02 <span>January 2023</span>
                      </div>
                      <div className="post-title">
                        <h5>
                          <a href="/blogs/blog1">
                            The role of SEO in modern digital marketing
                            strategies
                          </a>
                        </h5>
                      </div>
                      <p>
                        In today's digital landscape, search engine optimization
                        (SEO) is more important than ever for businesses looking
                        to reach their target audience...{" "}
                        <a href="/blogs/blog1">read more</a>
                      </p>
                      {/* <div className="post-author">
                        <div className="post-author-img">
                          <img
                            className="img-fluid"
                            src="images/thumbnail/01.png"
                            alt=""
                          />
                        </div>
                        <span>Romi kelly</span>
                      </div> */}
                    </div>
                  </div>
                </div>
                {/* blog 1 end */}

                {/* blog 2 start */}
                <div className="blog-classic">
                  <div className="post">
                    <div className="post-image">
                      <img
                        className="img-fluid h-100 w-100"
                        src="images/blog/blog2.png"
                        alt="Blog 2"
                      />
                    </div>
                    <div className="post-desc">
                      <div className="post-date">
                        09 <span>January 2023</span>
                      </div>
                      <div className="post-title">
                        <h5>
                          <a href="/blogs/blog2">
                            10 Tips for Optimizing Your Social Media Presence
                          </a>
                        </h5>
                      </div>
                      <p>
                        Social media is an essential part of any modern
                        marketing strategy, but with so many platforms to choose
                        from and an ever-evolving set of best practices...{" "}
                        <a href="/blogs/blog2">read more</a>
                      </p>
                    </div>
                  </div>
                </div>
                {/* blog 2 end */}

                {/* blog 3 start */}
                <div className="blog-classic">
                  <div className="post">
                    <div className="post-image">
                      <img
                        className="img-fluid h-100 w-100"
                        src="images/blog/blog3.png"
                        alt="Blog 3"
                      />
                    </div>
                    <div className="post-desc">
                      <div className="post-date">
                        11 <span>January 2023</span>
                      </div>
                      <div className="post-title">
                        <h5>
                          <a href="/blogs/blog3">
                            Advanced PPC Techniques: Taking Your Campaigns to
                            the Next Level
                          </a>
                        </h5>
                      </div>
                      <p>
                        Pay-per-click (PPC) advertising is an effective way for
                        businesses of all sizes to reach their target audience
                        and... <a href="/blogs/blog3">read more</a>
                      </p>
                    </div>
                  </div>
                </div>
                {/* blog 3 end */}

                {/* pagination start */}
                {/* <nav aria-label="Page navigation" className="mt-8">
                  <ul className="pagination">
                    <li className="page-item">
                      <a className="page-link" href="#">
                        <i className="fas fa-arrow-left"></i>
                      </a>
                    </li>
                    <li className="page-item active">
                      <a className="page-link" href="#">
                        1
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        2
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        3
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        <i className="fas fa-arrow-right"></i>
                      </a>
                    </li>
                  </ul>
                </nav> */}
                {/* pagination end */}
              </div>
              {/* right side content end */}

              {/* left side content start */}
              <div className="col-lg-4 col-md-12 sidebar mt-5 mt-lg-0">
                {/* Categories block start */}
                {/* <div className="widget light-bg px-4 py-4">
                  <h5 className="widget-title">Categories</h5>
                  <ul className="widget-categories list-unstyled">
                    <li>
                      <a href="#">
                        Search Engine Optimization <span>(1)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Social Media Optimization <span>(1)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Pay Per Click <span>(1)</span>
                      </a>
                    </li>
                  </ul>
                </div> */}
                {/* Categories block end */}

                {/* <div className="widget">
                  <h5 className="widget-title">Tags</h5>
                  <ul className="widget-tags list-inline">
                    <li>
                      <a href="#">Design</a>
                    </li>
                    <li>
                      <a href="#">Seo</a>
                    </li>
                    <li>
                      <a href="#">Marketing</a>
                    </li>
                    <li>
                      <a href="#">Business</a>
                    </li>
                    <li>
                      <a href="#">analysis</a>
                    </li>
                    <li>
                      <a href="#">Email</a>
                    </li>
                    <li>
                      <a href="#">Digital</a>
                    </li>
                  </ul>
                </div> */}

                {/* <div className="widget theme-bg text-white">
                  <div
                    className="owl-carousel no-pb"
                    data-items="1"
                    data-dots="false"
                    data-autoplay="true"
                  >
                    <div className="item">
                      <div className="testimonial style-2">
                        <div className="testimonial-content">
                          <div className="testimonial-quote">
                            <i className="flaticon-quotation"></i>
                          </div>
                          <p>
                            Professional recommended and great experience, Nam
                            pulvinar vitae neque et porttitor, Praesent sed nisi
                            eleifend, Consectetur adipisicing elit, sed do
                            eiusmodas temporo incididunt
                          </p>
                          <div className="testimonial-caption">
                            <h5>Lana Roadse</h5>
                            <label>CEO of Loptus</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="testimonial style-2">
                        <div className="testimonial-content">
                          <div className="testimonial-quote">
                            <i className="flaticon-quotation"></i>
                          </div>
                          <p>
                            Professional recommended and great experience, Nam
                            pulvinar vitae neque et porttitor, Praesent sed nisi
                            eleifend, Consectetur adipisicing elit, sed do
                            eiusmodas temporo incididunt
                          </p>
                          <div className="testimonial-caption">
                            <h5>Lana Roadse</h5>
                            <label>CEO of Loptus</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="testimonial style-2">
                        <div className="testimonial-content">
                          <div className="testimonial-quote">
                            <i className="flaticon-quotation"></i>
                          </div>
                          <p>
                            Professional recommended and great experience, Nam
                            pulvinar vitae neque et porttitor, Praesent sed nisi
                            eleifend, Consectetur adipisicing elit, sed do
                            eiusmodas temporo incididunt
                          </p>
                          <div className="testimonial-caption">
                            <h5>Lana Roadse</h5>
                            <label>CEO of Loptus</label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}

                {/* recent post start */}
                <div className="widget recent-post">
                  <h5 className="widget-title">Recent Post</h5>
                  <article>
                    <div className="row">
                      <div className="col-sm">
                        <img
                          src="images/blog/blog1-sm.png"
                          className="img-fluid"
                          alt="Blog 1"
                        />
                      </div>
                      <div className="col-sm-9 mt-3 mt-sm-0">
                        <a href="/blogs/blog1">
                          The Role Of SEO In Modern Digital Marketing Strategies
                        </a>
                        <div className="post-date">
                          02 <span>January 2023</span>
                        </div>
                      </div>
                    </div>
                  </article>
                  <article>
                    <div className="row mt-4">
                      <div className="col-sm">
                        <img
                          src="images/blog/blog2-sm.png"
                          className="img-fluid"
                          alt="Blog 2"
                        />
                      </div>
                      <div className="col-sm-9 mt-3 mt-sm-0">
                        <a href="/blogs/blog2">
                          10 Tips for Optimizing Your Social Media Presence
                        </a>
                        <div className="post-date">
                          09 <span>January 2023</span>
                        </div>
                      </div>
                    </div>
                  </article>
                  <article>
                    <div className="row mt-4">
                      <div className="col-sm">
                        <img
                          src="images/blog/blog3-sm.png"
                          className="img-fluid"
                          alt="Blog 3"
                        />
                      </div>
                      <div className="col-sm-9 mt-3 mt-sm-0">
                        <a href="/blogs/blog3">
                          Advanced PPC Techniques: Taking Your Campaigns to the
                          Next Level
                        </a>
                        <div className="post-date">
                          11 <span>January 2023</span>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
                {/* recent post end */}
              </div>
              {/* left side content end */}
            </div>
          </div>
        </section>
      </div>
      {/* page content end */}
    </>
  );
};

export default Blogs;
