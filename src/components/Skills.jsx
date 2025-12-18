import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaPython,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import { SiDjango, SiRender, SiVercel } from "react-icons/si";
import { VscCode } from "react-icons/vsc";

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <h2 className="section-title">Skills</h2>

      {/* Core Stack */}
      <div className="skills-group">
        <h3 className="skills-group-title">Core Stack</h3>

        <div className="skills-grid">
          <Skill icon={<FaPython />} title="Python" />
          <Skill icon={<SiDjango />} title="Django" />
          <Skill icon={<FaReact />} title="React" />
          <Skill icon={<FaJsSquare />} title="JavaScript" />
          <Skill icon={<FaHtml5 />} title="HTML" />
          <Skill icon={<FaCss3Alt />} title="CSS" />
        </div>
      </div>

      {/* Developer Tools */}
      <div className="skills-group">
        <h3 className="skills-group-title">Developer Tools</h3>

        <div className="skills-grid">
          <Skill icon={<FaGitAlt />} title="Git" />
          <Skill icon={<FaGithub />} title="GitHub" />
          <Skill icon={<VscCode />} title="VS Code" />
        </div>
      </div>

      {/* Deployment */}
      <div className="skills-group">
        <h3 className="skills-group-title">Deployment</h3>

        <div className="skills-grid">
          <Skill icon={<SiRender />} title="Render" />
          <Skill icon={<SiVercel />} title="Vercel" />
        </div>
      </div>
    </section>
  );
};

const Skill = ({ icon, title }) => {
  return (
    <div className="skill-card">
      <div className="skill-icon">{icon}</div>
      <h4>{title}</h4>
    </div>
  );
};

export default Skills;
