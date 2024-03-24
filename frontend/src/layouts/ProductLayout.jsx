import { HandPlatter, MessageCircleQuestion, Package } from "lucide-react";
import { useState } from "react";
import { CrudModal, ProductTableItem, Sidebar, SidebarItem, Button } from "../components";

function ProductLayout() {
  const [modal, setModal] = useState(false);
  const [modalAction, setModalAction] = useState("");

  function Toggle(action) {
    setModal(!modal);
    setModalAction(action);
  }

    return (
      <div className="flex">
        <Sidebar>
            <SidebarItem path={"/admin/services"} icon={<HandPlatter size={20} />}  text="Services"  />
            <SidebarItem path={"/admin/products"} icon={<Package size={20} />} text="Products" active />
            <SidebarItem path={"/admin/qas"} icon={<MessageCircleQuestion size={20} />} text="Q&A"  />
        </Sidebar>
        <div className="w-full overflow-hidden">
            <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
              <div
                  className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <h1 className="text-xl font-bold text-black">
                    Products
                  </h1>
                  <Button color="bg-black" className="w-full sm:w-auto" onClickEvent={() => Toggle("Create Product")}>New ++</Button>
              </div>
              <CrudModal type="product" show={modal} nameAction={modalAction} close={() => Toggle()}>Create Product</CrudModal>
              <div className="flex flex-col gap-10">
                  <div
                    className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default sm:px-7.5 xl:pb-1">
                    <div className="max-w-full overflow-x-auto overflow-y-auto max-h-[600px]">
                        <table className="min-w-full table-auto">
                          <thead>
                              <tr className="bg-gray-2 text-left">
                                <th
                                    className="min-w-[220px] px-4 py-4 font-medium text-black xl:pl-11"
                                    >
                                    Product
                                </th>
                                <th
                                    className="min-w-[150px] px-4 py-4 font-medium text-black"
                                    >
                                    Price
                                </th>
                                <th
                                    className="min-w-[120px] px-4 py-4 font-medium text-black"
                                    >
                                    Image
                                </th>
                                <th className="px-4 py-4 font-medium text-black">
                                    Actions
                                </th>
                              </tr>
                          </thead>
                          <tbody>
                              <ProductTableItem
                                name="10 Divine Orb"
                                price="10.00"
                                image="https://t4.ftcdn.net/jpg/05/24/31/31/360_F_524313153_jCA3gWeWAIDzjuKR5HQMQSqRr51X8HzZ.jpg"
                                status="active"
                                openModal={() => Toggle("Edit Product")}
                                />
                              <ProductTableItem
                                name="10 Divine Orb"
                                price="10.00"
                                image="https://t4.ftcdn.net/jpg/05/24/31/31/360_F_524313153_jCA3gWeWAIDzjuKR5HQMQSqRr51X8HzZ.jpg"
                                status="active"
                                openModal={() => Toggle("Edit Product")}
                                />
                              <ProductTableItem
                                name="10 Divine Orb"
                                price="10.00"
                                image="https://t4.ftcdn.net/jpg/05/24/31/31/360_F_524313153_jCA3gWeWAIDzjuKR5HQMQSqRr51X8HzZ.jpg"
                                status="active"
                                openModal={() => Toggle("Edit Product")}
                                isLast={true}
                                />
                          </tbody>
                        </table>
                    </div>
                  </div>
              </div>
            </div>
        </div>
      </div>
    );
}

export default ProductLayout;
