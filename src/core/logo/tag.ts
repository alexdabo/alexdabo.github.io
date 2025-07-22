import type { LogoName } from './content'

/**
 * Represents metadata for a technology logo, including display settings and reference information.
 */
export type LogoTag = {
  /** Indicates whether the logo should be included in PDF exports */
  onlyExport: boolean

  /** Human-readable name of the technology or tool (e.g., "Node", "Vue", "GraphQL") */
  name: string

  /** Identifier used to resolve the corresponding logo image or icon */
  logo: LogoName

  /** Official website or documentation link for the technology */
  website: string
}

/**
 * A mapping between technology identifiers (`LogoName`) and their associated `LogoTag` metadata.
 */
type TagElement = {
  [K in LogoName]: LogoTag
}

/**
 * Centralized registry of technologies, tools, languages, frameworks, and services used across the application.
 *
 * Each entry includes display configuration, such as PDF visibility, label, logo ID, and a reference URL.
 */
export const Logo: TagElement = {
  // Api
  express: {
    onlyExport: false,
    logo: 'express',
    name: 'Express',
    website: 'https://expressjs.com'
  },
  loopback: {
    onlyExport: false,
    logo: 'loopback',
    name: 'LoopBack',
    website: 'https://loopback.io'
  },
  graphql: {
    onlyExport: false,
    logo: 'graphql',
    name: 'GraphQL',
    website: 'https://graphql.org'
  },
  gqlgen: {
    onlyExport: false,
    logo: 'gqlgen',
    name: 'gqlgen',
    website: 'https://gqlgen.com'
  },
  nest: {
    onlyExport: false,
    logo: 'nest',
    name: 'NestJS',
    website: 'https://nestjs.com'
  },
  sri: {
    onlyExport: false,
    logo: 'sri',
    name: 'WS',
    website:
      'https://celcer.sri.gob.ec/comprobantes-electronicos-ws/RecepcionComprobantesOffline?wsdl'
  },
  rest: {
    onlyExport: true,
    logo: 'rest',
    name: 'REST',
    website: 'https://expressjs.com'
  },

  // DB
  mongodb: {
    onlyExport: false,
    logo: 'mongodb',
    name: 'MongoDB',
    website: 'https://mongodb.com'
  },
  mysql: {
    onlyExport: false,
    logo: 'mysql',
    name: 'MySQL',
    website: 'https://mysql.com'
  },
  postgres: {
    onlyExport: false,
    logo: 'postgres',
    name: 'PostgreSQL',
    website: 'https://postgresql.org'
  },

  // Langs
  go: { onlyExport: false, logo: 'go', name: 'Go', website: 'https://golang.org' },
  java: { onlyExport: false, logo: 'java', name: 'Java', website: 'https://java.com' },
  node: {
    onlyExport: false,
    logo: 'node',
    name: 'JavaScript (Node.js)',
    website: 'https://nodejs.org'
  },
  typescript: {
    onlyExport: false,
    logo: 'typescript',
    name: 'TypeScript',
    website: 'https://typescriptlang.org'
  },

  // Tools
  git: { onlyExport: false, logo: 'git', name: 'Git', website: 'https://git-scm.com' },
  linux: {
    onlyExport: false,
    logo: 'linux',
    name: 'Linux (uso diario)',
    website: 'https://www.linux.org'
  },

  // Web
  astro: {
    onlyExport: false,
    logo: 'astro',
    name: 'Astro',
    website: 'https://astro.build'
  },
  react: {
    onlyExport: false,
    logo: 'react',
    name: 'React',
    website: 'https://reactjs.org'
  },
  vue: { onlyExport: false, logo: 'vue', name: 'Vue', website: 'https://vuejs.org' }
}
