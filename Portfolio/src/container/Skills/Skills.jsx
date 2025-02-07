import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import "./Skills.scss";
import { images } from "../../constants";

const Skills = () => {
  const [experiences, setExperiences] = useState([
    {
      year: "June`23- Aug`23",
      works: [
        {
          name: "Internship Trainee",
          company: "Persistent System",
          desc: "Contributed to build responsive interfaces,gaining experience in UI design and improving code efficiency for enhanced user experience.",
        },
      ],
    },
    {
      year: "June`24- Feb`25",
      works: [
        {
          name: "Full-Stack Development Intern",
          company: "Cuvette Tech",
          desc: "Gained hands-on experience in full-stack development by working on projects involving REST API integration and creating responsive designs, enhancing both backend and frontend skills.",
        },
      ],
    },
    {
      year: "Aug`23- Oct`25",
      works: [
        {
          name: "Intership Trainee",
          company: "Edureka India",
          desc: "Developed data analysis skills by working on projects using NumPy, Pandas, and other tools, gaining hands-on experience in data manipulation and processing.",
        },
      ],
    },
  ]);

  const [skills, setSkills] = useState([
    { name: "HTML", imgUrl: images.html },
    { name: "CSS", imgUrl: images.css },
    { name: "JavaScript", imgUrl: images.javascript },
    { name: "React", imgUrl: images.react },
    { name: "Node.js", imgUrl: images.node },
    { name: "Express.js", imgUrl: images.express },
    { name: "MongoDB", imgUrl: images.MongoDB },
    { name: "Git", imgUrl: images.git },
    { name: "Tailwind", imgUrl: images.Tailwind },
    { name: "Java", imgUrl: images.Java },
    { name: "Figma", imgUrl: images.figma },
    { name: "Canva", imgUrl: images.Canva },
  ]);

  return (
    <>
      <h2 className="head-text">Skills & Experiences</h2>
      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={skill.imgUrl} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="app__skills-exp">
          {experiences.map((experience) => (
            <motion.div className="app__skills-exp-item" key={experience.year}>
              <div className="app__skills-exp-year">
                <p className="bold-text1">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {experience.works.map((work) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={work.name}
                      key={work.name}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company} </p>
                      <p className="p-desc">{work.desc} </p>
                    </motion.div>
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "skills",
  "app__whitebg"
);
