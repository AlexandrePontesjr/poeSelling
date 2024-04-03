import { Items } from "../components";
import styles from "../styles";
const Carousel = ({ slides }) => (
  <div className="">
    <div className={`${styles.flexCenter}`}>
      {slides.map((slide, index) => {
        return <Items key={index} product={slide} />;
      })}
    </div>
  </div>
);

export default Carousel;
