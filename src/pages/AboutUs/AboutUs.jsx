import React from "react";
import "./AboutUs.css";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div>
      
      <section id="about-us-section">
        <h1>About Us</h1>
        <p>
            Welcome to our Academic Advising System, where we believe that every student should have easy access to the resources they need to succeed. 
            Our platform is designed to streamline the advising process, making it easier for students to find information, calculate their GPA, and explore course catalogs all in one place.
        </p>
        <p>
            Our mission is to provide a centralized, automated, and user-friendly system that empowers students to manage their academic progress independently, 
            while also easing the workload of academic advisors by automating routine tasks. 
        </p>
        <p>
            Whether you're looking to calculate your GPA, search for course information, or get answers to frequently asked questions, we are here to help you every step of the way. 
            With our platform, your academic success is just a few clicks away.
        </p>
        <p>
            <strong>Our Vision:</strong> To be the leading academic advising platform that revolutionizes how students and academic advisors interact, offering efficient, scalable, and responsive solutions for academic planning.
        </p>
    </section>

    </div>
  );
};

export default AboutUs;
