function Footer() {
  return (
    <div className="rf-footer">

      <div className="container py-5">

        <div className="row">

          {/* LEFT */}
          <div className="col-lg-4 mb-4">

            <div className="d-flex align-items-center gap-3 mb-3">

              <div className="rf-logo-circle"></div>

              <div>
                <div className="rf-reliance">Reliance</div>
                <div className="rf-foundation">Foundation</div>
              </div>

              <div className="rf-divider"></div>

              <div className="rf-academy">
                SKILLING <br/> ACADEMY
              </div>

            </div>

            <p className="rf-footer-text">
              The Reliance Foundation Skilling Academy bridges skill gaps by
              facilitating lifelong learning journeys, and guides youth in
              navigating the changing job market.
            </p>

          </div>

          {/* LINKS */}
          <div className="col-lg-4 mb-4">
            <h5 className="rf-footer-title">IMPORTANT LINKS</h5>

            <ul className="rf-footer-links">
              <li>→ Skill Development</li>
              <li>→ Job Opportunities</li>
              <li>→ Mentorship</li>
              <li>→ About us</li>
              <li>→ Certificate Verification</li>
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
          © 2025. All rights reserved. Terms & Conditions.
        </p>

      </div>

      <div className="rf-footer-wave"></div>

    </div>
  );
}

export default Footer;