import { motion } from "framer-motion";
import style, { layout } from "../styles";
import Button from "@mui/joy/Button";
import { Link } from "react-router-dom";
import { GameDetails } from "../constants";
import {HeroOfferBox} from "../components";


const Hero = ({ game }) => {
  return (
    <section
      id="home"
      className={`${layout.section2}`}
      style={{ position: "relative" }}
    >
      <div
        className="flex-col  md:w-[1450px]"
        style={{ textShadow: "0 0 10px black" }}
      >
        <div className={`py-14 lg:py-16 xl:px-0 sm:px-16 px-6`}>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1
              className={`${game.fontFamily} mt-5 text-sky-100 flex-1 font-semibold sm:text-[58px] lg:text-[65px] text-[30px]   ss:leading-[100.8px] lg:leading-[75px] hover:text-yellow-400`}
            >
              Bem vindo a<br />
              <span className="text-yellow-400 hover:text-sky-200">
              Realm Exchange Coins
              </span>{" "}
              <br />
            </h1>
            <p className={`${style.paragraphGame} font-poppins mt-2 `}>
              Somos veteramos no ramo de venda em jogos online, oferencendo serviços e venda de currency / itens <br/> dos ARPGs mais jogados do momento
              Entregamos o item desejado em 5 - 15 minutos !<br/> Garantindo transações seguras e suporte dedicado.
            </p>
            <div
              className={`${game.fontFamily} font-semibold mt-10 text-center text-[20px] sm:text-[58px]`}
            >
              <span className=" text-sky-100 hover:text-yellow-400">
                {game.tituloTemporada}
              </span>{" "}
              <br />
            </div>
          </motion.div>
        </div>
        <div className="lg:py-0 justify-center  flex lg:flex-col-1 gap-6 px-5 lg:px-2 lg:flex lg:gap-20  lg:justify-start">
          <HeroOfferBox game={game} goto="#Currency">
            Compre Currency
          </HeroOfferBox>
          <HeroOfferBox game={game} goto="#services">
            Contrate Serviços
          </HeroOfferBox>
        </div>
      </div>
      <div className="sm:py-10 mt-9 lg:mt-12 place-content-center md:place-content-start flex lg:gap-24  lg:flex lg:flex-col">
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
              <img className="h-10 lg:h-28  lg:mx-2" src={game.icon} alt="" />
            </Button>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Hero;
