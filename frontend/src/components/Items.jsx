import styles from "../styles";
import { useEffect, useState, useCallback, useRef } from "react";
import { logoPoe } from "../assets";
import { Button } from "../components"



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
      customDate.getDate() + 1,
      customDate.getHours() + 3,
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

  return <div className={`cursor-pointer `}>
      <div href="#" className={` bg-white max-w-[450px] rounded-lg sm:px-4 sm:py-4 lg:px-4 mr-2`}>

          <div className={`bg-yellow-500 p-6  rounded-lg`}>
              <img
                src={logoPoe}
                alt=""
                className="rounded-lg h-[250px] w-[340px] bg-white"
              />

              <div className="rounded-lg p-2 mt-3">
                <h3
                  className="text-white font-pirata text-[50px] group-hover:underline group-hover:underline-offset-4 ml-auto"
                >
                  Item em Raro
                </h3>

              {/* <p className={`font-poppins text-white text-[26px] mb-6 mt-6`}>
                <span>{countDownTime?.days} days: {countDownTime?.hours}hrs: {countDownTime?.minutes}min {countDownTime?.seconds}sec</span>
              </p> */}

                <p className="mt-2 text-[40px] text-white">$150</p>
              </div>
              <Button/>
          </div>
        </div>
  </div>
}

export default Items;
