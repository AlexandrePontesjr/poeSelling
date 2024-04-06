const Button = ({ children, onClickEvent, color, textColor }) => (
  <button
    type="button"
    onClick={() => onClickEvent()}
    className={`py-2 px-4 font-poppins font-medium text-[16px] ${color} ${textColor} rounded-[10px] outline-none`}
  >
    {children}
  </button>
);

export default Button;
