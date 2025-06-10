const SkillCard = ({ title, level }) => {
  return (
    <article>
      <img
        src="/portfolio/assets/checkmark.png" // adjust path if needed
        alt="Experience icon"
        className="icon"
      />
      <div>
        <h3>{title}</h3>
        <p>{level}</p>
      </div>
    </article>
  );
};

export default SkillCard;
