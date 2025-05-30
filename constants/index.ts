import {
  FaTelegram,
  FaGoogle,
  FaLinkedin,
} from "react-icons/fa";
import {
  RxGithubLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

export const SKILL_DATA = [
  {
    skill_name: "JavaScript",
    image: "https://techstack-generator.vercel.app/js-icon.svg",
    width: 80,
    height: 65,
  },
  {
    skill_name: "TypeScript",
    image: "https://techstack-generator.vercel.app/ts-icon.svg",
    width: 80,
    height: 65,
  },
  // {
  //   skill_name: "Python",
  //   image: "https://techstack-generator.vercel.app/python-icon.svg",
  //   width: 65,
  //   height: 80,
  // },
  // {
  //   skill_name: "Django",
  //   image: "https://techstack-generator.vercel.app/django-icon.svg",
  //   width: 65,
  //   height: 80,
  // },
  {
    skill_name: "React",
    image: "https://techstack-generator.vercel.app/react-icon.svg",
    width: 70,
    height: 80,
  },
  {
    skill_name: "Redux",
    image: "https://techstack-generator.vercel.app/redux-icon.svg",
    width: 67,
    height: 80,
  },
  // {
  //   skill_name: "React Query",
  //   image: "reactquery.png",
  //   width: 65,
  //   height: 80,
  // },
  {
    skill_name: "Next.js",
    image: "next.png",
    width: 55,
    height: 80,
  },
  // {
  //   skill_name: "Gatsby",
  //   image: "https://techstack-generator.vercel.app/gatsby-icon.svg",
  //   width: 70,
  //   height: 80,
  // },
  // {
  //   skill_name: "Stripe",
  //   image: "stripe.png",
  //   width: 55,
  //   height: 80,
  // },
  {
    skill_name: "React Native",
    image: "reactnative.png",
    width: 60,
    height: 70,
  },
  {
    skill_name: "Vue.js",
    image: "vue.png",
    width: 60,
    height: 70,
  },
  {
    skill_name: "Vuex",
    image: "vuex.png",
    width: 60,
    height: 70,
  },
  {
    skill_name: "Nuxt.js",
    image: "nuxt.png",
    width: 60,
    height: 70,
  },
  {
    skill_name: "Pinia",
    image: "pinia.png",
    width: 50,
    height: 50,
  },

] as const;


export const FRONTEND_SKILL = [

  {
    skill_name: "Material UI",
    image: "mui.png",
    width: 70,
    height: 80,
  },
  // {
  //   skill_name: "Storybook",
  //   image: "https://techstack-generator.vercel.app/storybook-icon.svg",
  //   width: 65,
  //   height: 80,
  // },
  {
    skill_name: "Sass",
    image: "https://techstack-generator.vercel.app/sass-icon.svg",
    width: 65,
    height: 80,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 75,
    height: 80,
  },
  {
    skill_name: "Framer Motion",
    image: "framer.png",
    width: 56,
    height: 80,
  },
  {
    skill_name: "GitHub",
    image: "https://techstack-generator.vercel.app/github-icon.svg",
    width: 80,
    height: 60,
  },
  {
    skill_name: "Figma",
    image: "figma.png",
    width: 40,
    height: 50,
  },
  {
    skill_name: "Prettier",
    image: "https://techstack-generator.vercel.app/prettier-icon.svg",
    width: 70,
    height: 80,
  },
  {
    skill_name: "ESLint",
    image: "https://techstack-generator.vercel.app/eslint-icon.svg",
    width: 65,
    height: 80,
  }

] as const;

export const BACKEND_SKILL = [

  {
    skill_name: "Firebase",
    image: "firebase.png",
    width: 50,
    height: 55,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
  {
    skill_name: "PostgreSQL",
    image: "postgresql.png",
    width: 60,
    height: 70,
  },
  {
    skill_name: "MySQL",
    image: "https://techstack-generator.vercel.app/mysql-icon.svg",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Prisma",
    image: "prisma.png",
    width: 65,
    height: 70,
  },
  {
    skill_name: "Graphql",
    image: "graphql.png",
    width: 65,
    height: 80,
  },
  {
    skill_name: "REST API",
    image: "https://techstack-generator.vercel.app/restapi-icon.svg",
    width: 80,
    height: 80,
  },
] as const;

export const FULLSTACK_SKILL = [
  {
    skill_name: "AWS",
    image: "https://techstack-generator.vercel.app/aws-icon.svg",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Nginx",
    image: "https://techstack-generator.vercel.app/nginx-icon.svg",
    width: 75,
    height: 80,
  },
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 55,
    height: 80,
  },
  {
    skill_name: "Express.js",
    image: "express.png",
    width: 60,
    height: 80,
  },
] as const;

export const OTHER_SKILL = [
  {
    skill_name: "Docker",
    image: "https://techstack-generator.vercel.app/docker-icon.svg",
    width: 70,
    height: 70,
  },
] as const;

export const PROJECTS = [
  {
    title: "MySpeakingScore - AI Speaking Assessment",
    description:
      "Built a React/Next.js web application that evaluates speaking skills using AI technology. Features a clean, user-friendly interface with real-time speech analysis and instant scoring feedback.",
    image: "/projects/1.png",
    link: "https://speak-score-showcase-18.vercel.app/",
  },
  {
    title: "Nigeria Seminar - SquaredFinancial",
    description:
      "Built a high-performance trading platform using Vue/Nuxt.js with SSR optimization. Implemented pixel-perfect designs from Figma, integrated REST APIs, and delivered a client-focused interface for SquaredFinancial's trading operations.",
    image: "/projects/5.png",
    link: "https://promo.sqfin.com/nigeria-seminar/",
  },
  {
    title: "Multi-Disciplinary Knowledge Quiz",
    description:
      'Developed an interactive quiz application using React/Next.js that covers various scientific fields. Created an engaging user experience with a simple, intuitive interface, allowing users to test their knowledge across different disciplines and discover new areas of expertise.',
    image: "/projects/6.png",
    link: "https://quiz-nextjs-app.vercel.app/",
  },
  {
    title: "A Symphony for Being - Interactive Experience",
    description:
      "Created an immersive, animated web experience using Vue/Nuxt.js and GSAP animations. Designed a visually stunning, client-focused platform that combines smooth transitions, interactive elements, and engaging content to deliver a unique digital symphony.",
    image: "/projects/2.png",
    link: "https://somersault-group.com/",
  },
  {
    title: "Multi-Purpose QR Code Generator",
    description:
      "Built a versatile QR code generator using React/Next.js that supports multiple input types including URLs, emails, and text. Features customizable QR code styling and formatting options, providing users with a flexible tool for creating various types of QR codes.",
    image: "/projects/3.png",
    link: "https://react-ecommerce-lsy1.vercel.app/",
  },
  {
    title: "Beach Resort | Hotel Room Booking System",
    description:
      "Developed a comprehensive hotel booking platform using React, featuring real-time room availability, secure payment processing, and an intuitive booking interface. Implemented a responsive design with seamless user experience for guests to browse, select, and reserve accommodations at the beach resort.",
    image: "/projects/4.png",
    link: "https://mukul-beach-resort.vercel.app/",
  }
] as const;

export const TYPED_STRINGS = [
  "I design and develop things",
  "I develop modern frontend apps",
  "I design dynamic user experience",
  "I design and develop motion",
];

export const SOCIALS = [
  {
    name: "Telegram",
    icon: FaTelegram,
    link: "https://t.me/rostyslav_kovtun",
  },
  {
    name: "GitHub",
    icon: RxGithubLogo,
    link: "https://github.com/rostyslavkovtun",
  },
  {
    name: "LinkedIn",
    icon: RxLinkedinLogo,
    link: "https://www.linkedin.com/in/rostyslav0565",
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Community",
    data: [
      {
        name: "Telegram",
        icon: FaTelegram,
        link: "https://t.me/rostyslav_kovtun",
      },
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com/rostyslavkovtun",
      },
      {
        name: "LinkedIn",
        icon: RxLinkedinLogo,
        link: "https://www.linkedin.com/in/rostyslav0565",
      },
    ],
  },
  // {
  //   title: "Social Media",
  //   data: [
  //     {
  //       name: "Telegram",
  //       icon: FaTelegram,
  //       link: "https://t.me/superdev",
  //     },
  //     {
  //       name: "Discord",
  //       icon: FaDiscord,
  //       link: "https://discord.gg/gnfMx4uY",
  //     },
  //     {
  //       name: "Skype",
  //       icon: FaSkype,
  //       link: "https://join.skype.com/invite/pTDpQyK9lx5a",
  //     },
  //     // {
  //     //   name: "Linkedin",
  //     //   icon: RxLinkedinLogo,
  //     //   link: "https://linkedin.com",
  //     // },
  //   ],
  // },
  // {
  //   title: "About",
  //   data: [
  //     {
  //       name: "Become Sponsor",
  //       icon: null,
  //       link: "https://youtube.com",
  //     },
  //     {
  //       name: "Learning about me",
  //       icon: null,
  //       link: "https://example.com",
  //     },
  //     {
  //       name: "Contact Me",
  //       icon: null,
  //       link: "mailto:hiwebdev0026@gmail.com",
  //     },
  //   ],
  // },
] as const;

export const NAV_LINKS = [
  {
    title: "About me",
    link: "#about-me",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Projects",
    link: "#projects",
  },
] as const;
