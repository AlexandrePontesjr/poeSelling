import { feedback } from "../constants";
import styles from "../styles";
import FeedbackCard from "./FeedbackCard";





const Testimonials = () => (
<section id="clients" className={`${styles.paddingY} flex-col relative`}>
  <div className="w-full flex justify-between md:flex-row flex-col sm:mb-2 mb-1 relative z-[1]">
    <div className="justify-between items-center">
    <h2 className={styles.heading2}>
        Quem já utilizou nossos serviços.
      </h2>
    </div>
  </div>
  <div className="mt-20 flex flex-wrap justify-center w-full feedback-container relative z-[1]">
      {feedback.map((card) => <FeedbackCard key={card.id} {...card} />)}
  </div>
</section>
);

export default Testimonials;
