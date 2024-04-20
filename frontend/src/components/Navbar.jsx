import { useState } from "react";
import Button from "@mui/joy/Button";
import { Link } from "react-router-dom";
import { close, logo, menu } from "../assets";
import { navLinks, GameDetails } from "../constants";
import { GameIcon } from "../components";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  const isHomeSection = location.pathname == "/" ? true : false;

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="renew" className="w-[150px] h-[90px] ml-8" />
      {/*GAME 1 PATH OF EXILE, 2 DIABLO, 3 LAST EPOCH*/}
      {!isHomeSection && (
        <div className="w-full flex justify-center">
          {Object.entries(GameDetails).map((gameInfo, index) => (
            <Link key={index} to={gameInfo.path} relative="path">
              <Button
                variant="plain"
                color=""
                size=""
                sx={{
                  transition: "transform 0.3s",
                  "&:hover": {
                    transform: "scale(1.3)",
                  },
                }}
              >
                <GameIcon game={gameInfo} />
              </Button>
            </Link>
          ))}
        </div>
      )}

      <ul className="list-none sm:flex hidden justify-end items-center flex-1 mr-16">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-pirata font-normal cursor-pointer text-[30px] hover:text-yellow-400 ${
              active === nav.title ? "text-white" : "text-dimWhite"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-pirata font-medium cursor-pointer text-[22px] ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
