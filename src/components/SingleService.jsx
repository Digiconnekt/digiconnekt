import React from "react";
import { useParams } from "react-router-dom";

const SingleService = () => {
  const { id } = useParams();

  return (
    <>
      <section
        className="page-title overflow-hidden text-center light-bg bg-contain animatedBackground"
        data-bg-img="images/pattern/05.png"
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-12">
              <h1 className="title">Service Single {id}</h1>
              <nav aria-label="breadcrumb" className="page-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="index.html">Home</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="#">Services</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Service Single
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
        <div className="page-title-pattern">
          <img className="img-fluid" src="images/bg/06.png" alt="" />
        </div>
      </section>

      <div className="page-content">
        <section>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-12">
                <div>
                  <div className="service-images">
                    <img
                      className="img-fluid w-100"
                      src="images/case-studies/large/03.jpg"
                      alt=""
                    />
                  </div>
                  <div className="service-details mt-4">
                    <h2 className="title">Digital Marketing</h2>
                    <p className="lead text-black">
                      llamcorper suscipit lobortis nisl ut aliquip ex ea commodo
                      non habent claritatem insitamconsequat duis autem
                      facilisis at vero eros nibh euismod tincidunt ut laoreet
                      vel eum iriure Excepturi vero minima impedit aliquam id.
                    </p>
                    <p className="mb-5">
                      consectetur adipisicing elit. Totam mollitia incidunt vero
                      cupiditate obcaecati iusto tempora unde! Numquam officiis,
                      quae adipisci quam laudantium nulla modi. adipisci quam
                      laudantium nulla modi. Totam mollitia incidunt vero
                      cupiditate obcaecati
                    </p>
                    <ul className="custom-li list-unstyled list-icon-2">
                      <li>Design must be functional</li>
                      <li>Futionality must translated into</li>
                      <li>Aenean pellentesque elit vitae</li>
                      <li>Mattis effic iturut magna</li>
                      <li>Lusce enim nulla mollis</li>
                      <li>Phasellus eget purus id felis</li>
                    </ul>
                  </div>
                </div>
                <div className="tab style-2 mt-5">
                  <nav>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                      <a
                        className="nav-link active"
                        id="nav-tab1"
                        data-bs-toggle="tab"
                        href="#tab1-1"
                        role="tab"
                        aria-selected="true"
                      >
                        Marketing
                      </a>
                      <a
                        className="nav-link"
                        id="nav-tab2"
                        data-bs-toggle="tab"
                        href="#tab1-2"
                        role="tab"
                        aria-selected="false"
                      >
                        Planning
                      </a>
                    </div>
                  </nav>
                  <div className="tab-content" id="nav-tabContent">
                    <div
                      role="tabpanel"
                      className="tab-pane fade show active"
                      id="tab1-1"
                    >
                      <h4 className="title">Powerful & Awesome Marketing</h4>
                      <p>
                        Simply dummy text of the printing and typesetting
                        industry. standard dummy text ever since the 1500s, when
                        an unknown printer took a galley of type and scrambled
                        it to make a type specimen book.
                      </p>
                      <ul className="list-unstyled list-icon">
                        <li className="mb-3">
                          <i className="flaticon-tick"></i> Mattis effic iturut
                          magna pelle ntesque sit
                        </li>
                        <li className="mb-3">
                          <i className="flaticon-tick"></i> Phasellus eget purus
                          id felis dignissim convallis
                        </li>
                        <li>
                          <i className="flaticon-tick"></i> Fusce enim nulla
                          mollis eu metus in sagittis fringilla
                        </li>
                      </ul>
                    </div>
                    <div role="tabpanel" className="tab-pane fade" id="tab1-2">
                      <h4 className="title">Powerful & Awesome Marketing</h4>
                      <p>
                        Simply dummy text of the printing and typesetting
                        industry. standard dummy text ever since the 1500s, when
                        an unknown printer took a galley of type and scrambled
                        it to make a type specimen book.
                      </p>
                      <ul className="list-unstyled list-icon">
                        <li className="mb-3">
                          <i className="flaticon-tick"></i> Mattis effic iturut
                          magna pelle ntesque sit
                        </li>
                        <li className="mb-3">
                          <i className="flaticon-tick"></i> Phasellus eget purus
                          id felis dignissim convallis
                        </li>
                        <li>
                          <i className="flaticon-tick"></i> Fusce enim nulla
                          mollis eu metus in sagittis fringilla
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 sidebar mt-5 mt-lg-0">
                <div className="widget mb-5">
                  <div className="sidebar-links">
                    <ul className="list-unstyled">
                      <li className="active">
                        <a href="service-single.html">All Service</a>
                      </li>
                      <li>
                        <a href="service-single.html">Digital Marketing</a>
                      </li>
                      <li>
                        <a href="service-single.html">Content marketing</a>
                      </li>
                      <li>
                        <a href="service-single.html">Market analysis</a>
                      </li>
                      <li>
                        <a href="service-single.html">Email Marketing</a>
                      </li>
                      <li>
                        <a href="service-single.html">Link Building</a>
                      </li>
                      <li>
                        <a href="service-single.html">SEO Optimization</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="widget theme-bg text-white">
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
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SingleService;
