function Hero() {
  return (
    <div style={{ background: "#efe8db" }} className="py-5">
      <div className="container">
        <div className="row align-items-center g-4">

          {/* LEFT */}
          <div className="col-md-6 text-center text-md-start">

            <h1 className="display-4 fw-bold mb-3">
              Explore a world of{" "}
              <span className="text-primary">possibilities</span>
            </h1>

            <p className="text-muted fs-5">
              Find the perfect job for you and take the next step in your career journey
            </p>

            <button className="btn btn-warning rounded-pill px-4 mt-3 shadow-sm">
              Explore Now
            </button>

          </div>

          {/* RIGHT */}
          <div className="col-md-6 text-center">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
              className="img-fluid rounded-4 shadow"
              alt="hero"
              style={{ maxHeight: "400px", objectFit: "cover" }}
            />
          </div>

        </div>
      </div>
    </div>
  );
}

export default Hero;