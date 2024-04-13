import { useEffect, useState } from "react";
import { getProducts } from "../api/products/products";
import { Carousel, SearchBar } from "../components";
import styles, { layout } from "../styles";

const Billing = () => {
  const [products, setProducts] = useState([]);
  const [searchItem, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await getProducts(1);
        setProducts(res.content);
        setFilteredProducts(res.content);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  });

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
    <section id="items" className={``}>
      <div className="">
        <div className={``}>
          {/* gradient start */}
          <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
          <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
          {/* gradient end */}
        </div>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="text-center sm:text-left">
              <h2 className={styles.heading2}>
                Tome controle do Game <br className="sm:block hidden" /> Compre
                & Use Items da loja.
              </h2>

              <p className={`${styles.paragraph} max-w-[650px] mt-5`}>
                Procure pelos melhores items no nosso site
              </p>
            </div>

            <div className="mt-4 flex flex-col gap-4 sm:w-3/5 h-full w-full sm:mt-0 sm:flex-row sm:items-center">
              <SearchBar
                searchTerm={searchItem}
                changeFunction={handleInputChange}
              />
            </div>
          </div>

          <div className={layout.sectionInfo}>
            <Carousel slides={filteredProducts} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Billing;
