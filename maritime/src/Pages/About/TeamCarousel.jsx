import React, { useState } from "react";
import "./TeamCarousel.css";
import team from "./TeamData";

const TeamCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % team.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + team.length) % team.length);
  };

  return (
    <div className="team-carousel">
      <h1>Our Team</h1>
      <div className="carousel">
        <button className="arrow prev" onClick={handlePrev}>
          &#10094;
        </button>
        <div
          className="cards-container"
          style={{
            width: `${team.length * 100}%`,
            transform: `translateX(-${currentIndex * (100 / team.length)}%)`,
          }}
        >
          {team.map((member, index) => (
            <div
              key={index}
              className="card"
              style={{ width: `${100 / team.length}%` }}
            >
              <img src={member.image} alt={member.name} className="card-img" />
              <div className="card-content">
                <h2 className="card-title">{member.name}</h2>
                <p className="card-description">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="arrow next" onClick={handleNext}>
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default TeamCarousel;
