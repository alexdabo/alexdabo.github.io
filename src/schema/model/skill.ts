import { type LogoTag } from '@core/logo'

/**
 * Represents a category of technical skills, detailing specific technologies or tools
 * identified by their logos and metadata.
 */
export interface TechnicalSkill {
  /** Name of the skill category (e.g., "Herramientas", "Lenguajes") */
  name: string

  /** List of technology tags related to this skill category */
  keywords: Array<LogoTag>
}

/**
 * Represents a general skill category with a list of keyword descriptors as strings.
 */
export interface Skill {
  /** Name of the skill category (e.g., "Personales") */
  name: string

  /** List of descriptive keywords or abilities related to the skill category */
  keywords: Array<string>
}
