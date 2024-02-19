import border from "../assets/img/border.svg";
import dot from "../assets/img/dot.svg";

const Learn = ({ course }) => {
  const { track, date, name, content } = course;

  return (
    <>
      <div className="px-4 flex">
        <img src={border} className="h-16 pr-4" />
        <div>
          <p className="font-bold text-xs flex">
            {track}
            <img src={dot} alt="dot" className="h-0.5 m-1" />
            <span className="font-normal">{date}</span>
          </p>
          <p className="text-sm font-bold">{name}</p>
          <p className="text-xs">{content}</p>
          <p className="text-xs cursor-pointer text-blue-600">
            see credentials &gt;&gt;
          </p>
        </div>
      </div>
    </>
  );
};

export default Learn;
