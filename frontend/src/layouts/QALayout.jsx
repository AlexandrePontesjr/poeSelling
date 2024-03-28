import { HandPlatter, MessageCircleQuestion, Package } from "lucide-react";
import { useState, useEffect } from "react";
import { Button, CrudModal, Sidebar, SidebarItem } from "../components";
import QATableItem from "../components/QATableItem";
import { useNavigate } from "react-router-dom";
import { getQuestions } from "../api/qas/qas";

function QALayout() {
  const [modal, setModal] = useState(false);
  const [modalAction, setModalAction] = useState("");
  const [questions, setQuestions] = useState([]);
  const [modalEntity, setModalEntity] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await getQuestions();
        setQuestions(res.content);
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
            <SidebarItem path={"/admin/services"} icon={<HandPlatter size={20} />}  text="Services"  />
            <SidebarItem path={"/admin/products"} icon={<Package size={20} />} text="Products" />
            <SidebarItem path={"/admin/qas"} icon={<MessageCircleQuestion size={20} />} text="Q&A" active />
        </Sidebar>
        <div className="w-full bg-black overflow-scroll">
            <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
              <div
                  className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"
                  >
                  <h1 className="text-xl font-bold text-white">
                    Questions & Answers
                  </h1>
                  <Button color="bg-white" textColor={"text-black"} className="w-full sm:w-auto" onClickEvent={() => Toggle("Create Question & Answer")}>New ++</Button>
              </div>
              <CrudModal type="qa" show={modal} entity={modalEntity} nameAction={modalAction} close={() => Toggle()}>Create Question & Answer</CrudModal>
              <div className="flex flex-col gap-10">
                  <div
                    className="rounded-sm border border-stroke bg-black text-white px-5 pb-2.5 pt-6 shadow-default sm:px-7.5 xl:pb-1"
                    >
                    <div className="max-w-full overflow-x-auto">
                        <table className="w-full table-auto">
                          <thead>
                              <tr className="bg-gray-2 text-left">
                                <th
                                    className="min-w-[220px] px-4 py-4 font-medium text-white xl:pl-11"
                                    >
                                    Question
                                </th>
                                <th
                                    className="min-w-[150px] px-4 py-4 font-medium text-white"
                                    >
                                    Answer
                                </th>
                                <th className="px-4 py-4 font-medium text-white">
                                    Actions
                                </th>
                              </tr>
                          </thead>
                          <tbody>
                          {
                            questions.map((question, index) => (
                              index === questions.length - 1 ?
                              <QATableItem
                                key={question.id}
                                entityId={question.id}
                                name={question.question}
                                answer={question.answer}
                                status="active"
                                isLast={true}
                                openModal={() => Toggle("Edit Question & Answer", question)}
                                />
                                :
                                <QATableItem
                                key={question.id}
                                entityId={question.id}
                                name={question.question}
                                answer={question.answer}
                                status="active"
                                openModal={() => Toggle("Edit Question & Answer", question)}
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

export default QALayout;
