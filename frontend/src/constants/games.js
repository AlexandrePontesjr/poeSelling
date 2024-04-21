import { diabloIcon, poeIcon, lastEpocIcon } from "../assets"

export const GameDetails = {
    diablo: {
        id: 2,
        name: "Diablo",
        videoSrc: "/diabloV.mp4",
        path: "/diablo-4",
        icon: diabloIcon,
        cssClassBG: "backgroundImageItemsDiablo",
        fontFamily: "font-diablo",
    },
    pathOfExile: {
        id: 1,
        name: "Path of Exile",
        videoSrc: "/poe_necropolis_trailer.mp4",
        path: "/path-of-exile",
        icon: poeIcon,
        cssClassBG: "backgroundImagePathExile",
        fontFamily: "font-pathOfExile",
    },
    lastEpoch: {
        id: 3,
        name: "Last Epoch",
        videoSrc: "/last_epoch_trailer.mp4",
        path: "/last-epoch",
        icon: lastEpocIcon,
        cssClassBG: "backgroundImageLastEpoch",
        fontFamily: "font-lastEpoch",
    }
};