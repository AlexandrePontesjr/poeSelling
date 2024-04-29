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
                image: "bgAvatarPathOfExile",
                position: "poeNecromancerLogoPosition",
            },
            {
                name: "Champion",
                image: "bgAvatarPathOfExile",
                position: "poeChampionLogoPosition",
            },
            {
                name: "Slayer",
                image: "bgAvatarPathOfExile",
                position: "poeSlayerLogoPosition",
            },
            {
                name: "Trickster",
                image: "bgAvatarPathOfExile",
                position: "poeTricksterLogoPosition",
            },
            {
                name: "Elementalist",
                image: "bgAvatarPathOfExile",
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
                name: "Sentinel",
                image: "bgAvatarLastEpoch",
                position: "leSentinelLogoPosition",
            },
            {
                name: "Mage",
                image: "bgAvatarLastEpoch",
                position: "leMageLogoPosition",
            },
            {
                name: "Acolyte",
                image: "bgAvatarLastEpoch",
                position: "leAcolyteLogoPosition",
            },
            {
                name: "Primalist",
                image: "bgAvatarLastEpoch",
                position: "lePrimalistLogoPosition",
            },
            {
                name: "Rogue",
                image: "bgAvatarLastEpoch",
                position: "leRogueLogoPosition",
            }
        ],
    }
};
