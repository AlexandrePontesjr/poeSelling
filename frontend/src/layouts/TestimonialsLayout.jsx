import CircularProgress from "@mui/material/CircularProgress";
import {
  HandPlatter,
  MessageCircleQuestion,
  Package,
  Star,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { getGames } from "../api/game/games";
import { getTestimonials } from "../api/testimonials/testimonials";
import {
  Button,
  CrudModal,
  Sidebar,
  SidebarItem,
  TestimonialsTableItem,
} from "../components";

function TestimonialsLayout() {
  const [modal, setModal] = useState(false);
  const [games, setGames] = useState(null);
  const [game, setGame] = useState(1);
  const [gameLogo, setGameLogo] = useState(
    "https://upload.wikimedia.org/wikipedia/en/0/08/Path_of_Exile_Logo.png"
  );
  const [modalAction, setModalAction] = useState("");
  const [action, setAction] = useState("");
  const [testimonials, setTestimonials] = useState([]);
  const [modalEntity, setModalEntity] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const navigate = useNavigate();

  const fetchTestimonials = async (game) => {
    try {
      const res = await getTestimonials(game);
      setTestimonials(res.content);
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
    fetchTestimonials(game);
    fetchGames();
  }, [game]);

  const refreshScope = () => {
    setRefresh(!refresh);
    setTestimonials([]);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      fetchTestimonials(game);
      fetchGames();
    }, 2000);
  };

  const contextClass = {
    success: "bg-blue-600",
    error: "bg-black",
    info: "bg-gray-600",
    warning: "bg-orange-400",
    default: "bg-indigo-600",
    dark: "bg-white-600 font-gray-300",
  };

  const onChangeHandler = (e) => {
    const index = e.target.selectedIndex;
    const el = e.target.childNodes[index];
    const option = el.getAttribute("id");
    setGame(option);
    setGameLogo(games[index].image);
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

  return localStorage.token ? (
    <div className="flex bg-slate-900">
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
          active
        />
        <SidebarItem
          path={"/admin/qas"}
          icon={<MessageCircleQuestion size={20} />}
          text="Q&A"
        />
      </Sidebar>
      <div className="w-full overflow-hidden">
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
            <h1 className="text-xl font-bold text-white">Testimonials</h1>
            <Button
              color="bg-green-400"
              className="w-full sm:w-auto"
              onClickEvent={() => Toggle("Create Testimonials")}
            >
              ADICIONAR NOVO ITEM ++
            </Button>
          </div>
          <CrudModal
            type="testimonials"
            show={modal}
            game={game}
            entity={modalEntity}
            nameAction={modalAction}
            action={action}
            close={(action) => Toggle(action, null)}
          >
            Create Testimonials
          </CrudModal>
          <div className="flex flex-col gap-10">
            <div className="font-poppins text-[20px] rounded-sm border border-stroke bg-slate-900 px-5 pb-2.5 pt-6 shadow-default sm:px-7.5 xl:pb-1">
              <div className="max-w-full overflow-x-auto overflow-y-auto max-h-[600px]">
                <table className="min-w-full table-auto">
                  <thead>
                    <tr className="bg-gray-2 text-left ">
                      <th className="min-w-[220px] px-4 py-4 font-medium text-white xl:pl-11">
                        Mensagem
                      </th>
                      <th className="min-w-[150px] px-4 py-4 font-medium text-white">
                        Name (Nick)
                      </th>
                      <th className="min-w-[150px] px-4 py-4 font-medium text-white">
                        Avatar ID
                      </th>
                      <th className="min-w-[150px] px-4 py-4 font-medium text-white">
                        Rating
                      </th>
                      <th className="min-w-[120px] px-4 py-4 font-medium text-white">
                        Status
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
                      testimonials.map((testimonial, index) =>
                        index === testimonials.length - 1 ? (
                          <TestimonialsTableItem
                            key={testimonial.id}
                            entityId={testimonial.id}
                            name={testimonial.name}
                            avatarId={testimonial.avatarId}
                            rating={testimonial.rating}
                            message={testimonial.message}
                            status={testimonial.status}
                            gameId={game}
                            isLast={true}
                            openModal={() =>
                              Toggle("Edit Testimonials", testimonial)
                            }
                            refresh={refreshScope}
                          />
                        ) : (
                          <TestimonialsTableItem
                            key={testimonial.id}
                            entityId={testimonial.id}
                            name={testimonial.name}
                            avatarId={testimonial.avatarId}
                            rating={testimonial.rating}
                            message={testimonial.message}
                            status={testimonial.status}
                            gameId={game}
                            openModal={() =>
                              Toggle("Edit Testimonials", testimonial)
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
        <ToastContainer
          toastClassName={(context) =>
            contextClass[context?.type || "default"] +
            " relative flex p-1 min-h-10 rounded-md justify-between overflow-hidden cursor-pointer"
          }
          bodyClassName={() => "text-sm font-white font-med block p-3"}
          position="bottom-left"
          autoClose={3000}
        />
      </div>
    </div>
  ) : (
    navigate("/admin")
  );
}

export default TestimonialsLayout;
