import React from "react";
import "./project.css";
import IMG1 from "../../assets/shop.png";
import IMG2 from "../../assets/driving.png";
import IMG3 from "../../assets/game.png";
import IMG4 from "../../assets/githuncontribute.png";
import IMG5 from "../../assets/Dou-Shou-Qi.png";
import IMG6 from "../../assets/vr.png";
const Project = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Test",
      img: IMG1,
      description: "Test",
      technologies: "Ruby on Rails | SCSS",
      link: "https://www.google.com.hk/",
      github: "https://www.google.com.hk/",
    },
    {
      id: 2,
      title: "Test",
      img: IMG2,
      description: "Test",
      technologies: "Ruby on Rails | SCSS",
      link: "https://www.google.com.hk/",
      github: "https://www.google.com.hk/",
    },
    {
      id: 3,
      title: "Test",
      img: IMG3,
      description: "Test",
      technologies: "Ruby on Rails | SCSS",
      link: "https://www.google.com.hk/",
      github: "https://www.google.com.hk/",
    },
    {
      id: 4,
      title: "Test",
      img: IMG4,
      description: "Test",
      technologies: "Ruby on Rails | SCSS",
      link: "https://www.google.com.hk/",
      github: "https://www.google.com.hk/",
    },
    {
      id: 5,
      title: "Test",
      img: IMG5,
      description: "Test",
      technologies: "Ruby on Rails | SCSS",
      link: "https://www.google.com.hk/",
      github: "https://www.google.com.hk/",
    },
    {
      id: 6,
      title: "Test",
      img: IMG6,
      description: "Test",
      technologies: "Ruby on Rails | SCSS",
      link: "https://www.google.com.hk/",
      github: "https://www.google.com.hk/",
    },
  ];
  return (
    <section className="section container" id="projects">
      <h2 className="section__title">Projects</h2>
      <div className="projects__container container grid">
        {soloProjects.map((pro) => (
          <div className="projects__content">
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                Visit Website
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
