import { star } from "../assets";

const FeedbackCard = ({ content, name, title, img }) => (
<div className="flex justify-between flex-col px-5 py-5 rounded-[20px]  max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-1 feedback-card">
  <div className="rounded-lg bg-slate-200/70 p-6 shadow-sm sm:p-8">
    <div className="flex  items-center gap-4">
      <img
        alt={title}
        src={img}
        className="size-14 rounded-full object-cover"
      />

      <div>
        <div className="ml-11 flex size-6 justify-center gap-0.5">
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
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


export default FeedbackCard;
