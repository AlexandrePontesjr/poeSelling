import { PencilLine, Trash2 } from "lucide-react";
import { deleteTestimonialsById } from "../api/testimonials/testimonials";

//{`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
export default function TestimonialsTableItem({
  isLast,
  name,
  message,
  status,
  openModal,
  entityId,
  gameId,
}) {
  function deleteClicked() {
    deleteTestimonialsById(entityId, gameId);
  }

  return (
    <tr>
      <td
        className={`${
          isLast ? " " : "border-b border-[#eee]"
        } px-4 py-5 pl-9 xl:pl-11`}
      >
        <h5 className="font-medium text-white ">{message}</h5>
      </td>
      <td className={`${isLast ? " " : "border-b border-[#eee]"} px-4 py-5 `}>
        <p className="text-white">{name}</p>
      </td>
      <td className={`${isLast ? " " : "border-b border-[#eee]"} px-4 py-5 `}>
        {status == "APPROVED" ? (
          <p className="text-green-500">{status}</p>
        ) : status == "PENDING" ? (
          <p className="text-blue-500">{status}</p>
        ) : (
          <p className="text-red-500">{status}</p>
        )}
      </td>
      <td className={`${isLast ? " " : "border-b border-[#eee]"} px-4 py-5`}>
        <div className="flex items-center space-x-3.5">
          <button
            title="Salvar"
            className="hover:text-primary"
            onClick={openModal}
          >
            <PencilLine className="w-6 h-6 text-white hover:text-yellow-500" />
          </button>
          <button
            title="Deletar"
            onClick={deleteClicked}
            className="hover:text-primary"
          >
            <Trash2 className="w-6 h-6 text-white hover:text-red-500" />
          </button>
        </div>
      </td>
    </tr>
  );
}
