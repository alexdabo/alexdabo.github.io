/**
 * Represents a spoken language and the user's proficiency level in it.
 */
export interface Language {
  /** Name of the language (e.g., "Español", "English") */
  language: string

  /** Level of fluency (e.g., "Nativo", "Intermediate/B2") */
  fluency: string
}
