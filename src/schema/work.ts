import { Logo, type LogoTag } from "@core/logo";
import GalenoClient from "@assets/image/galeno-client.png";
import GalenoApi from "@assets/image/galeno-api.png";
import type { ImageSource } from "@core/model";

interface Work {
  name: string;
  position: string;
  url: string;
  startDate: string;
  endDate: string;
  summary: string;
  images: Array<ImageSource>;
  highlights: Array<LogoTag>;
}

export const Works: Array<Work> = [
  {
    name: "Pegaso Solutions",
    position: "Desarrollador",
    images: [{ src: GalenoClient.src }, { src: GalenoApi.src }],
    url: "https://pegasosolutionsec.com",
    summary:
      "Desarrollar sistemas para la gestión integral en hospitales, abarcando áreas como farmacia, consultorios médicos/odontológicos, imagenología y entrega de informes médicos.",

    startDate: "02/2021",
    endDate: "05/2023",
    highlights: [Logo.java, Logo.nest, Logo.graphql, Logo.sri, Logo.react],
  },
];
