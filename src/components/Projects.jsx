function Projects({ projects, isDarkMode }) {
  const { title, photo, lang, desc, link, github } = projects;

  return (
    <div
      className={`w-full rounded-lg z-10 ${
        isDarkMode
          ? "bg-[#121929] hover:bg-slate-800"
          : "bg-white hover:bg-gray-200"
      }`}
    >
      <div className="px-4 py-1 sm:px-2 mb-2">
        <img
          src={photo}
          alt={title}
          className="w-6 h-auto mb-3 mt-2 rounded-full"
        />
        <h1 className="text-lg sm:text-md font-bold mb-2">{title}</h1>
        <p className="text-sm">{desc}</p>
        <p className="text-sm">{lang}</p>
        <p className="text-sm">see code on github</p>
      </div>
    </div>
  );
}

export default Projects;
