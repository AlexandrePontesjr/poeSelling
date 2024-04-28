import { PencilLine, Trash2 } from "lucide-react";
import { deleteQuestionById } from "../api/qas/qas";

//{`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
export default function QATableItem({
  isLast,
  entityId,
  name,
  answer,
  openModal,
  gameId,
  refresh,
}) {
  function deleteClicked() {
    deleteQuestionById(entityId, gameId);
    refresh();
  }

  return (
    <tr>
      <td
        className={`${
          isLast ? " " : "border-b border-[#eee]"
        } px-4 py-5 pl-9 xl:pl-11`}
      >
        <h5 className="font-medium">{name}</h5>
      </td>
      <td className={`${isLast ? " " : "border-b border-[#eee]"} px-4 py-5 `}>
        <p>{answer}</p>
      </td>
      <td className={`${isLast ? " " : "border-b border-[#eee]"} px-4 py-5`}>
        <div className="flex items-center space-x-3.5">
          <button className="hover:text-primary" onClick={openModal}>
            <PencilLine className="w-6 h-6" />
          </button>
          <button onClick={deleteClicked} className="hover:text-gray-400">
            <Trash2 className="w-6 h-6" />
          </button>
        </div>
      </td>
    </tr>
  );
}
