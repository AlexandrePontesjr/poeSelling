import {  Navbar, Hero, Billing, Services, Testimonials , Footer, Clients } from "./components";
import styles from "./styles";
import { BackgroundItems, BackgroundServices, logo } from "./assets";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">

    <div className={`backgroundImageHero z-40 `}>
      <div className="relative z-50">
        <Navbar />
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
    <div className="bg-cover bg-center h-screen w-full transform -skew-y-6 absolute top-0 left-0 -mt-32 backgroundImage"  alt="" />
    </div>
    <div className="relative z-[50]">
      <Footer />
    </div>

    {/* <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>
    <div className={`backgroundImage ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        
      </div>
    </div>
    <div className={`backgroundImageItems ${styles.flexStart}`}>
      <div className={`h-full ${styles.boxWidth}`}>
        <Billing />
      </div>
    </div> */}
    {/* <div className={`backgroundImageService  ${styles.flexStart}`}>
      <div className={`h-full ${styles.boxWidth}`}>
        <Services />
      </div>
    </div> */}
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
