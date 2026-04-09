import React from "react";

function About() {
  return (
    <div className="container py-5">

      {/* Heading */}
      <div className="text-center mb-5">
        <h1 className="fw-bold text-primary">About Us</h1>
        <p className="text-muted">
          Learn more about our mission, vision and what we do.
        </p>
      </div>

      {/* About Content */}
      <div className="row align-items-center">

        {/* Image */}
        <div className="col-md-6 mb-4">
          <img
            src="https://images.unsplash.com/photo-1559526324-593bc073d938"
            alt="about"
            className="img-fluid rounded shadow"
          />
        </div>

        {/* Text */}
        <div className="col-md-6">
          <h3 className="fw-bold">Who We Are</h3>
          <p>
            We are a passionate team focused on providing the best learning
            experience in trading, placement and skill development.
          </p>

          <h5 className="mt-3">Our Mission</h5>
          <p>
            To empower students and professionals with real-world skills and
            financial knowledge.
          </p>

          <h5 className="mt-3">Our Vision</h5>
          <p>
            To become a leading platform for education, trading and career
            growth.
          </p>
        </div>
      </div>

      {/* Extra Section */}
      <div className="row mt-5 text-center">

        <div className="col-md-4">
          <h2 className="text-primary">100+</h2>
          <p>Students Trained</p>
        </div>

        <div className="col-md-4">
          <h2 className="text-primary">50+</h2>
          <p>Placements</p>
        </div>

        <div className="col-md-4">
          <h2 className="text-primary">10+</h2>
          <p>Programs</p>
        </div>

      </div>

    </div>
  );
}

export default About;