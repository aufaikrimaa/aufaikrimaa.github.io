import githubIcon from "../assets/img/github.svg";
import emailIcon from "../assets/img/email.svg";
import linkedinIcon from "../assets/img/linkedin.svg";
import resumeIcon from "../assets/img/resume.svg";

function Bio() {
  const dataBio = [
    {
      name: "aufaikrimah@gmail.com",
      img: emailIcon,
      link: "mailto:aufaikrimah@gmail.com",
    },
    {
      name: "github.com/aufaikrimaa",
      img: githubIcon,
      link: "https://github.com/aufaikrimaa",
    },
    {
      name: "aufaikrimah",
      img: linkedinIcon,
      link: "https://www.linkedin.com/in/aufa-ikrimah-rohmawati-a70b33230/",
    },
    {
      name: "my resume",
      img: resumeIcon,
      link: "https://drive.google.com/file/d/1S1x4LqugHLPkyUxgamr69SUnn6aQutfS/view?usp=drive_link",
    },
  ];

  const handleClick = (link) => {
    window.open(link, "_blank");
  };

  return (
    <>
      <div>
        <p className="text-sm leading-6">
          I enjoy creating new things, especially in web development and art.
          That's why I love both coding and painting. I greatly enjoy
          discovering new things in both of them. If you'd like to get in touch,
          <span> </span>
          <a
            href="mailto:aufaikrimah@gmail.com"
            target="_blank"
            className="text-[#C2B8FD]"
          >
            send me an email.
          </a>
        </p>
        <div className="flex flex-wrap mt-3">
          {dataBio.map((bio, index) => (
            <div
              onClick={() => handleClick(bio.link)}
              key={index}
              className="mr-4 flex text-sm text-[#C2B8FD] cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110"
            >
              <img src={bio.img} alt="icon" className="h-4 w-auto mr-1" />
              <span className="lg:hidden">{bio.name}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Bio;
