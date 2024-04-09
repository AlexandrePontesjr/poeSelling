import { useEffect, useState } from "react";
import { getQuestions } from "../../api/qas/qas";

const Faq = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const res = await getQuestions();
        setQuestions(res.content);
      } catch (error) {
        console.log(error);
      }
    };
    fetchQuestions();
  }, []);

  return (
    <section
      id="faq"
      className="font-pirata mt-4 h-full text-white md:text-4xl"
    >
      <div id="title" className="flex flex-col-reverse md:flex-row">
        <h1 className="basis-1/4 text-xs md:text-xl text-center">
          Have some doubt?
        </h1>
        <h1 className="basis-1/2 text-sm md:text-6xl text-center">FAQ</h1>
        <h1 className="basis-1/4"></h1>
      </div>
      <div id="question-list">
        <div id="list-item-1" className="grid grid-cols-2 gap-4 text-center">
          {questions.map((question) => {
            return (
              <div key={question.id}>
                <div id="question">{question.question}</div>
                <div id="answer" className="md:text-2xl">
                  {question.answer}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faq;
