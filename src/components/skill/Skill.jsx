import React from "react";
import "./skill.css";
import Languages from "./Languages";
import Frameworks from "./Frameworks";
import Databases from "./Databases";
import Tools from "./Tools";

const Skill = () => {
  return (
    <section className="skills section container" id="skills">
      <h2 className="section__title">Professional Skillset</h2>
      <div className="skills__container container grid">
        <Languages />

        <Frameworks />
        <Databases />
        <Tools />
      </div>
    </section>
  );
};

export default Skill;
