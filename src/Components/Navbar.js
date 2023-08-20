import  { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import {Link} from "react-scroll"
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const link = [
    {
      id: 1,
      link: "Home",
    },
    {
      id: 2,
      link: "About",
    },
   
    {
      id: 3,
      link: "Experience",
    },
    {
      id: 4,
      link: "Contact",
    },
  ];
  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed">
   
      <div>
        <h1 className="text-5xl font-bold font-signeture ml-3">AshuLab</h1>
      </div>

      <ul className="hidden md:flex"> 
          {link.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize font-medium text-grey-500 hover:scale-103 duration-200"
            >
              <Link to={link} smooth duration={500}>{link}</Link>
            </li>))}</ul>
      <div
        onClick={() => setToggle(!toggle)}
        className="cursor-pointer pr-4 z-10 text-grey-500 md:hidden"
      >
        {toggle ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>
      {toggle && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {link.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              {link}
            </li>
          ))}
        </ul>
      )}

   
    </div>
    
  );
};

export default Navbar;
