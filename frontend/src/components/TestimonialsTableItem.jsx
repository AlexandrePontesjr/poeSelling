import Rating from "@mui/material/Rating";
import { PencilLine, ThumbsDown, ThumbsUp, Trash2 } from "lucide-react";
import {
  deleteTestimonialsById,
  updateStatusTestimonial,
} from "../api/testimonials/testimonials";
import { getGameDetailsById } from "../constants";
import AvatarFromSprite from "./AvatarFromSprite";

//{`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
export default function TestimonialsTableItem({
  isLast,
  name,
  message,
  status,
  avatarId,
  rating,
  openModal,
  entityId,
  gameId,
  refresh,
}) {
  function deleteClicked() {
    deleteTestimonialsById(entityId, gameId);
    refresh();
  }

  function approveItem(decision) {
    updateStatusTestimonial(entityId, gameId, decision);
    refresh();
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
        {avatarId != null ? (
          <AvatarFromSprite
            name={getGameDetailsById(gameId).avatars[avatarId].name}
            imageClass={getGameDetailsById(gameId).avatars[avatarId].image}
            position={getGameDetailsById(gameId).avatars[avatarId].position}
          />
        ) : null}
      </td>
      <td className={`${isLast ? " " : "border-b border-[#eee]"} px-4 py-5 `}>
        <Rating className="!static" name="read-only" value={rating} readOnly />
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
          {status == "PENDING" ? (
            <div className=" space-x-3.5">
              <button
                title="Aprovar"
                className="hover:text-primary"
                onClick={() => approveItem("APPROVED")}
              >
                <ThumbsUp className="w-6 h-6 text-white hover:text-yellow-500" />
              </button>
              <button
                title="Rejeitar"
                className="hover:text-primary"
                onClick={() => approveItem("REJECTED")}
              >
                <ThumbsDown className="w-6 h-6 text-white hover:text-yellow-500" />
              </button>
            </div>
          ) : null}
          <button
            title="Editar"
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
