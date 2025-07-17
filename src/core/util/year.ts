/**
 * Calculates the number of full years between a given start date and the current date.
 *
 * @param startDate - The start date in 'YYYY-MM-DD' format.
 * @returns The number of full years from the start date to the current date.
 */
export function calculateYears(startDate: string = '2021-01-01'): number {
  // Parse the start date string into a Date object
  const start = new Date(startDate)
  // Get the current date
  const now = new Date()

  // Calculate the difference in years
  let years = now.getFullYear() - start.getFullYear()

  // Adjust for if the start date has not yet occurred this year
  if (
    now.getMonth() < start.getMonth() ||
    (now.getMonth() === start.getMonth() && now.getDate() < start.getDate())
  ) {
    years--
  }

  return years
}
