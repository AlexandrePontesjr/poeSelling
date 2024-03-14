import styles from "../styles";
// import { arrowUp } from "../assets";

const Items = () => (
  
  <div className={`${styles.flexCenter} w-[300px] h-[380px] rounded-lg bg-yellow-500 p-2 cursor-pointer`}>
     <div className={`${styles.flexCenter} flex-col bg-yellow-300 w-[100%] h-[100%] rounded-lg`}>
      <div className={`${styles.flexStart} flex-row`}>
        <p className="font-pirata font-medium text-[18px] leading-[23.4px]">
          <span className="text-black">50 divine Orbs</span>
        </p>
        {/* <img src={arrowUp} alt="arrow-up" className="w-[23px] h-[23px] object-contain" /> */}
      </div>
      
      <p className="font-pirata font-medium text-[18px] leading-[200px]">
        <span className="text-black">3 days: 5hrs: 45min 20sec</span>
      </p>
    </div>
    {/* <div className={`${styles.itemsCard}`}></div> */}
  </div>
);

export default Items;
