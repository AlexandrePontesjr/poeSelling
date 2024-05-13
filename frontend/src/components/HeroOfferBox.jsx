import Box from "@mui/joy/Box";
import { currencys, whatsapp, pix, mercadoIcone } from "../assets";

const HeroOfferBox = ({ game, children, goto }) => {
  return (
    <Box
      sx={{
        transition: "transform 0.3s",
        "&:hover": {
          transform: "scale(1.03)",
        },
      }}
    >
      <div className="relative inline-block group">
        <a href={goto}>
          <img
            style={{ maxHeight: 160 }}
            className="mt-14 transition-opacity duration-300 opacity-100 group-hover:opacity-0"
            src={currencys}
            alt=""
          />
          <img
            style={{ maxHeight: 160 }}
            className="top-14 absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            src={currencys}
            alt=""
          />
          <div
            className={`font-poppins flex-col font-bold absolute inset-0 flex items-center justify-center bg-opacity-50 text-yellow-500 text-[16px]  sm:text-[36px] transition-opacity duration-300 opacity-100 group-hover:opacity-0`}
          >
            <span className="mt-8 md:mt-0">{children}</span>
            <div className="gap-1 sm:w-full mt-1 sm:mt-5 ml-4  md:ml-11 flex sm:justify-center sm:gap-10 opacity-100 group-hover:opacity-100">
              <img className="max-h-5 sm:max-h-10" src={pix} alt="pix" />
              <img
                className="max-h-5 sm:max-h-10"
                src={mercadoIcone}
                alt="mercado"
              />
              <img
                className="max-h-5 sm:max-h-10"
                src={whatsapp}
                alt="whatsapp"
              />
            </div>
          </div>
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 flex items-center justify-center gold-gradient bg-opacity-50 text-yellow-500  transition-opacity duration-300" />
          <div
            className={`font-poppins flex-col font-bold absolute inset-0 opacity-0 group-hover:opacity-100 flex items-center justify-center bg-opacity-50 text-yellow-500 text-[16px]  sm:text-[36px] transition-opacity duration-300`}
          >
            <span className="mt-8 md:mt-0">{children}</span>
            <div className="gap-1 sm:w-full mt-1 sm:mt-5 ml-4  md:ml-11 flex sm:justify-center sm:gap-10 opacity-100 group-hover:opacity-100">
              <img className="max-h-5 sm:max-h-10" src={pix} alt="" />
              <img className="max-h-5 sm:max-h-10" src={mercadoIcone} alt="" />
              <img className="max-h-5 sm:max-h-10" src={whatsapp} alt="" />
            </div>
          </div>
        </a>
      </div>
    </Box>
  );
};

export default HeroOfferBox;
