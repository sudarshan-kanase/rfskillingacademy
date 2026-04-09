import React from "react";

function Service() {
  return (
    <div className="container py-5">

      {/* Heading */}
      <div className="text-center mb-5">
        <h1 className="fw-bold text-primary">Our Services</h1>
        <p className="text-muted">
          We provide high-quality services to help you grow your skills and career.
        </p>
      </div>

      {/* Services Cards */}
      <div className="row">

        <div className="col-md-4 mb-4">
          <div className="card shadow h-100 text-center p-3">
            <h4 className="fw-bold">Trading Course</h4>
            <p>
              Learn stock market trading from basics to advanced with live sessions.
            </p>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card shadow h-100 text-center p-3">
            <h4 className="fw-bold">Placement Training</h4>
            <p>
              Get ready for interviews with our professional placement programs.
            </p>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card shadow h-100 text-center p-3">
            <h4 className="fw-bold">Web Development</h4>
            <p>
              Learn HTML, CSS, React and build real-world projects.
            </p>
          </div>
        </div>

      </div>

      {/* Extra Row */}
      <div className="row mt-4">

        <div className="col-md-4 mb-4">
          <div className="card shadow h-100 text-center p-3">
            <h4 className="fw-bold">Internship</h4>
            <p>
              Gain real industry experience with our internship programs.
            </p>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card shadow h-100 text-center p-3">
            <h4 className="fw-bold">Career Guidance</h4>
            <p>
              Get expert advice to choose the right career path.
            </p>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card shadow h-100 text-center p-3">
            <h4 className="fw-bold">Live Projects</h4>
            <p>
              Work on real projects and boost your portfolio.
            </p>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Service;