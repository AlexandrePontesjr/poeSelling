import { useState } from "react";
import { Items,Items2 } from "../components";
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from "react-icons/bs";

const Carousel = ({ slides }) => {

  let [ current , setCurrent] = useState (0);

  let previousSlide = () => {
    if (current === 0) setCurrent(slides.length - 1);
      else setCurrent(current - 1);
    }

    let nextSlide = () => {
      if (current === slides.length - 1) setCurrent(0);
      else setCurrent(current + 1);
    }
 return (
    <div className="mt-10 flex flex-wrap justify-start w-full feedback-container gap-2">

          {slides.map((slide, index) => {
            return <Items key={index} product={slide} />;
          })}
    <div className="mt-10 items-center flex flex-wrap justify-start w-full feedback-container gap-2">
          {slides.map((slide, index) => {
            return <Items2 key={index} product={slide} />;
          })}
    </div>
    </div>
)};

export default Carousel;
