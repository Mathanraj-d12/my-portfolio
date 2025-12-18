import React from "react";
import myphoto from "../assets/me.jpeg";

const About = () => {
  return (
    <section className="about" id="about">
      <h2>About Me</h2>

      <div className="about-container">
        <img src={myphoto} alt="Mathan Raj" />

        <p>
          Hi, I’m <b>Mathan Raj</b>, a passionate <b>Python Full-Stack Developer</b>
          with a strong foundation in building dynamic and responsive web
          applications.
          <br /><br />
          I have hands-on experience with <b>HTML, CSS, JavaScript, React, SQL,
          and Python</b>, and I enjoy turning ideas into functional and
          user-friendly solutions.
          <br /><br />
          I’m continuously improving my skills and exploring new technologies to
          write <b>clean, efficient, and scalable code</b>. My goal is to grow as
          a developer while contributing to impactful projects that create real
          value.
        </p>
      </div>
    </section>
  );
};

export default About;
