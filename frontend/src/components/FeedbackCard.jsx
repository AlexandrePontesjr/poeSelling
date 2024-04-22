import { RiStarFill } from "react-icons/ri";
import Avatar from '@mui/joy/Avatar';
import styles from "../styles";
const FeedbackCard = ({game, star, content, name, title, img }) => {
const generateStarsArray = (count) => {
  return Array.from({ length: count }, (_, index) => index + 1);
};

return (
  <div className={`${game.fontFamily} bg-discount-gradient grid grid-cols-1 items-center space-y-4 rounded-lg  p-6 shadow-sm `}>
    <div className="flex text-yellow-400 justify-center gap-1">
      {generateStarsArray(star).map((starId) => (
        <RiStarFill key={starId} />
      ))}
    </div>
    <div className="flex ">
      <div className="flex flex-row items-center">
        <Avatar size="lg">
          <img
            alt={title}
            src={img}
            className="size-14 rounded-full object-cover"
          />
        </Avatar>
        <span className={` ml-2 ${styles.paragraphTestemonials} `}>
          {content}
        </span>
      </div>
    </div>
    <span className={` text-center ${styles.testemonialsName}`}>
      {name}
    </span>
  </div>
);
};

export default FeedbackCard;
