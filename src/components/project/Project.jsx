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
      title: "Online shop",
      img: IMG1,
      description:
        "A online beauty shopping website with recommendations and AI dialogue functions to meet users’ needs for product selection",
      technologies: "React | Node | Express | MongoDB | Bootstrap",
      link: "https://www.google.com.hk/",
      github: "https://www.google.com.hk/",
    },
    {
      id: 2,
      title: "Driver behavior analysis",
      img: IMG2,
      description:
        "A web for Summarizing user driving behavior from a large dataset by creating a dashboard to visualize the data, and monitoring the driving speed of driver in real time",

      technologies: "Python | MySQL | Spark | AWS s3, RDS, Elastic Beanstalk",
      link: "https://www.google.com.hk/",
      github: "https://www.google.com.hk/",
    },
    {
      id: 3,
      title: "Secure educational game",
      img: IMG3,
      description:
        "An educational game supporting multiplayer, online chat rooms, and security measures",
      technologies: "C# | Unity | AES encryption | Firebase ",
      link: "https://www.google.com.hk/",
      github: "https://www.google.com.hk/",
    },
    {
      id: 4,
      title: "Student performance on GitHub evaluation web",
      img: IMG4,
      description:
        " Use of dashboards and statistics to provide comprehensive insights to instructors by analyzing student's commits, issues, and pull requests on GitHub",
      technologies: "HTML | CSS | JavaScript | GenAI",
      link: "https://www.google.com.hk/",
      github: "https://www.google.com.hk/",
    },
    {
      id: 5,
      title: "Animal Chess Game (Dou Shou Qi)",
      img: IMG5,
      description: "A coommand line game of Dou Shou Qi",
      technologies: "Java | MVC pattern | JUnit",
      link: "https://www.google.com.hk/",
      github: "https://www.google.com.hk/",
    },
    {
      id: 6,
      title: "VR News website",
      img: IMG6,
      description:
        "a static website for introducing VR advatages and disadvantages, and its application.",
      technologies: "HTML | CSS",
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
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
