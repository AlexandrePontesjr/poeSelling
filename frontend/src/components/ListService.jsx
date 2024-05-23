import { ShopItemCoin, logoPoe, pix, mercadoIcone, whatsapp } from "../assets";
import Box from "@mui/joy/Box";
import ReactGA from "react-ga4";

const ServicesList = ({ product, game }) => {

  const sendAddPaymentInfoEvent = () => {
    ReactGA.event({
      action: 'add_payment_info',
      category: 'Payment Information',
      label: product?.name,
      value: product?.price,
      currency: 'BRL',
      coupon: '',
      payment_type: 'WhatsAPP',
      items: [
        {
          item_id: product?.id,
          item_name: product?.name,
          affiliation: 'RealmXCoins',
          coupon: '',
          discount: 0,
          index: 0,
          item_brand: product?.brand || 'Generic',
          item_category: product?.category || 'General',
          item_variant: product?.variant || 'Default',
          location_id: '',
          price: product?.price || 0,
          quantity: 1,
        }
      ],
    });
  };

  const sendClickEvent = () => {
    ReactGA.event({
      action: 'click',
      category: 'Product Click',
      label: product?.name || 'Unknown Product',
    });
  };

  // Manipulador de clique para enviar o evento e redirecionar
  const handleClick = (event) => {
    event.preventDefault();
    sendAddPaymentInfoEvent();
    sendClickEvent();
    window.location.href = `https://api.whatsapp.com/send?phone=553171074838&text=Olá, tenho interesse em comprar (${product?.name}) por $${product?.price}`; // Redireciona para o WhatsApp
  };



  return (
    <div className="min-w-[300px] max-w-[300px] rounded-lg">
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
        <a onClick={handleClick} className="" href="">
          <div className={`${game.fontFamily}  `}>
            <div className={`bg-items-name-top  bg-card-items grid grid-cols px-2 rounded-lg bg-items-name-bottom `}>
              <div className="text-center h-[90px]">
                  <span className="relative z-1 text-[28px] font-semibold text-yellow-400  shadow-lg">
                    {product ? product.name : "Product Name"}
                  </span>
              </div>
              <div className="items-center justify-center flex flex-col h-[155px]">
                <img
                  className="mx-auto absolute h-[150px] mt-3 rounded-lg"
                  src={product ? product.image : logoPoe}
                  srcSet={product ? product.image : logoPoe}
                  loading="lazy"
                  style={{
                    maxWidth: "100%",
                  }}
                />
              </div>
              <div style={{ maxHeight: 40 }} className=" white__gradient flex gap-2 mt-3 items-center relative">
                <div style={{ maxHeight: 40 }} className=" flex w-full  justify-center">
                  <img style={{ maxHeight: 40 }} className="" src={ShopItemCoin} alt="" />
                  <p className=" text-white text-[28px] font-poppins">
                    R${product ? product.price : "--"}
                  </p>
                </div>
                <div style={{ maxHeight: 40 }} className=" w-full  justify-between flex">
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

export default ServicesList;
