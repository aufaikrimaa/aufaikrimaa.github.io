import dot from "../assets/img/dot.svg";
import noIcon from "../assets/img/noicon.png";
import noIconD from "../assets/img/noicondark.png";

const Learn = ({ course, isDarkMode }) => {
  const { image, track, date, name, content, link } = course;

  const handleClickLink = () => {
    window.open(link, "_blank");
  };

  return (
    <>
      <div className="px-4 flex mb-4 animate-slide-right">
        {image ? (
          <img
            src={image}
            className={`w-5 h-5 rounded-full mr-3 border-2 ${
              isDarkMode ? "border-slate-800" : "border-gray-200"
            }`}
          />
        ) : (
          <img
            src={isDarkMode ? noIconD : noIcon}
            className={`w-5 h-5 rounded-full mr-3 border-2 ${
              isDarkMode ? "border-slate-800" : "border-gray-200"
            }`}
          />
        )}
        <div>
          <p className="font-bold text-xs flex">
            {track}
            <img src={dot} alt="dot" className="h-0.5 m-1" />
            <span className="font-normal italic">{date}</span>
          </p>
          <p className="text-sm font-bold">{name}</p>
          <p className="text-xs">{content}</p>
          {link && (
            <p
              onClick={handleClickLink}
              className="text-xs cursor-pointer text-[#C2B8FD]"
            >
              see credentials &gt;&gt;
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default Learn;
