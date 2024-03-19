import styles from "../styles";
import { useEffect, useState, useCallback, useRef } from "react";
// import { arrowUp } from "../assets";



const Items = () => {

  const [countDownTime, setCountDownTIme] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const minuteCircle = useRef();
  const secondCircle = useRef();
  const hourCircle = useRef();
  const daysCircle = useRef();

  const changeCircleoffset = (seconds, minutes, hours, days) => {
    if (daysCircle.current) {
      daysCircle.current.style.strokeDashoffset = `${
        days > 0 ? 440 - (days * 440) / 365 : 440
      }px`;
      hourCircle.current.style.strokeDashoffset = `${
        hours > 0 ? 451 - (hours * 451) / 24 : 451
      }px`;
      minuteCircle.current.style.strokeDashoffset = `${
        minutes > 0 ? 451 - (minutes * 451) / 60 : 451
      }px`;
      secondCircle.current.style.strokeDashoffset = `${
        seconds > 0 ? 451 - (seconds * 451) / 60 : 451
      }px`;
    }
  };
  const getTimeDifference = useCallback((countDownDate) => {
    const currentTime = new Date().getTime();
    const timeDiffrence = countDownDate - currentTime;
    const days = Math.floor(timeDiffrence / (24 * 60 * 60 * 1000));
    const hours = Math.floor(
      (timeDiffrence % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeDiffrence % (60 * 60 * 1000)) / (1000 * 60)
    );
    const seconds = Math.floor((timeDiffrence % (60 * 1000)) / 1000);
    if (timeDiffrence < 0) {
      changeCircleoffset(seconds, minutes, hours, days);
      setCountDownTIme({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      });
      clearInterval();
    } else {
      changeCircleoffset(seconds, minutes, hours, days);
      setCountDownTIme({
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
      });
    }
  }, []);
  const startCountDown = useCallback(() => {
    const customDate = new Date();
    const countDownDate = new Date(
      customDate.getFullYear(),
      customDate.getMonth(),
      customDate.getDate() + 50,
      customDate.getHours() + 18,
      customDate.getMinutes() + 25,
      customDate.getSeconds() + 5
    );
    setInterval(() => {
      getTimeDifference(countDownDate.getTime());
    }, 1000);
  }, [getTimeDifference]);
  useEffect(() => {
    startCountDown();
  }, [startCountDown]);
  
  return <div className={`${styles.flexCenter} w-[300px] h-[380px] rounded-lg bg-yellow-500 p-2 cursor-pointer`}>
     <div className={`${styles.flexCenter} flex-col bg-yellow-300 w-[100%] h-[100%] rounded-lg`}>
      <div className={`${styles.flexStart} flex-row`}>
        <p className="font-pirata font-medium text-[18px] leading-[23.4px]">
          <span className="text-black">50 divine Orbs</span>
        </p>
        {/* <img src={arrowUp} alt="arrow-up" className="w-[23px] h-[23px] object-contain" /> */}
      </div>
      
      <p className="font-pirata font-medium text-[18px] leading-[200px]">
        <span className="text-black">{countDownTime?.days} days: {countDownTime?.hours}hrs: {countDownTime?.minutes}min {countDownTime?.seconds}sec</span>
      </p>
    </div>
    {/* <div className={`${styles.itemsCard}`}></div> */}
  </div>
}

export default Items;
