import { Transition } from "@headlessui/react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";
import { getQuestions } from "../api/qas/qas";

const Faq = ({ game }) => {
  const toggleAccordion = (id) => {
    setQuestions(
      questions.map((q) =>
        q.id === id ? { ...q, isOpen: !q.isOpen } : { ...q, isOpen: false }
      )
    );
  };
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const res = await getQuestions(game.id);
        const questionsWithState = res.content.map((question) => ({
          ...question,
          isOpen: false,
        }));
        console.log(questionsWithState);
        setQuestions(questionsWithState);
      } catch (error) {
        console.log(error);
      }
    };
    fetchQuestions();
  }, [game]);

  return (
    <section
      id="faq"
      className={`${game.fontFamily} mt-4 h-full text-white md:text-4xl`}
    >
      <div id="title" className="flex flex-col-reverse md:flex-row">
        <h1 className="basis-1/4 text-xs mb-5 md:text-xl text-center">
          Have some doubt?
        </h1>
        <h1 className="basis-1/2 text-sm md:mb-10 md:text-6xl text-center">
          FAQ
        </h1>
        <h1 className="basis-1/4"></h1>
      </div>

      <div id="question-list" className="overflow-scroll no-scrollbar">
        <div
          id="list-item-1"
          className="flex flex-col items-center justify-center mb-[100px]"
        >
          {questions.map((question) => {
            return (
              <div key={question.id} className="w-[80%] md:w-[50%] mb-4">
                <div
                  className="flex justify-between items-center bg-black shadow-md px-4 py-2 rounded cursor-pointer"
                  onClick={() => toggleAccordion(question.id)}
                >
                  <h2
                    id="question"
                    className="text-white text-sm md:text-2xl font-semibold"
                  >
                    {question.question}
                  </h2>
                  <button className="focus:outline-none">
                    {question.isOpen ? <ChevronDown /> : <ChevronUp />}
                  </button>
                </div>
                <Transition
                  show={question.isOpen}
                  enter="transition duration-300 ease-out"
                  enterFrom="transform scale-y-0 opacity-0"
                  enterTo="transform scale-y-100 opacity-100"
                  leave="transition duration-300 ease-out"
                  leaveFrom="transform scale-y-100 opacity-100"
                  leaveTo="transform scale-y-0 opacity-0"
                >
                  {(ref) => (
                    <div className="bg-gray-100 px-4 py-2 rounded-b" ref={ref}>
                      <p className="text-gray-800 text-xs md:text-xl">
                        {question.answer}
                      </p>
                    </div>
                  )}
                </Transition>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faq;
