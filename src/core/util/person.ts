/**
 * Represents the basic data structure for a person's name components.
 */
export interface PersonData {
  /** First given name */
  firstName: string

  /** Second given name (middle name) */
  secondName: string

  /** First surname (paternal last name) */
  firstSurname: string

  /** Second surname (maternal last name) */
  secondSurname: string

  /** Academic or professional title (e.g., Dr., Eng., Lic.) */
  academicTitle: string
}

/**
 * Represents a person and provides name formatting utilities based on their name components.
 */
export class Person {
  /** Only the given names: first name + second name */
  public givenName: string

  /** Only the surnames: first surname + second surname */
  public lastName: string

  /** First name + first surname */
  public name: string

  /** Custom alias composed of academic title, first name, and first surname */
  public alias: string

  /** Full name composed of all name components: first name, second name, first surname, second surname */

  public fullName: string
  /**
   * Creates an instance of Person and precomputes common name combinations.
   *
   * @param data An object containing all components of a person's name.
   */
  constructor(data: PersonData) {
    this.fullName = this.format(data, 'fspm')
    this.givenName = this.format(data, 'fs')
    this.lastName = this.format(data, 'pm')
    this.name = this.format(data, 'fp')
    this.alias = this.format(data, 'tfp')
  }

  /**
   * Formats the person's name according to a custom pattern using character codes.
   *
   * Format character codes:
   * - `f`: first name
   * - `s`: second name
   * - `p`: first surname
   * - `m`: second surname
   * - `t`: academic title
   *
   * Example: `tfp` → "Dr. Alexander Bonilla"
   *
   * @param format A string pattern (e.g., "fsp", "tfp") representing the desired order of name parts.
   * @returns A formatted string representing the name in the specified order.
   */
  private format(data: PersonData, format: string): string {
    const map: Record<string, string> = {
      f: data.firstName,
      s: data.secondName,
      p: data.firstSurname,
      m: data.secondSurname,
      t: data.academicTitle
    }

    const parts: string[] = []

    for (const char of format) {
      const value = map[char]
      if (value) {
        parts.push(value)
      }
    }

    return parts.join(' ')
  }
}

/**
 * Creates a new `Person` instance using the provided name components.
 *
 * Useful as a factory function to simplify object creation in other layers
 * (e.g., services, serializers or front-end components).
 *
 * @param data An object containing all components of a person's name.
 * @returns A new `Person` instance with computed name fields.
 */
export function NewPerson(data: PersonData): Person {
  return new Person(data)
}
