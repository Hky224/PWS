import "./App.css";
import React from "react";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./components/home/Home";
function App() {
  return (
    <>
      <Sidebar />
      <main className="main">
        <Home />
      </main>
    </>
  );
}

export default App;
