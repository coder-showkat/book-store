import { faBars, faBookOpen, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggler = () => {
    setNavOpen(!navOpen);
  };
  return (
    <nav className="bg-gray-800 shadow-lg">
      <div className="container mx-auto p-4 flex justify-between items-center gap-x-6">
        {/* logo */}
        <Link to="/" className="flex items-center gap-x-2">
          <span className="text-xl text-[#ff9190]">
            <FontAwesomeIcon className="align-middle" icon={faBookOpen} />
          </span>
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-[#5e72eb] to-[#ff9190]">
            SAM
          </h2>
        </Link>

        {/* menu btn */}
        <button onClick={toggler} className="md:hidden text-2xl text-gray-300">
          <FontAwesomeIcon icon={faBars} />
        </button>

        {/* form medium and larger device */}
        <ul className="hidden md:flex gap-x-2 items-center text-gray-200">
          <li className="px-2 text-lg">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-[#ff9190] font-medium" : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li className="px-2 text-lg">
            <NavLink
              to="/store"
              className={({ isActive }) =>
                isActive ? "text-[#ff9190] font-medium" : ""
              }
            >
              Store
            </NavLink>
          </li>
          <li className="px-2 text-lg">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-[#ff9190] font-medium" : ""
              }
            >
              About
            </NavLink>
          </li>
        </ul>

        {/* for small device */}
        <ul
          className={`${
            navOpen ? "flex" : "hidden"
          } flex-col gap-y-2 absolute z-50 top-4 left-2 right-2 md:hidden bg-gray-900 border rounded-md text-gray-200 p-4`}
        >
          {/* close btn */}
          <button
            onClick={toggler}
            className="text-2xl absolute top-4 right-4 text-gray-200"
          >
            <FontAwesomeIcon icon={faClose} />
          </button>
          <li className="px-2 w-fit">
            <Link to="/" className="flex items-center gap-x-2">
              <span className="text-2xl text-[#ff9190] self-end mt-2">
                <ion-icon name="book"></ion-icon>
              </span>
              <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-[#5e72eb] to-[#ff9190]">
                SAM
              </h2>
            </Link>
          </li>
          <li className="px-2 text-lg hover:text-[#ff9e9d]">
            <NavLink
              onClick={() => setNavOpen(false)}
              to="/"
              className={({ isActive }) =>
                isActive ? "text-[#ff9190] font-medium" : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li className="px-2 text-lg hover:text-[#ff9e9d]">
            <NavLink
              onClick={() => setNavOpen(false)}
              to="/store"
              className={({ isActive }) =>
                isActive ? "text-[#ff9190] font-medium" : ""
              }
            >
              Store
            </NavLink>
          </li>
          <li className="px-2 text-lg hover:text-[#ff9e9d]">
            <NavLink
              onClick={() => setNavOpen(false)}
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-[#ff9190] font-medium" : ""
              }
            >
              About
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
