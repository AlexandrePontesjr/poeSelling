import { useEffect, useState } from "react";
import { getProducts } from "../api/products/products";
import { Carousel, SearchBar } from ".";
import styles, { layout } from "../styles";

const Billing = () => {
  const [products, setProducts] = useState([]);
  const [searchItem, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await getProducts();
        setProducts(res.content);
        setFilteredProducts(res.content);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, []);

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
      <div className="">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="text-left sm:text-left">
              <h2 className={styles.heading2}>
                Tome controle do Game <br className="sm:block hidden" /> Compre
                & Use Items da loja.
              </h2>

              <p className={`${styles.paragraph} mt-5`}>
                Procure pelos melhores items no nosso site
              </p>
            </div>

          </div>
            <div className="mx-auto justify-center items-center ">
              <SearchBar
                searchTerm={searchItem}
                changeFunction={handleInputChange}
              />
            </div>
          <div className={`mt-10 ${styles.boxWidth}`}>
            <Carousel slides={filteredProducts} />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Billing;
