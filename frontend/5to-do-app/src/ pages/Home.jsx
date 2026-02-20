import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="home-container">
        <div className="hero-section">
          <h1>Plan Your Day. Own Your Life.</h1>
          <p>
            Stay productive, organized, and focused with your personal task
            planner. Write it down. Get it done.
          </p>

          <div className="home-buttons">
            <Link to="/signup">
              <button className="primary-btn">Get Started</button>
            </Link>

            <Link to="/login">
              <button className="secondary-btn">Learn More</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
