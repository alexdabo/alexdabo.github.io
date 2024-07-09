import SishoMain from "@assets/image/sisho-main.png";
import SishoCH from "@assets/image/sisho-ch.png";
import { Logo, type LogoTag } from "@core/logo";
import type { ImageSource } from "@core/model";

export interface Project {
  name: string;
  place: string;
  startDate: string;
  endDate: string;
  description: string;
  highlights: Array<LogoTag>;
  url?: string;
  github?: string;
  images: Array<ImageSource>;
}

export const Projects: Array<Project> = [
  {
    name: "Bamboo",
    place: "Senagua",
    endDate: "04/2019",
    startDate: "02/2018",
    description:
      "Desarrollo del sistema informático para las juntas de administración de agua potable y capacitación del sistema informático.",
    github: "https://github.com/bamboo",
    images: [
      { src: SishoMain.src, alt: "Sisho main" },
      { src: SishoCH.src, alt: "Sisho checkeo" },
    ],
    highlights: [Logo.java, Logo.rest, Logo.vue],
  },
  {
    name: "Sisho",
    endDate: "10/2020",
    startDate: "06/2020",
    place: "Hospital Universitario Andino",
    description:
      "Desarrollo del sistema de historias clínicas para el Hospital Universitario Andino.",
    images: [
      { src: SishoCH.src, alt: "Sisho checkeo" },
      { src: SishoMain.src, alt: "Sisho main" },
    ],
    highlights: [Logo.node, Logo.loopback, Logo.rest],
  },
];
