import React from "react";
import myphoto from "../assets/me.jpeg"

const About = () => (
  <section className="about" id="about">
    <h2>About Me</h2>
    <div className="about-container">
      <img src={myphoto} alt="My Photo" />
      <p>
        Hi, I'm <b>[Mathan raj]</b>.I am a passionate Python Full Stack Developer with a strong foundation in building dynamic and responsive web applications. I have hands-on experience with HTML, CSS, JavaScript, ReactJS, SQL, and Python, and I enjoy turning ideas into functional and user-friendly solutions.
                    I am constantly improving my skills and exploring new technologies to deliver clean, efficient, and scalable code. My goal is to grow as a developer while contributing to impactful projects that create real value.
                
      </p>
    </div>
  </section>
);

export default About;
