import { RiStarFill } from "react-icons/ri";

const FeedbackCard = ({star, content, name, title, img }) => {

const generateStarsArray = (count) => {
  return Array.from({ length: count }, (_, index) => index + 1);
};

return (
<div className="flex justify-between flex-col px-5 py-5 rounded-[20px]  max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-1 hover:bg-yellow-400">
  <div className="rounded-lg bg-white/70 h-[250px] w-[300px] p-6 shadow-sm sm:p-8">
    <div className="flex  items-center gap-4">
      <img
        alt={title}
        src={img}
        className="size-14 rounded-full object-cover"
      />

      <div>
        <div className="flex text-yellow-400 justify-center gap-0.5">
                {generateStarsArray(star).map((starId) => (
                <RiStarFill key={starId} />
              ))}
        </div>

        <p className="mt-0.5 text-lg font-medium text-gray-900">{name}</p>
      </div>
    </div>

    <p className="mt-4 text-gray-700 ">
      {content}
    </p>
  </div>

</div>
);
};

export default FeedbackCard;
