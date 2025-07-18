/**
 * Represents an educational experience, including institution details and study period.
 */
export interface Education {
  /** Name of the educational institution (e.g., university or school) */
  institution: string

  /** URL to the institution’s official website */
  url: string

  /** Field of study or academic area (e.g., "Ingeniería en Sistemas y Computación") */
  area: string

  /** Type of study or degree obtained (e.g., "Ingeniería", "Licenciatura") */
  studyType: string

  /** Start date of the education period (in YYYY-MM format) */
  startDate: string

  /** End date of the education period (in YYYY-MM format) */
  endDate: string

  /** List of courses, subjects, or relevant modules (can be empty) */
  courses: Array<string>
}
