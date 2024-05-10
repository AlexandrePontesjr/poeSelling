import { useState } from "react";
import { ScrollTop, Billing, Hero, Navbar, Services, Testimonials, Footer, FAQ } from "./components";
import styles from "./styles";

const App = ({ game }) => {

  const [loaded, setLoaded] = useState(false);

  const handleVideoLoaded = () => {
    setLoaded(true);
  };

  return (
    <>
      <div className="bg-black w-full">
        <div className="backgroundFundoPreto">
        <div className={` ${styles.flexCenter}`}>
          <video
            className={`hidden md:block video ${loaded ? "loaded" : ""}`}
            autoPlay muted loop
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              objectFit: "cover",
              zIndex: 0,
            }}
            onLoadedData={handleVideoLoaded}
          ><source src={game.videoSrc} type="" />
          </video>
          <div className={`${styles.boxWidth2} relative`}>
            <Navbar game={game} />
            <Hero game={game} />
          </div>
        </div>
        </div>
        <ScrollTop game={game} />
        <div className={`${styles.flexStart}`}>
          <div className={`${styles.boxWidth2} `}>
            <Billing game={game} />
          </div>
        </div>
        <div className={`${game.cssClassBG} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth2}`}>
            <Services game={game} />
          </div>
        </div>
        <div className={` ${styles.flexStart}`}>
          <div className={`${styles.boxWidth2}`}>
            <Testimonials game={game} />
          </div>
        </div>
        <div className={`${game.cssClassBgFaq} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth2}`}>
            <FAQ game={game} />
          </div>
        </div>
        <div className={`${styles.flexCenter}`}>
          <div className={`${styles.boxWidth2}`}>
            <Footer game={game} />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
