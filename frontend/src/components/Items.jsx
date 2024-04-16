import { useCallback, useEffect, useRef, useState } from "react";
import { logoPoe, moneyBag, whatsapp } from "../assets";
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
  <div className="">
    <Box
      sx={{
        width: 180,
        // height: 300,
        backgroundImage: "linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba( 0, 0, 0, 0.6))",
        maxWidth: "100%",
        boxShadow: "lg",
        borderRadius: "sm",
        transition: "transform 0.2s",
        "&:hover": {
          transform: "scale(1.2)",
        },
      }}
    >
    <Card variant="plain" size="sm" sx={{ backgroundColor: 'transparent'}} >

      <CardContent>
        {/* <Typography textColor="white" level="body-xs">Renewal</Typography> */}
        <Link
          href={`https://api.whatsapp.com/send?` +
          `phone=559285896410&` +
          `text=Olá, tenho interesse em comprar (${product?.name}) por $${product?.price}!`}
          fontWeight="md"
          color="neutral"
          textColor="white"
          overlay
          // endDecorator={pix}
        >
          <p className="font-poppins uppercase">{product ? product.name : "Product Name"}</p>
        </Link>
        <CardOverflow>
        <AspectRatio textColor="white" sx={{ }}>
          <img
            src={product ? product.image : logoPoe}
            srcSet={product ? product.image : logoPoe}
            loading="lazy"
            alt=""
          />
        </AspectRatio>
      </CardOverflow>
        <p className="text-white">
          Um item capaz de fazer inumeras façanhas fodas</p>
          <Typography
            level="title-lg"
            textColor="white"
            sx={{ mt: 1, fontWeight: 'xl' }}
            endDecorator={
              <img className=" h-10 mx-2" src={moneyBag} alt="" />
            }
          >
        
          Preço: ${product ? product.price : "--"}
        </Typography>
      </CardContent>
      <CardOverflow >
        <Button  variant="solid" color="" size="lg"
                    url={
                      `https://api.whatsapp.com/send?` +
                      `phone=559285896410&` +
                      `text=Olá, tenho interesse em comprar (${product?.name}) por $${product?.price}!`
                    }
        >
        <img className=" h-6 mx-2" src={whatsapp} alt="" />
        <p className="text-green-500">WhatsApp</p>
        </Button>
      </CardOverflow>
      
    </Card>
  </Box>
  </div>
  );
}

export default Items;
