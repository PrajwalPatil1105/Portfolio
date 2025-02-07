import React from "react";
import { BsInstagram, BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://github.com/PrajwalPatil1105" target="_blank">
        <BsGithub />
      </a>
    </div>
    <div>
      <a href="http://www.linkedin.com/in/theprajwal-patil" target="_blank">
        <FaLinkedin />
      </a>
    </div>
    <div>
      <a
        href="https://www.instagram.com/prajwal_11_05?igsh=M2dyb245dWkxOG44"
        target="_blank"
      >
        <BsInstagram />
      </a>
    </div>
  </div>
);

export default SocialMedia;
