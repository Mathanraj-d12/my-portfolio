import React, { useEffect, useState } from "react";

const roles = [
  "Python Full-Stack Developer",
  "Django Backend Developer",
  "React Frontend Developer",
];

const Hero = () => {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const speed = isDeleting ? 60 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < currentRole.length) {
        setText(currentRole.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } 
      else if (isDeleting && charIndex > 0) {
        setText(currentRole.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } 
      else if (!isDeleting && charIndex === currentRole.length) {
        setTimeout(() => setIsDeleting(true), 1200);
      } 
      else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <h1>
            Hi, I’m <span className="highlight">Mathan Raj</span>
          </h1>

          <h2 className="typing-text">
            {text}
            <span className="cursor">|</span>
          </h2>

          <p className="hero-description">
            I build scalable web applications using
            <strong> Django</strong> for backend and
            <strong> React</strong> for frontend.
          </p>

          <a href="#projects" className="btn">
            View Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
