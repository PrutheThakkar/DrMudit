export default function Footer() {
  return (
    <footer className="contact-footer">
      <div className="container footer-container">
        <div className="footer-top">
          <div className="footer-left">
            <h2 className="footer-heading">Contact &amp; Location</h2>

            <p className="footer-subtitle">
              Have a question or need to plan a visit?
              Personalised care, led directly by the doctor.
            </p>

            <div className="hero-buttons">
              <a className="btn whatsapp-btn">Book An Appointment</a>
            </div>

            <div className="menu-footer">
              <ul className="footer-nav">
                <li><h3>Home</h3></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Blogs</a></li>
                <li><a href="#">FAQs</a></li>
                <li><a href="#">Press Articles</a></li>
                <li><a href="#">Contact</a></li>
              </ul>

              <ul className="footer-nav">
                <li><h3>Expertise</h3></li>
                <li><a href="#">Knee Replacement</a></li>
                <li><a href="#">Hip Replacement</a></li>
                <li><a href="#">Regenerative Treatment</a></li>
                <li><a href="#">Press Articles</a></li>
                <li><a href="#">Pain Management</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-right">
            <div className="location-info">
              <h3 className="location-title">
                Wockhardt Hospital - Mumbai Central
              </h3>

              <p className="location-address">
                Police Station, 1877, Dr Anandrao Nair Marg, near Agripada,
                Mumbai Central, Mumbai, Maharashtra 400011, India
              </p>
            </div>

            <div className="contact-info">
              <a href="mailto:contact@drmuditkhanna.com" className="contact-item">
                <span>✉</span>
                <span>contact@drmuditkhanna.com</span>
              </a>

              <a href="tel:+918657790513" className="contact-item">
                <span>☎</span>
                <span>+91 86577 90513</span>
              </a>
            </div>

            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.5461536736944!2d72.82660431490054!3d18.964819987179626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce3b8f2e1d65%3A0x3e5f8f5f5f5f5f5f!2sWockhardt%20Hospital%2C%20Mumbai%20Central!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="social-section">
            <span className="social-label">Connect</span>

            <div className="social-links">
              <a href="#" className="social-link" aria-label="Facebook"></a>
              <a href="#" className="social-link" aria-label="Instagram"></a>
              <a href="#" className="social-link" aria-label="Twitter"></a>
              <a href="#" className="social-link" aria-label="LinkedIn"></a>
            </div>
          </div>

          <div className="footer-copyright">
            © 2024 Dr. Mudit Khanna. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}