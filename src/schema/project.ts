import BambooLogin from "@assets/image/bamboo-login.png";
import BambooDash from "@assets/image/bamboo-dashboard.png";
import BambooMain from "@assets/image/bamboo-main.png";
import BambooMeasurers from "@assets/image/bamboo-measurers.png";
import SishoMain from "@assets/image/sisho-main.png";
import SishoVS from "@assets/image/sisho-vs.png";
import SishoReason from "@assets/image/sisho-reason.png";
import SishoRecord from "@assets/image/sisho-record.png";
import type { Project } from "./model/project";
import { Logo } from "@core/logo";

export const Projects: Array<Project> = [
  {
    name: "Bamboo",
    place: "Senagua",
    endDate: "04/2019",
    startDate: "02/2018",
    description:
      "Desarrollo del sistema informático para las juntas de administración de agua SENAGUA y capacitación del sistema informático.",
    github: "https://github.com/alexdabo/bamboo",
    images: [
      { src: BambooLogin.src, alt: "Bamboo login" },
      { src: BambooMain.src, alt: "Bamboo main" },
      { src: BambooDash.src, alt: "Bamboo dashboard" },
      { src: BambooMeasurers.src, alt: "Bamboo lista de medidores" },
    ],
    highlights: [Logo.java, Logo.rest, Logo.vue],
  },
  {
    name: "Sisho",
    endDate: "10/2020",
    startDate: "06/2020",
    place: "Hospital Universitario Andino",
    github: "https://github.com/alexdabo/sisho",
    description:
      "Desarrollo del sistema de historias clínicas para el Hospital Universitario Andino.",
    images: [
      { src: SishoMain.src, alt: "Sisho main" },
      { src: SishoVS.src, alt: "Sisho signos vitales" },
      { src: SishoReason.src, alt: "Sisho razón" },
      { src: SishoRecord.src, alt: "Sisho resultado" },
    ],
    highlights: [Logo.node, Logo.loopback, Logo.rest],
  },
];
