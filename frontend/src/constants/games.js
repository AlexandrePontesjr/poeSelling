import { diabloIcon, poeIcon, lastEpocIcon } from "../assets"

export const GameDetails = {
    diablo: {
        id: 2,
        name: "Diablo",
        videoSrc: "public/diabloV.mp4",
        path: "/diablo-4",
        icon: diabloIcon,
        cssClassBG: "backgroundImageItemsDiablo",
    },
    pathOfExile: {
        id: 1,
        name: "Path of Exile",
        videoSrc: "public/poe_necropolis_trailer.mp4",
        path: "/path-of-exile",
        icon: poeIcon,
        cssClassBG: "backgroundImagePathExile",
    },
    lastEpoch: {
        id: 3,
        name: "Last Epoch",
        videoSrc: "public/last_epoch_trailer.mp4",
        path: "/last-epoch",
        icon: lastEpocIcon,
        cssClassBG: "backgroundImageLastEpoch",
    }
};