import Rating from "../Rating";
const TestimonialsFields = ({
  entity,
  setMessage,
  setAvatarId,
  setRating,
  setStatus,
}) => {
  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate);
  };

  const onPointerEnter = () => console.log("Enter");
  const onPointerLeave = () => console.log("Leave");
  const onPointerMove = (value, index) => console.log(value, index);

  return (
    <div className="grid gap-4">
      <div className="grid gap-1.5">
        <label
          className="font-medium text-white peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm"
          htmlFor="name"
        >
          Message
        </label>
        {entity != null ? (
          <input
            onChange={(e) => {
              setMessage(e.target.value);
              entity.message = e.target.value;
            }}
            className="flex h-10 w-full rounded-md border border-input text-white bg-black px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            id="message"
            value={entity.message}
            placeholder="Enter the message"
          />
        ) : (
          <input
            onChange={(e) => setMessage(e.target.value)}
            className="flex h-10 w-full rounded-md border border-input text-white bg-black px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            id="message"
            placeholder="Enter the message"
          />
        )}
      </div>
      <div className="grid gap-1.5">
        <label className="font-medium text-white peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm">
          Rating
        </label>
        <Rating />
      </div>
      <div className="grid gap-1.5">
        <label
          className="font-medium text-white peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm"
          htmlFor="email"
        >
          Answer
        </label>
        {entity != null ? (
          <input
            onChange={(e) => {
              setAnswer(e.target.value);
              entity.answer = e.target.value;
            }}
            className="flex h-10 w-full rounded-md border border-input text-white bg-black px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            id="answer"
            value={entity.answer}
            placeholder="Enter the answer"
            type="text"
          />
        ) : (
          <input
            onChange={(e) => setAnswer(e.target.value)}
            className="flex h-10 w-full rounded-md border border-input text-white bg-black px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            id="answer"
            placeholder="Enter the answer"
            type="text"
          />
        )}
      </div>
    </div>
  );
};

export default TestimonialsFields;
