import type { Skill } from './model/skill'
import { Logo } from '@core/logo'
/**
 * A collection of technical skills grouped by category, each associated with relevant technology logos.
 */
export const Skills: Array<Skill> = [
  { name: 'Herramientas', keywords: [Logo.linux, Logo.git] },
  {
    name: 'Leguajes',
    keywords: [Logo.go, Logo.java, Logo.node, Logo.typescript]
  },
  {
    name: 'Servicio web',
    keywords: [Logo.express, Logo.nest, Logo.graphql]
  },
  {
    name: 'Desarrollo web',
    keywords: [Logo.astro, Logo.react, Logo.vue]
  },
  {
    name: 'Bases de datos',
    keywords: [Logo.mongodb, Logo.mysql, Logo.postgres]
  }
]
