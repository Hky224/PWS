import React from "react";
import "./home.css";
import ContactIcon from "./ContactIcon";
import CV from "../../assets/CV.pdf";

const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <div className="home__img"></div>
        <h1 className="home__name">Ho Kwan Yin Eric</h1>
        <div className="home__contact">
          <span className="home__education">Email: soube009@gmail.com</span>
          <span className="home__education">Phone: +852 60911090</span>
        </div>
        <ContactIcon />
        <a href="#contact" className="btn btn-margin-right">
          Contact Me
        </a>
        <a download="CV.pdf" href={CV} className="btn btn-margin-right">
          Download CV <i class="uil uil-file-download-alt"></i>
        </a>
      </div>
    </section>
  );
};

export default Home;
