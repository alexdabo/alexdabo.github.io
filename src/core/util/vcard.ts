/**
 * Interface representing the structure of contact data used to generate a vCard.
 */
export interface VCardData {
  /** First name (required) */
  firstName: string

  /** Last name (optional) */
  lastName?: string

  /** Company or organization name (optional) */
  organization?: string

  /** Job title or position (optional) */
  title?: string

  /** Email address (optional) */
  email?: string

  /** Phone number (optional) */
  phone?: string

  /** Website URL (optional) */
  website?: string

  /** Street address (optional) */
  address?: string

  /** City (optional) */
  city?: string

  /** State or region (optional) */
  region?: string

  /** ZIP or postal code (optional) */
  postalCode?: string

  /** Country (optional) */
  country?: string
}

/**
 * Generates a vCard (version 3.0) as a plain text string using the provided contact data.
 *
 * @param data - The contact information for the vCard.
 * @returns A string containing the formatted vCard content.
 *
 * @example
 * const vcard = generateVCard({
 *   firstName: "Alexander",
 *   lastName: "Bonilla",
 *   email: "juan@example.com",
 *   phone: "+973 600 123 456"
 * });
 * console.log(vcard);
 */
export function generateVCard(data: VCardData): string {
  return [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `N:${data.lastName || ''};${data.firstName};;;`,
    `FN:${data.firstName} ${data.lastName || ''}`.trim(),
    data.organization ? `ORG:${data.organization}` : '',
    data.title ? `TITLE:${data.title}` : '',
    data.phone ? `TEL;TYPE=WORK,VOICE:${data.phone}` : '',
    data.email ? `EMAIL:${data.email}` : '',
    data.website ? `URL:${data.website}` : '',
    data.address || data.city || data.region || data.postalCode || data.country
      ? `ADR;TYPE=WORK:;;${data.address || ''};${data.city || ''};${data.region || ''};${data.postalCode || ''};${data.country || ''}`
      : '',
    'END:VCARD'
  ]
    .filter(line => line.trim() !== '')
    .join('\n')
}
