import { motion } from "framer-motion";
import style , { layout } from "../styles";
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

const Hero = ({game}) => {
  return (
    <section
      id="home"
      className={`${layout.section2}`}
      style={{ position: "relative" }}
    >
      <div className="flex-col">
        <div className={`py-20 xl:px-0 sm:px-16 px-6 opacity-70`}>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className={`${game.fontFamily} flex-1 font-semibold text-[38px] text-yellow-400 ss:leading-[100.8px] lg:leading-[75px] hover:text-sky-200`}>
              Bem Vindo <br />
              <span className="text-sky-100 hover:text-yellow-400">
                Renewal Trade Shop
              </span>{" "}
              <br />
            </h1>
            <p className={`${style.paragraphGame} ${game.fontFamily} `}>
              Somos veteranos no ramo de vendas de jogos online,
              oferecendo serviços e venda <br /> de items dos ARPGs mais jogados do<br />
              mercado, garantindo transações seguras e suporte dedicado.
            </p>
          </motion.div>
        </div>

        <div className="px-2 gap-2 flex lg:mt-[205px] lg:gap-20  lg:justify-center">
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
                <span className={`${game.fontFamily} font-bold absolute top-0 left-1 px-3 ml-2 text-yellow-500 text-[16px]  lg:text-[28px] transition-opacity duration-300 opacity-100 group-hover:opacity-0`}>
                  Compre Items
                </span>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 flex items-center justify-center gold-gradient bg-opacity-50 text-yellow-500  text-[36px] transition-opacity duration-300" />
                <span className={`${game.fontFamily} font-bold absolute inset-0 opacity-0 group-hover:opacity-100 flex items-center justify-center  bg-opacity-50 text-yellow-500 text-[26px]  lg:text-[36px] transition-opacity duration-300`}>
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
                <span className={`${game.fontFamily} font-bold absolute top-0 left-1 px-3 ml-2 text-yellow-500 transition-opacity duration-300 opacity-100 group-hover:opacity-0`}>
                  Nossos Serviços
                </span>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 flex items-center justify-center gold-gradient bg-opacity-50 text-yellow-500  transition-opacity duration-300" />
                <span className={`${game.fontFamily} font-bold absolute inset-0 opacity-0 group-hover:opacity-100 flex items-center justify-center  bg-opacity-50 text-yellow-500  transition-opacity duration-300`}>
                  Nossos Serviços
                </span>
              </a>
            </div>
          </Box>
        </div>
      </div>
      <div className="flex justify-between  lg:ml-80 lg:flex lg:flex-col lg:gap-16 lg:-px-28 lg:py-28 ">
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
