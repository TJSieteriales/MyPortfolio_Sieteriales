import { portfolio } from "../data/portfolio";

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="section-title">
        <p>MY WORK</p>
        <h2>Projects</h2>
      </div>

      <div className="project-grid">
        {portfolio.projects.map((project) => (
          <div className="project-card" key={project.title}>
            <h3>{project.title}</h3>

            <p>{project.tech}</p>

            <a href={project.link} target="_blank" rel="noreferrer">
              View Repository →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
