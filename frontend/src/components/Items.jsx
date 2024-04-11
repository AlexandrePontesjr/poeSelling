import { useCallback, useEffect, useRef, useState } from "react";
import { logoPoe } from "../assets";
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Chip from '@mui/joy/Chip';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';
// import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

const Items = ({ product }) => {

  return (
  <div className="bg-slate-950 p-1 rounded-lg">
    <Card sx={{ width: 180, maxWidth: '100%', boxShadow: 'lg',  backgroundColor: 'white'}}>
      <CardOverflow>
        <AspectRatio sx={{ minWidth: 180 }}>
          <img
            src={product ? product.image : logoPoe}
            srcSet={product ? product.image : logoPoe}
            loading="lazy"
            alt=""
            className="bg-black"
          />
        </AspectRatio>
      </CardOverflow>
      
      <CardContent>
        <Typography level="body-xs">Item</Typography>
        <Link
          href={`https://api.whatsapp.com/send?` +
          `phone=559285896410&` +
          `text=Olá, tenho interesse em comprar (${product?.name}) por $${product?.price}!`}
          fontWeight="md"
          color="neutral"
          textColor="text.primary"
          overlay
          // endDecorator={<ArrowOutwardIcon />}
        >
          {product ? product.name : "Product Name"}
        </Link>

        <Typography
          level="title-lg"
          sx={{ mt: 1, fontWeight: 'xl' }}
          endDecorator={
            <Chip component="span" size="sm" variant="soft" color="success">
              Lowest price
            </Chip>
          }
        >
          Preço: ${product ? product.price : "--"}
        </Typography>
      </CardContent>
      <CardOverflow>
        <Button variant="solid" color="success" size="lg"
                    url={
                      `https://api.whatsapp.com/send?` +
                      `phone=559285896410&` +
                      `text=Olá, tenho interesse em comprar (${product?.name}) por $${product?.price}!`
                    }
        >
          Compre
        </Button>
      </CardOverflow>
    </Card>
  </div>
  );
}

export default Items;
