import type { ImageSource } from '@core/model'
import { type LogoTag } from '@core/logo'

/**
 * Represents a professional work experience or project engagement.
 */
export interface Project {
  /** Name of the project related to this work experience */
  name: string

  /** URL to the project's or company's website */
  url: string

  /** Brief summary describing the work or responsibilities */
  summary: string

  /** Collection of images related to this work or project */
  images: Array<ImageSource>

  /** List of highlighted technologies or tools used, referenced by their logos */
  highlights: Array<LogoTag>
}

/**
 * Represents a full work experience entry including company, role, and projects.
 */
export interface Work {
  /** Name of the company or organization */
  company: string

  /** Job title or position held */
  position: string

  /** Start date of the work (format: YYYY-MM) */
  startDate: string

  /** End date of the work (format: YYYY-MM) */
  endDate: string

  /** URL to the company's website */
  url: string

  /** Projects developed or contributed to during this job */
  projects: Array<Project>

  /** List of activities or responsibilities performed */
  activities: Array<string>
}
