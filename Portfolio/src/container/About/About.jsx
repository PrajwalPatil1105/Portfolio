import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import "./About.scss";
import { images } from "../../constants";

const About = () => {
  const [abouts, setAbouts] = useState([
    {
      title: "MERN Stack Developer",
      description:
        "Skilled in building scalable web applications with React, Node.js, Express, and MongoDB. Proficient in creating responsive interfaces, efficient back-end systems, and seamless API integrations for optimal performance.",
      imgUrl: images.MERN,
    },
  ]);

  return (
    <>
      <h2 className="head-text">
        I Know that <span>Good Developer</span> <br />
        means <span>Good Business</span>
      </h2>
      <div className="hero">
        <div className="app__profiles">
          {abouts.map((about, index) => (
            <motion.div
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, type: "tween" }}
              className="app__profile-item"
              key={about.title + index}
            >
              <img src={about.imgUrl} alt={about.title} />
              <h2 className="bold-text" style={{ marginTop: 20 }}>
                {about.title}
              </h2>
              <p className="p-text" style={{ marginTop: 10 }}>
                {about.description}
              </p>
            </motion.div>
          ))}
        </div>
        <div className="Aboutme">
          <p className="p-text2">
            Hi, I'm Prajwal Patil, a Computer Science graduate from KLE's Dr. M.
            S. Sheshgiri College of Engineering and Technology, Belagavi. With a
            strong foundation in MERN Stack development, web design, and machine
            learning, I’m passionate about creating innovative solutions to
            real-world challenges. Eager to continuously learn and grow, I’m
            driven to contribute to impactful projects in the tech industry.
          </p>
          <ul className="details-list">
            <li className="p-text1">
              <span style={{ fontWeight: "bold" }}>Profile:</span> Software
              Engineer, specializing in Front-end Development and Back-end
              Development
            </li>
            <li className="p-text1">
              <span style={{ fontWeight: "bold" }}>Domain:</span> Front-end
              Development, Back-end Development, UI/UX Designing
            </li>
            <li className="p-text1">
              <span style={{ fontWeight: "bold" }}>Education:</span> Bachelor of
              Engineering
            </li>
            <li className="p-text1">
              <span style={{ fontWeight: "bold" }}>Language:</span> English,
              Hindi, Kannada
            </li>
            <li className="p-text1">
              <span style={{ fontWeight: "bold" }}>Software Tools:</span> Visual
              Studio Code, Jupyter, & MongoDB Compass
            </li>
            <li className="p-text1">
              <span style={{ fontWeight: "bold" }}>Interest:</span> Logo
              Designing, Traveling, Travel Photography, Cooking
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
