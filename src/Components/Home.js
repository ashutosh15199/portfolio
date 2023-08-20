import ME from "../assets/img/image.jpeg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-gray-800 to-black text-white "
    >
      <div className="max-w-screen-lg mx-auto flex flex-col item-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">I'm a Full Stack Developer</h2>
          <p className="text-gray-500 py-5 max-w-md">
            I have 2 years of experience of building and designing front-End
            software, Currently, I am learning NodeJs and MongoDB for Back-End.
          </p>
       
        <div>
        <button type="btn" className="group text-white w-fit px-6 py-3 my-3 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer ">
          portfolio
          <span className="group-hover:rotate-90 duration-300">
            <MdOutlineKeyboardArrowRight size={25} />
          </span>
        </button>
        </div>
        </div>
        <div>
        <img src={ME} alt="" className="w-[600px] mt-[10rem] rounded-2xl"/>
      </div>
      </div>
     
    </div>
  );
};

export default Home;
