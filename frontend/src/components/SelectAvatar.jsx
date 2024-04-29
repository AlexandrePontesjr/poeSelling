import React from "react";
import { feedback } from "../constants/index.js";

const SelectAvatar = ({ value, onChange }) => {
// console.log(value);
console.log(feedback);
  return (
    <div className="flex flex-col-reverse items-center justify-between">
    <select
      value={value}
      onChange={onChange}
      className="mt-5 block w-[70%] p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
    >
    <option value="">Pick um Avatar</option>
      {feedback.map((item, index) => (
          <option key={index} value={item.img}>
            {`Avatar ${index + 1}`}
          </option>
        ))}
      </select>
      {value && (
        <img
          src={value}
          alt="Avatar selecionado"
          className="rounded-full mr-2"
        />
      )}
    </div>
  );
};

export default SelectAvatar;