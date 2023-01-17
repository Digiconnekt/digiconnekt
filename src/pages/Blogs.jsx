import React from "react";
import TitleSection from "../components/Title";

const Blogs = () => {
  return (
    <>
      {/* title section start */}
      <TitleSection title="Blogs" />
      {/* title section end */}

      {/* page content start */}
      <div class="page-content">
        <section>
          <div class="container">
            <div class="row">
              {/* right side content start */}
              <div class="col-lg-8 col-md-12 order-lg-1">
                {/* blog 1 start */}
                <div class="blog-classic">
                  <div class="post">
                    <div class="post-image">
                      <img
                        class="img-fluid h-100 w-100"
                        src="images/blog/blog1.png"
                        alt="Blog 1"
                      />
                    </div>
                    <div class="post-desc">
                      <div class="post-date">
                        02 <span>January 2023</span>
                      </div>
                      <div class="post-title">
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
                      {/* <div class="post-author">
                        <div class="post-author-img">
                          <img
                            class="img-fluid"
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
                <div class="blog-classic">
                  <div class="post">
                    <div class="post-image">
                      <img
                        class="img-fluid h-100 w-100"
                        src="images/blog/blog2.png"
                        alt="Blog 2"
                      />
                    </div>
                    <div class="post-desc">
                      <div class="post-date">
                        09 <span>January 2023</span>
                      </div>
                      <div class="post-title">
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
                <div class="blog-classic">
                  <div class="post">
                    <div class="post-image">
                      <img
                        class="img-fluid h-100 w-100"
                        src="images/blog/blog3.png"
                        alt="Blog 3"
                      />
                    </div>
                    <div class="post-desc">
                      <div class="post-date">
                        11 <span>January 2023</span>
                      </div>
                      <div class="post-title">
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
                {/* <nav aria-label="Page navigation" class="mt-8">
                  <ul class="pagination">
                    <li class="page-item">
                      <a class="page-link" href="#">
                        <i class="fas fa-arrow-left"></i>
                      </a>
                    </li>
                    <li class="page-item active">
                      <a class="page-link" href="#">
                        1
                      </a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">
                        2
                      </a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">
                        3
                      </a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">
                        <i class="fas fa-arrow-right"></i>
                      </a>
                    </li>
                  </ul>
                </nav> */}
                {/* pagination end */}
              </div>
              {/* right side content end */}

              {/* left side content start */}
              <div class="col-lg-4 col-md-12 sidebar mt-5 mt-lg-0">
                {/* Categories block start */}
                {/* <div class="widget light-bg px-4 py-4">
                  <h5 class="widget-title">Categories</h5>
                  <ul class="widget-categories list-unstyled">
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

                {/* <div class="widget">
                  <h5 class="widget-title">Tags</h5>
                  <ul class="widget-tags list-inline">
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

                {/* <div class="widget theme-bg text-white">
                  <div
                    class="owl-carousel no-pb"
                    data-items="1"
                    data-dots="false"
                    data-autoplay="true"
                  >
                    <div class="item">
                      <div class="testimonial style-2">
                        <div class="testimonial-content">
                          <div class="testimonial-quote">
                            <i class="flaticon-quotation"></i>
                          </div>
                          <p>
                            Professional recommended and great experience, Nam
                            pulvinar vitae neque et porttitor, Praesent sed nisi
                            eleifend, Consectetur adipisicing elit, sed do
                            eiusmodas temporo incididunt
                          </p>
                          <div class="testimonial-caption">
                            <h5>Lana Roadse</h5>
                            <label>CEO of Loptus</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="item">
                      <div class="testimonial style-2">
                        <div class="testimonial-content">
                          <div class="testimonial-quote">
                            <i class="flaticon-quotation"></i>
                          </div>
                          <p>
                            Professional recommended and great experience, Nam
                            pulvinar vitae neque et porttitor, Praesent sed nisi
                            eleifend, Consectetur adipisicing elit, sed do
                            eiusmodas temporo incididunt
                          </p>
                          <div class="testimonial-caption">
                            <h5>Lana Roadse</h5>
                            <label>CEO of Loptus</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="item">
                      <div class="testimonial style-2">
                        <div class="testimonial-content">
                          <div class="testimonial-quote">
                            <i class="flaticon-quotation"></i>
                          </div>
                          <p>
                            Professional recommended and great experience, Nam
                            pulvinar vitae neque et porttitor, Praesent sed nisi
                            eleifend, Consectetur adipisicing elit, sed do
                            eiusmodas temporo incididunt
                          </p>
                          <div class="testimonial-caption">
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
