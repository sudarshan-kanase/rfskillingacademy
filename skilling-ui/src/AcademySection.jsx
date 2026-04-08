function AcademySection() {
  return (
    <div className="rf-academy-section py-5">
      <div className="container">
        <h1 className="rf-academy-title mb-4">SENSEIGEN Academy</h1>

        <div className="row align-items-center">
          {/* LEFT IMAGE */}
          <div className="col-lg-8">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
              className="img-fluid rf-academy-img"
              alt="academy"
            />

            <p className="rf-academy-text mt-4">
              SENSEIGEN Pvt. Ltd. is a forward-thinking education and training
              organization committed to bridging the gap between academic
              learning, real-world readiness, and final placements. Operating at
              the intersection of education, industry, and innovation, we
              collaborate with schools and colleges to deliver high-impact
              programs that go beyond the traditional classroom.
            </p>

            <button className="rf-gold-btn">Know more</button>
          </div>

          {/* RIGHT FLOAT CARDS */}
          <div className="col-lg-4 position-relative rf-card-wrapper">
            <div className="rf-card rf-card-1">
              <div className="rf-icon green">💼</div>
              <h5>
                Skill
                <br />
                Development
              </h5>
            </div>

            <div className="rf-card rf-card-2">
              <div className="rf-icon gold">👥</div>
              <h5>Mentorship</h5>
            </div>

            <div className="rf-card rf-card-3">
              <div className="rf-icon green">📈</div>
              <h5>
                Job
                <br />
                Opportunity
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AcademySection;
