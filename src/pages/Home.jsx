import React from "react";
import Card from "../components/Card";
import MockInterview from "../components/MockInterview";

const Home = () => (
  <>
    <section className="section container">
      <h1>Crack Your Next QA Interview With Confidence</h1>
    </section>

    <section className="section container">
      <h2>Prepare By Experience</h2>
      <div className="grid">
        <Card title="0–2 Years" description="Manual + basics" />
        <Card title="2–5 Years" description="Automation + API + CI/CD" />
        <Card title="5–8 Years" description="Architecture + optimization" />
        <Card title="8–12+ Years" description="Strategy + leadership" />
      </div>
    </section>

    <MockInterview />
  </>
);

export default Home;
