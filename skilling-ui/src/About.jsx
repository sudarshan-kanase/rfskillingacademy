function About() {
  return (
    <div className="container py-5">
      <h2 className="fw-bold text-success mb-4">
        About Reliance Foundation Skilling Academy
      </h2>

      <div className="row">

        <div className="col-md-7">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
            className="img-fluid rounded"
          />

          <p className="mt-3">
            A one-stop destination for all your career needs offering in-demand courses,
            mentorship and job opportunities.
          </p>

          <button className="btn btn-warning rounded-pill">
            Know More
          </button>
        </div>

        <div className="col-md-5 d-flex flex-column gap-3">
          <div className="card p-3 text-center shadow-sm">
            Skill Development
          </div>

          <div className="card p-3 text-center shadow-sm">
            Mentorship
          </div>

          <div className="card p-3 text-center shadow-sm">
            Job Opportunity
          </div>
        </div>

      </div>
    </div>
  );
}

export default About;