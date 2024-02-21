const Skills = ({ isDarkMode }) => {
  const skills = [
    "ExpressJS",
    "ReactJS",
    "Redux",
    "MySQL",
    "MongoDB",
    "Tailwind",
    "Bootstrap",
    "Javascript",
    "HTML",
    "CSS",
    "GIT",
    "Laravel",
    "CodeIgniter",
  ];
  return (
    <>
      <div className="p-4 rounded-md shadow-md shadow-[#C2B8FD] mb-4">
        <h2 className="text-xl font-bold mb-4">Skills</h2>
        <div className="flex flex-wrap">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`rounded-full px-1 py-0.5 mr-2 mb-2 text-xs animate-slide-right ${
                isDarkMode ? "bg-slate-800" : "bg-gray-200"
              }`}
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
