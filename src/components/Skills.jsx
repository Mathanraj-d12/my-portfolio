import React from "react";

const skills = [
  { name: "HTML", level: 90 },
  { name: "CSS", level: 85 },
  { name: "JavaScript", level: 80 },
  { name: "React", level: 75 },
  { name: "Python", level: 80 },
];

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <h2 className="section-title">My Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill-bar" key={index}>
            <p>{skill.name}</p>
            <div className="progress-bar">
              <div
                className="progress"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
            <span className="percentage">{skill.level}%</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
