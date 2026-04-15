import { Link } from "react-router-dom";
import logo from "./assets/logo.jpeg";

function Footer() {
  return (
    <footer className="rf-footer bg-dark  text-light">

      <div className="container py-5">
        <div className="row g-4">

          {/* LEFT */}
          <div className="col-lg-4 text-center text-lg-start">
            <img src={logo} alt="logo" style={{ height: "55px" }} />

            <p className="mt-3 text-muted small">
              Senseigen helps students grow with real-world skills,
              mentorship, and career opportunities. We focus on
              Exposure, Wisdom, and Support to build future-ready talent.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div className="col-lg-4 text-center text-lg-start">
            <h5 className="fw-bold mb-3">Quick Links</h5>

            <ul className="list-unstyled">
              <li><Link to="/" className="footer-link">Home</Link></li>
              <li><Link to="/about" className="footer-link">About</Link></li>
              <li><Link to="/service" className="footer-link">Service</Link></li>
              <li><Link to="/trading" className="footer-link">Trading</Link></li>
              <li><Link to="/placement" className="footer-link">Placement</Link></li>
              <li><Link to="/contact" className="footer-link">Contact</Link></li>
            </ul>
          </div>

          {/* NEWSLETTER + SOCIAL */}
          <div className="col-lg-4 text-center text-lg-start">
            <h5 className="fw-bold mb-3">Stay Connected</h5>

            {/* Newsletter */}
            <form className="d-flex mb-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="form-control me-2"
              />
              <button className="btn btn-primary">
                Subscribe
              </button>
            </form>

            {/* Social */}
            <div className="d-flex justify-content-center justify-content-lg-start gap-3 mt-3">
              <a href="#" className="social-icon"><i class="fa-brands fa-square-facebook"></i></a>
              <a href="#" className="social-icon"><i class="fa-brands fa-instagram"></i></a>
              <a href="#" className="social-icon"><i class="fa-brands fa-linkedin"></i></a>
              <a href="#" className="social-icon"><i class="fa-brands fa-x-twitter"></i></a>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="text-center border-top pt-3 mt-4">
          <p className="mb-0 small text-muted">
            © 2026 Senseigen. All rights reserved.
          </p>
        </div>

      </div>

    </footer>
  );
}

export default Footer;