import React from "react";
import "./Skills.css";

const skills = [
  { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
   { name: "VedioEditing", icon: "data:image/png;base64,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" },  {
  name: "Canva",
  icon: "https://cdn.worldvectorlogo.com/logos/canva-1.svg"
}



  ];

const Skills = () => {
  return (
   
    <section className="skills-section" id="skills" data-aos="fade-up">
      <h2 className="skills-title" data-aos="fade-up">Skills</h2>
      <div className="skills-grid" data-aos="fade-up">
        {skills.map((skill) => (
          <div className="skill-card" key={skill.name}>
            <img src={skill.icon} alt={skill.name} className="skill-icon" />
            <p className="skill-name">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
