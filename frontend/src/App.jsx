import {  Hero, Navbar, Billing, Services, Testimonials , Footer, FAQ } from "./components";
// import { Faq } from "./components/sections";
import styles from "./styles";
import { BackgroundItems, BackgroundServices, logo } from "./assets";

const App = () => (
  <div className="bg-primary w-full">

    <div className={`${styles.flexCenter} relative`}>
    <video
            autoPlay
            muted
            loop
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              zIndex: 0,
            }}
          >
            <source src='../../public/diabloV.mp4' type="" />
          </video>
      <div className={`${styles.boxWidth2} h-[960px] relative`}>
        <Navbar />
        <Hero/>
      </div>
    </div>

    <div className="">
      <div className={`backgroundImageService ${styles.flexStart} `}>
        <div className={`h-full ${styles.boxWidth2} `}>
          <Billing />
        </div>
      </div>
    </div>
{/*
    <div className="backgroundImageService">
      <div className={` ${styles.flexStart}`}>
        <div className={`h-full ${styles.boxWidth2}`}>
          <Services />
        </div>
      </div>
    </div>

    <div className="backgroundImageTestemonial">
      <div className={` ${styles.flexStart}`}>
        <div className={`h-full ${styles.boxWidth2}`}>
          <Testimonials />
        </div>
      </div>
    </div>

    <div className={`backgroundImageItems ${styles.flexStart}`}>
      <div className={`h-full ${styles.boxWidth2}`}>
        <FAQ />
      </div>
      </div>
      
    <div className="">
      <div className={` ${styles.flexStart}`}>
        <div className={`${styles.boxWidth2}`}>
          <Footer />
        </div>
      </div>
    </div> */}

  </div>
);

export default App;
