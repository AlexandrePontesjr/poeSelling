import { Billing, Navbar, Hero } from "./components";
import { Faq } from "./components/sections";
import styles from "./styles";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>
    {/* <div className={`backgroundImage ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div> */}
    {/* <div className={`backgroundImageItems ${styles.flexStart}`}>
      <div className={`h-full ${styles.boxWidth}`}>
        <Billing />
        <Stats />
        <Business />
        <Billing />
        <CardDeal />
        <Testimonials />
        <Clients />
        <CTA />
        <Footer />
      </div>
    </div> */}
    <Faq />
  </div>
);

export default App;
