import { motion } from "framer-motion";
import style , { layout } from "../styles";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import { Link } from "react-router-dom";
import { GameDetails } from "../constants";
import {
  currencys,
  whatsapp,
  pix,
  mercadoIcone
} from "../assets";

const Hero = ({game}) => {
  return (
    <section
      id="home"
      className={`${layout.section2}`}
      style={{ position: "relative" }}
    >
      <div className="flex-col  md:w-[1450px]" style={{ textShadow: '0 0 10px black' }}>
        <div className={`py-14 lg:py-16 xl:px-0 sm:px-16 px-6`}>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className={`${game.fontFamily} flex-1 font-semibold sm:text-[58px] lg:text-[65px] text-[32px]  text-yellow-400 ss:leading-[100.8px] lg:leading-[75px] hover:text-sky-200`}>
              Bem Vindo <br />
              <span className="text-sky-100 hover:text-yellow-400">
                Realm Exchange coins
              </span>{" "}
              <br />

            </h1>
            <p className={`${style.paragraphGame} ${game.fontFamily} mt-2 `}>
              Somos veteranos no ramo de vendas de jogos online,
              oferecendo serviços e venda <br /> de items dos ARPGs mais jogados do<br />
              mercado, garantindo transações seguras e suporte dedicado.
            </p>
            <div className={`${game.fontFamily} font-semibold mt-16 text-center text-[28px] sm:text-[58px]`}>
              <span className="  text-sky-100 hover:text-yellow-400">
                  {game.tituloTemporada}
                </span>{" "}
                <br />
            </div>
          </motion.div>
        </div>
        {/* <div className="flex place-content-center md:place-content-center">
        <Button
            variant="solid"
            color=""
            size="lg"
            sx={{
              transition: "transform 0.3s",
              "&:hover": {
                transform: "scale(1.07)",
              },
            }}
          >
            <img className="h-12 md:h-32" src={whatsappBt} alt="" />
          </Button>
      </div> */}
        <div className=" lg:py-0 justify-center  flex lg:flex-col-1 gap-6 px-5 lg:px-2 lg:flex lg:gap-20  lg:justify-start">
          <Box
            sx={{
              transition: "transform 0.3s",
              "&:hover": {
                transform: "scale(1.03)",
              },
            }}
          >
            <div className="relative inline-block group">
              <a href="#items">
              <img style={{ maxHeight: 160 }} className="mt-14 transition-opacity duration-300 opacity-100 group-hover:opacity-0" src={currencys} alt="" />
              <img style={{ maxHeight: 160 }} className="top-14 absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300" src={currencys} alt="" />
                <div className={` ${game.fontFamily} flex-col font-bold absolute inset-0 flex items-center justify-center bg-opacity-50 text-yellow-500 text-[16px]  sm:text-[36px] transition-opacity duration-300 opacity-100 group-hover:opacity-0`}>
                  <span className="mt-8 md:mt-0">
                    Compre currency
                  </span>
                  <div className="gap-1 sm:w-full mt-1 sm:mt-5 ml-4  md:ml-11 flex sm:justify-center sm:gap-10 opacity-100 group-hover:opacity-100">
                    <img className="max-h-5 sm:max-h-10" src={pix} alt="" />
                    <img className="max-h-5 sm:max-h-10" src={mercadoIcone} alt="" />
                    <img className="max-h-5 sm:max-h-10" src={whatsapp} alt="" />
                  </div>
                </div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 flex items-center justify-center gold-gradient bg-opacity-50 text-yellow-500  transition-opacity duration-300" />
                <div className={`${game.fontFamily} flex-col font-bold absolute inset-0 opacity-0 group-hover:opacity-100 flex items-center justify-center bg-opacity-50 text-yellow-500 text-[16px]  sm:text-[36px] transition-opacity duration-300`}>
                <span className="mt-8 md:mt-0">
                    Compre currency
                  </span>
                  <div className="gap-1 sm:w-full mt-1 sm:mt-5 ml-4  md:ml-11 flex sm:justify-center sm:gap-10 opacity-100 group-hover:opacity-100">
                    <img className="max-h-5 sm:max-h-10" src={pix} alt="" />
                    <img className="max-h-5 sm:max-h-10" src={mercadoIcone} alt="" />
                    <img className="max-h-5 sm:max-h-10" src={whatsapp} alt="" />
                  </div>
                </div>
              </a>
            </div>
          </Box>
          <Box
            sx={{
              transition: "transform 0.3s",
              "&:hover": {
                transform: "scale(1.03)",
              },
            }}
          >
            <div className="relative inline-block group">
              <a href="#services">
              <img style={{ maxHeight: 160 }} className=" mt-14 transition-opacity duration-300 opacity-100 group-hover:opacity-0" src={currencys} alt="" />
              <img style={{ maxHeight: 160 }} className=" top-14 absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300" src={currencys} alt="" />
                <div className={` ${game.fontFamily} flex-col font-bold absolute inset-0 flex items-center justify-center bg-opacity-50 text-yellow-500 text-[18px]  sm:text-[36px] transition-opacity duration-300 opacity-100 group-hover:opacity-0`}>
                  <span>
                  Nossos Serviços
                  </span>
                  <div className="lg:w-full flex ml-4  md:ml-11  sm:w-full sm:justify-center sm:gap-10 opacity-100 group-hover:opacity-100">
                    <img className="max-h-8 sm:max-h-10" src={pix} alt="" />
                    <img className="max-h-8 sm:max-h-10" src={mercadoIcone} alt="" />
                    <img className="max-h-8 sm:max-h-10" src={whatsapp} alt="" />
                  </div>
                </div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 flex items-center justify-center gold-gradient bg-opacity-50 text-yellow-500  transition-opacity duration-300" />
                <div className={`${game.fontFamily} flex-col font-bold absolute inset-0 opacity-0 group-hover:opacity-100 flex items-center justify-center bg-opacity-50 text-yellow-500 text-[18px]  sm:text-[36px] transition-opacity duration-300`}>
                  <span>
                    Nossos Serviços
                  </span>
                  <div className="lg:w-full flex ml-4  md:ml-11 sm:w-full sm:justify-center sm:gap-10 opacity-100 group-hover:opacity-100">
                    <img className="max-h-8 sm:max-h-10" src={pix} alt="" />
                    <img className="max-h-8 sm:max-h-10" src={mercadoIcone} alt="" />
                    <img className="max-h-8 sm:max-h-10" src={whatsapp} alt="" />
                  </div>
                </div>
              </a>
            </div>
          </Box>
        </div>

      </div>
      <div className="sm:py-10 mt-9 lg:mt-0 place-content-center md:place-content-start flex lg:gap-24  lg:flex lg:flex-col">
        {Object.values(GameDetails).map((game, index) => (
        <Link key={index} to={game.path} reloadDocument relative="path">
          <Button
            variant="solid"
            color=""
            size="sm"
            sx={{
              transition: "transform 0.3s",
              "&:hover": {
                transform: "scale(1.3)",
              },
            }}
          >
            <img className="h-10 lg:h-28  lg:mx-2" src={game.icon} alt="" />
          </Button>
        </Link>
        ))}
      </div>
    </section>
  );
};

export default Hero;
