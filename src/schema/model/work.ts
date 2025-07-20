import type { ImageSource } from '@core/model'
import { type LogoTag } from '@core/logo'

/**
 * Represents a professional work experience or project engagement.
 */
export interface Work {
  /** Indicates whether the work is exportable to a PDF document */
  export: boolean

  /** Name of the project related to this work experience */
  project: string

  /** Name of the company or organization */
  name: string

  /** Position or role held during the work */
  position: string

  /** URL to the project's or company's website */
  url: string

  /** Start date of the work period (format: YYYY-MM or similar) */
  startDate: string

  /** End date of the work period (format: YYYY-MM or similar) */
  endDate: string

  /** Brief summary describing the work or responsibilities */
  summary: string

  /** Collection of images related to this work or project */
  images: Array<ImageSource>

  /** List of highlighted technologies or tools used, referenced by their logos */
  highlights: Array<LogoTag>
}
