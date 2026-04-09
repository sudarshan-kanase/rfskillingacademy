function Programs() {
  return (
    <div id="programs" className="rf-program-section py-5">
      <div className="container">

        {/* Heading */}
        <h1 className="rf-program-title text-center mb-5 display-6">
          Program Offerings
        </h1>

        <div className="row justify-content-center g-4">

          {/* CARD 1 */}
          <div className="col-lg-4 col-md-6">
            <div className="rf-program-card primary-border h-100 rounded-4 shadow-sm">

              <div className="rf-program-icon green-bg mb-3">
                💡
              </div>

              <div className="rf-program-body">
                <h5 className="fw-bold">Skill Development</h5>

                <p className="text-muted">
                  An open-access repository of self-paced learning courses that include
                  21st-century and employability skills for future-ready competencies.
                </p>
              </div>

              <div className="rf-program-footer primary-bg-light mt-auto">
                Flexible Learning. Continuous Upskilling.
                Enhanced Competencies. Career Progression
              </div>

            </div>
          </div>

          {/* CARD 2 */}
          <div className="col-lg-4 col-md-6">
            <div className="rf-program-card primary-border h-100 rounded-4 shadow-sm">

              <div className="rf-program-icon primary-bg mb-3">
                🧑‍💼
              </div>

              <div className="rf-program-body">
                <h5 className="fw-bold">Job Opportunities</h5>

                <p className="text-muted">
                  Streamlined access to job opportunities aligned with skills,
                  focused on future-oriented jobs and seamless journey to right job.
                </p>
              </div>

              <div className="rf-program-footer primary-bg-light mt-auto">
                Streamlined Job Search. Simplified Application Process.
                Career Advancement Support
              </div>

            </div>
          </div>

          {/* CARD 3 */}
          <div className="col-lg-4 col-md-6">
            <div className="rf-program-card gold-border h-100 rounded-4 shadow-sm">

              <div className="rf-program-icon gold-bg mb-3">
                👥
              </div>

              <div className="rf-program-body">
                <h5 className="fw-bold">Mentorship</h5>

                <p className="text-muted">
                  Personalised 1-1 mentorship led by industry experts
                  providing insights into opportunities and market trends.
                </p>
              </div>

              <div className="rf-program-footer gold-bg-light mt-auto">
                Personalised Guidance. Networking Opportunities.
                Industry Knowledge. Personal Growth
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Programs;