import type { Person } from '@core/util'

/**
 * Represents extended profile data derived from a `Person` object.
 * Includes a personalized greeting message for use in user interfaces.
 */
export type ProfileData = Omit<Person, 'format'> & {
  /** Personalized greeting message (e.g., "Hola, soy alexander") */
  greeting: string
}

/**
 * Represents the profile data typically displayed on a public website.
 * Includes visual, descriptive, and summary information about the person.
 */
export type WebProfileData = {
  /** Short description for Open Graph or social sharing (e.g., SEO/snippet text) */
  ogDescription: string

  /** Metadata of the profile image including format and dimensions */
  image: ImageMetadata

  /** Personal bio or background statement */
  about: string

  /** Concise summary of professional focus or role */
  summary: string

  /** Professional or academic label/title (e.g., "Ing. en sistemas & computación") */
  label: string
}

/**
 * Represents structured profile content intended for export in documents such as PDFs.
 * Commonly used in résumés or CVs to display a professional summary section.
 */
export type DocumentProfileData = {
  /** Title of the section in the document (e.g., "Professional Profile") */
  subject: string

  /** Relevant keywords or tags associated with the candidate's expertise */
  keywords: Array<string>

  /** Comprehensive professional summary highlighting experience, skills, and focus areas */
  description: string
}
