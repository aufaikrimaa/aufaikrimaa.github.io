const Skills = () => {
  const skills = [
    "ExpressJS",
    "ReactJS",
    "Redux",
    "MySQL",
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
      <div className="p-4 rounded-md shadow-md shadow-rose-200 mb-4">
        {/* <h2 className="text-xl font-bold mb-2">Skills</h2> */}
        <div className="flex flex-wrap">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-200 rounded-full px-3 py-1 mr-2 mb-2 text-sm"
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
