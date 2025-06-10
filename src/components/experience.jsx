import SkillCard from "../utils/skillsCard";
import {
  frontendSkills,
  backendSkills,
  hardwareSkills,
} from "../data/skillData";

function Experience() {
  return (
    <section id="experience">
      <p className="section__text__p1">Explore My</p>
      <h1 className="title">Experience</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          <SkillSection title="Frontend Development" skills={frontendSkills} />
          <SkillSection title="Backend Development" skills={backendSkills} />
          <SkillSection title="Hardware Development" skills={hardwareSkills} />
        </div>
      </div>
      <img
        src="/portfolio/assets/arrow.png"
        alt="Arrow icon"
        className="icon arrow"
        onClick={() => (window.location.href = "#projects")}
      />
    </section>
  );
}

// Internal reusable section component
const SkillSection = ({ title, skills }) => (
  <div className="details-container">
    <h2 className="experience-sub-title">{title}</h2>
    <div className="article-container">
      {skills.map((skill, index) => (
        <SkillCard key={index} title={skill.title} level={skill.level} />
      ))}
    </div>
  </div>
);

export default Experience;
