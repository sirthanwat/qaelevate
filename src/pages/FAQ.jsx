import React, { useState } from "react";

const faqData = [
  { question: "Who is this platform for?", answer: "QA professionals from 0–12+ years." },
  { question: "Do you cover API automation?", answer: "Yes, including Postman + RestAssured." },
  { question: "Is there mock interview support?", answer: "Yes, with timer/random questions." }
];

const FAQ = () => {
  const [active, setActive] = useState(null);
  const toggle = (i) => setActive(active === i ? null : i);

  return (
    <section className="section container">
      <h1>FAQ</h1>
      {faqData.map((item, i) => (
        <div className="faq-card" key={i}>
          <button className="faq-question" onClick={() => toggle(i)}>
            {item.question}
          </button>
          <div className={`faq-answer ${active === i ? "show" : ""}`}>
            {item.answer}
          </div>
        </div>
      ))}
    </section>
  );
};

export default FAQ;
