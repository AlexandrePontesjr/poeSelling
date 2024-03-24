import { HandPlatter, MessageCircleQuestion, Package } from "lucide-react";
import { useState } from "react";
import { Button, CrudModal, Sidebar, SidebarItem } from "../components";
import QATableItem from "../components/QATableItem";

function QALayout() {
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
            <SidebarItem path={"/admin/products"} icon={<Package size={20} />} text="Products" />
            <SidebarItem path={"/admin/qas"} icon={<MessageCircleQuestion size={20} />} text="Q&A" active />
        </Sidebar>
        <div className="w-full overflow-scroll">
            <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
              <div
                  className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"
                  >
                  <h1 className="text-xl font-bold text-black">
                    Questions & Answers
                  </h1>
                  <Button color="bg-black" className="w-full sm:w-auto" onClickEvent={() => Toggle("Create Question & Answer")}>New ++</Button>
              </div>
              <CrudModal type="qa" show={modal} nameAction={modalAction} close={() => Toggle()}>Create Question & Answer</CrudModal>
              <div className="flex flex-col gap-10">
                  <div
                    className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default sm:px-7.5 xl:pb-1"
                    >
                    <div className="max-w-full overflow-x-auto">
                        <table className="w-full table-auto">
                          <thead>
                              <tr className="bg-gray-2 text-left">
                                <th
                                    className="min-w-[220px] px-4 py-4 font-medium text-black xl:pl-11"
                                    >
                                    Question
                                </th>
                                <th
                                    className="min-w-[150px] px-4 py-4 font-medium text-black"
                                    >
                                    Answer
                                </th>
                                <th className="px-4 py-4 font-medium text-black">
                                    Actions
                                </th>
                              </tr>
                          </thead>
                          <tbody>
                              <QATableItem
                                name="10 Divine Orb"
                                price="10.00"
                                status="active"
                                openModal={() => Toggle("Edit Question & Answer")}
                                />
                              <QATableItem
                                name="10 Divine Orb"
                                price="10.00"
                                status="active"
                                openModal={() => Toggle("Edit Question & Answer")}
                                />
                              <QATableItem
                                name="10 Divine Orb"
                                price="10.00"
                                status="active"
                                openModal={() => Toggle("Edit Question & Answer")}
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

export default QALayout;
