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
 * Represents profile content tailored for use in documents such as or PDFs.
 */
export type DocumentProfileData = {
  /** Section title (e.g., "Perfil profesional") */
  subject: string

  /** Detailed professional summary or career description */
  description: string
}
