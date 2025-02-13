import "./App.css";
import React from "react";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./components/home/Home";
import AboutMe from "./components/aboutMe/AboutMe";
import Skill from "./components/skill/Skill";
import Project from "./components/project/Project";
import Footer from "./components/footer/Footer";
import Contact from "./components/contact/Contact";
function App() {
  return (
    <>
      <Sidebar />
      <main className="main">
        <Home />
        <AboutMe />
        <Skill />
        <Project />

        <Footer />
      </main>
    </>
  );
}

export default App;
