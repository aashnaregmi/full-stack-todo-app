import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  const handleLearnMore = () => {
    navigate("/about");
  };

  const handleGetStarted = () => {
    navigate("/login");
  };

  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>Plan Your Day. Own Your Life.</h1>

        <p>
          Stay productive, organized, and focused with your personal task
          planner. Write it down. Get it done.
        </p>

        <div className="home-buttons">
          <button className="primary-btn" onClick={handleGetStarted}>
            Get Started
          </button>

          <button className="secondary-btn" onClick={handleLearnMore}>
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
