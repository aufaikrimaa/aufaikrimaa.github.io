import React, { useState } from "react";
import githubIcon from "../assets/img/github.svg";

function Projects({ projects, isDarkMode }) {
  const { title, photo, lang, desc, link, github } = projects;
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  const handleClickLink = () => {
    window.open(link, "_blank");
  };

  const handleClickGithub = () => {
    window.open(github, "_blank");
  };

  return (
    <div className="">
      <div
        className={`w-full rounded-lg z-10 cursor-pointer relative ${
          isDarkMode
            ? "bg-[#121929] hover:bg-[#171F33]"
            : "bg-white hover:bg-gray-100"
        }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClickLink}
      >
        <div className="px-4 py-1 md:px-4 mb-2">
          <img
            src={photo}
            alt={title}
            className={`w-6 h-auto mb-3 mt-2 rounded-full border-2 ${
              isDarkMode ? "border-slate-800" : "border-gray-200"
            }`}
          />
          <h1 className="text-lg sm:text-md font-bold mb-1">{title}</h1>
          <p className="text-sm mb-2">{desc}</p>
          <div className="flex flex-wrap">
            {lang.map((lang, index) => (
              <div
                key={index}
                className={`rounded-full px-1 mr-0.5 mb-3 text-[12px] ${
                  isDarkMode ? "bg-slate-800" : "bg-gray-200"
                }`}
              >
                {lang}
              </div>
            ))}
          </div>
          <div
            onClick={handleClickGithub}
            className="flex items-center justify-end"
          >
            <div className="flex cursor-pointer py-1 text-xs text-[#C2B8FD] transition-transform duration-300 ease-in-out hover:scale-105">
              <span>See documentation on GitHub</span>
              <img
                src={githubIcon}
                alt="GitHub Icon"
                className="h-3 w-auto ml-1"
              />
            </div>
          </div>
        </div>
        {showTooltip && (
          <div
            className={`absolute bg-${
              isDarkMode ? "[#121929]" : "white"
            } p-2 rounded-md text-[10px]`}
            style={{
              top: tooltipPosition.y - 20,
              right: tooltipPosition.x + 10,
              animation: "scaleIn 0.3s ease forwards",
            }}
          >
            Click this card to access {title} page !
          </div>
        )}
      </div>
    </div>
  );
}

export default Projects;
