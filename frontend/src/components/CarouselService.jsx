import { ListService } from ".";
import { motion } from "framer-motion";
const Carousel = ({ slides, game }) => (
  <div
      className={`gap-2 grid grid-cols-1 ss:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 `}
    >

    {slides.map((slide, index) => (
      <motion.div
        key={index}
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: index * 0.2 }}
      >
      <ListService key={index} product={slide} game={game} />
    </motion.div>
    ))}
  </div>
);

export default Carousel;
