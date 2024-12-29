import React, { useState } from 'react';
import './CGPA.css'; // Import the CSS file

const CGPACalculator = () => {
  const [sessionType, setSessionType] = useState('single'); // Either 'single' or 'multiple'
  const [gpaFirstSem, setGpaFirstSem] = useState('');
  const [gpaSecondSem, setGpaSecondSem] = useState('');
  const [sessions, setSessions] = useState([{ gpaFirstSem: '', gpaSecondSem: '' }]);
  const [result, setResult] = useState(null);

  // Calculate CGPA for a single session
  const calculateSingleSessionCGPA = () => {
    const gpa1 = parseFloat(gpaFirstSem);
    const gpa2 = parseFloat(gpaSecondSem);
    if (!isNaN(gpa1) && !isNaN(gpa2)) {
      const cgpa = (gpa1 + gpa2) / 2;
      setResult(`Your CGPA for this session is ${cgpa.toFixed(2)}`);
    } else {
      setResult('Please enter valid GPAs for both semesters.');
    }
  };

  // Calculate CGPA for multiple sessions
  const calculateMultipleSessionsCGPA = () => {
    let totalGpa = 0;
    let totalSemesters = 0;
    
    for (const session of sessions) {
      const gpa1 = parseFloat(session.gpaFirstSem);
      const gpa2 = parseFloat(session.gpaSecondSem);
      if (!isNaN(gpa1) && !isNaN(gpa2)) {
        totalGpa += (gpa1 + gpa2);
        totalSemesters += 2;
      } else {
        setResult('Please ensure all GPAs are filled correctly.');
        return;
      }
    }

    const cgpa = totalGpa / totalSemesters;
    setResult(`Your cumulative CGPA across all sessions is ${cgpa.toFixed(2)}`);
  };

  // Add a new session for multiple-session CGPA calculation
  const addSession = () => {
    setSessions([...sessions, { gpaFirstSem: '', gpaSecondSem: '' }]);
  };

  // Handle input change for multiple sessions
  const handleSessionChange = (index, field, value) => {
    const newSessions = [...sessions];
    newSessions[index][field] = value;
    setSessions(newSessions);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (sessionType === 'single') {
      calculateSingleSessionCGPA();
    } else {
      calculateMultipleSessionsCGPA();
    }
  };

  return (
    <div className="cgpa-calculator">
      <h1>CGPA Calculator</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Are you calculating for one session or multiple sessions? <br/>
          <select value={sessionType} onChange={(e) => setSessionType(e.target.value)}>
            <option value="single">One Session</option>
            <option value="multiple">Multiple Sessions</option>
          </select>
        </label>

        {sessionType === 'single' ? (
          <div>
            <label>
              GPA for First Semester:
              <input
                type="number"
                step="0.01"
                value={gpaFirstSem}
                onChange={(e) => setGpaFirstSem(e.target.value)}
                placeholder="e.g., 3.5"
              />
            </label>

            <label>
              GPA for Second Semester:
              <input
                type="number"
                step="0.01"
                value={gpaSecondSem}
                onChange={(e) => setGpaSecondSem(e.target.value)}
                placeholder="e.g., 3.8"
              />
            </label>
          </div>
        ) : (
          <div>
            {sessions.map((session, index) => (
              <div key={index} className="session">
                <h3>Session {index + 1}</h3>
                <label>
                  GPA for First Semester:
                  <input
                    type="number"
                    step="0.01"
                    value={session.gpaFirstSem}
                    onChange={(e) => handleSessionChange(index, 'gpaFirstSem', e.target.value)}
                    placeholder="e.g., 3.5"
                  />
                </label>

                <label>
                  GPA for Second Semester:
                  <input
                    type="number"
                    step="0.01"
                    value={session.gpaSecondSem}
                    onChange={(e) => handleSessionChange(index, 'gpaSecondSem', e.target.value)}
                    placeholder="e.g., 3.8"
                  />
                </label>
              </div>
            ))}

            <button type="button" onClick={addSession} className="add-session-btn">
              Add Another Session
            </button>
          </div>
        )}

        <button type="submit" className="calculate-btn">Calculate CGPA</button>
      </form>

      {result && <p className="result">{result}</p>}
    </div>
  );
};

export default CGPACalculator;
