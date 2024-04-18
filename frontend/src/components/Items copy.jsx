import { useCallback, useEffect, useRef, useState } from "react";
import { dealItems, logoPoe, moneyBag, whatsapp } from "../assets";
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Chip from '@mui/joy/Chip';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';
import Box from '@mui/joy/Box';
// import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

const Items = ({ product }) => {

  return (
  <div className="bg-slate-950/70 flex relative">
    <img className="relative" src={dealItems} alt="" />
    <a className="mt-4 w-full absolute text-white text-center" href={`https://api.whatsapp.com/send?` +
      `phone=559285896410&` +
      `text=Olá, tenho interesse em comprar (${product?.name}) por $${product?.price}!`}
      >
    <p className="font-poppins text-wrap max-w-[250px]">{product ? product.name : "Product Name"}</p>
    </a>

    <div className="flex absolute mx-2 my-20">
        <img className="max-w-[60px]"
                src={product ? product.image : logoPoe}
                srcSet={product ? product.image : logoPoe}
                loading="lazy"
                alt=""
              />
      <p className=" w-[150px] h-[70px] text-white  text-wrap overflow-hidden  absolute mx-16">
        {product ? product.description : "Product description"}</p>

      <div className="flex  h-[40px] w-[150px] absolute mx-16 my-20" >
        <img className="h-5 mx-2" src={whatsapp} alt="" />
          <a className="text-[20px] text-green-500">R$ {product ? product.price : "--"}</a>
      </div>
    </div>
  </div>
  );
}

export default Items;
