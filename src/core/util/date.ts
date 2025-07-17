/**
 * Formats a JavaScript Date object into "YYYY-MM-DD HH:mm" in a specific IANA time zone.
 *
 * @param date - The Date object to format
 * @param timeZone - An IANA time zone string (e.g. "Europe/Madrid", "America/Mexico_City")
 * @returns A string representing the date in the format "YYYY-MM-DD HH:mm" adjusted to the specified time zone
 */
export function formatDateToTimezone(date: Date, timeZone: string): string {
  const formatter = new Intl.DateTimeFormat('en-CA', {
    timeZone,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23' // 24-hour format
  })

  const parts = formatter.formatToParts(date)
  const values: { [key: string]: string } = {}

  for (const part of parts) {
    if (part.type !== 'literal') {
      values[part.type] = part.value
    }
  }

  return `${values.year}-${values.month}-${values.day} ${values.hour}:${values.minute}`
}
