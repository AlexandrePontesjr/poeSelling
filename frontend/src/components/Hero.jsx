import { motion } from "framer-motion";
import { layout } from "../styles";
// import Items from "./Items";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import { Link } from "react-router-dom";
import {
  diabloIcon,
  itemsHero,
  lastEpocIcon,
  poeIcon,
  servicesImage,
} from "../assets";

const Hero = () => {
  return (
    <section
      id="home"
      className={`${layout.section2} h-[820px]`}
      style={{ position: "relative" }}
    >
      <div className="flex-col">
        <div className={`py-12 xl:px-0 sm:px-16 px-6 opacity-70`}>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className=" font-pirata flex-1 font-semibold ss:text-[72px] text-[52px] text-yellow-400 ss:leading-[100.8px] leading-[75px] hover:text-sky-200">
              Bem Vindo <br />
              <span className="text-sky-200 hover:text-yellow-400">
                Renewal Trade Shop
              </span>{" "}
              <br />
            </h1>
            <p className={`text-white text-[20px] mt-2 mb-24 text-pretty `}>
              Somos veteranos no ramo de vendas de jogos online, <br />
              oferecendo serviços e venda de items dos ARPGs mais jogados do
              mercado, <br />
              garantindo transações seguras e suporte dedicado.
            </p>
          </motion.div>
        </div>

        <div className="flex mt-20 gap-20 justify-center">
          <Box
            sx={{
              transition: "transform 0.3s",
              "&:hover": {
                transform: "scale(1.1)",
              },
            }}
          >
            <div className="relative inline-block group">
              <a href="#items">
                <img className="block " src={itemsHero} alt="" />
                <span className="absolute top-0 left-1 px-3 ml-2 text-yellow-500 font-pirata text-[28px] transition-opacity duration-300 opacity-100 group-hover:opacity-0">
                  Compre Items
                </span>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 flex items-center justify-center gold-gradient bg-opacity-50 text-yellow-500 font-pirata text-[36px] transition-opacity duration-300" />
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 flex items-center justify-center  bg-opacity-50 text-yellow-500 font-pirata text-[36px] transition-opacity duration-300">
                  Compre Items
                </span>
              </a>
            </div>
          </Box>
          <Box
            sx={{
              transition: "transform 0.3s",
              "&:hover": {
                transform: "scale(1.1)",
              },
            }}
          >
            <div className="relative inline-block group">
              <a href="#services">
                <img className="block " src={servicesImage} alt="" />
                <span className="absolute top-0 left-1 px-3 ml-2 text-yellow-500 font-pirata text-[28px] transition-opacity duration-300 opacity-100 group-hover:opacity-0">
                  Nossos Serviços
                </span>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 flex items-center justify-center gold-gradient bg-opacity-50 text-yellow-500 font-pirata text-[36px] transition-opacity duration-300" />
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 flex items-center justify-center  bg-opacity-50 text-yellow-500 font-pirata text-[36px] transition-opacity duration-300">
                  Nossos Serviços
                </span>
              </a>
            </div>
          </Box>
        </div>
      </div>
      <div className="ml-80 flex flex-col gap-16 -px-28 py-28 ">
        <Link to={"/diablo-4"} reloadDocument relative="path">
          <Button
            variant="solid"
            color=""
            size="lg"
            sx={{
              transition: "transform 0.3s",
              "&:hover": {
                transform: "scale(1.3)",
              },
            }}
          >
            <img className="h-24 mx-2" src={diabloIcon} alt="" />
          </Button>
        </Link>
        <Link to={"/path-of-exile"} reloadDocument relative="path">
          <Button
            variant="solid"
            color=""
            size="lg"
            sx={{
              transition: "transform 0.3s",
              "&:hover": {
                transform: "scale(1.3)",
              },
            }}
          >
            <img className="h-24 mx-2" src={poeIcon} alt="" />
          </Button>
        </Link>
        <Link to={"/last-epoch"} reloadDocument relative="path">
          <Button
            variant="solid"
            color=""
            size="lg"
            sx={{
              transition: "transform 0.3s",
              "&:hover": {
                transform: "scale(1.3)",
              },
            }}
          >
            <img className="h-24 mx-2" src={lastEpocIcon} alt="" />
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
