import Avatar from '@assets/image/profile/formal.jpg'
import type { ProfileResume } from './model/profile'
import { calculateYears } from '@core/util'

export const Profile: ProfileResume = {
  firstName: 'Alexander David',
  lastName: 'Bonilla Adriano',
  name: 'Alexander Bonilla',
  label: 'Ing. en sistemas & computación',
  greeting: 'Hola, soy alexander',

  image: Avatar.src,
  email: 'adbonilla.ad@gmail.com',
  phone: '593979728686',
  url: 'https://alexdabo.github.io',
  ogDescription: 'Soy un tremendo programador.',
  summary: `Desarrollador web fullstack que disfruta enfrentando desafíos, diseñando soluciones eficientes y escalables.`,
  about: `Mi nombre es Alexander David y me considero un entusiasta del código y de GNU/Linux. Desde que descubrí el fascinante mundo de Linux a los 13 años, he estado profundamente involucrado en el mundo de la informática.`,
  description: `Profesional con más de ${calculateYears()} años de trayectoria como Ingeniero en Sistemas y Computación, con un enfoque en la creación de aplicaciones web personalizadas y APIs utilizando Node.js y Express.js, logrando resultados efectivos y eficientes en diversos proyectos.`,

  location: {
    address: '',
    postalCode: '',
    city: '',
    countryCode: '',
    region: ''
  },
  network: {
    cv: { name: 'Descargar', icon: 'cv', url: '/pdf', label: 'Descargar CV' },
    email: {
      name: 'Correo',
      icon: 'email',
      url: 'mailto:adbonilla.ad@gmail.com',
      label: 'adbonilla.ad@gmail.com'
    },
    github: {
      name: 'GitHub',
      icon: 'github',
      url: 'https://github.com/alexdabo',
      label: 'github.com/alexdabo'
    },
    mobile: {
      name: 'Teléfono',
      icon: 'phone',
      url: 'tel:+593979728686',
      label: '+593979728686'
    },
    whatsapp: {
      name: 'WhatsApp',
      icon: 'whatsapp',
      url: 'https://wa.me/593979728686',
      label: '+593979728686'
    },
    website: {
      name: 'Sitio web',
      icon: 'web',
      url: 'https://alexdabo.github.io',
      label: 'alexdabo.github.io'
    }
  }
}
