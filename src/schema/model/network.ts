import type { IconName } from '@core/icon'

/**
 * Represents a single contact or social network item with display and icon data.
 */
export interface Network {
  /** Identifier or short name of the network (e.g., "GitHub", "Email") */
  name: string

  /** Label shown to the user (e.g., email address, URL, or username) */
  label: string

  /** Full URL or link associated with the network */
  url: string

  /** Icon name used to visually represent the network (e.g., 'github', 'email') */
  icon: IconName
}

/**
 * Represents a collection of predefined contact methods or external links.
 *
 * Commonly used for profile sections, headers, footers, or contact cards.
 */
export interface Networks {
  /** Link to downloadable CV or résumé */
  cv: Network

  /** Email contact information */
  email: Network

  /** GitHub profile link */
  github: Network

  /** WhatsApp contact link */
  whatsapp: Network

  /** Personal or portfolio website */
  website: Network
}
