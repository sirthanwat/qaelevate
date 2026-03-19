import React from "react";
import Card from "../components/Card";

const Services = () => (
  <section className="section container">
    <h1>Our Services</h1>
    <div className="grid">
      <Card title="Experience-Based Prep" description="Structured interview path." />
      <Card title="Tool Modules" description="Selenium, API, Playwright, Appium." />
      <Card title="Mock Interviews" description="Practise with random questions." />
      <Card title="System Design" description="SDET architecture prep." />
    </div>
  </section>
);

export default Services;
