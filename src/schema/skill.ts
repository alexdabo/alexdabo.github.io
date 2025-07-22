import type { Skill } from './model/skill'
import { Logo } from '@core/logo'
/**
 * A collection of technical skills grouped by category, each associated with relevant technology logos.
 */
export const Skills: Array<Skill> = [
  { name: 'Entornos de desarrollo', keywords: [Logo.linux, Logo.git] },
  {
    name: 'Lenguajes y runtimes',
    keywords: [Logo.node, Logo.go, Logo.java, Logo.typescript]
  },
  {
    name: 'Frameworks Backend',
    keywords: [Logo.nest, Logo.loopback, Logo.express, Logo.gqlgen]
  },
  {
    name: 'Frameworks Frontend',
    keywords: [Logo.astro, Logo.react, Logo.vue]
  },
  {
    name: 'Bases de datos',
    keywords: [Logo.postgres, Logo.mysql, Logo.mongodb]
  },
  {
    name: 'Comunicación',
    keywords: [Logo.graphql, Logo.rest]
  }
]
