import type { Education } from './model/education'

/**
 * List of formal education records.
 *
 * Each entry represents an educational program or degree completed or in progress,
 * containing details about the institution, field of study, and timeline.
 */
export const Educations: Array<Education> = [
  {
    institution: 'Universidad Nacional De Chimborazo',
    url: 'https://www.unach.edu.ec',
    area: 'Ingeniería en Sistemas y Computación',
    studyType: 'Ingeniería',
    startDate: '10/2015',
    endDate: '05/2021',
    courses: []
  }
]
