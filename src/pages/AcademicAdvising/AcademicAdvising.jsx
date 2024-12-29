// Import necessary dependencies
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./AcademicAdvising.css";

const AcademicAdvising = () => {
  const [gpa, setGpa] = useState("");
  const [carryOver, setCarryOver] = useState(false);
  const [courseInputs, setCourseInputs] = useState([
    { courseCode: "", units: 0 },
  ]);
  const [failedCourses, setFailedCourses] = useState([
    { courseCode: "", units: 0 },
  ]);
  const [isLoading, setIsLoading] = useState(false); // Loading state for the spinner

  const studentData = JSON.parse(sessionStorage.getItem("studentData"));
  const userId = studentData ? studentData.id : null;

  const navigate = useNavigate();

  const handleGpaSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Show loader

    try {
      const response = await axios.post(
        "https://academic-advise-server.onrender.com/generate-advice",
        {
          userId,
          gpa,
          carryOverCourses: carryOver ? courseInputs : [],
          failedCourses,
        }
      );

      navigate("/advice", { state: { advice: response.data.advice } });
    } catch (error) {
      console.error("Error submitting the form:", error);
    } finally {
      setIsLoading(false); // Hide loader
    }
  };

  const handleAddCourseInput = () => {
    setCourseInputs([...courseInputs, { courseCode: "", units: 0 }]);
  };

  const handleAddFailedCourse = () => {
    setFailedCourses([...failedCourses, { courseCode: "", units: 0 }]);
  };

  const handleCourseChange = (index, e) => {
    const newInputs = [...courseInputs];
    newInputs[index][e.target.name] = e.target.value;
    setCourseInputs(newInputs);
  };

  const handleFailedCourseChange = (index, e) => {
    const newInputs = [...failedCourses];
    newInputs[index][e.target.name] = e.target.value;
    setFailedCourses(newInputs);
  };

  return (
    <div className="AcademicAdviseBody">
      <h2>Academic Advising</h2>
      <form className="AcademicQuestions" onSubmit={handleGpaSubmit}>
        <div>
          <label>Enter your GPA:</label>
          <input
            type="number"
            value={gpa}
            onChange={(e) => setGpa(e.target.value)}
            required
          />
        </div>
        <div className="carryoverQuestion">
          <p>Do you have carry over courses?</p>
          <p>
            <input
              type="radio"
              value="yes"
              checked={carryOver}
              onChange={() => setCarryOver(true)}
            />{" "}
            Yes
          </p>
          <p>
            <input
              type="radio"
              value="no"
              checked={!carryOver}
              onChange={() => setCarryOver(false)}
            />{" "}
            No
          </p>
        </div>
        {carryOver && (
          <div>
            <div className="EnterCourses">
              <h3>Enter Courses:</h3>
              {courseInputs.map((input, index) => (
                <div key={index}>
                  <input
                    name="courseCode"
                    value={input.courseCode}
                    onChange={(e) => handleCourseChange(index, e)}
                    placeholder="Course Code"
                    required
                    id="coursecode"
                  />
                  <input
                    name="units"
                    type="number"
                    value={input.units}
                    onChange={(e) => handleCourseChange(index, e)}
                    placeholder="Credit Units"
                    required
                  />
                  <button type="button" onClick={handleAddCourseInput}>
                    Add More Courses
                  </button>
                </div>
              ))}
            </div>
            <div className="FailedCourses">
              <h3>Select Failed Courses:</h3>
              {failedCourses.map((input, index) => (
                <div key={index}>
                  <input
                    name="courseCode"
                    value={input.courseCode}
                    onChange={(e) => handleFailedCourseChange(index, e)}
                    placeholder="Course Code"
                    required
                    id="coursecode"
                  />
                  <input
                    name="units"
                    type="number"
                    value={input.units}
                    onChange={(e) => handleFailedCourseChange(index, e)}
                    placeholder="Credit Units"
                    required
                  />
                </div>
              ))}{" "}
              <button type="button" onClick={handleAddFailedCourse}>
                Add Failed Course
              </button>
            </div>
          </div>
        )}

        <button id="formsubmitBtn" type="submit" disabled={isLoading}>
          {isLoading ? <div className="loader"></div> : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default AcademicAdvising;
