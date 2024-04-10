import { useState } from "react";
import { Items } from "../components";
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
 return (<div className="relative w-full flex overflow-hidden no-scrollbar gap-8 items-center flex-col sm:flex-row">
      <div className={`flex items-center`}>
          {slides.map((slide, index) => {
            return <Items key={index} product={slide} />;
          })}
      <div className="inset-0 justify-between flex text-white text-[30px]">
          <button onClick={previousSlide}>
            <BsFillArrowLeftCircleFill />
          </button>
          <button onClick={nextSlide}>
            <BsFillArrowRightCircleFill />
          </button>
      </div>
      </div>
</div>
)};

export default Carousel;
