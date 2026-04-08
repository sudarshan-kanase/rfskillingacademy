import logo from "./assets/logo.jpeg";

function Footer() {
  return (
    <div className="rf-footer">

      <div className="container py-5">

        <div className="row">

          {/* LEFT */}
          <div className="col-lg-4 mb-4">

            <div className="mb-3">
              <img src={logo} alt="Senseigen" className="rf-footer-logo" />
            </div>

            <p className="rf-footer-text">
              Senseigen helps students grow with real-world skills,
              mentorship, and career opportunities. We focus on
              Exposure, Wisdom, and Support to build future-ready talent.
            </p>

          </div>

          {/* LINKS */}
          <div className="col-lg-4 mb-4">
            <h5 className="rf-footer-title">IMPORTANT LINKS</h5>

            <ul className="rf-footer-links">
              <li>→ Programs</li>
              <li>→ Impact</li>
              <li>→ Benefits</li>
              <li>→ Reach</li>
              <li>→ Dashboard</li>
              <li>→ FAQ</li>
            </ul>
          </div>

          {/* SOCIAL */}
          <div className="col-lg-4 mb-4">
            <h5 className="rf-footer-title">CONNECT WITH US</h5>

            <div className="rf-social">
              <span className="rf-icon fb">f</span>
              <span className="rf-icon x">x</span>
              <span className="rf-icon insta">●</span>
              <span className="rf-icon yt">▶</span>
              <span className="rf-icon in">in</span>
            </div>
          </div>

        </div>

        <p className="text-center mt-4 rf-copy">
          © 2026 Senseigen. All rights reserved.
        </p>

      </div>

      <div className="rf-footer-wave"></div>

    </div>
  );
}

export default Footer;