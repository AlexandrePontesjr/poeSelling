import { motion } from "framer-motion";
import style , { layout } from "../styles";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import { Link } from "react-router-dom";
import { GameDetails } from "../constants";
import { pix, mercadoIcone, payPal } from "../assets";

import {
  espada,
  espadaPB,
  servicesImage,
} from "../assets";

const Hero = ({game}) => {
  return (
    <section
      id="home"
      className={`${layout.section2}`}
      style={{ position: "relative" }}

    >
      <div className="flex-col " style={{ textShadow: '0 0 10px black' }}>
        <div className={`xl:px-0 sm:px-16 px-6`}>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className={`${game.fontFamily} flex-1 font-semibold md:text-[58px] lg:text-[65px] text-[38px]  text-yellow-400 ss:leading-[100.8px] lg:leading-[75px] hover:text-sky-200`}>
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
            <div className={`${game.fontFamily} font-semibold mt-6 text-center text-[38px] lg:text-[58px]`}>
              <span className="text-sky-100 hover:text-yellow-400">
                  Temporada VII
                </span>{" "}
                <br />
            </div>
          </motion.div>
        </div>

        <div className="py-16 lg:py-0 justify-center flex lg:flex-col-1 gap-6 px-5 lg:px-2 lg:flex lg:mt-[205px] lg:gap-20  lg:justify-center">
          <Box
            sx={{
              transition: "transform 0.3s",
              "&:hover": {
                transform: "scale(1.03)",
              },
            }}
          >
            <div className="bg-white/70 relative inline-block group">
              <div style={{ maxHeight: 40 }} className="bg-black/50 w-full  justify-center md:justify-end mt-6 flex transition-opacity duration-300 opacity-100 group-hover:opacity-0">
                <img style={{ maxHeight: 40 }} className="" src={pix} alt="" />
                <img style={{ maxHeight: 40 }} className="" src={mercadoIcone} alt="" />
                <img style={{ maxHeight: 40 }} className="" src={payPal} alt="" />
              </div>
              <a href="#services">
              <img style={{ maxHeight: 160 }} className="transition-opacity duration-300 opacity-100 group-hover:opacity-0" src={espada} alt="" />
              <img style={{ maxHeight: 160 }} className="top-10 absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300" src={espadaPB} alt="" />
                <span className={`bg-white/50 ${game.fontFamily} font-bold absolute top-0 left-6 md:left-1 px-3 text-yellow-500 text-[16px]  lg:text-[28px] transition-opacity duration-300 opacity-100 group-hover:opacity-0`}>
                {/* <span className={`bg-white/50 ${game.fontFamily} font-bold absolute top-0 left-6 md:left-1 px-3 text-yellow-500 text-[16px]  lg:text-[28px] transition-opacity duration-300 opacity-100 group-hover:opacity-0`}> */}
                  Compre Items
                </span>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 flex items-center justify-center gold-gradient bg-opacity-50 text-yellow-500  transition-opacity duration-300" />
                <div className={`${game.fontFamily} flex-col font-bold absolute inset-0 opacity-0 group-hover:opacity-100 flex items-center justify-center bg-opacity-50 text-yellow-500 text-[23px]  lg:text-[36px] transition-opacity duration-300`}>
                  <span>
                    Compre Items
                  </span>
                  <div style={{ maxHeight: 40 }} className="w-full flex justify-center gap-5">
                    <img style={{ maxHeight: 40 }} className="" src={pix} alt="" />
                    <img style={{ maxHeight: 40 }} className="" src={mercadoIcone} alt="" />
                    <img style={{ maxHeight: 40 }} className="" src={payPal} alt="" />
                  </div>
                </div>
              </a>
            </div>
            {/* <div className="relative inline-block group">
            <img style={{ maxHeight: 160 }} className="" src={machado} alt="" />
              <a href="#items">
              <div style={{ maxHeight: 40 }} className="bg-black w-full  justify-between flex transition-opacity duration-300 opacity-100 group-hover:opacity-0">
                    <img style={{ maxHeight: 40 }} className="" src={pix} alt="" />
                    <img style={{ maxHeight: 40 }} className="" src={mercadoIcone} alt="" />
                    <img style={{ maxHeight: 40 }} className="" src={payPal} alt="" />
                <span className={`${game.fontFamily} font-bold absolute top-0 left-1 px-3 ml-2 text-yellow-500 text-[16px]  lg:text-[28px] transition-opacity duration-300 opacity-100 group-hover:opacity-0`}>
                  Compre Items
                </span>
                </div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 flex items-center justify-center gold-gradient bg-opacity-50 text-yellow-500  text-[36px] transition-opacity duration-300" />
                <div className={`${game.fontFamily} flex-col font-bold absolute inset-0 opacity-0 group-hover:opacity-100
                  flex items-center justify-center  bg-opacity-50 text-yellow-500 text-[26px]  lg:text-[36px] transition-opacity duration-300`} >
                  <span >
                    Compre Items
                  </span>
                  <div style={{ maxHeight: 40 }} className=" w-full flex justify-center gap-5">
                      <img style={{ maxHeight: 40 }} className="" src={pix} alt="" />
                      <img style={{ maxHeight: 40 }} className="" src={mercadoIcone} alt="" />
                      <img style={{ maxHeight: 40 }} className="" src={payPal} alt="" />
                </div>
              </div>
              </a>
            </div> */}
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
              <div style={{ maxHeight: 40 }} className=" w-full  justify-end flex transition-opacity duration-300 opacity-100 group-hover:opacity-0">
                      <img style={{ maxHeight: 40 }} className="" src={pix} alt="" />
                      <img style={{ maxHeight: 40 }} className="" src={mercadoIcone} alt="" />
                      <img style={{ maxHeight: 40 }} className="" src={payPal} alt="" />
                </div>
              <a href="#services">
                <img className="block " src={servicesImage} alt="" />
                <span className={`${game.fontFamily} font-bold absolute top-0 left-1 px-3 ml-2 text-yellow-500 text-[16px]  lg:text-[28px] transition-opacity duration-300 opacity-100 group-hover:opacity-0`}>
                  Nossos Serviços
                </span>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 flex items-center justify-center gold-gradient bg-opacity-50 text-yellow-500  transition-opacity duration-300" />
                <div className={`${game.fontFamily} flex-col font-bold absolute inset-0 opacity-0 group-hover:opacity-100 flex items-center justify-center  bg-opacity-50 text-yellow-500 text-[17px]  lg:text-[36px] transition-opacity duration-300`}>
                <span>
                  Nossos Serviços
                </span>
                <div style={{ maxHeight: 40 }} className=" w-full flex justify-center gap-5">
                      <img style={{ maxHeight: 40 }} className="" src={pix} alt="" />
                      <img style={{ maxHeight: 40 }} className="" src={mercadoIcone} alt="" />
                      <img style={{ maxHeight: 40 }} className="" src={payPal} alt="" />
                </div>
              </div>
              </a>
            </div>
          </Box>
        </div>
      </div>
      <div className="sm:py-10 py-10 items-center justify-center flex gap-10 lg:gap-24 lg:ml-80 lg:flex lg:flex-col">
        {Object.values(GameDetails).map((game, index) => (
        <Link key={index} to={game.path} reloadDocument relative="path">
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
            <img className="h-24 mx-2" src={game.icon} alt="" />
          </Button>
        </Link>
        ))}
      </div>
    </section>
  );
};

export default Hero;
