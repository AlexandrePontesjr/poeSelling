import styles from "./styles";
import { servicesId } from "./constants";
import { SliderCards, Billing, Services,ServicesItems, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero } from "./components";

const App = () => (
  <div className="bg-primary w-full">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`backgroundImage ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

      <div className={`backgroundImageItems ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Billing />
        </div>
      </div>

    <div className={`BackgroundServices ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Services />
          <div className="">
            <SliderCards />
          </div>
      </div>
    </div>
    <div className={`BackgroundTestemonial ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
          <Testimonials />
      </div>
    </div>
    <div className={`${styles.flexCenter}`}>
      <Footer/>
    </div>


</div>
);

export default App;
