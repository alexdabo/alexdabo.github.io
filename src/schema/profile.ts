import type { ProfileData, DocumentProfileData, WebProfileData } from './model/profile'
import { calculateYears, NewPerson } from '@core/util'
import Avatar from '@assets/image/profile/formal.jpeg'

/**
 * Profile data representing a person's identity and greeting message.
 * Combines all name components from the Person model except formatting,
 * along with a personalized greeting.
 */
export const Profile: ProfileData = {
  ...NewPerson({
    firstName: 'Alexander',
    secondName: 'David',
    firstSurname: 'Bonilla',
    secondSurname: 'Adriano',
    academicTitle: 'Ing.'
  }),
  greeting: 'Hola, soy alexander'
}

/**
 * Web profile data containing metadata and descriptive content
 * used for web presentation, including social media preview info.
 */
export const Web: WebProfileData = {
  image: Avatar,
  label: 'Ing. en sistemas & computación',
  ogDescription: 'Soy tremendo programador.',
  about: `Mi nombre es Alexander David y me considero un entusiasta del código y de GNU/Linux. Desde que descubrí el fascinante mundo de Linux a los 13 años, he estado profundamente involucrado en el mundo de la informática.`,
  summary: `Desarrollador web fullstack que disfruta enfrentando desafíos, diseñando soluciones eficientes y escalables.`
}

/**
 * Document profile data summarizing the professional profile subject and description.
 * Includes a dynamically calculated career length using the calculateYears utility.
 */
export const Document: DocumentProfileData = {
  subject: 'Perfil profesional',
  description: `Profesional con más de ${calculateYears()} años de trayectoria como Ingeniero en Sistemas y Computación, con un enfoque en la creación de aplicaciones web personalizadas y APIs utilizando Node.js y Express.js, logrando resultados efectivos y eficientes en diversos proyectos.`
}
