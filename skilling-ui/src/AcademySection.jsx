function AcademySection() {
  return (
    <div className="rf-academy-section py-5">
      <div className="container">

        {/* Heading */}
        <h1 className="rf-academy-title mb-4 text-center text-lg-start">
          SENSEIGEN Academy
        </h1>

        <div className="row align-items-center g-4">

          {/* LEFT */}
          <div className="col-lg-8 text-center text-lg-start">

            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
              className="img-fluid rf-academy-img rounded-4 shadow"
              alt="academy"
              style={{ maxHeight: "420px", objectFit: "cover" }}
            />

            <p className="rf-academy-text mt-4 text-muted">
              SENSEIGEN Pvt. Ltd. is a forward-thinking education and training
              organization committed to bridging the gap between academic
              learning, real-world readiness, and final placements. Operating at
              the intersection of education, industry, and innovation, we
              collaborate with schools and colleges to deliver high-impact
              programs that go beyond the traditional classroom.
            </p>

            <button className="rf-gold-btn mt-2">
              Know more
            </button>
          </div>

          {/* RIGHT FLOAT CARDS */}
          <div className="col-lg-4 position-relative rf-card-wrapper d-flex justify-content-center">

            <div className="rf-card rf-card-1 text-center shadow-sm">
              <div className="rf-icon green">💼</div>
              <h6 className="mt-2 mb-0">
                Skill <br /> Development
              </h6>
            </div>

            <div className="rf-card rf-card-2 text-center shadow-sm">
              <div className="rf-icon gold">👥</div>
              <h6 className="mt-2 mb-0">Mentorship</h6>
            </div>

            <div className="rf-card rf-card-3 text-center shadow-sm">
              <div className="rf-icon green">📈</div>
              <h6 className="mt-2 mb-0">
                Job <br /> Opportunity
              </h6>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default AcademySection;