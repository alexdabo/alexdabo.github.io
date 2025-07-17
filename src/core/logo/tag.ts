import type { LogoName } from './content'

export type LogoTag = {
  pdf: boolean
  name: string
  logo: LogoName
  website: string
}

type TagElement = {
  [K in LogoName]: LogoTag
}

export const Logo: TagElement = {
  // Api
  express: {
    pdf: true,
    logo: 'express',
    name: 'Express',
    website: 'https://expressjs.com'
  },
  loopback: {
    pdf: true,
    logo: 'loopback',
    name: 'LoopBack',
    website: 'https://loopback.io'
  },
  graphql: {
    pdf: true,
    logo: 'graphql',
    name: 'GraphQL',
    website: 'https://graphql.org'
  },
  nest: {
    pdf: false,
    logo: 'nest',
    name: 'NestJS',
    website: 'https://nestjs.com'
  },
  sri: {
    pdf: true,
    logo: 'sri',
    name: 'WS',
    website:
      'https://celcer.sri.gob.ec/comprobantes-electronicos-ws/RecepcionComprobantesOffline?wsdl'
  },
  rest: {
    pdf: true,
    logo: 'rest',
    name: 'REST',
    website: 'https://expressjs.com'
  },

  // DB
  mongodb: {
    pdf: true,
    logo: 'mongodb',
    name: 'MongoDB',
    website: 'https://mongodb.com'
  },
  mysql: {
    pdf: false,
    logo: 'mysql',
    name: 'MySQL',
    website: 'https://mysql.com'
  },
  postgres: {
    pdf: true,
    logo: 'postgres',
    name: 'PostgreSQL',
    website: 'https://postgresql.org'
  },

  // Langs
  go: { pdf: true, logo: 'go', name: 'Go', website: 'https://golang.org' },
  java: { pdf: true, logo: 'java', name: 'Java', website: 'https://java.com' },
  node: {
    pdf: true,
    logo: 'node',
    name: 'Node',
    website: 'https://nodejs.org'
  },
  typescript: {
    pdf: false,
    logo: 'typescript',
    name: 'TypeScript',
    website: 'https://typescriptlang.org'
  },

  // Tools
  git: { pdf: true, logo: 'git', name: 'Git', website: 'https://git-scm.com' },
  linux: {
    pdf: true,
    logo: 'linux',
    name: 'Linux',
    website: 'https://www.linux.org'
  },

  // Web
  astro: {
    pdf: true,
    logo: 'astro',
    name: 'Astro',
    website: 'https://astro.build'
  },
  react: {
    pdf: true,
    logo: 'react',
    name: 'React',
    website: 'https://reactjs.org'
  },
  vue: { pdf: true, logo: 'vue', name: 'Vue', website: 'https://vuejs.org' }
}
