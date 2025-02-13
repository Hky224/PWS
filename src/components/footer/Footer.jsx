import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Ho Kwan Yin</h1>

        <div className="footer__social">
          <a
            href="https://github.com/Hky224"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i class="uil uil-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/kwan-yin-ho-b10a19275/"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i class="uil uil-linkedin"></i>
          </a>
        </div>
        <span className="footer__copy">&#169; 2025</span>
      </div>
    </footer>
  );
};

export default Footer;
