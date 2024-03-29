import React from "react";
import profilephoto from "../assets/img/aupa.png";
import sun from "../assets/img/light.svg";
import moon from "../assets/img/dark.svg";
import iconsDark from "../assets/img/icons-header-dark.svg";
import iconsLight from "../assets/img/icons-header-light.svg";

function Header({ isDarkMode, toggleDarkMode }) {
  return (
    <>
      <div
        className={
          "relative h-20 md:h-16 mb-10 transition-all duration-300 z-1 bg-[#C2B8FD]"
        }
      >
        <div
          onClick={toggleDarkMode}
          className={`absolute z-10 p-0.5 flex justify-end top-2 right-2 rounded-full cursor-pointer ${
            isDarkMode ? "bg-zinc-900" : "bg-white"
          }`}
        >
          {isDarkMode ? (
            <img src={moon} className="w-5 h-5" />
          ) : (
            <img src={sun} className="w-5 h-5" />
          )}
        </div>
        <div className="absolute flex justify-end right-2 p-1 md:p-0.5">
          {isDarkMode ? (
            <img src={iconsDark} className="h-30" />
          ) : (
            <img src={iconsLight} />
          )}
        </div>
        <img
          src={profilephoto}
          alt="Profile"
          className={`absolute z-10 left-8 md:left-4 h-18 md:h-16 w-auto rounded-full overflow-hidden mt-12 md:mt-8 border-4 ${
            isDarkMode ? "border-zinc-900" : "border-white"
          }`}
        />
        <div className="absolute ml-18 md:ml-8 pl-10 z-10 mt-14 md:mt-8">
          <h1 className="text-3xl md:text-2xl font-bold mt-7">Aufa Ikrimah</h1>
        </div>
      </div>
    </>
  );
}

export default Header;
