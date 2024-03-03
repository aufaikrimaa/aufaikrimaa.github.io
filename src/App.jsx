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
            <div
              className={`tabi ${activeTab === "projects" ? "active" : ""}`}
              onClick={() => handleTabChange("projects")}
            >
              <svg
                width="30"
                height="30"
                viewBox="0 0 92 92"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`icon ${
                  activeTab === "projects" ? "activeIcon" : ""
                }`}
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M34.8067 5.65897C27.0427 8.02061 20.1403 12.776 15.0011 19.304C9.86197 25.832 6.725 33.829 6 42.2505H24.3591C25.4235 29.4357 28.9765 16.9826 34.8009 5.65297L34.8067 5.65897ZM24.3591 49.75H6C6.72349 58.1718 9.85911 66.1696 14.9972 72.6987C20.1354 79.2277 27.0371 83.9845 34.8009 86.3475C28.9765 75.0179 25.4235 62.5648 24.3591 49.75ZM44.0034 87.9494C37.043 76.4151 32.778 63.3287 31.5536 49.75H60.4406C59.2163 63.3287 54.9513 76.4151 47.9908 87.9494C46.6625 88.0169 45.3318 88.0169 44.0034 87.9494ZM57.1991 86.3415C64.962 83.9789 71.8632 79.223 77.0012 72.6951C82.1393 66.1672 85.2754 58.1707 86 49.75H67.6409C66.5765 62.5648 63.0235 75.0179 57.1991 86.3475V86.3415ZM67.6409 42.2505H86C85.2765 33.8287 82.1409 25.8309 77.0027 19.3018C71.8646 12.7728 64.9629 8.01601 57.1991 5.65297C63.0236 16.9826 66.5767 29.4357 67.6409 42.2505ZM44.0034 4.05108C45.3337 3.98297 46.6663 3.98297 47.9966 4.05108C54.955 15.586 59.218 28.6723 60.4406 42.2505H31.5594C32.8044 28.5894 37.0786 15.4923 44.0034 4.05108Z"
                  fill="#ADAFB4"
                />
              </svg>
            </div>
            <div
              className={`tabi ${activeTab === "skills" ? "active" : ""}`}
              onClick={() => handleTabChange("skills")}
            >
              <svg
                width="36"
                height="30"
                viewBox="0 0 98 92"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`icon ${activeTab === "skills" ? "activeIcon" : ""}`}
              >
                <g clipPath="url(#clip0_77_34)">
                  <path
                    d="M60.4187 5.24839C61.246 5.48016 62.0196 5.87291 62.6952 6.40419C63.3708 6.93547 63.9353 7.59486 64.3563 8.34468C64.7773 9.0945 65.0465 9.92004 65.1487 10.7741C65.2509 11.6282 65.1839 12.4941 64.9517 13.3222L45.6384 82.2203C45.1702 83.8922 44.0578 85.3095 42.546 86.1603C41.0342 87.0111 39.2468 87.2257 37.577 86.7569C35.9072 86.2881 34.4917 85.1744 33.642 83.6606C32.7923 82.1469 32.578 80.3572 33.0461 78.6853L52.3595 9.77846C52.5914 8.95049 52.984 8.17638 53.5148 7.50036C54.0456 6.82434 54.7042 6.25966 55.453 5.83857C56.2018 5.41748 57.0262 5.14824 57.8789 5.04623C58.7317 4.94421 59.5962 5.01143 60.423 5.24403L60.4187 5.24839ZM29.6464 22.8581C30.8707 24.0855 31.5584 25.7493 31.5584 27.4841C31.5584 29.2189 30.8707 30.8828 29.6464 32.1102L15.7858 46.0016L29.6551 59.8885C30.881 61.1166 31.5695 62.782 31.5691 64.5183C31.5687 66.2547 30.8794 67.9197 29.6529 69.1472C28.4264 70.3747 26.7631 71.0641 25.029 71.0637C23.2948 71.0633 21.6319 70.3731 20.406 69.145L1.91207 50.6276C0.687709 49.4002 0 47.7363 0 46.0016C0 44.2668 0.687709 42.6029 1.91207 41.3755L20.4016 22.8581C21.0088 22.2497 21.7297 21.7671 22.5232 21.4379C23.3167 21.1087 24.1672 20.9392 25.0262 20.9392C25.8851 20.9392 26.7356 21.1087 27.5291 21.4379C28.3226 21.7671 29.0392 22.2497 29.6464 22.8581ZM68.3515 32.1102C67.7091 31.5109 67.1939 30.7882 66.8365 29.9852C66.4792 29.1822 66.2871 28.3153 66.2716 27.4363C66.2561 26.5573 66.4176 25.6842 66.7464 24.8691C67.0752 24.054 67.5647 23.3135 68.1855 22.6919C68.8063 22.0702 69.5459 21.5802 70.36 21.2509C71.1741 20.9217 72.046 20.76 72.9239 20.7755C73.8018 20.791 74.6675 20.9834 75.4695 21.3412C76.2715 21.699 76.9933 22.2149 77.5919 22.8581L96.0858 41.3711C97.3114 42.5987 98 44.2635 98 45.9994C98 47.7352 97.3114 49.4 96.0858 50.6276L77.5962 69.145C76.9892 69.7531 76.2685 70.2355 75.4753 70.5647C74.6821 70.8939 73.8319 71.0635 72.9732 71.0637C72.1145 71.0639 71.2643 70.8947 70.4709 70.5659C69.6775 70.2371 68.9566 69.755 68.3493 69.1472C67.742 68.5394 67.2602 67.8178 66.9314 67.0236C66.6026 66.2294 66.4333 65.3781 66.4331 64.5183C66.4329 63.6586 66.6018 62.8072 66.9302 62.0128C67.2586 61.2184 67.7401 60.4966 68.3471 59.8885L82.2164 46.0016L68.3515 32.1102Z"
                    fill="#ADAFB4"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_77_34">
                    <rect width="98" height="92" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div
              className={`tabi ${activeTab === "learn" ? "active" : ""}`}
              onClick={() => handleTabChange("learn")}
            >
              <svg
                width="36"
                height="30"
                viewBox="0 0 98 92"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`icon ${activeTab === "learn" ? "activeIcon" : ""}`}
              >
                <path
                  d="M90.9995 25.3756V10.9998C90.9995 9.14333 90.262 7.36291 88.9492 6.05019C87.6365 4.73748 85.856 4 83.9995 4H6.99996C5.14346 4 3.36299 4.73748 2.05024 6.05019C0.737493 7.36291 0 9.14333 0 10.9998V66.9981C0 68.8546 0.737493 70.635 2.05024 71.9477C3.36299 73.2604 5.14346 73.9979 6.99996 73.9979H55.9997V84.4976C55.9993 85.0945 56.1515 85.6816 56.4419 86.203C56.7324 86.7245 57.1513 87.163 57.659 87.4769C58.1667 87.7908 58.7463 87.9697 59.3426 87.9965C59.9389 88.0233 60.5321 87.8971 61.0659 87.63L73.4996 81.4089L85.9333 87.63C86.4671 87.8971 87.0603 88.0233 87.6566 87.9965C88.2529 87.9697 88.8325 87.7908 89.3402 87.4769C89.8478 87.163 90.2668 86.7245 90.5572 86.203C90.8477 85.6816 90.9999 85.0945 90.9995 84.4976V59.6221C95.4863 55.0519 98 48.9033 98 42.4988C98 36.0944 95.4863 29.9458 90.9995 25.3756ZM45.4997 49.4986H20.9999C20.0716 49.4986 19.1814 49.1299 18.525 48.4735C17.8686 47.8172 17.4999 46.927 17.4999 45.9987C17.4999 45.0705 17.8686 44.1803 18.525 43.5239C19.1814 42.8676 20.0716 42.4988 20.9999 42.4988H45.4997C46.428 42.4988 47.3182 42.8676 47.9746 43.5239C48.631 44.1803 48.9997 45.0705 48.9997 45.9987C48.9997 46.927 48.631 47.8172 47.9746 48.4735C47.3182 49.1299 46.428 49.4986 45.4997 49.4986ZM45.4997 35.4991H20.9999C20.0716 35.4991 19.1814 35.1303 18.525 34.474C17.8686 33.8176 17.4999 32.9274 17.4999 31.9992C17.4999 31.0709 17.8686 30.1807 18.525 29.5244C19.1814 28.868 20.0716 28.4993 20.9999 28.4993H45.4997C46.428 28.4993 47.3182 28.868 47.9746 29.5244C48.631 30.1807 48.9997 31.0709 48.9997 31.9992C48.9997 32.9274 48.631 33.8176 47.9746 34.474C47.3182 35.1303 46.428 35.4991 45.4997 35.4991ZM83.9995 78.8365L75.0658 74.3654C74.5796 74.1221 74.0433 73.9954 73.4996 73.9954C72.9559 73.9954 72.4196 74.1221 71.9333 74.3654L62.9996 78.8365V64.6313C66.2806 66.1896 69.8673 66.9981 73.4996 66.9981C77.1318 66.9981 80.7186 66.1896 83.9995 64.6313V78.8365ZM73.4996 59.9983C70.0384 59.9983 66.655 58.972 63.7772 57.0491C60.8993 55.1263 58.6563 52.3932 57.3318 49.1956C56.0073 45.998 55.6607 42.4794 56.3359 39.0849C57.0112 35.6903 58.6779 32.5722 61.1253 30.1249C63.5727 27.6775 66.6909 26.0108 70.0855 25.3356C73.4802 24.6604 76.9988 25.0069 80.1965 26.3314C83.3942 27.6559 86.1273 29.8989 88.0502 32.7767C89.9731 35.6544 90.9995 39.0378 90.9995 42.4988C90.9995 47.14 89.1558 51.5911 85.8739 54.8728C82.592 58.1546 78.1409 59.9983 73.4996 59.9983Z"
                  fill="#ADAFB4"
                />
              </svg>
            </div>
          </div>
          <hr className="tab-divider mx-2" id="active-tab-line" />
        </>
      )}
      <div className="tab-content">
        {isMobileView ? (
          <div className="px-2">
            {activeTab === "projects" && (
              <div className="grid gap-0.5 grid-cols-2 sm:grid-cols-1 m-2 animate-slide-right">
                <div className="m-2 animate-slide-right">
                  <h1 className="text-xl font-bold">My Work</h1>
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
              <div className="m-2 skills-md animate-slide-right">
                <Skills isDarkMode={isDarkMode} />
              </div>
            )}
            {activeTab === "learn" && (
              <div className="rounded-md shadow-md shadow-[#C2B8FD] py-4 m-2 animate-slide-right">
                <h1 className="text-xl font-bold mx-3 mb-5">
                  Course & Certification
                </h1>
                {course.map((course, index) => (
                  <Learn key={index} course={course} isDarkMode={isDarkMode} />
                ))}
              </div>
            )}
          </div>
        ) : (
          <div className="flex flex-wrap mb-6 mt-3 px-1">
            <div className="w-2/3 md:w-full md:px-2 z-10 px-5 pb-5 rounded-3xl animate-slide-left">
              <h1 className="text-2xl font-bold mx-3 my-3 animate-slide-left">
                My work
              </h1>
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
            <div className="w-1/3 md:w-full px-4 z-10 animate-slide-right">
              <Skills isDarkMode={isDarkMode} />
              <div className="rounded-md shadow-md shadow-[#C2B8FD] py-4 animate-slide-right">
                <h2 className="text-xl font-bold mx-4 mb-4">
                  Course & Certification
                </h2>
                {course.map((course, index) => (
                  <Learn key={index} course={course} isDarkMode={isDarkMode} />
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
