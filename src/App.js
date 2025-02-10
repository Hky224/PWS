import "./App.css";
import React from "react";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./components/home/Home";
import AboutMe from "./components/aboutMe/AboutMe";
import Skill from "./components/skill/Skill";
import Project from "./components/project/Project";

function App() {
  return (
    <>
      <Sidebar />
      <main className="main">
        <Home />
        <AboutMe />
        <Skill />
        <Project />
      </main>
    </>
  );
}

export default App;
