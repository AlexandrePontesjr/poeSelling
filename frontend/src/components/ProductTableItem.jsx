import { PencilLine, Trash2 } from "lucide-react";
import { deleteProductById } from "../api/products/products";

//{`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
export default function ProductTableItem({
  isLast,
  name,
  price,
  image,
  openModal,
  entityId,
  gameId,
  refresh,
}) {
  function deleteClicked() {
    deleteProductById(entityId, gameId);
    refresh();
  }

  return (
    <tr>
      <td
        className={`${
          isLast ? " " : "border-b border-[#eee]"
        } px-4 py-5 pl-9 xl:pl-11`}
      >
        <h5 className="font-medium text-white ">{name}</h5>
      </td>
      <td className={`${isLast ? " " : "border-b border-[#eee]"} px-4 py-5 `}>
        <p className="text-white">$ {price}</p>
      </td>
      <td className={`${isLast ? " " : "border-b border-[#eee]"} px-4 py-5`}>
        <p className="inline-flex rounded-full bg-success bg-opacity-10 px-3 py-1 text-sm font-medium text-success">
          <img src={image} alt={name} title={name} className="w-20 h-20 mr-2" />
        </p>
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
