import React, { useState, useEffect } from "react";

import MovingIconsBackground from "./components/AnimatedIcons";

import Header from "./components/Header";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Learn from "./components/Learn";
import Skills from "./components/Skills";
import { projects } from "./data/projectsData";
import { course } from "./data/courseData";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const [activeTab, setActiveTab] = useState("projects");

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleWindowResize = () => {
    if (window.innerWidth <= 754) {
      setIsMobileView(true);
    } else {
      setIsMobileView(false);
    }
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div className={`app ${isDarkMode ? "dark" : "light"}`}>
      <MovingIconsBackground />
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

      {/* Main Content */}
      <div className="tabs grid gap-4 grid-cols-3">
        {/* Render tab buttons hanya saat di mode mobile */}
        {isMobileView && (
          <>
            <button
              className={activeTab === "projects" ? "active" : ""}
              onClick={() => handleTabChange("projects")}
            >
              My Work
            </button>
            <button
              className={activeTab === "skills" ? "active" : ""}
              onClick={() => handleTabChange("skills")}
            >
              Skills
            </button>
            <button
              className={activeTab === "learn" ? "active" : ""}
              onClick={() => handleTabChange("learn")}
            >
              Learning Experiences
            </button>
          </>
        )}
      </div>

      <div className="tab-content">
        {/* Render konten sesuai tab yang aktif */}
        {isMobileView ? (
          <div>
            {activeTab === "projects" && (
              <div className="grid gap-4 grid-cols-2 sm:grid-cols-1 m-4">
                {projects.map((item, index) => (
                  <Projects projects={item} key={index} />
                ))}
              </div>
            )}
            {activeTab === "skills" && (
              <div className="m-2 skills-md">
                <Skills />
              </div>
            )}
            {activeTab === "learn" && (
              <div className="rounded-md shadow-md shadow-rose-200 py-4 m-2">
                {course.map((course, index) => (
                  <Learn key={index} course={course} />
                ))}
              </div>
            )}
          </div>
        ) : (
          <div className="flex flex-wrap my-6">
            <div className="w-2/3 md:w-full md:px-2 z-10 px-5">
              <h1 className="text-2xl font-bold mx-3 my-3">My work</h1>
              <div className="grid gap-4 grid-cols-2 sm:grid-cols-1">
                {projects.map((item, index) => (
                  <Projects projects={item} key={index} />
                ))}
              </div>
            </div>
            <div className="w-1/3 md:w-full border-l border-rose-200 md:border-none px-4 z-10">
              <h1 className="text-2xl font-bold mx-3 my-3">Skills</h1>
              <Skills />
              <h1 className="text-2xl font-bold mx-3 my-3">
                Learning experiences
              </h1>
              <div className="rounded-md shadow-md shadow-rose-200 py-4">
                {course.map((course, index) => (
                  <Learn key={index} course={course} />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer></Footer>
    </div>
  );
}

export default App;
