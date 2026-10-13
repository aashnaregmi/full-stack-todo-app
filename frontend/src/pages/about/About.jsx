import React from "react";
import "./About.css";

const About = () => {
  const features = [
    {
      title: "Plan Your Day",
      description:
        "Bring your daily tasks together in one place and make it easier to decide what needs your attention.",
      icon: "☷",
    },
    {
      title: "Stay Organized",
      description:
        "Keep your tasks structured, so you can spend less time figuring out what to do next.",
      icon: "◷",
    },
    {
      title: "Track Your Progress",
      description:
        "Work through your to-do list one task at a time and see your plans turn into progress.",
      icon: "↗",
    },
    {
      title: "Build Your Routine",
      description:
        "Create a planning habit that helps you stay consistent with your daily responsibilities.",
      icon: "♡",
    },
  ];

  return (
    <section className="about-container">
      <div className="about-header">
        <div className="about-intro">
          <h1>Make Your Day More Organized.</h1>
          <p>
            Planner is a simple and user-friendly task management application
            that helps you organize your daily tasks, prioritize important
            activities, and manage your day more effectively.
          </p>
        </div>
      </div>

      <div className="about-cards">
        {features.map((feature) => (
          <article className="about-card" key={feature.title}>
            <span className="about-icon" aria-hidden="true">
              {feature.icon}
            </span>

            <h2>{feature.title}</h2>

            <p>{feature.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default About;
