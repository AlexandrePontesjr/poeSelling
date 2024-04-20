import { DoubleButton } from ".";
import { logoPoe } from "../assets";

const Items2 = ({ product }) => {
  return (
    <div className={`flex sm:flex-col p-3 rounded-xl  hover:bg-yellow-400`}>
      <div className="w-56 sm:w-96 rounded-3xl bg-[#010005]">
        <div className="pt-5 sm:pt-10 flex w-full sm:h-full place-content-center">
          <div className="bg-[#343434] rounded-3xl w-36 h-36 sm:w-72 sm:h-72 place-content-center ">
            <a
              href={
                `https://api.whatsapp.com/send?` +
                `phone=351912537986&` +
                `text=Olá, tenho interesse em comprar (${product?.name}) por $${product?.price}!`
              }
            >
              <img
                src={product ? product.image : logoPoe}
                alt=""
                className="rounded-xl h-full w-full"
              />
            </a>
          </div>
        </div>
        <div className="pt-5 sm:pt-10 ml-12 flex flex-col place-content-center">
          <h3 className="max-w-72 ml- text-white font-pirata text-lg sm:text-3xl group-hover:underline group-hover:underline-offset-4">
            {product ? product.name : "Product Name"}
          </h3>

          <p className="font-pirata text-[26px] sm:text-1xl text-white">
            Preço: ${product ? product.price : "--"}
          </p>
        </div>
        <div className="flex pt-5 sm:pt-10 pb-5 sm:pb-10 text-center w-full place-content-center">
          <DoubleButton
            url={
              `https://api.whatsapp.com/send?` +
              `phone=559285896410&` +
              `text=Olá, tenho interesse em comprar (${product?.name}) por $${product?.price}!`
            }
          >
            Fale Conosco
          </DoubleButton>
        </div>
      </div>
    </div>
  );
};

export default Items2;
