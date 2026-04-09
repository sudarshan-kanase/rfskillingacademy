import React from "react";

function Placement() {
  return (
    <div className="container py-5">

      {/* Heading */}
      <div className="text-center mb-5">
        <h1 className="fw-bold text-primary display-5">Placement Program</h1>
        <p className="text-muted fs-5">
          Get placed in top companies with our expert training & support.
        </p>
      </div>

      {/* Hero */}
      <div className="row align-items-center g-4 mb-5">

        <div className="col-md-6 text-center text-md-start">
          <h2 className="fw-bold">Build Your Career 🚀</h2>
          <p className="text-muted">
            We provide complete placement support including resume building,
            mock interviews and real company opportunities.
          </p>

          <button className="btn btn-success mt-3 px-4 shadow-sm">
            Get Started
          </button>
        </div>

        <div className="col-md-6 text-center">
          <img
            src="https://images.unsplash.com/photo-1551836022-d5d88e9218df"
            alt="placement"
            className="img-fluid rounded-4 shadow"
            style={{ maxHeight: "350px", objectFit: "cover" }}
          />
        </div>

      </div>

      {/* Stats */}
      <div className="row text-center g-4 mb-5">

        <div className="col-md-4">
          <div className="p-4 shadow-sm rounded-4 h-100">
            <h2 className="text-primary fw-bold">200+</h2>
            <p className="mb-0 text-muted">Students Placed</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="p-4 shadow-sm rounded-4 h-100">
            <h2 className="text-primary fw-bold">50+</h2>
            <p className="mb-0 text-muted">Companies</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="p-4 shadow-sm rounded-4 h-100">
            <h2 className="text-primary fw-bold">95%</h2>
            <p className="mb-0 text-muted">Success Rate</p>
          </div>
        </div>

      </div>

      {/* Process */}
      <div className="mb-5">
        <h3 className="text-center fw-bold mb-4">Placement Process</h3>

        <div className="row text-center g-4">

          <div className="col-lg-3 col-md-6">
            <div className="card p-4 shadow-sm rounded-4 h-100 border-0">
              <h5>1. Training</h5>
              <p className="text-muted mb-0">Learn skills & concepts</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="card p-4 shadow-sm rounded-4 h-100 border-0">
              <h5>2. Resume</h5>
              <p className="text-muted mb-0">Build professional CV</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="card p-4 shadow-sm rounded-4 h-100 border-0">
              <h5>3. Interview</h5>
              <p className="text-muted mb-0">Mock interview practice</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="card p-4 shadow-sm rounded-4 h-100 border-0">
              <h5>4. Placement</h5>
              <p className="text-muted mb-0">Get job opportunity</p>
            </div>
          </div>

        </div>
      </div>

      {/* Companies */}
      <div className="text-center">
        <h3 className="fw-bold mb-4">Our Hiring Partners</h3>

        <div className="row g-3">

          {["TCS", "Infosys", "Wipro", "Capgemini"].map((company, i) => (
            <div className="col-md-3 col-6" key={i}>
              <div className="border rounded-4 p-3 shadow-sm hoverCard">
                {company}
              </div>
            </div>
          ))}

        </div>
      </div>

    </div>
  );
}

export default Placement;