function Hero() {
  return (
    <div style={{ background: "#efe8db" }} className="py-5">
      <div className="container">
        <div className="row align-items-center">

          <div className="col-md-6">
            <h1 className="display-5 fw-bold text-success">
              Explore a world of possibilities
            </h1>

            <p>
              Find the perfect job for you and take the next step in your career journey
            </p>

            <button className="btn btn-warning rounded-pill px-4">
              Explore Now
            </button>
          </div>

          <div className="col-md-6 text-center">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
              className="img-fluid rounded"
            />
          </div>

        </div>
      </div>
    </div>
  );
}

export default Hero;