import { type LogoTag } from '@core/logo'

/**
 * Represents a category of technical skills, detailing specific technologies or tools
 * identified by their logos and metadata.
 */
export interface Skill {
  /** Name of the skill category (e.g., "Herramientas", "Lenguajes") */
  name: string

  /** List of technology tags related to this skill category */
  keywords: Array<LogoTag>
}
