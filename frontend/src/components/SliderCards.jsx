import React, { useState } from "react"; // eslint: 'React' is defined but never used.
import { servicesId } from "../constants";
import { pix } from "../assets"
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs"; // react-router-dom: 'Link' is defined but never used.

export default function SliderCards() {
  let [current, setCurrent] = useState(0);

  let previousSlide = () => {
    if (current === 0) setCurrent(servicesId.length - 1);
    else setCurrent(current - 1);
  };

  let nextSlide = () => {
    if (current === servicesId.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  return (
    <div className="">
      <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative gap-1 z-[1]" style={{ transform: `translateX(-${current * 100}%)` }}>
        {servicesId.map((item, index) => (
          <div className="" key={index}>
            {/* <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]"> */}
            <div href="#" className={`drop-shadow-xl m-auto aspect-square  lg:h-[400px] lg:w-[250px] max-w-[450px]`}>
                    {/* <div href="#" className={` bg-white max-w-[450px] rounded-lg sm:px-4 sm:py-4 lg:px-4 mr-2`}> */}
                        <div className={`bg-black p-4 py-10 rounded-xl`}>
                            <img
                                src={[item.image]}
                                alt=""
                                className="rounded-lg aspect-square lg:h-[200px] lg:w-[200px] items-center bg-gray-700 m-auto"
                            />
                                <div className="rounded-lg mt-2">
                                    <h3
                                    className="text-white font-pirata text-[30px] group-hover:underline group-hover:underline-offset-4 ml-auto"
                                    >
                                    {[item.id]} {[item.name]}
                                    </h3>
                                <div className="flex">
                                    <p className="mt-1 text-[20px] text-white">R$ {[item.value]}</p>
                                      
                                        <img
                                          className="m-auto lg:h-[50px] lg:w-[50px] cursor-pointer"
                                          src={pix}
                                          alt=""
                                        />
                                </div>
                                </div>
                        </div>
                    </div>
          </div>
        ))}
      </div>

      <div className="top-0 h-full w-full justify-between items-center flex text-white px-10 text-3xl">
        <button onClick={previousSlide}>
          <BsFillArrowLeftCircleFill />
        </button>
        <button onClick={nextSlide}>
          <BsFillArrowRightCircleFill />
        </button>
      </div>

      <div className="relative bottom-0 py-4 flex justify-center gap-3 w-full">
        {servicesId.map((item, id) => (
          <div key={id} className={`rounded-full w-5 h-5 cursor-pointer ${id === current? "bg-white" : "bg-gray-500"}`}>
          </div>
        ))}
      </div>
    </div>
  );
}