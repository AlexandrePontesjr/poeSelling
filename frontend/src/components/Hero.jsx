
import styles, { layout } from "../styles";
import { motion } from "framer-motion";
import Add from '@mui/icons-material/Add';
// import Items from "./Items";
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';
import { whatsapp,itemsHero, lastEpocIcon,  poeIcon,  diabloIcon, servicesImage } from "../assets"

const Hero = () => {

  return (
    <section id="home" className={`${layout.section2} h-[820px]` } style={{ position: 'relative' }}>
      <div className="flex-col" >
      <div className={`py-12 xl:px-0 sm:px-16 px-6 opacity-70`  }>
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className=" font-pirata flex-1 font-semibold ss:text-[72px] text-[52px] text-yellow-400 ss:leading-[100.8px] leading-[75px] hover:text-sky-200">
            Bem Vindo {" "}<br/>
            <span className="text-sky-200 hover:text-yellow-400">Renewal Trade Shop</span>{" "}<br/>
          </h1>
          {/* <p className={`text-white text-[26px]  mt-2 mb-20`  }>
            Olá a todos, bem-vindos ao nosso site! Em primeiro lugar, gostaria de expressar minha gratidão a vocês que chegaram até aqui, seja através do nosso anúncio ou de outras formas. Desde a adolescência, estou envolvido no ramo de vendas de jogos online. Desde os dias do Lineage 2, revendendo tickets, adenas e explorando diversos outros jogos, essa jornada tem sido parte integrante da minha vida. Atualmente, em parceria com um amigo, oferecemos serviços nos jogos Path of Exile, Last Epoch e Diablo 4, fornecendo uma ampla gama de serviços e itens/currency à disposição.
            Convido vocês a entrarem em contato conosco pelo WhatsApp para conversar e esclarecer quaisquer dúvidas, inclusive enquanto estiverem dentro dos jogos. Quero reforçar que este site é 100% confiável. Cada transação é conduzida de maneira legítima e com o mais alto padrão de qualidade.
            Agradeço imensamente por sua confiança.
            Atenciosamente. <br/>
            Dan.
          </p> */}
          <p className={`text-white text-[20px] mt-2 mb-24 text-pretty `}>
          Somos veteranos no ramo de vendas de jogos online,{" "}<br/>
          oferecendo serviços e venda de items dos ARPGs mais jogados do mercado,{" "}<br/>
          garantindo transações seguras e suporte dedicado.
          </p>

        </motion.div>

      </div>

      <div className="flex mt-20 gap-20 justify-center">

        <div className="relative">
        <a className="mt-1 px-3 ml-2 absolute text-yellow-500 font-pirata text-[32px]" href="#items">Compre Items</a>
          <img className="mt-1" src={itemsHero} alt="" />
        </div>

        <div className="relative">
        <a className="mt-1 px-3 ml-2 absolute text-yellow-500 font-pirata text-[32px]" href="#services">Nossos Serviços</a>
          <img className="mt-1" src={servicesImage} alt="" />
        </div>
        {/* <Button startDecorator={<Add />}  variant="solid"  color="" size="lg"
            sx={{
              transition: "transform 0.3s",
              "&:hover": {
                transform: "scale(1.1)",
              },
            }}
            style={{ backgroundColor: 'rgba(250, 250, 250, 0.2)', borderRadius: '10px'  }}
            >
  
          <img className="h-12 mx-2" src={carrinho} alt="" />
              <a className="ml-1 text-white font-poppins text-[20px]" href="#items">Compre Items</a>
        </Button> */}
        {/* <Button  variant="" color="" size="lg"
            sx={{
              transition: "transform 0.3s",
              "&:hover": {
                transform: "scale(1.1)",
              },
            }}
            style={{ backgroundColor: 'rgba(250, 250, 250, 0.2)', borderRadius: '10px'  }}
              >
          <img className=" h-12 mx-2" src={whatsapp} alt="" />
            <p className="ml-1 text-white font-poppins text-[20px]">Entre em Contato</p>
              <Link
              href={`https://api.whatsapp.com/send?` +
              `phone=559285896410&` +
              `text=Olá, tenho interesse em comprar items ou serviços!`}
              fontWeight="md"
              color="neutral"
              textColor="white"
              overlay
              >
              </Link>
        </Button>
        <Button  variant="solid" color="" size="lg"
            sx={{
              transition: "transform 0.3s",
              "&:hover": {
                transform: "scale(1.1)",
              },
            }}
            style={{ backgroundColor: 'rgba(250, 250, 250, 0.2)', borderRadius: '10px'  }}
          >

          <img className="h-12 mx-2" src={carrinho} alt="" />
              <a className="ml-1 text-white font-poppins text-[20px]" href="#services">Nossos Serviços</a>
        </Button> */}
      </div>
      </div>

      
          <div className="ml-80 flex flex-col gap-16 -px-28 py-28 ">
              <Button  variant="solid" color="" size="lg" sx={{
                          transition: "transform 0.3s",
                          "&:hover": {
                            transform: "scale(1.3)",
                          },
                }}
                >
                <img className="h-24 mx-2" src={diabloIcon} alt="" />
                </Button>
                <Button  variant="solid" color="" size="lg"sx={{
                          transition: "transform 0.3s",
                          "&:hover": {
                            transform: "scale(1.3)",
                          },
                }}
                >
                <img className="h-24 mx-2" src={poeIcon} alt="" />
                </Button>
                <Button  variant="solid" color="" size="lg"sx={{
                          transition: "transform 0.3s",
                          "&:hover": {
                            transform: "scale(1.3)",
                          },
                }}
                >
                <img className="h-24 mx-2" src={lastEpocIcon} alt="" />
                </Button>
          </div>
    </section>
  );
};

export default Hero;
