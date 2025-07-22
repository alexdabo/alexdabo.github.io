import BambooLogin from '@assets/image/bamboo/login.png'
import BambooDash from '@assets/image/bamboo/dashboard.png'
import BambooMain from '@assets/image/bamboo/main.png'
import BambooMeasurers from '@assets/image/bamboo/measurers.png'
import SishoMain from '@assets/image/sisho/main.png'
import SishoVS from '@assets/image/sisho/vs.png'
import SishoReason from '@assets/image/sisho/reason.png'
import SishoRecord from '@assets/image/sisho/record.png'
import type { Project } from './model/project'
import { Logo } from '@core/logo'

/**
 * A list of projects showcasing professional experience, achievements, and associated media.
 */
export const Projects: Array<Project> = [
  {
    export: true,
    name: 'Bamboo',
    place: 'Senagua',
    endDate: '04/2019',
    startDate: '02/2018',
    description: `Diseñar y desarrollar un sistema web para la gestión operativa y financiera de juntas de agua, incluyendo el modelado de base de datos, creación de APIs REST y del frontend. El sistema permite administrar usuarios, pagos, reportes y control de actividades, facilitando su adopción en comunidades rurales.`,
    github: 'https://github.com/alexdabo/bamboo',
    images: [
      { image: BambooLogin, alt: 'Bamboo login' },
      { image: BambooMain, alt: 'Bamboo main' },
      { image: BambooDash, alt: 'Bamboo dashboard' },
      { image: BambooMeasurers, alt: 'Bamboo lista de medidores' }
    ],
    highlights: [Logo.java, Logo.rest, Logo.vue]
  },
  {
    export: false,
    name: 'Sisho',
    endDate: '10/2020',
    startDate: '06/2020',
    place: 'Hospital Universitario Andino',
    github: 'https://github.com/alexdabo/sisho',
    description: `Desarrollar el sistema de historias clínicas, desde la base de datos y APIs REST con Node.js y LoopBack hasta la interfaz web. Permite registrar consultas, diagnósticos y gestionar el acceso por especialidad.`,
    images: [
      { image: SishoMain, alt: 'Sisho main' },
      { image: SishoVS, alt: 'Sisho signos vitales' },
      { image: SishoReason, alt: 'Sisho razón' },
      { image: SishoRecord, alt: 'Sisho resultado' }
    ],
    highlights: [Logo.node, Logo.loopback, Logo.rest]
  }
]
