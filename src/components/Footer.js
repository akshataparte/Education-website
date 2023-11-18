import React from 'react';
import '../styles/footer.css';

function Footer() {
  return (
    <div className="footer">
      <div>
        <p className="footer-text">&copy; 2023 Edzorb Law Private Limited</p>
      </div>
      <div>
        <ul className="footer-list">
          <li>F.A.Q</li>
          <li>About</li>
          <li>UsCareer</li>
          <li>BlogPrivacy</li>
          <li> PolicyTerms & Conditions</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
