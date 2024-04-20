import { diabloIcon, poeIcon, lastEpocIcon } from "../assets"

const GameIcon = ({ icone }) => {

    return (
        <img
            className={`h-24 mx-2`}
            src={
                icone == "2" ? (diabloIcon) : icone == "1" ? (poeIcon) : (lastEpocIcon)
            } alt="" />
    )
}

export default GameIcon;
