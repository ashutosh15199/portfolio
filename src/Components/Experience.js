import Java from "../assets/img/Java.jpg";
import unnamed from "../assets/img/unnamed.png";
import Tailwind from "../assets/img/TailwindWeather.jpeg";
import SQL from "../assets/img/SQLWeather.avif";
import Reacty from "../assets/img/ReactWeather.jpeg";
import Redux from "../assets/img/ReduxWeather.jpeg";
import HTML from "../assets/img/HTMLWeather.png";
import JavaScript from "../assets/img/JavaScriptWeather.png";

const Experience = () => {
  const portfolio = [
    {
      id: 1,
      src: Java,
    },
    {
      id: 2,
      src: HTML,
    },
    {
      id: 3,
      src: unnamed,
    },
    {
      id: 4,
      src: JavaScript,
    },
    {
      id: 5,
      src: Tailwind,
    },
    {
      id: 6,
      src: Reacty,
    },
    {
      id: 7,
      src: Redux,
    },
    {
      id: 8,
      src: SQL,
    },
  ];
  return (
    <div
      name="portfolio"
      className="mt-[-300px] bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-1 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold border-b-4 flex justify-center items-center border-gray-500">
            Experience
          </p>
          <p className="py-6 flex font-bold justify-center items-center">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-8">
          {portfolio.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-gray-1000 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
