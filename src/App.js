import "./App.css";
import React from "react";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./components/home/Home";
import AboutMe from "./components/aboutMe/AboutMe";
function App() {
  return (
    <>
      <Sidebar />
      <main className="main">
        <Home />
        <AboutMe />
      </main>
    </>
  );
}

export default App;
