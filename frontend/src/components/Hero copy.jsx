import { motion } from "framer-motion";
import styles from "../styles";

const Hero = () => {
  const videoId = "G2nAezLoy2k";

  return (
    <section id="home" className={`${styles.paddingY} flex`}>
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <motion.div
          initial={{ x: -100, opacity: 0 }} // Definindo a posição inicial e a opacidade
          animate={{ x: 0, opacity: 1 }} // Definindo a posição final e a opacidade
          transition={{ duration: 0.8 }} // Definindo a duração da animação
        >
          <h1 className="font-pirata flex-1 font-semibold ss:text-[72px] text-[52px] text-yellow-400 ss:leading-[100.8px] leading-[75px]">
            Renewal <span className="text-sky-200">Trade Shop</span>{" "}
          </h1>

          <p className={`${styles.paragraph} w-full mt-2`}>
            Olá a todos, bem-vindos ao nosso site! Em primeiro lugar, gostaria
            de expressar minha gratidão a vocês que chegaram até aqui, seja
            através do nosso anúncio ou de outras formas. Desde a adolescência,
            estou envolvido no ramo de vendas de jogos online. Desde os dias do
            Lineage 2, revendendo tickets, adenas e explorando diversos outros
            jogos, essa jornada tem sido parte integrante da minha vida.
            Atualmente, em parceria com um amigo, oferecemos serviços nos jogos
            Path of Exile, Last Epoch e Diablo 4, fornecendo uma ampla gama de
            serviços e itens/currency à disposição. Convido vocês a entrarem em
            contato conosco pelo WhatsApp para conversar e esclarecer quaisquer
            dúvidas, inclusive enquanto estiverem dentro dos jogos. Quero
            reforçar que este site é 100% confiável. Cada transação é conduzida
            de maneira legítima e com o mais alto padrão de qualidade. Agradeço
            imensamente por sua confiança. Atenciosamente. <br />
            Dan
          </p>
        </motion.div>
      </div>
      <div className="ml-10 justify-center items-center mr-5">
        <iframe
          width="600"
          height="350"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default Hero;
