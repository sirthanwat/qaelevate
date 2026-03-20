import React from "react";

const Experience = () => {
  return (
    <section className="experience">
      <div className="container">
        <h2 className="section-title">Choose By Experience Level</h2>

        <div className="experience-grid">
          <div className="exp-card">
            <h3>2 Years</h3>
            <p>Manual + Basic Automation Interview Sets</p>
          </div>

          <div className="exp-card">
            <h3>5 Years</h3>
            <p>Framework, API, CI/CD & Advanced Questions</p>
          </div>

          <div className="exp-card">
            <h3>8 Years</h3>
            <p>Leadership, Architecture & Strategy</p>
          </div>

          <div className="exp-card">
            <h3>12+ Years</h3>
            <p>Enterprise System Design & QA Transformation</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
