import { feedback } from "../constants";
import styles from "../styles";
import FeedbackCard from "./FeedbackCard";
import Avatar from '@mui/joy/Avatar';

const Testimonials = ({game}) => (
  <section id="clients" className="w-full py-12 md:py-24 lg:py-32">
  <div className={` container px-4 md:px-6`}>
    <div className={`${game.fontFamily} semi-bold space-y-4 text-center`}>
      <h2 className="text-yellow-400 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Depoimentos de Jogadores</h2>
      <p className={`text-white mx-auto max-w-[700px]  md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed `}>
        Veja o que nossos jogadores estão dizendo sobre a nossa plataforma.
      </p>
    </div>
    <div className="mt-8 grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    {feedback.map((card) => <FeedbackCard key={card.id} {...card} game={game} />)}
    </div>
    </div>
</section>
);


export default Testimonials;
