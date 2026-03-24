function Programs() {
  return (
    <div style={{ background: "#f6f6f6" }} className="py-5">
      <div className="container">

        <h2 className="text-center fw-bold text-success mb-5">
          Program Offerings
        </h2>

        <div className="row">

          <div className="col-md-4">
            <div className="card p-4 shadow-sm h-100">
              <h5 className="fw-bold">Skill Development</h5>
              <p>
                Self paced courses with employability skills for future ready competencies.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card p-4 shadow-sm h-100">
              <h5 className="fw-bold">Job Opportunities</h5>
              <p>
                Streamlined access to jobs and simplified application process.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card p-4 shadow-sm h-100">
              <h5 className="fw-bold">Mentorship</h5>
              <p>
                Personalised 1-1 mentorship by industry experts.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Programs;