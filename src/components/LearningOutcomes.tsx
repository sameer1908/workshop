import React from "react";

const LearningOutcomes = () => {
  const outcomes = [
    "Understand AI and Machine Learning basics",
    "Build beginner robotics projects",
    "Learn automation and smart systems",
    "Improve logical thinking and problem solving",
    "Create coding projects using real-world examples",
  ];

  return (
    <section className="section">
      <h2>What Students Will Learn</h2>

      <ul className="outcomes">
        {outcomes.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
};

export default LearningOutcomes;