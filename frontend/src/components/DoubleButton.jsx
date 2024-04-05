import React from "react";

const DoubleButton = ({ url, children, onClickEvent, color, textColor }) => (
  <a
    href={url}
    type="button"
    onClick={() => onClickEvent()}
    className={`py-2 text-black shadow-selling w-[100px] sm:w-[210px] px-4 h-[40px] bg-white font-poppins font-medium text-[10px] sm:text-[16px] ${color} ${textColor} rounded-[20px] outline-none`}
  >
    {children}
  </a>
);

export default DoubleButton;
