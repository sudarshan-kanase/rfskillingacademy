function Impact() {
  return (
    <div id="impact" className="rf-impact-section py-5">
      <div className="container">

        {/* Heading */}
        <h1 className="rf-impact-title text-center mb-5 display-6">
          Impact
        </h1>

        <div className="row align-items-center g-4">

          {/* LEFT IMAGE */}
          <div className="col-lg-5 text-center">
            <div className="rf-impact-circle shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1587614382346-4ec70e388b28"
                alt="impact"
                className="img-fluid"
              />
            </div>
          </div>

          {/* RIGHT STATS */}
          <div className="col-lg-7">
            <div className="row g-4">

              <div className="col-md-6">
                <div className="rf-impact-card green-border h-100 rounded-4 shadow-sm">
                  <div className="rf-impact-icon green-bg">🎯</div>
                  <p className="mb-1 text-muted">Youth Reached</p>
                  <h2>726354</h2>
                </div>
              </div>

              <div className="col-md-6">
                <div className="rf-impact-card h-100 rounded-4 shadow-sm">
                  <div className="rf-impact-icon gold-bg">💡</div>
                  <p className="mb-1 text-muted">Youth Skilled</p>
                  <h2 className="dark">377746</h2>
                </div>
              </div>

              <div className="col-md-6">
                <div className="rf-impact-card h-100 rounded-4 shadow-sm">
                  <div className="rf-impact-icon green-bg">💬</div>
                  <p className="mb-1 text-muted">Jobs Accessed</p>
                  <h2 className="dark">63882</h2>
                </div>
              </div>

              <div className="col-md-6">
                <div className="rf-impact-card h-100 rounded-4 shadow-sm">
                  <div className="rf-impact-icon blue-bg">📈</div>
                  <p className="mb-1 text-muted">Mentees</p>
                  <h2 className="dark">2517</h2>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Impact;