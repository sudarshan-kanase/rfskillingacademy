import React from "react";

function Trading() {
  return (
    <div className="container py-5">

      {/* Heading */}
      <div className="text-center mb-5">
        <h1 className="fw-bold text-primary">Trading Program</h1>
        <p className="text-muted">
          Learn stock market trading and build a consistent income source.
        </p>
      </div>

      {/* Hero Section */}
      <div className="row align-items-center mb-5">

        <div className="col-md-6">
          <h2 className="fw-bold">Start Your Trading Journey 🚀</h2>
          <p>
            We teach you everything from basic concepts to advanced strategies 
            like intraday, swing trading and risk management.
          </p>

          <button className="btn btn-primary mt-3">
            Join Now
          </button>
        </div>

        <div className="col-md-6">
          <img
            src="https://images.unsplash.com/photo-1642790106117-e829e14a795f"
            alt="trading"
            className="img-fluid rounded shadow"
          />
        </div>

      </div>

      {/* Features */}
      <div className="row text-center">

        <div className="col-md-3 mb-4">
          <div className="card shadow p-3">
            <h4 className="text-primary">Beginner</h4>
            <p>Basics of stock market</p>
          </div>
        </div>

        <div className="col-md-3 mb-4">
          <div className="card shadow p-3">
            <h4 className="text-primary">Advanced</h4>
            <p>Chart patterns & indicators</p>
          </div>
        </div>

        <div className="col-md-3 mb-4">
          <div className="card shadow p-3">
            <h4 className="text-primary">Live Trading</h4>
            <p>Real-time market practice</p>
          </div>
        </div>

        <div className="col-md-3 mb-4">
          <div className="card shadow p-3">
            <h4 className="text-primary">Support</h4>
            <p>24/7 mentor guidance</p>
          </div>
        </div>

      </div>

      {/* NEW SECTION - What You Will Learn */}
      <div className="mt-5">
        <h3 className="fw-bold text-center mb-4">What You Will Learn</h3>

        <div className="row">

          <div className="col-md-6">
            <ul>
              <li>📈 Stock Market Basics</li>
              <li>📊 Technical Analysis</li>
              <li>💹 Chart Patterns</li>
              <li>📉 Risk Management</li>
            </ul>
          </div>

          <div className="col-md-6">
            <ul>
              <li>⚡ Intraday Trading</li>
              <li>📅 Swing Trading</li>
              <li>🧠 Trading Psychology</li>
              <li>💰 Capital Management</li>
            </ul>
          </div>

        </div>
      </div>

      {/* NEW SECTION - Why Choose Us */}
      <div className="mt-5 text-center">
        <h3 className="fw-bold mb-4">Why Choose Us?</h3>

        <div className="row">

          <div className="col-md-4 mb-3">
            <div className="p-3 shadow rounded">
              <h5>Expert Mentors</h5>
              <p>Learn from experienced traders</p>
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div className="p-3 shadow rounded">
              <h5>Live Practice</h5>
              <p>Trade in real market conditions</p>
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div className="p-3 shadow rounded">
              <h5>Lifetime Support</h5>
              <p>Continuous guidance & updates</p>
            </div>
          </div>

        </div>
      </div>

      {/* Stats Section */}
      <div className="row text-center mt-5">

        <div className="col-md-4">
          <h2 className="text-primary">500+</h2>
          <p>Students Trained</p>
        </div>

        <div className="col-md-4">
          <h2 className="text-primary">90%</h2>
          <p>Success Rate</p>
        </div>

        <div className="col-md-4">
          <h2 className="text-primary">₹1L+</h2>
          <p>Monthly Earnings Potential</p>
        </div>

      </div>

      {/* NEW CTA SECTION */}
      <div className="text-center mt-5 p-4 bg-light rounded shadow">
        <h3 className="fw-bold">Ready to Start Trading?</h3>
        <p>Join now and take your first step towards financial freedom.</p>

        <button className="btn btn-success mt-2">
          Enroll Now
        </button>
      </div>

    </div>
  );
}

export default Trading;