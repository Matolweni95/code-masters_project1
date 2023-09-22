import React, { useState } from "react";
import "./../css/Aps.css";

interface Grade {
  subject: string;
  percentage: number | "";
  level: number;
}

const Aps: React.FC = () => {
  const [grades, setGrades] = useState<Grade[]>([
    { subject: "", percentage: "", level: 0 },
    { subject: "", percentage: "", level: 0 },
    { subject: "", percentage: "", level: 0 },
    { subject: "", percentage: "", level: 0 },
    { subject: "", percentage: "", level: 0 },
    { subject: "", percentage: "", level: 0 },
  ]);

  const [totalLevels, setTotalLevels] = useState<number>(0);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
    field: keyof Grade
  ) => {
    const updatedGrades = [...grades];
    let value: number | "";

    if (field === "subject") {
      updatedGrades[index][field] = e.target.value;
    } else if (field === "percentage") {
      value = e.target.value === "" ? "" : parseFloat(e.target.value);
      updatedGrades[index][field] = value;
   
      updatedGrades[index].level = value === "" ? 0 : calculateLevel(value);
    }

    setGrades(updatedGrades);
  };

  const calculateLevel = (percentage: number) => {
    if (percentage >= 80) {
      return 7;
    } else if (percentage >= 70) {
      return 6;
    } else if (percentage >= 60) {
      return 5;
    } else if (percentage >= 50) {
      return 4;
    } else if (percentage >= 40) {
      return 3;
    } else if (percentage >= 30) {
      return 2;
    } else if (percentage >= 0) {
      return 1;
    } else {
      return 0;
    }
  };

  const calculateTotalLevels = () => {
    // Check if any subjects or percentages are empty
    if (grades.some((grade) => grade.subject === "" || grade.percentage === "")) {
      alert("Please fill in all subjects and percentages.");
      return;
    }

    const levelsSum = grades.reduce(
      (total, grade) => total + Math.min(grade.level, 7),
      0
    );
    setTotalLevels(levelsSum);
  };

  const getApsMessage = () => {
    if (!totalLevels) {
      return "";
    } else if (totalLevels <= 14) {
      return "National Senior Certificate - 14 APS Points";
    } else if (totalLevels <= 15) {
      return "Higher Certificate Pass - 15 APS Points";
    } else if (totalLevels <= 19) {
      return "Diploma Pass - 19 APS Points";
    } else {
      return "Bachelors Pass - 23 APS Points";
    }
  };

  const [selectedSubject, setSelectedSubject] = useState<string>("");

  const handleSubjectChange = (
    e: React.ChangeEvent<HTMLSelectElement>,
    index: number
  ) => {
    const updatedGrades = [...grades];
    updatedGrades[index].subject = e.target.value;
    setGrades(updatedGrades);
  };

  // List of subjects
  const subjects = [
    "Civil Technology",
    "Electrical Technology",
    "Engineering Graphics and Design",
    "Mechanical Technology",
    "Consumer Studies",
    "Geography",
    "History",
    "Hospitality Studies",
    "Religion Studies",
    "Tourism",
    "Life Sciences",
    "Mathematical Literacy",
    "Mathematics",
    "Physical Sciences",
    "Technical Mathematics",
    "Technical Sciences",
    "Afrikaans",
    "English",
    "IsiXhosa",
    "Sesotho",
    "Setswana",
    "South African Sign Language",
    "Computer Application Technology",
    "Information Technology",
    "Accounting",
    "Business Studies",
    "Economics",
    "Dance Studies",
    "Design",
    "Dramatic Arts",
    "Music",
    "Visual Arts",
  ];

  return (
    <section className="aps d-flex flex-column align-items-center justify-content-center">
    <div className="aps-container ">
      <div className="aps-heading d-flex flex-column align-items-center justify-content-center">
        <h1 className="aps-header">APS SCORE CALCULATOR</h1>
        <div className="aps-line"></div>
      </div>

      <div className="aps-desc">
      <div className="aps-summary">
        <p>
          In case you didn’t know, APS stands for Admission Point Score. In
          South Africa, universities and other tertiary institutions will often
          ask for this score in their application process. It is sometimes used
          as an entry requirement on application forms.
        </p>
      </div>
      </div>
      
      <div className="calculator d-flex flex-wrap">
        <div className="main-calculator d-flex justify-content-center flex-column align-items-center w-50">
          <table className="score">
            <thead>
              <tr>
                <th>Subject</th>
                <th>Percentage</th>
                <th>Level</th>
              </tr>
            </thead>
            <tbody>
              {grades.map((grade, index) => (
                <tr key={index}>
                  <td>
                    <select
                      value={grade.subject}
                      onChange={(e) => handleSubjectChange(e, index)}
                    >
                      <option value="">Select a Subject</option>
                      {subjects.map((subject) => (
                        <option key={subject} value={subject}>
                          {subject}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td>
                    <input
                    className="aps-percent"
                      type="number"
                      value={grade.percentage}
                      onChange={(e) => handleInputChange(e, index, "percentage")}
                      onWheel={(e) => {
                        e.preventDefault();
                      }}
                    />
                  </td>
                  <td>{grade.level}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <button className="calculate-btn" onClick={calculateTotalLevels}>CALCULATE</button>
        </div>
        <div className="result d-flex flex-column align-items-center w-50"> 
          <h4>RESULT</h4>
          <p>{getApsMessage()}</p>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Aps;
