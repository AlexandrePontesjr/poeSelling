import {
  HandPlatter,
  MessageCircleQuestion,
  Package,
  Star,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getServices } from "../api/products/products";
import { getGames } from "../api/game/games";
import {
  CrudModal,
  ProductTableItem,
  Sidebar,
  SidebarItem,
} from "../components";
import Button from "../components/Button";

function ServiceLayout() {
  const [modal, setModal] = useState(false);
  const [games, setGames] = useState(null);
  const [game, setGame] = useState(1);
  const [gameLogo, setGameLogo] = useState(
    "https://upload.wikimedia.org/wikipedia/en/0/08/Path_of_Exile_Logo.png"
  );
  const [modalAction, setModalAction] = useState("");
  const [action, setAction] = useState("");
  const [services, setServices] = useState([]);
  const [modalEntity, setModalEntity] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await getServices(game);
        setServices(res.content);
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

    fetchProducts();
    fetchGames();
  }, [game]);

  const onChangeHandler = (e) => {
    const index = e.target.selectedIndex;
    const el = e.target.childNodes[index];
    const option = el.getAttribute("id");
    console.log(option);
    setGame(option);
    console.log(games[index].image);
    setGameLogo(games[index].image);
  };

  function Toggle(action, entity) {
    setModal(!modal);
    if (action != "cancel") {
      setModalAction(action);
      setAction(action.includes("Edit") ? "edit" : "create");
      console.log("Is edit? " + action + " and entity " + entity);
      console.log(entity);
      if (action.includes("Create")) setModalEntity(null);
      else if (action !== null && action.includes("Edit"))
        setModalEntity(entity);
    }
  }

  return localStorage.token ? (
    <div className="flex">
      <Sidebar gameLogo={gameLogo}>
        <SidebarItem
          path={"/admin/services"}
          icon={<HandPlatter size={20} />}
          text="Services"
          active
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
        />
      </Sidebar>
      <div className="w-full bg-black text-white overflow-scroll">
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
            <h1 className="text-xl font-bold">Services</h1>
            <Button
              color="bg-white"
              textColor={"text-black"}
              className="w-full sm:w-auto"
              onClickEvent={() => Toggle("Create Service")}
            >
              New ++
            </Button>
          </div>
          <CrudModal
            type="service"
            entity={modalEntity}
            game={game}
            show={modal}
            nameAction={modalAction}
            action={action}
            close={(action) => Toggle(action, null)}
          >
            Create Product
          </CrudModal>
          <div className="flex flex-col gap-10">
            <div className="rounded-sm border border-stroke px-5 pb-2.5 pt-6 shadow-default sm:px-7.5 xl:pb-1">
              <div className="max-w-full overflow-x-auto">
                <table className="w-full table-auto">
                  <thead>
                    <tr className="bg-gray-2 text-left">
                      <th className="min-w-[220px] px-4 py-4 font-medium xl:pl-11">
                        Service
                      </th>
                      <th className="min-w-[150px] px-4 py-4 font-medium">
                        Price
                      </th>
                      <th className="min-w-[120px] px-4 py-4 font-medium">
                        Image
                      </th>
                      <th className="px-4 py-4 font-medium">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {services.map((service, index) =>
                      index === services.length - 1 ? (
                        <ProductTableItem
                          key={service.id}
                          entityId={service.id}
                          name={service.name}
                          price={service.price}
                          gameId={game}
                          image={service.image}
                          status="active"
                          isLast={true}
                          openModal={() => Toggle("Edit Service", service)}
                        />
                      ) : (
                        <ProductTableItem
                          key={service.id}
                          entityId={service.id}
                          name={service.name}
                          gameId={game}
                          price={service.price}
                          image={service.image}
                          status="active"
                          openModal={() => Toggle("Edit Service", service)}
                        />
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

export default ServiceLayout;
