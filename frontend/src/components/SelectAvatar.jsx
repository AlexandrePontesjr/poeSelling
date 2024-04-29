import { getGameDetailsById } from "../constants";
import AvatarFromSprite from "./AvatarFromSprite";

const SelectAvatar = ({ value, onChange, game }) => {
  return (
    <div className="flex flex-col-reverse items-center justify-between">
      <select
        value={value}
        onChange={onChange}
        className="mt-5 block w-[70%] p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
      >
        <option value="">Pick um Avatar</option>
        {getGameDetailsById(game.id).avatars.map((item, index) => (
          <option key={index} value={item.img}>
            {`${index + 1}-${item.name}`}
          </option>
        ))}
      </select>
      {value && (
        <AvatarFromSprite
          name={
            getGameDetailsById(game.id).avatars[value.split("-")[0] - 1].name
          }
          imageClass={
            getGameDetailsById(game.id).avatars[value.split("-")[0] - 1].image
          }
          position={
            getGameDetailsById(game.id).avatars[value.split("-")[0] - 1]
              .position
          }
        />
      )}
    </div>
  );
};

export default SelectAvatar;
