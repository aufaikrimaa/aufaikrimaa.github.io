import border from "../assets/img/border.svg";
import dot from "../assets/img/dot.svg";

const Learn = ({ course }) => {
  const { image, track, date, name, content } = course;

  return (
    <>
      <div className="px-4 flex mb-2">
        <img src={image} className="w-5 h-5 rounded-full mr-3" />
        <div>
          <p className="font-bold text-xs flex">
            {track}
            <img src={dot} alt="dot" className="h-0.5 m-1" />
            <span className="font-normal">{date}</span>
          </p>
          <p className="text-sm font-bold">{name}</p>
          <p className="text-xs">{content}</p>
          <p className="text-xs cursor-pointer text-[#C2B8FD]">
            see credentials &gt;&gt;
          </p>
        </div>
      </div>
    </>
  );
};

export default Learn;
