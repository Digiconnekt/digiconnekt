import React from "react";
import { Helmet } from "react-helmet-async";
import TitleSection from "../components/Title";
import RecentPost from "../components/RecentPost";

const Blogs = () => {
  const blogs = [
    {
      id: 6,
      fullDate: {
        date: "12",
        monthYr: "July 2023",
      },
      title:
        "Seo And Content Marketing: A Winning Combination In Digital Marketing",
      content:
        "SEO (Search Engine Optimization) and Content Marketing are two integral parts of any digital marketing strategy. Both are essential in their own way, but when combined, they create a powerful force that can help drive traffic, increase engagement, and ultimately improve conversions...",
      img: "images/blog/blog6.png",
    },
    {
      id: 5,
      fullDate: {
        date: "21",
        monthYr: "June 2023",
      },
      title: "The Ultimate Guide To Seo: Tips And Strategies To Success",
      content:
        "SEO, or Search Engine Optimization, is an essential part of any successful digital marketing strategy. It is the process of optimizing your website and its content to rank higher in search engine results pages (SERPs) for specific keywords and phrases...",
      img: "images/blog/blog5.png",
    },
    {
      id: 4,
      fullDate: {
        date: "14",
        monthYr: "June 2023",
      },
      title: "Digital Marketing In The Age Of Social Media : Tips To SUCCESS",
      content:
        "Welcome to the digital age, where social media has become an integral part of our daily lives. From checking updates on Facebook and Instagram to sharing tweets on Twitter, social media has transformed the way we communicate, interact, and even do business...",
      img: "images/blog/blog4.png",
    },
    {
      id: 3,
      fullDate: {
        date: "11",
        monthYr: "January 2023",
      },
      title: "Advanced PPC Techniques: Taking Your Campaigns To The Next Level",
      content:
        "Pay-per-click (PPC) advertising is an effective way for businesses of all sizes to reach their target audience and...",
      img: "images/blog/blog3.png",
    },
    {
      id: 2,
      fullDate: {
        date: "09",
        monthYr: "January 2023",
      },
      title: "10 Tips For Optimizing Your Social Media Presence",
      content:
        "Social media is an essential part of any modern marketing strategy, but with so many platforms to choose from and an ever-evolving set of best practices...",
      img: "images/blog/blog2.png",
    },
    {
      id: 1,
      fullDate: {
        date: "02",
        monthYr: "January 2023",
      },
      title: "The Role Of SEO In Modern Digital Marketing Strategies",
      content:
        "In today's digital landscape, search engine optimization (SEO) is more important than ever for businesses looking to reach their target audience...",
      img: "images/blog/blog1.png",
    },
  ];

  return (
    <>
      <Helmet>
        {/* Title */}
        <title>Get the latest Digital Marketing News from Digiconnekt</title>

        {/* Description */}
        <meta
          name="description"
          content="Get the latest news on digital marketing, SEO tips, social media, and content marketing from our blog. Our blog page has everything you need to know."
        />

        {/* Keywords */}
        <meta
          name="keywords"
          content="digital marketing blog, digital marketing news, seo tips, social media blog, content marketing blog"
        />

        {/* Author */}
        {/* <meta name="author" content="www.themeht.com" /> */}
      </Helmet>

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
                {/* blog start */}
                {blogs.map((blog) => (
                  <div key={blog.id} className="blog-classic">
                    <div className="post">
                      <div className="post-image">
                        <img
                          className="img-fluid h-100 w-100"
                          src={blog.img}
                          alt={blog.title}
                        />
                      </div>
                      <div className="post-desc">
                        <div className="post-date">
                          {blog.fullDate.date}{" "}
                          <span>{blog.fullDate.monthYr}</span>
                        </div>
                        <div className="post-title">
                          <h5>
                            <a
                              href={`blogs/${blog.title
                                .toLowerCase()
                                .replace(/ /g, "-")}`}
                            >
                              {blog.title}
                            </a>
                          </h5>
                        </div>
                        <p>
                          {blog.content}{" "}
                          <a
                            href={`blogs/${blog.title
                              .toLowerCase()
                              .replace(/ /g, "-")}`}
                          >
                            read more
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
                {/* blog end */}
              </div>
              {/* right side content end */}

              {/* left side content start */}
              <RecentPost />
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
