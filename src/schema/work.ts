import GalenoLogin from "@assets/image/galeno-login.png";
import CifraLogin from "@assets/image/cifra-login.png";
import QRCodeLogin from "@assets/image/qrcode-login.png";
import QRCodeMain from "@assets/image/qrcode-main.png";
import QRCodeExam from "@assets/image/qrcode-exam.png";
import QRCodeHistory from "@assets/image/qrcode-history.png";
import QRCodeResult from "@assets/image/qrcode-result.png";
import GalenoMain from "@assets/image/galeno-main.png";
import GalenoConsulting from "@assets/image/galeno-consulta.png";
import GalenoSale from "@assets/image/galeno-venta.png";
import CifraKardex from "@assets/image/cifra-kardex.png";
import CifraSale from "@assets/image/cifra-sale.png";
import CifraUpload from "@assets/image/cifra-upload.png";
import type { Work } from "./model/work";
import { Logo } from "@core/logo";

export const Works: Array<Work> = [
  {
    pdf: true,
    project: "Galeno",
    name: "Pegaso Solutions",
    position: "Desarrollador",
    images: [
      { src: GalenoLogin.src, alt: "Galeno login" },
      { src: GalenoMain.src, alt: "Galeno main" },
      { src: GalenoConsulting.src, alt: "Galeno consulta médica" },
      { src: GalenoSale.src, alt: "Galeno venta en farmacia" },
    ],
    url: "https://pegasosolutionsec.com/galeno",
    summary:
      "Desarrollar sistemas para la gestión integral en hospitales, abarcando áreas como farmacia, consultorios médicos/odontológicos, imagenología y entrega de informes médicos.",

    startDate: "02/2021",
    endDate: "05/2024",
    highlights: [Logo.java, Logo.nest, Logo.graphql, Logo.sri, Logo.react],
  },
  {
    pdf: false,
    project: "Cifra",
    name: "Pegaso Solutions",
    position: "Desarrollador",
    images: [
      { src: CifraLogin.src, alt: "Cifra login" },
      { src: CifraSale.src, alt: "Cifra punto de venta" },
      { src: CifraUpload.src, alt: "Cifra carga masiva de comprobantes" },
      { src: CifraKardex.src, alt: "Cifra kardex" },
    ],
    url: "https://pegasosolutionsec.com/cifra",
    summary:
      "Desarrollar un sistema contable integral con facturación electrónica, informes detallados, balances precisos y gestión eficiente de inventarios.",

    startDate: "02/2021",
    endDate: "05/2024",
    highlights: [Logo.java, Logo.nest, Logo.graphql, Logo.sri, Logo.react],
  },
  {
    pdf: false,
    project: "Labs – QR Code Generator",
    name: "Pegaso Solutions",
    position: "Desarrollador",
    images: [
      { src: QRCodeLogin.src, alt: "QRCode login" },
      { src: QRCodeMain.src, alt: "QRCode main" },
      { src: QRCodeExam.src, alt: "QRCode exámenes" },
      { src: QRCodeHistory.src, alt: "QRCode historial de exámenes" },
      { src: QRCodeResult.src, alt: "QRCode resulttados" },
    ],
    url: "https://pegasosolutionsec.com/labs-qr-code-generator/",
    summary:
      "Desarrollar una aplicación que genere códigos QR para resultados de Laboratorio Clínico y otros exámenes médicos, facilitando su publicación.",

    startDate: "02/2021",
    endDate: "05/2022",
    highlights: [Logo.express, Logo.rest, Logo.vue],
  },
];
