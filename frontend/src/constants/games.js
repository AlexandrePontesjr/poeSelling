import { diabloIcon, poeIcon, lastEpocIcon } from "../assets"

export function getGameDetailsById(gameId) {
    if (gameId == 1) {
        return GameDetails.pathOfExile
    } else if (gameId == 2) {
        return GameDetails.diablo
    } else if (gameId == 3) {
        return GameDetails.lastEpoch
    }
}

export const GameDetails = {
    diablo: {
        id: 2,
        name: "Diablo",
        videoSrc: "/diabloV.mp4",
        path: "/diablo-4",
        icon: diabloIcon,
        cssClassBG: "backgroundImageItemsDiablo",
        fontFamily: "font-diablo",
        avatars: [
            {
                name: "Barbarian",
                image: "bgAvatarDiabloBarbarian",
                position: null,
            },
            {
                name: "Druid",
                image: "bgAvatarDiabloDruid",
                position: null,
            },
            {
                name: "Necromancer",
                image: "bgAvatarDiabloNecromancer",
                position: null,
            },
            {
                name: "Rogue",
                image: "bgAvatarDiabloRogue",
                position: null,
            },
            {
                name: "Sorcerer",
                image: "bgAvatarDiabloSorcerer",
                position: null,
            }
        ],
    },
    pathOfExile: {
        id: 1,
        name: "Path of Exile",
        videoSrc: "/poe_necropolis_trailer.mp4",
        path: "/path-of-exile",
        icon: poeIcon,
        cssClassBG: "backgroundImagePathExile",
        fontFamily: "font-pathOfExile",
        avatars: [
            {
                name: "Necromancer",
                image: "backgroundAvatarPathOfExile",
                position: "poeNecromancerLogoPosition",
            },
            {
                name: "Champion",
                image: "backgroundAvatarPathOfExile",
                position: "poeChampionLogoPosition",
            },
            {
                name: "Slayer",
                image: "backgroundAvatarPathOfExile",
                position: "poeSlayerLogoPosition",
            },
            {
                name: "Trickster",
                image: "backgroundAvatarPathOfExile",
                position: "poeTricksterLogoPosition",
            },
            {
                name: "Elementalist",
                image: "backgroundAvatarPathOfExile",
                position: "poeElementalistLogoPosition",
            }
        ],
    },
    lastEpoch: {
        id: 3,
        name: "Last Epoch",
        videoSrc: "/last_epoch_trailer.mp4",
        path: "/last-epoch",
        icon: lastEpocIcon,
        cssClassBG: "backgroundImageLastEpoch",
        fontFamily: "font-lastEpoch",
        avatars: [
            {
                name: "Necromancer",
                image: "backgroundAvatarPathOfExile",
                position: "left_-190px_bottom_-12px",
            },
            {
                name: "Champion",
                image: "backgroundAvatarPathOfExile",
                position: "right_-119px_top_-15px",
            },
            {
                name: "Slayer",
                image: "backgroundAvatarPathOfExile",
                position: "right_-18px_top_-15px",
            },
            {
                name: "Trickster",
                image: "backgroundAvatarPathOfExile",
                position: "right_162px_top_263px",
            },
            {
                name: "Elementalist",
                image: "backgroundAvatarPathOfExile",
                position: "left_-110px_bottom_-12px",
            }
        ],
    }
};