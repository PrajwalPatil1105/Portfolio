import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaDownload,
  FaLinkedin,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";
import "./Footer.scss";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="contact-section">
      <h2 className="title">Contact Me</h2>
      <p className="description">Below are the details to reach out to me!</p>
      <div className="contact-cards">
        <div className="contact-card">
          <div className="contact-icon">
            <FaMapMarkerAlt />
          </div>
          <h4 className="card-title">ADDRESS</h4>
          <p className="card-text">
            <a
              href="https://www.google.co.in/maps/place/Belagavi,+Karnataka/@15.8666975,74.4260387,26807m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3bbf669f5095362f:0x7e34b31edcdefb5f!8m2!3d15.8496953!4d74.4976741!16zL20vMDM1ejRw?entry=ttu&g_ep=EgoyMDI1MDEwOC4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="Links"
            >
              Belagavi, Karnataka, India
            </a>
          </p>
        </div>
        <div className="contact-card">
          <div className="contact-icon">
            <FaPhoneAlt />
          </div>
          <h4 className="card-title">CONTACT NUMBER</h4>
          <p className="card-text">
            <a className="Links" href="tel:+919482527646">
              +91 9482527646
            </a>
          </p>
        </div>
        <div className="contact-card">
          <div className="contact-icon">
            <FaEnvelope />
          </div>
          <h4 className="card-title">EMAIL ADDRESS</h4>
          <p className="card-text">
            <a
              className="Links"
              href="mailto:prajwalapatil555@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              prajwalapatil555@gmail.com
            </a>
          </p>
        </div>
        <div className="contact-card">
          <div className="contact-icon">
            <FaDownload />
          </div>
          <h4 className="card-title">DOWNLOAD RESUME</h4>
          <p className="card-text">
            <a
              href="https://drive.google.com/file/d/1tJT5dP9ERKFlIuD2TbitZzraRcUckItG/view?usp=sharing"
              target="_blank"
              className="Links"
              rel="noopener noreferrer"
            >
              Resume Link
            </a>
          </p>
        </div>
      </div>
      <div className="cta">
        <a
          href="https://forms.gle/GsTJm6i7QzuWkvDC9"
          className="question-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          Have a Question? Click Here
        </a>
        <div className="social-links">
          <a
            href="http://www.linkedin.com/in/theprajwal-patil"
            className="social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/PrajwalPatil1105"
            className="social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/prajwal_11_05?igsh=M2dyb245dWkxOG44"
            className="social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__primarybg"
);
