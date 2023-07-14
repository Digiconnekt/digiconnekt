import React from "react";

const RecentPost = () => {
  const blogs = [
    {
      id: 3,
      fullDate: {
        date: "12",
        monthYr: "July 2023",
      },
      title:
        "Seo And Content Marketing: A Winning Combination In Digital Marketing",
      img: "../images/blog/blog6.png",
    },
    {
      id: 2,
      fullDate: {
        date: "21",
        monthYr: "June 2023",
      },
      title: "The Ultimate Guide To Seo: Tips And Strategies To Success",
      img: "../images/blog/blog5.png",
    },
    {
      id: 1,
      fullDate: {
        date: "14",
        monthYr: "June 2023",
      },
      title: "Digital Marketing In The Age Of Social Media : Tips To SUCCESS",
      img: "../images/blog/blog4.png",
    },
  ];

  return (
    <>
      <div className="col-lg-4 col-md-12 sidebar mt-5 mt-lg-0">
        {/* recent post start */}
        <div className="widget recent-post">
          <h5 className="widget-title">Recent Post</h5>
          {blogs.map((blog) => (
            <article key={blogs.id}>
              <div className="row mt-4">
                <div className="col-sm">
                  <img src={blog.img} className="img-fluid" alt="Blog 1" />
                </div>
                <div className="col-sm-9 mt-3 mt-sm-0">
                  <a
                    href={`/blogs/${blog.title
                      .toLowerCase()
                      .replace(/ /g, "-")}`}
                  >
                    {blog.title}
                  </a>
                  <div className="post-date">
                    {blog.fullDate.date} <span>{blog.fullDate.monthYr}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
        {/* recent post end */}
      </div>
    </>
  );
};

export default RecentPost;
