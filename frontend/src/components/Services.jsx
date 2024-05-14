import { useEffect, useState } from "react";
import { CarouselService, SearchBar } from ".";
import { getServices } from "../api/products/products";
import styles from "../styles";

const Services = ({ game }) => {
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
    <section id="services"  >
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="py-8 mb-6 lg:mb-8  sm:items-center sm:justify-between">
          <div className="lg:mt-6  text-left sm:text-left">
            <h2 className={`${game.fontFamily} ${styles.headingGame}`}>
            Aqui está a lista dos  {" "}
              <span className="text-yellow-400">nossos serviços</span>{" "} para o jogo selecionado! Gostou de algum e quer contratá-lo?
            </h2>
            <p className={`mt-4 ${game.fontFamily} ${styles.paragraphGame}`}>
            Entre em contato conosco clicando no card ou pelo chatbot. Precisa de algum serviço que não temos? Chame a gente! Obrigado.
            </p>
          </div>
          <div className="">
            <SearchBar
              searchTerm={searchItem}
              changeFunction={handleInputChange}
            />
          </div>
        </div>

        <div className={``}>
        <CarouselService slides={filteredProducts} game={game} />
        </div>
      </div>
    </section>
  );
};

export default Services;
