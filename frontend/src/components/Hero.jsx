import styles from "../styles";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";
import Items from "./Items";

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        {/* <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20%</span> Discount For{" "}
            <span className="text-white">1 Month</span> Account
          </p>
        </div> */}

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="font-pirata flex-1 font-semibold ss:text-[72px] text-[52px] text-yellow-400 ss:leading-[100.8px] leading-[75px]">
            Get Items <br className="sm:block hidden" />{" "}
            <span className="text-sky-200"> with Best Price</span>{" "}
          </h1>
          </div>
        {/* </div> */}

        <h1 className="font-pirata font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          of Path of Exile Market
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Our team of seasoned adventurers employs a rigorous methodology
        to pinpoint the loot items that best align with your gameplay 
        needs. By delving into dungeons,
         defeating formidable bosses, and completing maps, we curate
          a selection of loot items tailored specifically to your
           character&apos;s strengths and playstyle.
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
      <Items />
        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      {/* <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div> */}
    </section>
  );
};

export default Hero;
