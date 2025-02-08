import React from "react";
import "./skill.css";
import Languages from "./Languages";
import Frameworks from "./Frameworks";

const Skill = () => {
  return (
    <section className="skills section container" id="skills">
      <h2 className="section__title">Professional Skillset</h2>
      <div className="skills__container container grid">
        <Languages />

        <Frameworks />
        <div className="skills__content">
          <h3 className="skills__title">Databases</h3>
        </div>
        <div className="skills__content">
          <h3 className="skills__title">Tools</h3>
        </div>
      </div>
    </section>
  );
};

export default Skill;
