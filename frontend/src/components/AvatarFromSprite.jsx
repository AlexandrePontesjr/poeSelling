const AvatarFromSprite = ({ name, imageClass, position }) => {
  {
    return position != null ? (
      <span
        title={name}
        className={`${imageClass} ${position} rounded-full float-left w-[50px] h-[50px] border-solid border-white`}
      ></span>
    ) : (
      <span
        title={name}
        className={`${imageClass} rounded-full float-left w-[50px] h-[50px] border-solid border-white`}
      ></span>
    );
  }
};

export default AvatarFromSprite;
