import { Items } from "../components";
const Carousel = ({ slides }) => (
  <div className="w-full flex overflow-x-scroll no-scrollbar gap-8 items-center flex-col sm:flex-row">
    {slides.map((slide, index) => {
      return <Items key={index} product={slide} />;
    })}
  </div>
);

export default Carousel;
