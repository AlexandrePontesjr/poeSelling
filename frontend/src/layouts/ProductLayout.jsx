import { HandPlatter, MessageCircleQuestion, Package } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { getProducts } from "../api/products/products";
import {
  Button,
  CrudModal,
  ProductTableItem,
  Sidebar,
  SidebarItem,
} from "../components";

function ProductLayout() {
  const [modal, setModal] = useState(false);
  const [modalAction, setModalAction] = useState("");
  const [action, setAction] = useState("");
  const [products, setProducts] = useState([]);
  const [modalEntity, setModalEntity] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await getProducts();
        setProducts(res.content);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, []);

  const contextClass = {
    success: "bg-blue-600",
    error: "bg-black",
    info: "bg-gray-600",
    warning: "bg-orange-400",
    default: "bg-indigo-600",
    dark: "bg-white-600 font-gray-300",
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
    <div className="flex bg-black">
      <Sidebar>
        <SidebarItem
          path={"/admin/services"}
          icon={<HandPlatter size={20} />}
          text="Services"
        />
        <SidebarItem
          path={"/admin/products"}
          icon={<Package size={20} />}
          text="Products"
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
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <h1 className="text-xl font-bold text-white">Products</h1>
            <Button
              color="bg-white"
              className="w-full sm:w-auto"
              onClickEvent={() => Toggle("Create Product")}
            >
              New ++
            </Button>
          </div>
          <CrudModal
            type="product"
            show={modal}
            entity={modalEntity}
            nameAction={modalAction}
            action={action}
            close={(action) => Toggle(action, null)}
          >
            Create Product
          </CrudModal>
          <div className="flex flex-col gap-10">
            <div className="rounded-sm border border-stroke bg-black px-5 pb-2.5 pt-6 shadow-default sm:px-7.5 xl:pb-1">
              <div className="max-w-full overflow-x-auto overflow-y-auto max-h-[600px]">
                <table className="min-w-full table-auto">
                  <thead>
                    <tr className="bg-gray-2 text-left">
                      <th className="min-w-[220px] px-4 py-4 font-medium text-white xl:pl-11">
                        Product
                      </th>
                      <th className="min-w-[150px] px-4 py-4 font-medium text-white">
                        Price
                      </th>
                      <th className="min-w-[120px] px-4 py-4 font-medium text-white">
                        Image
                      </th>
                      <th className="px-4 py-4 font-medium text-white">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((product, index) =>
                      index === products.length - 1 ? (
                        <ProductTableItem
                          key={product.id}
                          entityId={product.id}
                          name={product.name}
                          price={product.price}
                          image={product.image}
                          status="active"
                          isLast={true}
                          openModal={() => Toggle("Edit Product", product)}
                        />
                      ) : (
                        <ProductTableItem
                          key={product.id}
                          entityId={product.id}
                          name={product.name}
                          price={product.price}
                          image={product.image}
                          status="active"
                          openModal={() => Toggle("Edit Product", product)}
                        />
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

export default ProductLayout;
