import { useEffect, useState } from "react";
import { CarouselService, SearchBar } from ".";
import { getServices } from "../api/products/products";
import styles from "../styles";

const Services = ({game}) => {
  const [products, setProducts] = useState([]);
  const [searchItem, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await getServices(game.id);
        setProducts(res.content);
        setFilteredProducts(res.content);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, [game]);

  const handleInputChange = (e) => {
    const searchTerm = e.target.value;
    console.log(searchTerm);
    setSearchTerm(searchTerm);

    const filteredItems = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (filteredItems.length === 0) {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(filteredItems);
    }
  };

  return (
<section id="services" className={`relative`}>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <div className=" sm:flex  sm:items-center">
        <div className=" text-left sm:text-left">
          <h2 className={`${game.fontFamily} ${styles.headingGame}`}>
            Tome controle do Game <br className="sm:block hidden" /> Compre{" "}
            <span className="text-yellow-400">Nossos Serviços</span>{" "}
            da loja.
          </h2>
          <p className={`mt-4 ${game.fontFamily} ${styles.paragraphGame}`}>
            Procure pelos melhores items no nosso site
          </p>
        </div>
        <div className="w-[350px]  lg:w-[550px]">
          <SearchBar
            searchTerm={searchItem}
            changeFunction={handleInputChange}
          />
        </div>

      </div>

      <div className={`${styles.boxWidth}`}>
        <CarouselService slides={filteredProducts} game={game} />
      </div>
    </div>
</section>
  );
};

export default Services;
