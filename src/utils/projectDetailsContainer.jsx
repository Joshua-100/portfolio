const ProjectDetailsContainer = ({ project_img, project_title, github_href, live_href }) => {
  return (
    <div className="details-container color-container">
      <div className="article-container">
        <img
          src={project_img}
          alt={project_title}
          className="project-img"
        />
      </div>
      <h2 className="experience-sub-title project-title">{project_title}</h2>
      <div className="btn-container">
        <button
          className="btn btn-color-2 project-btn"
          onClick={() => window.location.href = github_href}
        >
          Github
        </button>
        <button
          className="btn btn-color-2 project-btn"
          onClick={() => window.location.href = live_href}
        >
          Live Demo
        </button>
      </div>
      {console.log("Image Path:", project_img)}
    </div>
  );
};

export default ProjectDetailsContainer;
