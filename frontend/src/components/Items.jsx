import { dealItems, logoPoe, ShopItemCoin, shop_item_bg } from "../assets";


const Items = ({ product }) => {

  return (
    <div className="">
        <div className="grid grid-cols bg-black-items px-2 rounded-lg ">
        <div className="rounded-sm text-center">
          <span className="text-[16px] text-white font-diablo" >{product ? product.name : "Product Name"}</span>
        </div>
          <div className="grid grid-flow-col  ">
            <div className="w-52 h-[120px] py-1 px-1">
            <p className="text-white line-clamp-3  font-diablo  text-[10px] h-[120px]  max-h-[120px]  overflow-scroll no-scrollbar">
              {product ? product.description : "Product description"}
            </p>
            </div>
            <div className="white__gradient mx-auto">
            <img style={{maxBlockSize: 100}}
              src={product ? product.image : logoPoe}
              srcSet={product ? product.image : logoPoe}
              loading="lazy"
              alt=""
            />
            </div>
          </div>
            <div className="flex" >
            <img className="" src={ShopItemCoin} alt=""/>
            <p className="font-diablo text-white text-[26px]">
              R${product ? product.price : "--"}
            </p>
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

    </div> */}
