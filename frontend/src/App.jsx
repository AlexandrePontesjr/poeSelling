import { Billing, Services, Hero, Navbar,Testimonials,FAQ,Footer } from "./components";
import styles from "./styles";

const App = ({ game }) => {
  return (
    <>
      <div className="bg-primary w-full">
        <div className={`${styles.flexCenter} relative`}>
          <video
            autoPlay
            muted
            loop
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              objectFit: "cover",
              zIndex: 0,
            }}
          >
            {game == "2" ? (
              <source src="public/diabloV.mp4" type="" />
            ) : game == "1" ? (
              <source src="public/poe_necropolis_trailer.mp4" type="" />
            ) : (
              <source src="public/last_epoch_trailer.mp4" type="" />
            )}
          </video>
          <div className={`${styles.boxWidth2} h-[960px] relative`}>
            <Navbar game={game} />
            <Hero />
          </div>
        </div>

{/*GAME 1 PATH OF EXILE, 2 DIABLO, 3 LAST EPOCH*/}
        <div className="">
          <div className={`
              ${game == "2" ? ('backgroundImageItemsDiablo') : game == "1" ? ('backgroundImagepathExile') : ('backgroundImagelastEpoch')}
          ${styles.flexStart} `}>
            <div className={`h-full ${styles.boxWidth2} `}>
              <Billing game={game} />
            </div>
          </div>
        </div>
      </div>
{/*
      <div className={`
      ${game == "2" ? ('backgroundImageItemsDiablo') : game == "1" ? ('backgroundImagepathExile') : ('backgroundImagelastEpoch')}
      ${styles.flexStart}`}>
        <div className={`h-full ${styles.boxWidth2}`}>
          <Services game={game} />
        </div>
      </div>


      <div className={`
      ${game == "2" ? ('backgroundImageItemsDiablo') : game == "1" ? ('backgroundImagepathExile') : ('backgroundImagelastEpoch')}
      ${styles.flexStart}`}>
        <div className={`h-full ${styles.boxWidth2}`}>
          <Testimonials />
        </div>
      </div>

    <div className="backgroundImageTestemonial">
      <div className={` ${styles.flexStart}`}>
        <div className={`h-full ${styles.boxWidth2}`}>
          <FAQ />
        </div>
      </div>
    </div>
    <div className={`bg-black`}>
      <Footer />
    </div> */}

    </>
  );
};

export default App;
