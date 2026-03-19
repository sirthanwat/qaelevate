import React, { useState } from "react";

const questions = [
  "What is Page Object Model?",
  "Explain REST vs SOAP.",
  "How do you handle flaky tests?",
  "What is CI/CD in automation?",
  "Difference between Load and Stress testing?"
];

const MockInterview = () => {
  const [quest, setQuest] = useState("Click generate for a QA question");

  const generateQuestion = () => {
    const random = Math.floor(Math.random() * questions.length);
    setQuest(questions[random]);
  };

  return (
    <div className="section container">
      <h2>Mock Interview Practice</h2>
      <div className="card">
        <p>{quest}</p>
        <button className="btn btn-primary" onClick={generateQuestion}>
          Generate Question
        </button>
      </div>
    </div>
  );
};

export default MockInterview;
