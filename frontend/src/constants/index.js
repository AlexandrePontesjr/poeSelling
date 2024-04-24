import { people01, people02, people03, instagram, twitter, airbnb, binance, coinbase, dropbox, send, shield, star  } from "../assets";
import { GameDetails, getGameDetailsById } from "./games.js"

export {
  GameDetails,
  getGameDetailsById,
};

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "items",
    title: "Items",
  },
  {
    id: "services",
    title: "Services",
  },
  {
    id: "clients",
    title: "Clients",
  },
  {
    id: "faq",
    title: "FAQ",
  },
];

export const features = [
  {
    id: "feature-1",
    icon: star,
    title: "Rewards",
    content:
      "The best credit cards offer some tantalizing combinations of promotions and prizes",
  },
  {
    id: "feature-2",
    icon: shield,
    title: "100% Secured",
    content:
      "We take proactive steps make sure your information and transactions are secure.",
  },
  {
    id: "feature-3",
    icon: send,
    title: "Balance Transfer",
    content:
      "A balance transfer credit card can save you a lot of money in interest charges.",
  },
];

export const feedback = [
  {
    id: "1",
    content: "Estou muito satisfeito com o serviço ! Excelente experiência!",
    name: "Adriana Silva",
    title: "Engenheira",
    img: people01,
    star: 5,
  },
  {
    id: "2",
    content:
      "O serviço superou todas as minhas expectativas! Recomendo totalmente.",
    name: "João Silva",
    title: "Advogado",
    img: people02,
    star: 4,
  },
  {
    id: "3",
    content:
      "Nunca pensei que jogos online poderiam ser tão envolventes! Estou impressionado com o serviço.",
    name: "Mariana Santos",
    title: "Designer",
    img: people03,
    star: 5,
  },
  {
    id: "4",
    content:
      "Simplesmente incrível! O serviço me proporcionou horas de diversão sem fim.",
    name: "Gabriel Lima",
    title: "Founder & Leader",
    img: people03,
    star: 5,
  },
  {
    id: "5",
    content:
      "Estou completamente viciado nos serviços oferecidos! Melhor investimento que fiz.",
    name: "Rafael Junior",
    title: "Founder & Leader",
    img: people03,
    star: 5,
  },
  {
    id: "6",
    content:
      "Estou completamente viciado nos serviços oferecidos! Melhor investimento que fiz.",
    name: "Pedro Teixeira",
    title: "Founder & Leader",
    img: people03,
    star: 5,
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "User Active",
    value: "3800+",
  },
  {
    id: "stats-2",
    title: "Trusted by Company",
    value: "230+",
  },
  {
    id: "stats-3",
    title: "Transaction",
    value: "$230M+",
  },
];

export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "E-mail",
        link: "",
      },
      {
        name: "Instagram",
        link: "https://www.instagram.com/danilorosa_6/",
      },
      {
        name: "WhatsApp",
        link: "",
      },
      {
        name: "Suporte",
        link: "",
      },
      {
        name: "Terms & Services",
        link: "",
      },
    ],
  },
  // {
  //   title: "Community",
  //   links: [
  //     {
  //       name: "Help Center",
  //       link: "https://www.hoobank.com/help-center/",
  //     },
  //     {
  //       name: "Partners",
  //       link: "https://www.hoobank.com/partners/",
  //     },
  //     {
  //       name: "Suggestions",
  //       link: "https://www.hoobank.com/suggestions/",
  //     },
  //     {
  //       name: "Blog",
  //       link: "https://www.hoobank.com/blog/",
  //     },
  //     {
  //       name: "Newsletters",
  //       link: "https://www.hoobank.com/newsletters/",
  //     },
  //   ],
  // },
  // {
  //   title: "Partner",
  //   links: [
  //     {
  //       name: "Our Partner",
  //       link: "https://www.hoobank.com/our-partner/",
  //     },
  //     {
  //       name: "Become a Partner",
  //       link: "https://www.hoobank.com/become-a-partner/",
  //     },
  //   ],
  // },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/danilorosa_6/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
];

export const clients = [
  {
    id: "client-1",
    logo: airbnb,
  },
  {
    id: "client-2",
    logo: binance,
  },
  {
    id: "client-3",
    logo: coinbase,
  },
  {
    id: "client-4",
    logo: dropbox,
  },
];