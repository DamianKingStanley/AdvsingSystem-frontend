import React, { useEffect, useState } from "react";
import "./Hero.css";
import heroImage from "../../assest/student.jpg";

const Hero = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkLoginStatus = () => {
      const token = sessionStorage.getItem("studentData");
      return token !== null && token !== undefined;
    };

    setIsLoggedIn(checkLoginStatus());
  }, []);

  const handleAdviseButton = () => {
    if (isLoggedIn) {
      window.location.href = "/seek-advice";
    } else {
      window.location.href = "/login";
    }
  };

  return (
    <div className="HeroSectionBody">
      <section className="heroBody">
        <div className="heroWrite">
          <h1>Students Academic Advising System</h1>
          <p>Welcome to the Mouau Academic Advising System</p>
          <div>
            <button className="get-started" onClick={handleAdviseButton}>
              {isLoggedIn ? "Seek Advice" : "Get Started"}
            </button>
          </div>
        </div>
        <div>
          <img src={heroImage} alt="Student Advising" />
        </div>
        <div>
          <button className="get-started-phone" onClick={handleAdviseButton}>
            {isLoggedIn ? "Seek Advice" : "Get Started"}
          </button>
        </div>
      </section>
    </div>
  );
};

export default Hero;
