import border from "../assets/img/border.svg";

const Learn = ({ testimonial }) => {
  const { uname, content, image } = testimonial;

  return (
    <>
      <div className="px-4 flex">
        <img src={border} className="h-16 pr-4" />
        <div>
          <p className="text-sm font-bold mb-1">{uname}</p>
          <p className="text-xs">{content}</p>
        </div>
      </div>
    </>
  );
};

export default Learn;
