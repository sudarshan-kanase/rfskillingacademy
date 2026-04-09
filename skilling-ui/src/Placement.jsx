import React from "react";

function Placement() {
  return (
    <div className="container py-5">

      {/* Heading */}
      <div className="text-center mb-5">
        <h1 className="fw-bold text-primary">Placement Program</h1>
        <p className="text-muted">
          Get placed in top companies with our expert training & support.
        </p>
      </div>

      {/* Hero Section */}
      <div className="row align-items-center mb-5">

        <div className="col-md-6">
          <h2 className="fw-bold">Build Your Career 🚀</h2>
          <p>
            We provide complete placement support including resume building,
            mock interviews and real company opportunities.
          </p>

          <button className="btn btn-success mt-3">
            Get Started
          </button>
        </div>

        <div className="col-md-6">
          <img
            src="https://images.unsplash.com/photo-1551836022-d5d88e9218df"
            alt="placement"
            className="img-fluid rounded shadow"
          />
        </div>

      </div>

      {/* Stats */}
      <div className="row text-center mb-5">

        <div className="col-md-4">
          <h2 className="text-primary">200+</h2>
          <p>Students Placed</p>
        </div>

        <div className="col-md-4">
          <h2 className="text-primary">50+</h2>
          <p>Companies</p>
        </div>

        <div className="col-md-4">
          <h2 className="text-primary">95%</h2>
          <p>Success Rate</p>
        </div>

      </div>

      {/* Placement Process */}
      <div className="mb-5">
        <h3 className="text-center fw-bold mb-4">Placement Process</h3>

        <div className="row text-center">

          <div className="col-md-3 mb-3">
            <div className="card p-3 shadow">
              <h5>1. Training</h5>
              <p>Learn skills & concepts</p>
            </div>
          </div>

          <div className="col-md-3 mb-3">
            <div className="card p-3 shadow">
              <h5>2. Resume</h5>
              <p>Build professional CV</p>
            </div>
          </div>

          <div className="col-md-3 mb-3">
            <div className="card p-3 shadow">
              <h5>3. Interview</h5>
              <p>Mock interview practice</p>
            </div>
          </div>

          <div className="col-md-3 mb-3">
            <div className="card p-3 shadow">
              <h5>4. Placement</h5>
              <p>Get job opportunity</p>
            </div>
          </div>

        </div>
      </div>

      {/* Companies */}
      <div className="text-center">
        <h3 className="fw-bold mb-4">Our Hiring Partners</h3>

        <div className="row">

          <div className="col-md-3 col-6 mb-3">
            <div className="border p-3">TCS</div>
          </div>

          <div className="col-md-3 col-6 mb-3">
            <div className="border p-3">Infosys</div>
          </div>

          <div className="col-md-3 col-6 mb-3">
            <div className="border p-3">Wipro</div>
          </div>

          <div className="col-md-3 col-6 mb-3">
            <div className="border p-3">Capgemini</div>
          </div>

        </div>
      </div>

    </div>
  );
}

export default Placement;