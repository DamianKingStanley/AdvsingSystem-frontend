import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./AdvicePage.css";
const AdvicePage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const advice = location.state?.advice || "No advice available";

  return (
    <div className="displayadvice">
      <div className="advice">
        <h2>Academic Advice</h2>
        <p>{advice}</p>
        <button onClick={() => navigate("/")}>Okay, thank you</button>
      </div>
    </div>
  );
};

export default AdvicePage;
