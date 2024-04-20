import { motion } from "framer-motion";
import { Items } from "../components";

const Carousel = ({ slides }) => {
  return (
    <div
      className={`gap-1 grid grid-cols-1 ss:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 overflow-scroll no-scrollbar `}
    >
      {slides.map((slide, index) => (
        <motion.div
          key={index}
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: index * 0.2 }}
        >
          <Items key={index} product={slide} />
        </motion.div>
      ))}
    </div>
  );
};

export default Carousel;
