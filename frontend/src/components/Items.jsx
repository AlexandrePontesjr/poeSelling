import { ShopItemCoin, logoPoe, pix, whatsapp, payPal } from "../assets";
import Box from "@mui/joy/Box";

const Items = ({ product , game }) => {
  // console.log(game);
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

    <div className={`${game.fontFamily} `}>
      <div className="bg-items-name-top  bg-card-items grid grid-cols px-2 rounded-lg bg-items-name-bottom">
        <div className="rounded-sm text-center">
          <span className="text-[16px] text-white ">
            {product ? product.name : "Product Name"}
          </span>
        </div>
        <div className="grid grid-flow-col">
          <div className="w-52 h-[120px] py-1 px-1">
            <p className="text-white line-clamp-3    text-[10px] h-[120px]  max-h-[120px]">
              {product ? product.description : "Product description"}
            </p>
          </div>
          <div className="white__gradient mx-auto">
            <img
              style={{ maxBlockSize: 100 }}
              src={product ? product.image : logoPoe}
              srcSet={product ? product.image : logoPoe}
              loading="lazy"
              alt=""
            />
          </div>
        </div>
        <div style={{ maxHeight: 40 }}  className=" white__gradient flex gap-2 mt-3 items-center relative">
        <div style={{ maxHeight: 40 }} className=" flex w-full  justify-center">
          <img style={{ maxHeight: 40 }}  className="" src={ShopItemCoin} alt="" />
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
    </div>
    </a>
  </Box>
  );
};

export default Items;

{
  /* <img className="relative " src={dealItems} alt="" />
    <a className="relative" href={`https://api.whatsapp.com/send?` +
      `phone=559285896410&` +
      `text=Olá, tenho interesse em comprar (${product?.name}) por $${product?.price}!`}
      >
      </a>
    <p className="mt-4 w-full absolute text-white text-center font-poppins max-w-[250px]">{product ? product.name : "Product Name"}</p>
    <div className="flex absolute mx-2 my-20">
        <img className="ml-44 max-w-[62px]"
                src={product ? product.image : logoPoe}
                srcSet={product ? product.image : logoPoe}
                loading="lazy"
                alt=""
              />
      <p className=" w-[170px] h-[80px] text-white text-[10px]  text-wrap overflow-auto no-scrollbar absolute mx-auto ">
        {product ? product.description : "Product description"}</p>

      <div className="flex  h-[40px] w-[150px] absolute mx-16 my-20">
          <a className="text-[24px] text-white">R$ {product ? product.price : "--"}</a>
      </div>
    </div> */
}
