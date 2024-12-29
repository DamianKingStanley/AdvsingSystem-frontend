import React, { useState } from 'react';
import './GPA.css'; // Import the CSS file

const GPACalculator = () => {
  const [numCourses, setNumCourses] = useState(0);
  const [courses, setCourses] = useState([]);
  const [totalCreditLoad, setTotalCreditLoad] = useState(0);
  const [gpa, setGpa] = useState(null);

  const gradeValues = {
    A: 5,
    B: 4,
    C: 3,
    D: 2,
    E: 1,
    F: 0
  };

  const handleCourseCount = (e) => {
    const count = parseInt(e.target.value);
    setNumCourses(count);
    const newCourses = Array.from({ length: count }, () => ({
      grade: '',
      creditUnits: 0,
    }));
    setCourses(newCourses);
  };

  const handleCourseInput = (index, key, value) => {
    const updatedCourses = courses.map((course, i) =>
      i === index ? { ...course, [key]: value } : course
    );
    setCourses(updatedCourses);
  };

  const calculateGPA = () => {
    let totalPoints = 0;
    let totalCredits = 0;

    courses.forEach(course => {
      const grade = course.grade.toUpperCase();
      const creditUnits = parseFloat(course.creditUnits);
      if (gradeValues[grade] !== undefined && !isNaN(creditUnits)) {
        totalPoints += gradeValues[grade] * creditUnits;
        totalCredits += creditUnits;
      }
    });

    if (totalCredits > 0) {
      const gpaValue = (totalPoints / totalCredits).toFixed(2);
      setGpa(gpaValue);
    }
  };

  return (
    <div className="gpa-calculator-container">
      <h1>GPA Calculator</h1>
      
      <label>Enter the number of courses:</label>
      <input
        type="number"
        min="1"
        value={numCourses}
        onChange={handleCourseCount}
        className="gpa-calculator-input"
      />
      
      <label>Enter total credit load for the semester:</label>
      <input
        type="number"
        min="1"
        value={totalCreditLoad}
        onChange={(e) => setTotalCreditLoad(parseInt(e.target.value))}
        className="gpa-calculator-input"
      />

      {courses.map((course, index) => (
        <div key={index} className="gpa-calculator-course">
          <label>Course {index + 1} Grade:</label>
          <input
            type="text"
            maxLength="1"
            value={course.grade}
            onChange={(e) => handleCourseInput(index, 'grade', e.target.value)}
            placeholder="Enter A, B, C, D, E, or F"
            className="gpa-calculator-input"
          />
          
          <label>Course {index + 1} Credit Units:</label>
          <input
            type="number"
            min="1"
            value={course.creditUnits}
            onChange={(e) => handleCourseInput(index, 'creditUnits', e.target.value)}
            className="gpa-calculator-input"
          />
        </div>
      ))}

      <button onClick={calculateGPA} className="gpa-calculator-button">
        Calculate GPA
      </button>

      {gpa && (
        <div className="gpa-calculator-result">
          <h2>Your GPA is: {gpa}</h2>
        </div>
      )}
    </div>
  );
};

export default GPACalculator;
