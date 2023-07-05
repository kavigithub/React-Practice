import React from "react";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];

const Avatar = () => {
  return (
    <>
      <img
        src={
          "https://avatars.githubusercontent.com/u/16161263?s=400&u=1d0c41db58cce1366074d6777a7f1b5fa31d38c6&v=4"
        }
        className="img-fluid rounded-start"
        alt="Kavita Ghatge"
      />
    </>
  );
};

const Intro = (props: { name: string; discription: string }) => {
  return (
    <>
      <h5 className="card-title">{props.name}</h5>
      <p className="card-text">{props.discription}</p>
    </>
  );
};

const SkillBox = ({
  color,
  skill,
  level,
}: {
  color: string;
  skill: string;
  level: string;
}) => {
  return (
    <>
      <span className="p-2 text-white" style={{ backgroundColor: color }}>
        <i
          className={`${level === "beginner" && "bi bi-code"} ${
            level === "advanced" && "bi bi-hand-index-thumb"
          } ${level === "intermediate" && "bi bi-hand-thumbs-up"}`}
        ></i>{" "}
        {skill}
      </span>
    </>
  );
};

const SkillSet = () => {
  return (
    <>
      <p className="card-text">
        <small className="text-body-secondary">
          <div className="flex flex-row">
            {skills.map((item, index) => (
              <SkillBox
                skill={item.skill}
                color={item.color}
                level={item.level}
              />
            ))}

            {/* <SkillBox skillName="REACT.JS" color="Orange" /> |
                <SkillBox skillName="JAVASCRTIPT" color="blue"/> |
                <SkillBox skillName="JQUERY" color="purple"/> |
                <SkillBox skillName="HTML5 + CSS3" color="maroon"/>  */}
          </div>
        </small>
      </p>
    </>
  );
};

const About = () => {
  return (
    <div className="card m-3">
      <div className="row g-0">
        <div className="col-md-4">
          <Avatar />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <Intro
              name="Kavita Ghatge"
              discription="Experienced UI Developer / UX Designer with a demonstrated history of working in the information technology and services industry. Worked on Django module and theme development. Also worked with CSS framework like Bootstrap, Foundation, Tailwind. Skilled in HTML5, CSS3, SASS, jQuery, RWD, Adobe Photoshop and Jquery, JavaScript(ES6), OOP, ReactJS development. Interested in learning new upcoming technology."
            />

            <SkillSet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
