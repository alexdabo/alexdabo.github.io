import type { ImageSource } from '@core/model'
import { type LogoTag } from '@core/logo'

/**
 * Represents a software or development project, including metadata, technologies used,
 * visual references, and optional links.
 */
export interface Project {
  /** Indicates whether the project should be included in PDF exports */
  export: boolean
  /** Name or title of the project (e.g., "Sisho", "Bamboo") */
  name: string

  /** Institution, company, or client for which the project was developed */
  place: string

  /** Start date of the project (in YYYY-MM format) */
  startDate: string

  /** End date of the project (in YYYY-MM format) */
  endDate: string

  /** Brief description or objective of the project */
  description: string

  /** Key technologies, tools, or languages used in the project */
  highlights: Array<LogoTag>

  /** Optional URL to a live demo, public release, or company page */
  url?: string

  /** Optional GitHub repository link */
  github?: string

  /** List of screenshots or visual representations of the project */
  images: Array<ImageSource>
}
