import type { IconName } from '@core/icon'

/**
 * Represents a personal interest or hobby, including its motivation and an associated icon.
 */
export interface Interest {
  /** Name of the interest or activity (e.g., "Judo") */
  name: string

  /** Icon used to visually represent the interest */
  icon: IconName

  /** Short explanation or personal reason for pursuing this interest */
  reason: string
}
