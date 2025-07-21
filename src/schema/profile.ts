import type { ProfileData, DocumentProfileData, WebProfileData } from './model/profile'
import Avatar from '@assets/image/profile/formal.jpeg'
import { NewPerson } from '@core/util'

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
  label: 'Creo soluciones web completas',
  ogDescription: 'Soy tremendo programador.',
  summary: `Desarrollo aplicaciones web completas y robustas que resuelven necesidades reales, con código limpio, estructurado y enfocado en la eficiencia, la escalabilidad y el mantenimiento.`,
  about: `Mi nombre es Alexander David y me considero un entusiasta del código y de GNU/Linux. Desde que descubrí el fascinante mundo de Linux a los 13 años, he estado profundamente involucrado en el mundo de la informática.`
}

/**
 * Document profile data summarizing the professional profile subject and description.
 * Includes a dynamically calculated career length using the calculateYears utility.
 */
export const Document: DocumentProfileData = {
  subject: 'Perfil profesional',
  keywords: [
    'Desarrollador Fullstack',
    'APIs y Aplicaciones Web',
    'Arquitectura de Software'
  ],
  description: `Desarrollador web fullstack con experiencia en el desarrollo de aplicaciones personalizadas y APIs eficientes. He trabajado en proyectos para sectores como salud y contabilidad, integrando servicios del SRI para automatizar facturación electrónica. Utilizo tecnologías como Node.js, Go, React y PostgreSQL, con enfoque en arquitectura limpia, buenas prácticas, escalabilidad y mantenimiento.`
}
