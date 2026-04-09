import React from "react";

function About() {
  return (
    <div className="container py-5">

      {/* Heading */}
      <div className="text-center mb-5">
        <h1 className="fw-bold text-primary display-5">About Us</h1>
        <p className="text-muted fs-5">
          Learn more about our mission, vision and what we do.
        </p>
      </div>

      {/* About Content */}
      <div className="row align-items-center g-4">

        {/* Image */}
        <div className="col-md-6 text-center">
          <img
            src="https://images.unsplash.com/photo-1559526324-593bc073d938"
            alt="about"
            className="img-fluid rounded-4 shadow"
            style={{ maxHeight: "400px", objectFit: "cover" }}
          />
        </div>

        {/* Text */}
        <div className="col-md-6">
          <h3 className="fw-bold mb-3">Who We Are</h3>
          <p className="text-muted">
            We are a passionate team focused on providing the best learning
            experience in trading, placement and skill development.
          </p>

          <h5 className="mt-4 fw-semibold">Our Mission</h5>
          <p className="text-muted">
            To empower students and professionals with real-world skills and
            financial knowledge.
          </p>

          <h5 className="mt-4 fw-semibold">Our Vision</h5>
          <p className="text-muted">
            To become a leading platform for education, trading and career
            growth.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="row mt-5 text-center g-4">

        <div className="col-md-4">
          <div className="p-4 shadow-sm rounded-4 h-100">
            <h2 className="text-primary fw-bold">100+</h2>
            <p className="mb-0 text-muted">Students Trained</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="p-4 shadow-sm rounded-4 h-100">
            <h2 className="text-primary fw-bold">50+</h2>
            <p className="mb-0 text-muted">Placements</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="p-4 shadow-sm rounded-4 h-100">
            <h2 className="text-primary fw-bold">10+</h2>
            <p className="mb-0 text-muted">Programs</p>
          </div>
        </div>

      </div>

    </div>
  );
}

export default About;