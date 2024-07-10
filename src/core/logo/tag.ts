import type { LogoName } from "./content";

export type LogoTag = {
  name: string;
  logo: LogoName;
  website: string;
};

type TagElement = {
  [K in LogoName]: LogoTag;
};

export const Logo: TagElement = {
  // Api
  express: {
    logo: "express",
    name: "Express",
    website: "https://expressjs.com",
  },
  loopback: {
    logo: "loopback",
    name: "LoopBack",
    website: "https://loopback.io",
  },
  graphql: { logo: "graphql", name: "GraphQL", website: "https://graphql.org" },
  nest: { logo: "nest", name: "NestJS", website: "https://nestjs.com" },
  sri: {
    logo: "sri",
    name: "WS",
    website:
      "https://celcer.sri.gob.ec/comprobantes-electronicos-ws/RecepcionComprobantesOffline?wsdl",
  },
  rest: { logo: "rest", name: "REST", website: "https://expressjs.com" },

  // DB
  mongodb: { logo: "mongodb", name: "MongoDB", website: "https://mongodb.com" },
  mysql: { logo: "mysql", name: "MySQL", website: "https://mysql.com" },
  postgres: {
    logo: "postgres",
    name: "PostgreSQL",
    website: "https://postgresql.org",
  },

  // Langs
  go: { logo: "go", name: "Go", website: "https://golang.org" },
  java: { logo: "java", name: "Java", website: "https://java.com" },
  node: { logo: "node", name: "Node", website: "https://nodejs.org" },
  typescript: {
    logo: "typescript",
    name: "TypeScript",
    website: "https://typescriptlang.org",
  },

  // Tools
  git: { logo: "git", name: "Git", website: "https://git-scm.com" },
  linux: { logo: "linux", name: "Linux", website: "https://www.linux.org" },

  // Web
  astro: { logo: "astro", name: "Astro", website: "https://astro.build" },
  react: { logo: "react", name: "React", website: "https://reactjs.org" },
  vue: { logo: "vue", name: "Vue", website: "https://vuejs.org" },
};
