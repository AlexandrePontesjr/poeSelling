import { ShopItemCoin, logoPoe, pix, mercadoIcone, payPal } from "../assets";
import Box from "@mui/joy/Box";
const ServicesList = ({ product, game }) => {
  return (
    <div className=" min-w-[350px] max-w-[350px] rounded-lg">
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
        <a
          className=""
          href={
            `https://api.whatsapp.com/send?` +
            `phone=559285896410&` +
            `text=Olá, tenho interesse em comprar (${product?.name}) por $${product?.price}!`
          }
        >
          <div className={`${game.fontFamily}`}>
            <div
              className={`bg-items-name-top  bg-card-items grid grid-cols px-2 rounded-lg bg-items-name-bottom`}
            >
              <div className="white__gradient rounded-sm text-center h-[100%]">
                <span className="text-[30px] font-semibold text-yellow-400 shadow-lg">
                  {product ? product.name : "Product Name"}
                </span>
              </div>
              <div>
                <img
                  className="object-cover w-full h-[calc(100% - 2px)] rounded-lg"
                  src={product ? product.image : logoPoe}
                  srcSet={product ? product.image : logoPoe}
                  loading="lazy"
                  style={{
                    aspectRatio: "160/90",
                    objectFit: "cover",
                    maxBlockSize: 180,
                    padding: 4,
                  }}
                />
              </div>
              <div className="h-[140px] py-1 px-1 bg-slate-700/20">
                <p className="text-white line-clamp-3 font-poppins   text-[16px]">
                  {product ? product.description : "Product description"}
                </p>
              </div>
              <div
                style={{ maxHeight: 40 }}
                className=" white__gradient flex gap-2 mt-3 items-center relative"
              >
                <div
                  style={{ maxHeight: 40 }}
                  className=" flex w-full  justify-center"
                >
                  <img
                    style={{ maxHeight: 40 }}
                    className=""
                    src={ShopItemCoin}
                    alt=""
                  />
                  <p className=" text-white text-[28px]">
                    R${product ? product.price : "--"}
                  </p>
                </div>
                <div
                  style={{ maxHeight: 40 }}
                  className=" w-full  justify-between flex"
                >
                  <img
                    style={{ maxHeight: 40 }}
                    className=""
                    src={pix}
                    alt=""
                  />
                  <img
                    style={{ maxHeight: 40 }}
                    className=""
                    src={mercadoIcone}
                    alt=""
                  />
                  <img
                    style={{ maxHeight: 40 }}
                    className=""
                    src={payPal}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </a>
      </Box>
    </div>
  );
};

export default ServicesList;
