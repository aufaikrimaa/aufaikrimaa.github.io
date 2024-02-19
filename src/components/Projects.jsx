function Showcase(props) {
  const { title, photo, price } = props.projects;

  return (
    <div className="w-full shadow-md shadow-rose-200 rounded-lg z-10">
      <div>
        <img
          src={photo}
          alt={title}
          className="w-full h-auto mb-4 sm:mb-1 rounded-md"
        />
      </div>
      <div className="px-4 py-1 sm:px-2 mb-2">
        <h1 className="text-xl sm:text-lg font-bold mb-2">{title}</h1>
        <p>{price}</p>
      </div>
    </div>
  );
}

export default Showcase;
