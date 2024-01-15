import { projects } from "../helpers/projectsList";
import ProjectOne from "../components/ProjectOne";

function Projects() {
  return (
    <main className="section">
      <div className="container">
        <h2 className="title-1">Projects</h2>
        <ul className="projects">
          {projects.map((p, index) => {
            return (
              <ProjectOne key={index} title={p.title} img={p.img} id={index} />
            );
          })}
        </ul>
      </div>
    </main>
  );
}

export default Projects;
