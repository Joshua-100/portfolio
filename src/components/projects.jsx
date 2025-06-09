import ProjectDetailsContainer from "../utils/projectDetailsContainer";
import projectsData from "../data/projectDetails";

function Projects() {
  return (
    <section id="projects">
      <p className="section__text__p1">Browse My Recent</p>
      <h1 className="title">Projects</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          {projectsData.map((project, index) => (
            <ProjectDetailsContainer
              key={index}
              project_img={project.project_img}
              project_title={project.project_title}
              github_href={project.github_href}
              live_href={project.live_href}
            />
          ))}
        </div>
      </div>

      <img
        src="./assets/arrow.png"
        alt="Arrow icon"
        className="icon arrow"
        onClick={() => (window.location.href = "#contact")}
      />
    </section>
  );
}

export default Projects;
