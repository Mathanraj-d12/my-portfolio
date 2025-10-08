// src/components/Hero.jsx
import React from "react";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>Hi, I’m <span className="highlight">[Mathan raj]</span></h1>
        <p>I am a Fullstack Developer | HTML | CSS | JS | React | Python</p>
        <a href="#projects" className="btn">See My Work</a>
      </div>
    </section>
  );
};

export default Hero;
