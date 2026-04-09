import React from "react";

function Blog() {

  const blogs = [
    {
      title: "Stock Market Basics",
      desc: "Learn the fundamentals of stock market and start your journey.",
      img: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3",
    },
    {
      title: "Intraday Trading Tips",
      desc: "Best strategies to earn daily profits in intraday trading.",
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    },
    {
      title: "Career Growth Guide",
      desc: "Improve your skills and get placed in top companies.",
      img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf",
    },
  ];

  return (
    <div className="container py-5">

      {/* Heading */}
      <div className="text-center mb-5">
        <h1 className="fw-bold text-primary display-5">Our Blog</h1>
        <p className="text-muted fs-5">
          Latest updates, trading tips and career insights.
        </p>
      </div>

      {/* Blog Cards */}
      <div className="row g-4">

        {blogs.map((blog, i) => (
          <div className="col-lg-4 col-md-6" key={i}>
            
            <div className="card h-100 shadow-sm border-0 rounded-4 overflow-hidden">

              <img
                src={blog.img}
                className="card-img-top"
                alt="blog"
                style={{ height: "220px", objectFit: "cover" }}
              />

              <div className="card-body d-flex flex-column">

                <h5 className="fw-bold">{blog.title}</h5>

                <p className="text-muted small flex-grow-1">
                  {blog.desc}
                </p>

                <button className="btn btn-primary mt-2">
                  Read More
                </button>

              </div>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

export default Blog;