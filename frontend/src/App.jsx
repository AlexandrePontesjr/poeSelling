import { Billing, Hero, Navbar } from "./components";
import { Faq } from "./components/sections";
import styles from "./styles";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
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
      <div className={`h-full ${styles.boxWidth}`}>
        <Billing />
      </div>
    </div>
    <div className={`backgroundImageItems ${styles.flexStart}`}>
      <div className={`h-full ${styles.boxWidth}`}>
        <Faq />
      </div>
    </div>
  </div>
);

export default App;
