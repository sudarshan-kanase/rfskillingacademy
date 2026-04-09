import React from "react";

function Blog() {
  return (
    <div className="container py-5">

      {/* Heading */}
      <div className="text-center mb-5">
        <h1 className="fw-bold text-primary">Our Blog</h1>
        <p className="text-muted">
          Latest updates, trading tips and career insights.
        </p>
      </div>

      {/* Blog Cards */}
      <div className="row">

        {/* Blog 1 */}
        <div className="col-md-4 mb-4">
          <div className="card shadow h-100">
            <img
              src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3"
              className="card-img-top"
              alt="blog"
            />
            <div className="card-body">
              <h5 className="fw-bold">Stock Market Basics</h5>
              <p>
                Learn the fundamentals of stock market and start your journey.
              </p>
              <button className="btn btn-primary">Read More</button>
            </div>
          </div>
        </div>

        {/* Blog 2 */}
        <div className="col-md-4 mb-4">
          <div className="card shadow h-100">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
              className="card-img-top"
              alt="blog"
            />
            <div className="card-body">
              <h5 className="fw-bold">Intraday Trading Tips</h5>
              <p>
                Best strategies to earn daily profits in intraday trading.
              </p>
              <button className="btn btn-primary">Read More</button>
            </div>
          </div>
        </div>

        {/* Blog 3 */}
        <div className="col-md-4 mb-4">
          <div className="card shadow h-100">
            <img
              src="https://images.unsplash.com/photo-1507679799987-c73779587ccf"
              className="card-img-top"
              alt="blog"
            />
            <div className="card-body">
              <h5 className="fw-bold">Career Growth Guide</h5>
              <p>
                Improve your skills and get placed in top companies.
              </p>
              <button className="btn btn-primary">Read More</button>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Blog;