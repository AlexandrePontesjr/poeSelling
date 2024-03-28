import { HandPlatter, MessageCircleQuestion, Package } from "lucide-react";
import { useState, useEffect } from "react";
import { CrudModal, ProductTableItem, Sidebar, SidebarItem } from "../components";
import Button from "../components/Button";
import { getServices } from "../api/products/products";
import { useNavigate } from "react-router-dom";

function ServiceLayout() {
    const [modal, setModal] = useState(false);
    const [modalAction, setModalAction] = useState("");
    const [services, setServices] = useState([]);
    const [modalEntity, setModalEntity] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
      const fetchProducts = async () => {
        try {
          const res = await getServices();
          setServices(res.content);
        } catch (error) {
          console.log(error);
        }
      };
      fetchProducts();
    }, []);
  
    function Toggle(action, entity) {
      setModal(!modal);
      setModalAction(action);
      console.log("Is edit? " + action + " and entity " + entity)
      console.log(entity)
      if(action == null)
        setModalEntity(null)
      else if(action !== null && action.includes("Edit"))
        setModalEntity(entity)
    }

    
    return (
      localStorage.token ?
      <div className="flex">
        <Sidebar>
            <SidebarItem path={"/admin/services"} icon={<HandPlatter size={20} />}  text="Services" active />
            <SidebarItem path={"/admin/products"} icon={<Package size={20} />} text="Products" />
            <SidebarItem path={"/admin/qas"} icon={<MessageCircleQuestion size={20} />} text="Q&A" />
        </Sidebar>
        <div className="w-full bg-black text-white overflow-scroll">
            <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
              <div
                  className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"
                  >
                  <h1 className="text-xl font-bold">
                    Services
                  </h1>
                  <Button color="bg-white" textColor={"text-black"} className="w-full sm:w-auto" onClickEvent={() => Toggle("Create Service")}>New ++</Button>
              </div>
              <CrudModal type="service" entity={modalEntity} show={modal} nameAction={modalAction} close={() => Toggle()}>Create Product</CrudModal>
              <div className="flex flex-col gap-10">
                  <div
                    className="rounded-sm border border-stroke px-5 pb-2.5 pt-6 shadow-default sm:px-7.5 xl:pb-1"
                    >
                    <div className="max-w-full overflow-x-auto">
                        <table className="w-full table-auto">
                          <thead>
                              <tr className="bg-gray-2 text-left">
                                <th
                                    className="min-w-[220px] px-4 py-4 font-medium xl:pl-11"
                                    >
                                    Service
                                </th>
                                <th
                                    className="min-w-[150px] px-4 py-4 font-medium"
                                    >
                                    Price
                                </th>
                                <th
                                    className="min-w-[120px] px-4 py-4 font-medium"
                                    >
                                    Image
                                </th>
                                <th className="px-4 py-4 font-medium">
                                    Actions
                                </th>
                              </tr>
                          </thead>
                          <tbody>
                            {
                              services.map((service, index) => (
                                index === services.length - 1 ?
                                <ProductTableItem
                                  key={service.id}
                                  entityId={service.id}
                                  name={service.name}
                                  price={service.price}
                                  image={service.image}
                                  status="active"
                                  isLast={true}
                                  openModal={() => Toggle("Edit Service", service)}
                                  />
                                  :
                                  <ProductTableItem
                                  key={service.id}
                                  entityId={service.id}
                                  name={service.name}
                                  price={service.price}
                                  image={service.image}
                                  status="active"
                                  openModal={() => Toggle("Edit Service", service)}
                                  />
                              ))
                            }
                          </tbody>
                        </table>
                    </div>
                  </div>
              </div>
            </div>
        </div>
      </div>
      : navigate("/admin")
    );
}

export default ServiceLayout;