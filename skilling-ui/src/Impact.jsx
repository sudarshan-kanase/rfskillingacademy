function Impact() {
  return (
     <div id="impact" className="rf-impact-section py-5">
      <div className="container">

        <h1 className="rf-impact-title text-center mb-5">
          Impact
        </h1>

        <div className="row align-items-center">

          {/* LEFT IMAGE */}
          <div className="col-lg-5 text-center mb-4 mb-lg-0">
            <div className="rf-impact-circle">
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
                <div className="rf-impact-card green-border">
                  <div className="rf-impact-icon green-bg">🎯</div>
                  <p>Youth Reached</p>
                  <h2>726354</h2>
                </div>
              </div>

              <div className="col-md-6">
                <div className="rf-impact-card">
                  <div className="rf-impact-icon gold-bg">💡</div>
                  <p>Youth Skilled</p>
                  <h2 className="dark">377746</h2>
                </div>
              </div>

              <div className="col-md-6">
                <div className="rf-impact-card">
                  <div className="rf-impact-icon green-bg">💬</div>
                  <p>Jobs Accessed</p>
                  <h2 className="dark">63882</h2>
                </div>
              </div>

              <div className="col-md-6">
                <div className="rf-impact-card">
                  <div className="rf-impact-icon blue-bg">📈</div>
                  <p>Mentees</p>
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