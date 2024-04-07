import { pix, google } from "../assets";
import { SearchBar } from "../components";
import styles, { layout } from "../styles";
import { servicesId } from "../constants";
import  { ServicesItems } from "../components";

import { itemsId } from "../constants";

const Billing = () => (
  <section id="items" className={``}>
    <SearchBar />
    <div className="">
      <div className={``}>
        {/* gradient start */}
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
        {/* gradient end */}
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Tome controle do Game <br className="sm:block hidden" /> Compre &
          Use Items da loja.
        </h2>
        <p className={`${styles.paragraph} max-w-[650px] mt-5`}>
          Procure pelos melhores items no nosso site
        </p>
      </div>
        {/* {servicesId.map((service) => <ServicesItems key={service.id} {...service} />)} */}
    </div>
  </section>
);

export default Billing;