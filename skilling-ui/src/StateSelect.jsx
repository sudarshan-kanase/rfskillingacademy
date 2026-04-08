function StateSelect() {
  return (
    <div id="reach" className="rf-reach-section py-5">
      <div className="container">
        <h1 className="rf-reach-title mb-4">Reach</h1>

        <div className="row align-items-center">
          {/* LEFT CONTENT */}
          <div className="col-lg-5">
            <select className="rf-state-dropdown mb-4">
              <option>Maharashtra</option>
              <option>Gujarat</option>
              <option>Karnataka</option>
              <option>Delhi</option>
            </select>

            <div className="d-flex gap-4">
              <div className="rf-reach-card green">
                <h2>32</h2>
                <p>Districts</p>
              </div>

              <div className="rf-reach-card gold">
                <h2>15629</h2>
                <p>Youth</p>
              </div>
            </div>
          </div>

          {/* RIGHT MAP */}
          {/* RIGHT MAP */}
          <div className="col-lg-7 text-center">
            <div className="rf-map-container">
              <iframe
                title="map"
                src="https://maps.google.com/maps?q=Maharashtra&t=&z=6&ie=UTF8&iwloc=&output=embed"
                className="rf-map-frame"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM CURVE */}
      <div className="rf-bottom-wave"></div>
    </div>
  );
}

export default StateSelect;
