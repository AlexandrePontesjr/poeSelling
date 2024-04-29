import { ShopItemCoin, logoPoe, pix, whatsapp, payPal } from "../assets";
import Box from "@mui/joy/Box";
const ServicesList = ({ product, game }) => {

    return (
      <Box
      sx={{
        maxWidth: "336px",
        maxHeight: "216px",
        transition: "transform 0.3s",
        "&:hover": {
          transform: "scale(1.1)",
        },
      }}
        >
          <a className="relative" href={`https://api.whatsapp.com/send?` +
      `phone=559285896410&` +
      `text=Olá, tenho interesse em comprar (${product?.name}) por $${product?.price}!`}
      >
        <div className={`${game.fontFamily} grid  rounded-lg bg-items-name-bottom  bg-card-items`}>
          <div className="white__gradient rounded-sm text-center">
              <span className="text-[36px] text-white overflow-scroll">
                {product ? product.name : "Product Name"}
              </span>
          </div>
            <img
              className="object-cover w-full h-[calc(100% - 2px)] rounded-lg"
              height="216"
              src={product ? product.image : logoPoe}
              srcSet={product ? product.image : logoPoe}
              style={{
                aspectRatio: "160/90",
                objectFit: "cover",
              }}
              width="160"
            />
          <div className="w-52 h-[120px] py-1 px-1">
            <p className="text-white line-clamp-3    text-[16px] h-[120px]  max-h-[120px]">
              {product ? product.description : "Product description"}
            </p>
          </div>
          <div style={{ maxHeight: 40 }} className=" white__gradient flex gap-2 mt-3 items-center relative">
            <div style={{ maxHeight: 40 }} className=" flex w-full  justify-center">
              <img style={{ maxHeight: 40 }} className="" src={ShopItemCoin} alt="" />
              <p className=" text-white text-[28px]">
                R${product ? product.price : "--"}
              </p>
            </div>
            <div style={{ maxHeight: 40 }} className=" w-full  justify-between flex">
              <img style={{ maxHeight: 40 }} className="" src={pix} alt="" />
              <img style={{ maxHeight: 40 }} className="" src={whatsapp} alt="" />
              <img style={{ maxHeight: 40 }} className="" src={payPal} alt="" />
            </div>
          </div>
        </div>
        </a>
  </Box>
  );
};

export default ServicesList;
