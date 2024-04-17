import {  Hero, Navbar, Billing, Services, Testimonials , Footer, Clients } from "./components";
import { Faq } from "./components/sections";
import styles from "./styles";
import { BackgroundItems, BackgroundServices, logo } from "./assets";

const App = () => (
  <div className="bg-primary w-full">


    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        {/* <Navbar /> */}
      </div>
    </div>
    <div className={`${styles.flexStart} relative`}>
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
      <div className={`${styles.boxWidth} relative`}>
          <Navbar />
        <Hero/>
      </div>
    </div>


    <div className="">
      <div className={`backgroundImageService ${styles.flexStart} `}>
        <div className={`h-full ${styles.boxWidth} `}>
          <Billing />
        </div>
      </div>
    </div>

    <div className="backgroundImageService">
      <div className={` ${styles.flexStart}`}>
        <div className={`h-full ${styles.boxWidth}`}>
          <Services />
        </div>
      </div>
    </div>

    <div className="backgroundImageTestemonial">
      <div className={` ${styles.flexStart}`}>
        <div className={`h-full ${styles.boxWidth}`}>
          <Testimonials />
        </div>
      </div>
    </div>

    <div className="-">
      <div className={` ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
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
