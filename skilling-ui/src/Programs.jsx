function Programs() {
  return (
    <div className="rf-program-section py-5">

      <div className="container">

        <h1 className="rf-program-title text-center mb-5">
          Program Offerings
        </h1>

        <div className="row justify-content-center g-5">

          {/* CARD 1 */}
          <div className="col-lg-4">
            <div className="rf-program-card green-border">

              <div className="rf-program-icon green-bg">
                💡
              </div>

              <div className="rf-program-body">
                <h4>Skill Development</h4>

                <p>
                  An open-access repository of self-paced learning courses that include
                  21st-century and employability skills for future-ready competencies.
                </p>
              </div>

              <div className="rf-program-footer green-bg-light">
                Flexible Learning. Continuous Upskilling.
                Enhanced Competencies. Career Progression
              </div>

            </div>
          </div>

          {/* CARD 2 */}
          <div className="col-lg-4">
            <div className="rf-program-card green-border">

              <div className="rf-program-icon green-bg">
                🧑‍💼
              </div>

              <div className="rf-program-body">
                <h4>Job Opportunities</h4>

                <p>
                  Streamlined access to job opportunities aligned with skills,
                  focused on future-oriented jobs and seamless journey to right job.
                </p>
              </div>

              <div className="rf-program-footer green-bg-light">
                Streamlined Job Search. Simplified Application Process.
                Career Advancement Support
              </div>

            </div>
          </div>

          {/* CARD 3 */}
          <div className="col-lg-4">
            <div className="rf-program-card gold-border">

              <div className="rf-program-icon gold-bg">
                👥
              </div>

              <div className="rf-program-body">
                <h4>Mentorship</h4>

                <p>
                  Personalised 1-1 mentorship led by industry experts
                  providing insights into opportunities and market trends.
                </p>
              </div>

              <div className="rf-program-footer gold-bg-light">
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