import "./App.css";
import React from "react";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./components/home/Home";
import AboutMe from "./components/aboutMe/AboutMe";
import Skill from "./components/skill/Skill";
function App() {
  return (
    <>
      <Sidebar />
      <main className="main">
        <Home />
        <AboutMe />
        <Skill />
      </main>
    </>
  );
}

export default App;
