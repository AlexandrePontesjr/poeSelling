import { motion } from "framer-motion";
import { Items } from "../components";

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
    <div className={`gap-2 grid grid-cols-1 ss:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 overflow-scroll no-scrollbar h-[500px]`}>
        {slides.map((slide, index) => (
          <motion.div
            key={index}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: index * 0.2 }}
          >
            <Items key={index} product={slide}  />
          </motion.div>
        ))}
      </div>
)};

export default Carousel;
