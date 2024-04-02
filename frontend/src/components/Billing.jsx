import { pix, google } from "../assets";
import { SearchBar } from "../components";
import styles, { layout } from "../styles";
import  { Carousel } from "../components";

let slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    title: "Poe Selling",
    description: "Poe Selling is a website that allows you to sell your PoE items.",
    link: "https://poeselling.herokuapp.com/",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    title: "Poe Selling",
    description: "Poe Selling is a website that allows you to sell your PoE items.",
    link: "https://poeselling.herokuapp.com/",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    title: "Poe Selling",
    description: "Poe Selling is a website that allows you to sell your PoE items.",
    link: "https://poeselling.herokuapp.com/",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    title: "Poe Selling",
    description: "Poe Selling is a website that allows you to sell your PoE items.",
    link: "https://poeselling.herokuapp.com/",
  }
];

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
      <div className={layout.sectionInfo}>

        <Carousel slides={slides}/>
      </div>
    </div>
  </section>
);

export default Billing;