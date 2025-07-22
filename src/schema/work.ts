// Image imports for Galeno, Cifra, and Labs QR Code Generator projects
import GalenoLogin from '@assets/image/galeno/login.png'
import CifraLogin from '@assets/image/cifra/login.png'
import QRCodeLogin from '@assets/image/qrcode/login.png'
import QRCodeMain from '@assets/image/qrcode/main.png'
import QRCodeExam from '@assets/image/qrcode/exam.png'
import QRCodeHistory from '@assets/image/qrcode/history.png'
import QRCodeResult from '@assets/image/qrcode/result.png'
import GalenoMain from '@assets/image/galeno/main.png'
import GalenoConsulting from '@assets/image/galeno/consulta.png'
import GalenoSale from '@assets/image/galeno/venta.png'
import CifraKardex from '@assets/image/cifra/kardex.png'
import CifraSale from '@assets/image/cifra/sale.png'
import CifraUpload from '@assets/image/cifra/upload.png'
import type { Work } from './model/work'
import { Logo } from '@core/logo'

/**
 * List of professional work experiences with related projects and activities
 */
export const Works: Array<Work> = [
  {
    endDate: '05/2024',
    startDate: '02/2021',
    position: 'Desarrollador',
    company: 'Pegaso Solutions',
    url: 'https://pegasosolutionsec.com',

    /** List of main tasks and responsibilities during the work period */
    activities: [
      'Diseñar y desarrollar APIs modulares y escalables con NestJS y Express.js, orientadas a la gestión de sistemas hospitalarios y contables.',
      'Implementar sistemas de interfaces modulares y mantenibles con React y Vue.js, utilizando componentes reutilizables y separación clara de lógica y presentación.',
      'Desarrollar una herramienta web para visualizar imágenes de imagenología en formato DICOM, permitiendo la exploración eficiente de estudios médicos.',
      'Integrar servicios del SRI para automatizar la facturación electrónica y validación de comprobantes.',
      'Implementar comunicación en tiempo real mediante WebSockets en el módulos de citas médicas.',
      'Generar reportes en PDF a partir de datos filtrados, para informes clínicos y financieros.',
      'Modelar y administrar bases de datos relacionales, optimizando consultas para alto rendimiento.',
      'Aplicar arquitectura limpia y principios SOLID para mejorar el mantenimiento y la escalabilidad.',
      'Gestionar autenticación y autorización con JWT y control de accesos basado en roles y permisos.',
      'Automatizar despliegues y flujos de integración continua (CI/CD).',
      'Documentar APIs, procesos técnicos y decisiones arquitectónicas para facilitar el mantenimiento.'
    ],

    /** List of projects developed or maintained during this job */
    projects: [
      {
        name: 'Galeno',
        url: 'https://pegasosolutionsec.com/galeno',
        highlights: [Logo.java, Logo.nest, Logo.graphql, Logo.sri, Logo.react],
        images: [
          { image: GalenoLogin, alt: 'Galeno login' },
          { image: GalenoMain, alt: 'Galeno main' },
          { image: GalenoConsulting, alt: 'Galeno consulta médica' },
          { image: GalenoSale, alt: 'Galeno venta en farmacia' }
        ],
        summary: `Desarrollar sistemas para la gestión integral en hospitales, abarcando áreas como farmacia, consultorios médicos/odontológicos, imagenología y entrega de informes médicos.`
      },
      {
        name: 'Cifra',
        url: 'https://pegasosolutionsec.com/cifra',
        highlights: [Logo.java, Logo.nest, Logo.graphql, Logo.sri, Logo.react],
        images: [
          { image: CifraLogin, alt: 'Cifra login' },
          { image: CifraSale, alt: 'Cifra punto de venta' },
          { image: CifraUpload, alt: 'Cifra carga masiva de comprobantes' },
          { image: CifraKardex, alt: 'Cifra kardex' }
        ],
        summary: `Desarrollar un sistema contable integral con facturación electrónica, informes detallados, balances precisos y gestión eficiente de inventarios.`
      },
      {
        name: 'Labs – QR Code Generator',
        url: 'https://pegasosolutionsec.com/labs-qr-code-generator/',
        highlights: [Logo.express, Logo.rest, Logo.vue],
        images: [
          { image: QRCodeLogin, alt: 'QRCode login' },
          { image: QRCodeMain, alt: 'QRCode main' },
          { image: QRCodeExam, alt: 'QRCode exámenes' },
          { image: QRCodeHistory, alt: 'QRCode historial de exámenes' },
          { image: QRCodeResult, alt: 'QRCode resulttados' }
        ],
        summary: `Desarrollar una aplicación que genere códigos QR para resultados de Laboratorio Clínico y otros exámenes médicos, facilitando su publicación.`
      }
    ]
  }
]
