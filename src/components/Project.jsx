import React from "react";

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2 className="section-title">My Projects</h2>

      <div className="projects-container">
        {/* Django Job Board */}
<div className="project-card">
  <h3>Django Job Board Web Application</h3>

  <p>
    A full-stack job portal where employers can post jobs and manage
    applications, and job seekers can apply for positions. Designed with
    role-based access and secure backend architecture.
  </p>

  <p className="tech-stack">
    <strong>Tech:</strong> Django, Python, HTML, CSS, Bootstrap
  </p>

  <div className="project-links">
    <a
      href="https://django-job-board-4ja4.onrender.com"
      target="_blank"
      rel="noreferrer"
      className="btn"
    >
      Live Demo
    </a>

    <a
      href="https://github.com/Mathanraj-d12/django-job-board"
      target="_blank"
      rel="noreferrer"
      className="btn outline"
    >
      GitHub
    </a>
  </div>
</div>


        {/* JavaScript Job Board */}
        <div className="project-card">
          <h3>JavaScript Job Board Application</h3>

          <p>
            A frontend-focused job board application built using JavaScript.
            Allows users to browse jobs, apply filters, and interact with job
            listings through dynamic UI updates.
          </p>

          <p className="tech-stack">
            <strong>Tech:</strong> HTML, CSS, JavaScript, React.js, Firebase
          </p>

          <div className="project-links">
            
            <a
              href="https://github.com/Mathanraj-d12/job-board-web"
              target="_blank"
              rel="noreferrer"
              className="btn outline"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
