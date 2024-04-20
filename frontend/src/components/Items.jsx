import { logoPoe, ShopItemCoin } from "../assets";

const Items = ({ product }) => {
  // max-w-[250px]
  return (
    <div className="bg-black card_image max-w-[275px] max-h-[190px] ">
      <div className="bg-black/90 grid grid-cols ">
        <div className="">
          <div className="text-center text-[14px]">
            <div className="bg-red-950 ">
              <span className="text-white font-diablo">
                {product ? product.name : "Product Name"}
              </span>
            </div>
            <div className=" relative grid grid-flow-col">
              <p className="bg-black/70 text-white font-poppins text-left text-[12px] w-44 h-32 overflow-scroll no-scrollbar">
                {product ? product.description : "Product description"}
              </p>
              <img
                className="white__gradient max-w-[60px]"
                src={product ? product.image : logoPoe}
                srcSet={product ? product.image : logoPoe}
                loading="lazy"
                alt=""
              />
            </div>
            <div className="flex justify-center gap-2">
              <img className=" h-[35px]" src={ShopItemCoin} alt="" />
              <p className="font-diablo text-white text-[30px]">
                R${product ? product.price : "--"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
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
