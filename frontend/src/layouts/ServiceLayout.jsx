import { BarChart3, Boxes, HandPlatter, MessageCircleQuestion, Package, Receipt, UserCircle } from "lucide-react";
import { Sidebar, SidebarItem, ProductTableItem } from "../components"
import React, { useEffect, useState } from "react";
import ProductCrudTable from "../components/ProductCrudTable";
import Button from "../components/Button";

function ServiceLayout() {
    const [users, setUsers] = useState([]);

    function loadUsers() {
      setUsers([
        {
          id: 1,
          name: "Jão",
          email: "a3dZi@example.com",
          phone: "123456789",
        }
      ]);
    }
  
    useEffect(() => {
      loadUsers();
    }, []);
  
    function deleteUser(id) {
      loadUsers();
    }

    
    return (
        <div className="flex">
            <Sidebar>
        <SidebarItem path={"/admin/services"} icon={<HandPlatter size={20} />}  text="Services" active  />
        <SidebarItem path={"/admin/products"} icon={<Package size={20} />} text="Products" />
        <SidebarItem path={"/admin/qas"} icon={<MessageCircleQuestion size={20} />} text="Q&A" />
      </Sidebar>
            <div class="w-full overflow-scroll">

            <div class="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
            <div
              class="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"
            >
              <h1 class="text-xl font-bold text-black">
              Services
              <link rel="icon" href="favicon.ico" />
              </h1>
            </div>

            <div class="flex flex-col gap-10">
              <div
                class="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default sm:px-7.5 xl:pb-1"
              >
                <div class="max-w-full overflow-x-auto">
                  <table class="w-full table-auto">
                    <thead>
                      <tr class="bg-gray-2 text-left">
                        <th
                          class="min-w-[220px] px-4 py-4 font-medium text-black xl:pl-11"
                        >
                          Service
                        </th>
                        <th
                          class="min-w-[150px] px-4 py-4 font-medium text-black"
                        >
                          Price
                        </th>
                        <th
                          class="min-w-[120px] px-4 py-4 font-medium text-black"
                        >
                          Image
                        </th>
                        <th class="px-4 py-4 font-medium text-black">
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
                      />
                      <ProductTableItem
                        name="10 Divine Orb"
                        price="10.00"
                        image="https://t4.ftcdn.net/jpg/05/24/31/31/360_F_524313153_jCA3gWeWAIDzjuKR5HQMQSqRr51X8HzZ.jpg"
                        status="active"
                      />
                      <ProductTableItem
                        name="10 Divine Orb"
                        price="10.00"
                        image="https://t4.ftcdn.net/jpg/05/24/31/31/360_F_524313153_jCA3gWeWAIDzjuKR5HQMQSqRr51X8HzZ.jpg"
                        status="active"
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

export default ServiceLayout;