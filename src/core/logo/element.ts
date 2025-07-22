import { LoopBack, Express, GraphQL, Nest, Rest, Sri, Gqlgen } from './content/api'
import { Go, Java, Node, TypeScript } from './content/lang'
import { Mongodb, MySQL, Postgres } from './content/db'
import { Astro, React, Vue } from './content/web'
import { Git, Linux } from './content/tools'
import type { LogoName } from './content'

type LogoElement = {
  [K in LogoName]: string
}

export const Logos: LogoElement = {
  // Api
  express: Express,
  loopback: LoopBack,
  graphql: GraphQL,
  gqlgen: Gqlgen,
  nest: Nest,
  sri: Sri,
  rest: Rest,

  // DB
  mongodb: Mongodb,
  mysql: MySQL,
  postgres: Postgres,

  // Langs
  go: Go,
  java: Java,
  node: Node,
  typescript: TypeScript,

  // Tools
  git: Git,
  linux: Linux,

  // Web
  astro: Astro,
  react: React,
  vue: Vue
}
