import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import "./Work.scss";
import { images } from "../../constants";

const Work = () => {
  const [works, setWorks] = useState([
    {
      name: "FormBot",
      imgUrl: images.Formbot,
      projectLink: "https://form-bot-kappa.vercel.app/",
      codeLink: "https://github.com/PrajwalPatil1105",
      description:
        "Features include user authentication, dynamic form creation, and shared workspace functionality",
      tags: ["Full Stack", "React"],
    },
    {
      name: "URL ShortPro",
      imgUrl: images.URL,
      projectLink: "https://url-shortener-sigma-pied.vercel.app/",
      codeLink: "https://github.com/PrajwalPatil1105/Url-Shortener",
      description:
        "Users can create, edit short links with tracking access data, including date, time, device type, and IP addresses.",
      tags: ["Full Stack", "React"],
    },
    {
      name: "HFMS",
      imgUrl: images.HFM,
      projectLink: "https://hospital-food-management-coral.vercel.app/",
      codeLink: "https://github.com/PrajwalPatil1105/Hospital-Food-Management",
      description:
        "Developed a responsive Hospital Food Management System for Managers, Pantry, and Delivery Staff.",
      tags: ["Full Stack", "React"],
    },
    {
      name: "Super App",
      imgUrl: images.SA,
      projectLink: "https://super-app-beta-teal.vercel.app/",
      codeLink: "https://github.com/PrajwalPatil1105/Super-App",
      description:
        "React project which include API handing and dynamic content updates.",
      tags: ["React"],
    },
    {
      name: "Stone Paper Scissors Game",
      imgUrl: images.SAS,
      projectLink: "https://major-project-1-nine.vercel.app/",
      codeLink: "https://github.com/PrajwalPatil1105/Major_Project_1",
      description:
        "An engaging implementation of the classic game featuring persistent score tracking, immersive sound effects, and fluid animations.",
      tags: ["JavaScript"],
    },
    {
      name: "Animated Quiz Game",
      imgUrl: images.Quiz,
      projectLink: "https://quiz-game-ruby.vercel.app/",
      codeLink: "https://github.com/PrajwalPatil1105/Quiz-Game",
      description:
        "Game with combining effective sound effect with visually animations for an immersive learning experience.",
      tags: ["React"],
    },
    {
      name: "Pocket Notes",
      imgUrl: images.PN,
      projectLink: "https://pocket-notes-eight-alpha.vercel.app/",
      codeLink: "https://github.com/PrajwalPatil1105/Pocket-Notes",
      description:
        "A simple, persistent note-taking app that lets you create and manage multiple notes with customizable colors with persistent data storing",
      tags: ["JavaScript", "React"],
    },
  ]);
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState("Full Stack");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);
    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);
      if (item === "All") {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  useEffect(() => {
    handleWorkFilter("Full Stack");
  }, []);

  return (
    <>
      <h2 className="head-text">
        My Creative <span>Web Devlopment</span> Projects
      </h2>
      <div className="app__work-filter">
        {["Full Stack", "React", "JavaScript", "All"].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${
              activeFilter === item ? "item-active" : ""
            }`}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWork.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div className="app__work-img app__flex">
              <img src={work.imgUrl} alt={work.name} />
              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className="app__work-hover app__flex"
              >
                <a href={work.projectLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 3 }}>
                {work.description}
              </p>

              <div className="app__work-tag app__flex">
                <p className="p-text">{work.name}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, "app__works"),
  "work",
  "app__primarybg"
);
