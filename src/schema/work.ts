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
 * List of professional work experiences, each containing details about the project, position, duration,
 * summary, related images, and key highlights represented by technology logos.
 */
export const Works: Array<Work> = [
  {
    export: true,
    project: 'Galeno',
    name: 'Pegaso Solutions',
    position: 'Desarrollador',
    images: [
      { image: GalenoLogin, alt: 'Galeno login' },
      { image: GalenoMain, alt: 'Galeno main' },
      { image: GalenoConsulting, alt: 'Galeno consulta médica' },
      { image: GalenoSale, alt: 'Galeno venta en farmacia' }
    ],
    url: 'https://pegasosolutionsec.com/galeno',
    summary:
      'Desarrollar sistemas para la gestión integral en hospitales, abarcando áreas como farmacia, consultorios médicos/odontológicos, imagenología y entrega de informes médicos.',

    startDate: '02/2021',
    endDate: '05/2024',
    highlights: [Logo.java, Logo.nest, Logo.graphql, Logo.sri, Logo.react]
  },
  {
    export: false,
    project: 'Cifra',
    name: 'Pegaso Solutions',
    position: 'Desarrollador',
    images: [
      { image: CifraLogin, alt: 'Cifra login' },
      { image: CifraSale, alt: 'Cifra punto de venta' },
      { image: CifraUpload, alt: 'Cifra carga masiva de comprobantes' },
      { image: CifraKardex, alt: 'Cifra kardex' }
    ],
    url: 'https://pegasosolutionsec.com/cifra',
    summary:
      'Desarrollar un sistema contable integral con facturación electrónica, informes detallados, balances precisos y gestión eficiente de inventarios.',

    startDate: '02/2021',
    endDate: '05/2024',
    highlights: [Logo.java, Logo.nest, Logo.graphql, Logo.sri, Logo.react]
  },
  {
    export: false,
    project: 'Labs – QR Code Generator',
    name: 'Pegaso Solutions',
    position: 'Desarrollador',
    images: [
      { image: QRCodeLogin, alt: 'QRCode login' },
      { image: QRCodeMain, alt: 'QRCode main' },
      { image: QRCodeExam, alt: 'QRCode exámenes' },
      { image: QRCodeHistory, alt: 'QRCode historial de exámenes' },
      { image: QRCodeResult, alt: 'QRCode resulttados' }
    ],
    url: 'https://pegasosolutionsec.com/labs-qr-code-generator/',
    summary:
      'Desarrollar una aplicación que genere códigos QR para resultados de Laboratorio Clínico y otros exámenes médicos, facilitando su publicación.',

    startDate: '02/2021',
    endDate: '05/2022',
    highlights: [Logo.express, Logo.rest, Logo.vue]
  }
]
