import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerContent">
        <div className="footerlist">
          <p>
            <strong>National Academic Resources:</strong>
          </p>
          <li>
            <p>National Universities Commission:</p>
            <li>
              For academic standards and resources across Nigerian universities
            </li>
            <Link to="https://www.nuc.edu.ng">
              <li>National Universities Commission (NUC)</li>
            </Link>
          </li>
          <li>
            <p>Joint Admissions and Matriculation Board (JAMB):</p>
            <li>For admissions and program requirements</li>
            <Link to="https://www.jamb.gov.ng">
              <li>JAMB Official Site</li>
            </Link>
          </li>
        </div>
        <div className="footerlist">
          <p>
            <strong>University Academic Advising Centers:</strong>
          </p>
          <li>Lagos University Academic Advising Center</li>
          <li>University of Ibadan Student Advising Office</li>
        </div>
        <div className="footerlist">
          <p>
            <strong>Academic Support Organizations:</strong>
          </p>
          <li>
            <p>Association of Nigerian Universities:</p>
            <Link to="https://nigerianuniversities.edu.ng">
              <li>ANU</li>
            </Link>
            <li>Contact: +234 809 123 4567</li>
          </li>
          <li>
            <p> Student Support Network:</p>
            <Link to="https://studentsupport.org.ng">
              Student Support Network
            </Link>
            <li>Contact: +234 706 123 7890</li>
          </li>
        </div>
        <div className="footerlist">
          <p>
            <strong>University Counseling Services:</strong>
          </p>
          <li>
            Many Nigerian universities offer academic and career counseling
            services. Check with your university’s advising office or student
            affairs department for available resources.
          </li>
        </div>
      </div>
      <div className="lastFoot">
        <p>&copy; 2024 Academic Advising System</p>
        <p>Developed by Chikezie Sonita</p>
      </div>
    </footer>
  );
};

export default Footer;
