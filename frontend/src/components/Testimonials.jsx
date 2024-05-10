import Rating from "@mui/material/Rating";
import { useEffect, useState } from "react";
import { createTestimonials } from "../api/testimonials/testimonials";
import { getApprovedTestimonials } from "../api/testimonials/testimonials";
import { FeedbackCard, SelectAvatar } from "../components";
import Modal from "../components/Modal";

const Testimonials = ({ game }) => {
  const [feedback, setFeedback] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [avatar, setAvatar] = useState("");
  const [name, setName] = useState("");
  const [rating, setRating] = useState(5);
  const [message, setMessage] = useState("");
  const [feedbackSent, setFeedbackSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const handleModalToggle = () => {
    setModalOpen(!modalOpen);
    setAvatar("");
    setName("");
    setRating(0);
    setMessage("");
    setFeedbackSent(false);
  };

  const fetchTestimonials = async (game) => {
    try {
      console.log(game.id);
      const res = await getApprovedTestimonials(game.id);
      setFeedback(res.content);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTestimonials(game);
  }, [game]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!avatar || !name || !rating || !message) {
      setErrorMessage("Por favor, preencha todos os campos.");
      return;
    }

    console.log("Avatar:", avatar);
    console.log("Name:", name);
    console.log("Rating:", rating);
    console.log("Message:", message);
    createTestimonials({
      message: message,
      avatarId: avatar.split("-")[0] - 1,
      name: name,
      rating: rating,
      status: "PENDING",
      gameId: game.id,
    });
    setAvatar("");
    setName("");
    setRating(0);
    setMessage("");
    setModalOpen(false);
    setFeedbackSent(true);
    setTimeout(() => {
      setFeedbackSent(false);
    }, 2000);
  };

  return (
    <section id="clients" className="w-full py-20 md:py-24 lg:py-32">
      <div className={`${game.fontFamily}  px-4 md:px-6`}>
        <div className={` semi-bold space-y-4 text-center`}>
          <h2 className="text-yellow-400 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Depoimentos de Jogadores
          </h2>
          <p
            className={`text-white mx-auto max-w-[700px]  md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed `}
          >
            Veja o que nossos jogadores estão dizendo sobre a nossa plataforma.
          </p>
        </div>
        <div className="mt-4 flex justify-center">
          <button
            onClick={handleModalToggle}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Enviar Feedback
          </button>
        </div>
        {feedbackSent && (
          <div
            className={` items-center justify-center text-center text-white bg-green-400/50 py-2 px-4 rounded mt-4`}
          >
            <span>
              Seu Feedback foi enviado para análise. Obrigado e volte sempre.
            </span>
          </div>
        )}
        <div className="mt-8 grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {feedback.map((card) => (
            <FeedbackCard key={card.id} {...card} game={game} />
          ))}
        </div>
        <Modal isOpen={modalOpen} onClose={handleModalToggle} game={game}>
          <div className="">
            <h2 className="text-xl font-bold mb-4">Adicionar Novo Feedback</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="avatar"
                  className="block text-sm font-medium text-gray-900"
                >
                  Avatar:
                </label>
                <SelectAvatar
                  value={avatar}
                  game={game}
                  onChange={(e) => setAvatar(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-900"
                >
                  Nome:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="rating"
                  className="block text-sm font-medium text-gray-900"
                >
                  Classificação:
                </label>
                <Rating
                  name="simple-controlled"
                  id="rating"
                  value={rating}
                  onChange={(event, newValue) => {
                    setRating(newValue);
                  }}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-900"
                >
                  Mensagem:
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                ></textarea>
              </div>
              <div className="mt-4">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Enviar
                </button>
                <button
                  onClick={handleModalToggle}
                  className="ml-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
                >
                  Cancelar
                </button>
              </div>
              {errorMessage && (
                <div className="text-red-500 mt-2">{errorMessage}</div>
              )}
            </form>
          </div>
        </Modal>
      </div>
    </section>
  );
};

export default Testimonials;
