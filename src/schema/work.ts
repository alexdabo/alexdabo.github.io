import { Logo, type LogoTag } from "@core/logo";
import Galeno from "@assets/image/sisho-ch.png";

interface Work {
  name: string;
  position: string;
  url: string;
  startDate: string;
  endDate: string;
  summary: string;
  image: string;
  highlights: Array<LogoTag>;
}

export const Works: Array<Work> = [
  {
    name: "Pegaso Solutions",
    position: "Desarrollador",
    image: Galeno.src,
    url: "https://pegasosolutionsec.com",
    summary:
      "Desarrollar sistemas para la gestión integral en hospitales, abarcando áreas como farmacia, consultorios médicos/odontológicos, imagenología y entrega de informes médicos.",

    startDate: "02/2021",
    endDate: "05/2023",
    highlights: [Logo.java, Logo.nest, Logo.graphql, Logo.sri, Logo.react],
  },
];
