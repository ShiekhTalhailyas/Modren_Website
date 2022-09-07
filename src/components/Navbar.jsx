import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="flex flex-1 items-center justify-between py-6 w-full navbar">
      <a href="#home">
        {" "}
        <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" />
      </a>

      <ul className=" md:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] 
            ${active === nav.title ? "text-white" : "text-blue-300"} ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            }`}
          >
            <a href={`#${nav.id}`} onClick={() => setActive(nav.title)}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>

      <div className="md:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          className="w-[22px] h-[22px] object-contain"
          onClick={() => setToggle(!toggle)}
        />
      </div>

      <div
        className={`${
          toggle ? "flex-col " : "hidden"
        } flex items-center justify-end bg-black absolute top-14 pt-1 px-2 right-0 rounded-xl sidebar`}
      >
        <ul className="">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title
                  ? " bg-black-gradient rounded-sm text-white"
                  : "text-blue-300"
              } ${index === navLinks.index - 1 ? "mb-0" : "mb-2"} text-sm p-1`}
              onClick={() => setActive(nav.title)}
            >
              {" "}
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
