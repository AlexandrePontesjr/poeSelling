import {  Navbar, Hero, Billing, Services, Testimonials , Footer, Clients } from "./components";
import styles from "./styles";
import { BackgroundItems, BackgroundServices, logo } from "./assets";

const App = () => (
  <div className="bg-slate-900 w-full overflow-hidden">

        {/* <Navbar />
    <div className={`backgroundImageHero z-40 `}>
      <div className="relative z-50">
        <Hero />
      </div>
    </div>
    <div className="relative z-40">
      <div className="bg-cover bg-center h-screen w-full transform -skew-y-6 absolute top-0 left-0 -mt-32 backgroundImageItems"  alt="" />
    </div>
      <div className="relative z-40">
        <Billing />
      </div>
    <div className="relative z-30">
    <div className="bg-cover bg-center h-screen w-full transform -skew-y-6 absolute top-0 left-0 -mt-32 backgroundImageService"  alt="" />
    </div>
    <div className="relative z-[50]">
      <Services />
    </div>
    <div className="relative z-30">
    <div className="bg-cover bg-center h-screen w-full transform -skew-y-6 absolute top-0 left-0 -mt-32 backgroundImageTestemonial"  alt="" />
    </div>
    <div className="relative z-[50]">
      <Testimonials />
    </div>

    <div className="relative z-30">
    <div className="bg-cover bg-center  w-full transform -skew-y-6 absolute top-0 left-0 -mt-32 backgroundImage"  alt="" />
    </div>
    <div className="relative z-[50]">
      <Footer />
    </div> */}

    {/* <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div> */}
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>
    <div className={`backgroundImage ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero/>
      </div>
    </div>

    <div className="-mt-40 backgroundImageItems -skew-y-6">
      <div className={`skew-y-6 ${styles.flexStart}`}>
        <div className={`h-full ${styles.boxWidth}`}>
          <Billing />
        </div>
      </div>
    </div>

    <div className="backgroundImageService -skew-y-6">
      <div className={`skew-y-6 ${styles.flexStart}`}>
        <div className={`h-full ${styles.boxWidth}`}>
          <Services />
        </div>
      </div>
    </div>

    <div className="backgroundImageTestemonial -skew-y-6">
      <div className={`skew-y-6 ${styles.flexStart}`}>
        <div className={`h-full ${styles.boxWidth}`}>
          <Testimonials />
        </div>
      </div>
    </div>

    <div className="-skew-y-6">
      <div className={`skew-y-6 ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </div>
{/* <Stats />
        <Business />
        <Billing />
        <CardDeal />
        <Testimonials />
        <Clients />
        
         */}
    {/* <Footer /> */}

      {/* <div className="relative z-30">
        {/* <div
          className="bg-cover bg-center h-screen w-full transform -skew-y-6 absolute top-0 left-0"
          style={{
            backgroundImage: `url(${BackgroundItems})`
          }}
        ></div>
        <div className="relative z-50">
          <Footer />
      </div>
      </div> */}

  </div>
);

export default App;
