import { useState } from "react";
import { Items,Items2 } from "../components";
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from "react-icons/bs";
import  styles  from "../styles"
import { motion } from "framer-motion";

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
    <div className={`${styles.boxWidth} max-h-[520px]`}>
        <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-5">
        {/* grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-5 */}
        {slides.map((slide, index) => (
          <motion.div
            key={index}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: index * 0.2 }}
          >
            <Items key={index} product={slide} className="" />
          </motion.div>
        ))}
      </div>
    </div>
)};

export default Carousel;
