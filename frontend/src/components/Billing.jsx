import { useEffect, useState } from "react";
import { Carousel, SearchBar } from ".";
import { getProducts } from "../api/products/products";
import styles from "../styles";

const Billing = ({ game }) => {
  const [products, setProducts] = useState([]);
  const [searchItem, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await getProducts(game.id);
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
<section id="items" className={`relative`}>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className=" sm:flex  sm:items-center sm:justify-between">
          <div className="mt-12 lg:mt-20  text-left sm:text-left">
            <h2 className={`${game.fontFamily} ${styles.headingGame}`}>
              Tome controle{" "}
              <span className="text-yellow-400">Compre & Use</span> Items da
              loja.
            </h2>
            <p className={`mt-4 ${game.fontFamily} ${styles.paragraphGame}`}>
              Ao clica em comprar voce será redirecionado para o responsável
              do Trade
            </p>
          </div>
        <div className="lg:-mt-12 justify-center items-center">
          <SearchBar
            searchTerm={searchItem}
            changeFunction={handleInputChange}
          />
        </div>

        </div>
        <div className={`${styles.boxWidth}`}>
          <Carousel slides={filteredProducts} game={game} />
        </div>
      </div>
</section>
  );
};

export default Billing;
