import SishoMain from "@assets/image/sisho-main.png";
import SishoCH from "@assets/image/sisho-ch.png";
import { Logo, type LogoTag } from "@core/logo";

export interface Project {
  name: string;
  place: string;
  startDate: string;
  endDate: string;
  description: string;
  highlights: Array<LogoTag>;
  url?: string;
  github?: string;
  image: string;
}

export const Projects: Array<Project> = [
  {
    name: "Bamboo",
    place: "Senagua",
    description:
      " Desarrollo del sistema informático para las juntas de administración de agua potable y capacitación del sistema informático.",
    startDate: "02/2018",
    endDate: "04/2019",
    image: SishoMain.src,
    github: "https://github.com/bamboo",
    highlights: [Logo.java, Logo.rest, Logo.vue],
  },
  {
    name: "Sisho",
    place: "Hospital Universitario Andino",
    description:
      "Desarrollo del sistema de historias clínicas para el Hospital Universitario Andino.",
    startDate: "06/2020",
    endDate: "10/2020",
    image: SishoCH.src,
    highlights: [Logo.node, Logo.loopback, Logo.rest],
  },
];
