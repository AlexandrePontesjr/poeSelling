import { Billing, Hero, Navbar, Services, Testimonials, Footer, FAQ } from "./components";
import styles from "./styles";

const App = ({ game }) => {
  return (
    <>
      <div className="bg-primary w-full">
        <div className={`${styles.flexCenter} relative`}>
          <video autoPlay muted loop
                style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    zIndex: 0,
                }}
            ><source src={game.videoSrc} type="" />
            </video>
          <div className={`${styles.boxWidth2} relative`}>
            <Navbar game={game} />
            <Hero game={game} />
          </div>
        </div>
        <div className={` ${game.cssClassBG} ${styles.flexStart} `}>
          <div className={`${styles.boxWidth2} `}>
            <Billing game={game} />
          </div>
        </div>
        <div className={`${game.cssClassBG} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth2}`}>
            <Services game={game} />
          </div>
        </div>
        <div className={`${game.cssClassBG} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth2}`}>
            <Testimonials game={game} />
          </div>
        </div>
        <div className={`${game.cssClassBG} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth2}`}>
            <FAQ game={game} />
          </div>
        </div>
        <div className={`bg-discount-gradient ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth2}`}>
            <Footer game={game} />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
