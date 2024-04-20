const GameIcon = ({ game }) => {
  return <img className={`h-24 mx-2`} src={game.icon} alt={game.name} />;
};

export default GameIcon;
