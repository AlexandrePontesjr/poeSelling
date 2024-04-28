import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { createProduct, editProduct } from "../api/products/products";
import { createQuestion, editQuestion } from "../api/qas/qas";
import Button from "./Button";
import {
  createTestimonials,
  editTestimonials,
} from "../api/testimonials/testimonials";
import { ProductFields, QuestionFields } from "./crud_modal";
import TestimonialsFields from "./crud_modal/TestimonialsFields";

const CrudModal = ({ show, type, game, close, nameAction, action, entity }) => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [avatarId, setAvatarId] = useState("");
  const [rating, setRating] = useState(0);
  const [status, setStatus] = useState(1);
  const [price, setPrice] = useState("");
  const [image_url, setImageUrl] = useState("");
  const [description, setDescription] = useState("");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  useEffect(() => {
    const fetchEntity = async () => {
      if (entity != null) {
        setId(entity.id);
        setName(entity.name);
        setDescription(entity.description);
        setPrice(entity.price);
        setImageUrl(entity.image);
        setQuestion(entity.question);
        setAnswer(entity.answer);
        setMessage(entity.message);
        setAvatarId(entity.avatarId);
        setRating(entity.rating);
        setStatus(entity.status);
      } else {
        setId("");
        setName("");
        setDescription("");
        setPrice("");
        setImageUrl("");
        setQuestion("");
        setAnswer("");
        setMessage("");
        setAvatarId("");
        setRating(0);
        setStatus(1);
      }
    };
    fetchEntity();
  }, [entity]);

  //TODO: Melhorar a experiencia do usuario, quando não tiver mais nada pra fazer kk
  // const handleClickOutside = (event) => {

  //    if (event.target.id == "outside") {

  //       close(nameAction ? nameAction : "close");
  //    }
  // };

  // useEffect(() => {
  //    document.addEventListener("click", handleClickOutside);

  //    return () => {
  //       document.removeEventListener("click", handleClickOutside);
  //    };
  // }, []);

  function getPrice() {
    console.log(price);
    if (Number(price)) return price;
    else return price.split("$")[1];
  }

  function handleSubmit() {
    console.log("action: " + action);
    console.log("game" + game);
    action == "edit"
      ? type == "qa"
        ? editQuestion({
            id: id,
            question: question,
            answer: answer,
            gameId: game,
          })
        : type == "product"
        ? editProduct({
            id: id,
            name: name,
            price: getPrice(),
            type: type == "service" ? "SERVICE" : "ITEM",
            description: description,
            image: image_url,
            createdBy: localStorage.username,
            gameId: game,
          })
        : editTestimonials({
            id: id,
            message: message,
            avatarId: avatarId,
            name: name,
            rating: rating,
            status: status,
            gameId: game,
          })
      : type == "qa"
      ? createQuestion({
          question: question,
          answer: answer,
          gameId: game,
        })
      : type == "product"
      ? createProduct({
          name: name,
          price: getPrice(),
          type: type == "service" ? "SERVICE" : "ITEM",
          description: description,
          image: image_url,
          createdBy: localStorage.username,
          gameId: game,
        })
      : createTestimonials({
          message: message,
          avatarId: avatarId,
          name: name,
          rating: rating,
          status: status,
          gameId: game,
        });
  }

  return (
    <>
      {show ? (
        <div
          id="outside"
          className="flex absolute inset-0 z-0 flex-1 items-center justify-center "
        >
          <div className="grid gap-4 w-full max-w-5xl z-10 bg-slate-950">
            <div
              className="rounded-lg border bg-card text-card-foreground shadow-sm"
              data-v0-t="card"
            >
              <div className="flex flex-row items-center justify-between space-x-2 border-gray-200 rounded-lg p-4">
                <h3 className="whitespace-nowrap text-white tracking-tight text-[23px] font-poppins">
                  {nameAction}
                </h3>
                <X
                  onClick={() => close()}
                  className="text-sm text-white cursor-pointer text-muted-foreground"
                />
              </div>
              <div className="p-4 ">
                {type == "qa" ? (
                  <QuestionFields
                    entity={entity}
                    setQuestion={setQuestion}
                    setAnswer={setAnswer}
                  />
                ) : type == "product" || type == "service" ? (
                  <ProductFields
                    entity={entity}
                    setName={setName}
                    setDescription={setDescription}
                    setPrice={setPrice}
                    setImageUrl={setImageUrl}
                    type={type}
                  />
                ) : (
                  <TestimonialsFields
                    entity={entity}
                    setMessage={setMessage}
                    setAvatarId={setAvatarId}
                    setRating={setRating}
                    setName={setName}
                    setStatus={setStatus}
                    game={game}
                  />
                )}
              </div>
              <div className="flex items-center p-4 justify-between">
                <Button
                  onClickEvent={() => handleSubmit(type)}
                  color={"bg-green-500"}
                  textColor={"text-white"}
                  className="w-full sm:w-auto"
                >
                  {nameAction.split(" ")[0]}
                </Button>
                <Button
                  onClickEvent={() => close("cancel")}
                  textColor={"text-white"}
                  color={"bg-red-500"}
                  className="w-full sm:w-auto"
                >
                  Cancel
                </Button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default CrudModal;
