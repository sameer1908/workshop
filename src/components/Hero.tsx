import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="container">
        <h1>AI & Robotics Summer Workshop</h1>

        <p>
          Learn Artificial Intelligence, Robotics, Automation and Coding
          through hands-on projects designed for young innovators.
        </p>

        <a href="#register" className="btn">
          Enroll Now
        </a>
      </div>
    </section>
  );
};

export default Hero;