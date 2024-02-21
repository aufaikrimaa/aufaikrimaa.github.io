import React, { useState, useEffect } from "react";

import Header from "./components/Header";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Learn from "./components/Learn";
import Skills from "./components/Skills";
import Bio from "./components/Bio";
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
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <div className="w-3/5 xl:w-4/5 md:w-full px-6 md:px-4">
        <Bio />
      </div>

      {/* Main Content */}
      {isMobileView && (
        <>
          <div className="tabs grid gap-4 grid-cols-3 mt-5 px-2">
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
              Course & Certification
            </button>
          </div>
        </>
      )}
      <div className="tab-content">
        {isMobileView ? (
          <div className="px-2">
            {activeTab === "projects" && (
              <div className="grid gap-0.5 grid-cols-2 sm:grid-cols-1 m-2">
                <div className="m-2">
                  <h1 className="text-xl font-bold ">My Work</h1>
                  <p className="text-xs">
                    Click any card to access the web page !
                  </p>
                </div>
                {projects.map((item, index) => (
                  <Projects
                    projects={item}
                    key={index}
                    isDarkMode={isDarkMode}
                  />
                ))}
              </div>
            )}
            {activeTab === "skills" && (
              <div className="m-2 skills-md">
                <Skills isDarkMode={isDarkMode} />
              </div>
            )}
            {activeTab === "learn" && (
              <div className="rounded-md shadow-md shadow-[#C2B8FD] py-4 m-2">
                <h1 className="text-xl font-bold mx-3 mb-5">
                  Course & Certification
                </h1>
                {course.map((course, index) => (
                  <Learn key={index} course={course} />
                ))}
              </div>
            )}
          </div>
        ) : (
          <div className="flex flex-wrap my-6 px-1">
            <div className="w-2/3 md:w-full md:px-2 z-10 px-5 pb-5 rounded-3xl">
              <h1 className="text-2xl font-bold mx-3 my-3">My work</h1>
              <div className="grid gap-4 grid-cols-2 sm:grid-cols-1">
                {projects.map((item, index) => (
                  <Projects
                    projects={item}
                    key={index}
                    isDarkMode={isDarkMode}
                  />
                ))}
              </div>
            </div>
            <div className="w-1/3 md:w-full px-4 z-10">
              <Skills isDarkMode={isDarkMode} />
              <div className="rounded-md shadow-md shadow-[#C2B8FD] py-4">
                <h2 className="text-xl font-bold mx-4 mb-4">
                  Course & Certification
                </h2>
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
