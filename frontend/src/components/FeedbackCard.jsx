import { RiStarFill } from "react-icons/ri";
import Avatar from "@mui/joy/Avatar";
import styles from "../styles";
import { AvatarFromSprite } from "../components";
import { getGameDetailsById } from "../constants";
const FeedbackCard = ({ game, rating, message, name, avatarId }) => {
  const generateStarsArray = (count) => {
    return Array.from({ length: count }, (_, index) => index + 1);
  };

  return (
    <div
      className={`${game.fontFamily} bg-discount-gradient grid grid-cols-1 items-center space-y-4 rounded-lg  p-6 shadow-sm `}
    >
      <div className="flex text-yellow-400 justify-center gap-1">
        {generateStarsArray(rating).map((starId) => (
          <RiStarFill key={starId} />
        ))}
      </div>
      <div className="flex ">
        <div className="flex flex-row items-center">
          <Avatar size="lg">
            <AvatarFromSprite
              name={getGameDetailsById(game.id).avatars[avatarId].name}
              imageClass={getGameDetailsById(game.id).avatars[avatarId].image}
              position={getGameDetailsById(game.id).avatars[avatarId].position}
            />
          </Avatar>
          <span className={` ml-2 ${styles.paragraphTestemonials} `}>
            {message}
          </span>
        </div>
      </div>
      <span className={` text-center ${styles.testemonialsName}`}>{name}</span>
    </div>
  );
};

export default FeedbackCard;
