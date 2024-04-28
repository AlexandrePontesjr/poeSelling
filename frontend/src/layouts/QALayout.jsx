import CircularProgress from "@mui/material/CircularProgress";
import {
  HandPlatter,
  MessageCircleQuestion,
  Package,
  Star,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getGames } from "../api/game/games";
import { getQuestions } from "../api/qas/qas";
import { Button, CrudModal, Sidebar, SidebarItem } from "../components";
import QATableItem from "../components/QATableItem";

function QALayout() {
  const [modal, setModal] = useState(false);
  const [games, setGames] = useState(null);
  const [game, setGame] = useState(1);
  const [gameLogo, setGameLogo] = useState(
    "https://upload.wikimedia.org/wikipedia/en/0/08/Path_of_Exile_logo.svg"
  );
  const [modalAction, setModalAction] = useState("");
  const [action, setAction] = useState("");
  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [modalEntity, setModalEntity] = useState(null);
  const navigate = useNavigate();

  const fetchQuestions = async (game) => {
    try {
      const res = await getQuestions(game);
      setQuestions(res.content);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchGames = async () => {
    try {
      const gameRes = await getGames();
      setGames(gameRes);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchQuestions(game);
    fetchGames();
  }, [game]);

  const refreshScope = () => {
    setRefresh(!refresh);
    setQuestions([]);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      fetchQuestions(game);
      fetchGames();
    }, 500);
  };

  function Toggle(action, entity) {
    if (modal == true) refreshScope();
    setModal(!modal);
    if (action != "cancel") {
      setModalAction(action);
      setAction(action.includes("Edit") ? "edit" : "create");
      if (action.includes("Create")) setModalEntity(null);
      else if (action !== null && action.includes("Edit"))
        setModalEntity(entity);
    }
  }

  const onChangeHandler = (e) => {
    const index = e.target.selectedIndex;
    const el = e.target.childNodes[index];
    const option = el.getAttribute("id");
    setGame(option);
    setGameLogo(games[index].image);
  };

  return localStorage.token ? (
    <div className="flex">
      <Sidebar gameLogo={gameLogo}>
        <SidebarItem
          path={"/admin/services"}
          icon={<HandPlatter size={20} />}
          text="Services"
        />
        <SidebarItem
          path={"/admin/products"}
          icon={<Package size={20} />}
          text="Products"
        />
        <SidebarItem
          path={"/admin/testimonials"}
          icon={<Star size={20} />}
          text="Testimonials"
        />
        <SidebarItem
          path={"/admin/qas"}
          icon={<MessageCircleQuestion size={20} />}
          text="Q&A"
          active
        />
      </Sidebar>
      <div className="w-full bg-black overflow-scroll">
        <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
          <div className="flex flex-row justify-center items-center">
            <h1 className="text-white ">Game:</h1>
            <select onChange={onChangeHandler} className="ml-3 text-black">
              {games == null ? (
                <option>Loading...</option>
              ) : (
                games.map((game) => {
                  return (
                    <option key={game.id} id={game.id}>
                      {game.name}
                    </option>
                  );
                })
              )}
            </select>
          </div>
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <h1 className="text-xl font-bold text-white">
              Questions & Answers
            </h1>
            <Button
              color="bg-white"
              textColor={"text-black"}
              className="w-full sm:w-auto"
              onClickEvent={() => Toggle("Create Question & Answer")}
            >
              New ++
            </Button>
          </div>
          <CrudModal
            type="qa"
            show={modal}
            game={game}
            entity={modalEntity}
            nameAction={modalAction}
            action={action}
            close={(action) => Toggle(action, null)}
          >
            Create Question & Answer
          </CrudModal>
          <div className="flex flex-col gap-10">
            <div className="rounded-sm border border-stroke bg-black text-white px-5 pb-2.5 pt-6 shadow-default sm:px-7.5 xl:pb-1">
              <div className="max-w-full overflow-x-auto">
                <table className="w-full table-auto">
                  <thead>
                    <tr className="bg-gray-2 text-left">
                      <th className="min-w-[220px] px-4 py-4 font-medium text-white xl:pl-11">
                        Question
                      </th>
                      <th className="min-w-[150px] px-4 py-4 font-medium text-white">
                        Answer
                      </th>
                      <th className="px-4 py-4 font-medium text-white">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {isLoading ? (
                      <div className="w-full items-center justify-center">
                        <CircularProgress />
                      </div>
                    ) : (
                      questions.map((question, index) =>
                        index === questions.length - 1 ? (
                          <QATableItem
                            key={question.id}
                            entityId={question.id}
                            name={question.question}
                            answer={question.answer}
                            status="active"
                            gameId={game}
                            isLast={true}
                            openModal={() =>
                              Toggle("Edit Question & Answer", question)
                            }
                            refresh={refreshScope}
                          />
                        ) : (
                          <QATableItem
                            key={question.id}
                            entityId={question.id}
                            name={question.question}
                            answer={question.answer}
                            status="active"
                            gameId={game}
                            openModal={() =>
                              Toggle("Edit Question & Answer", question)
                            }
                            refresh={refreshScope}
                          />
                        )
                      )
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    navigate("/admin")
  );
}

export default QALayout;
