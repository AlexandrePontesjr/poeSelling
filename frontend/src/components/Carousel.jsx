import { Items } from "../components";
import styles from "../styles";
const Carousel = ({ slides }) => (
  <div className="w-full flex overflow-x-scroll gap-8 items-center flex-col sm:flex-row">
    {slides.map((slide, index) => {
      return <Items key={index} product={slide} />;
    })}
  </div>
);

export default Carousel;
