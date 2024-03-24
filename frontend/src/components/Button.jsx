import React from "react";

const Button = ({ children, onClickEvent, color }) => (
  <button type="button" onClick={() => onClickEvent()} className={`py-2 px-4 font-poppins font-medium text-[16px] ${color} text-white rounded-[10px] outline-none`}>
    {children}
  </button>
);

export default Button;
