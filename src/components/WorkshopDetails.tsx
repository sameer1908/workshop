import React from "react";
import workshopsData from './config/sample.json';
import { WorkshopResponse } from "./types/workshop";
const WorkshopDetails: React.FC = () => {
  const workshopResponse = workshopsData as WorkshopResponse;
  return (
    <section className="section">
      <h2>AI & Robotics Summer Workshop</h2>
      <div className="details-grid">
        {workshopResponse.data.map((workshop) => (

          <div
            key={workshop.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "16px",
              marginBottom: "20px",
            }}
          >
            <img
              src={workshop.image}
              alt={workshop.title}
              style={{
                width: "100%",
                maxWidth: "400px",
                borderRadius: "8px",
              }}
            />
            <div className="workshop_title">
              <p >{workshop.title}</p>
            </div>
            <div className="workshop_description">
              <p>{workshop.description}</p>
            </div>
            <div className="workshop_details">
              <p>
                <strong>Age Group:</strong> {workshop.ageGroup}
              </p>

              <p>
                <strong>Duration:</strong> {workshop.duration}
              </p>

              <p>
                <strong>Mode:</strong> {workshop.mode}
              </p>

              <p>
                <strong>Fee:</strong> ₹{workshop.fee}
              </p>

              <p>
                <strong>Start Date:</strong> {workshop.startDate}
              </p>

              <p>
                <strong>Instructor:</strong> {workshop.instructor}
              </p>

              <p>
                <strong>Rating:</strong> ⭐ {workshop.rating}
              </p>

              <p>
                <strong>Students:</strong> {workshop.totalStudents}
              </p>
            </div>
            <div>
              <button className="workshop_book_btn">Book Now</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkshopDetails;