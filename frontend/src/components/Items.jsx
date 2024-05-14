import { ShopItemCoin, logoPoe, pix, mercadoIcone, whatsapp } from "../assets";
import Box from "@mui/joy/Box";

const Items = ({ product, game }) => {
  return (
    <div className="min-w-[300px] min-h-[345px] rounded-lg">
      <Box
        sx={{
          maxWidth: "100%",
          maxHeight: "100%",
          transition: "transform 0.3s",
          "&:hover": {
            transform: "scale(1.05)",
          },
        }}
      >
        <a className="" href={`https://api.whatsapp.com/send?` +
          `phone=553171074838&` +
          `text=Olá, tenho interesse em comprar (${product?.name}) por $${product?.price}!`}
        >
          <div className={`${game.fontFamily} `}>
            <div className={`bg-items-name-top  bg-card-items grid grid-cols px-2 rounded-lg bg-items-name-bottom`}>
              <div className="text-center h-[90px]">
                  <span className="relative z-1 text-[28px] font-semibold text-yellow-400  shadow-lg ">
                    {product ? product.name : "Product Name"}
                  </span>
              </div>
              <div className="items-center justify-center flex flex-col h-[200px]">
                <img
                  className="mx-auto absolute h-[180px] mt-3 rounded-lg"
                  src={product ? product.image : logoPoe}
                  srcSet={product ? product.image : logoPoe}
                  loading="lazy"
                  style={{
                    maxWidth: "100%",
                  }}
                />
              </div>
              {/* <div className="h-[140px] py-1 px-1 bg-slate-700/20">
                <p className="text-white line-clamp-3 font-poppins   text-[14px]">
                  {product ? product.description : "Product description"}
                </p>
              </div> */}
              <div style={{ maxHeight: 40 }} className=" white__gradient flex gap-2 mt-3 items-center relative">
                <div style={{ maxHeight: 40 }} className=" flex w-full  justify-center">
                  <img style={{ maxHeight: 40 }} className="" src={ShopItemCoin} alt="" />
                  <p className=" text-white text-[28px] font-poppins">
                    R${product ? product.price : "--"}
                  </p>
                </div>
                <div style={{ maxHeight: 40 }} className="w-full justify-between flex">
                  <img style={{ maxHeight: 40 }} className="" src={pix} alt="" />
                  <img style={{ maxHeight: 40 }} className="" src={mercadoIcone} alt="" />
                  <img style={{ maxHeight: 40 }} className="" src={whatsapp} alt="" />
                </div>
                
              </div>
              <p className=" text-dimWhite mt-1 text-center text-[16px] font-poppins">
              Clique e entre em contato
                  </p>
            </div>
          </div>
        </a>
      </Box>
    </div>
  );
};

export default Items;

