interface Work {
  name: string;
  position: string;
  url: string;
  startDate: string;
  endDate: string;
  summary: string;
  highlights: string[];
}

export const Works: Array<Work> = [
  {
    name: "Pegaso Solutions",
    position: "Desarrollador",
    url: "https://pegasosolutionsec.com",
    summary:
      "Desarrollar sistemas para la gestión integral en hospitales, abarcando áreas como farmacia, consultorios médicos/odontológicos, imagenología y entrega de informes médicos.",
    highlights: ["Java", "NestJS", "GraphQL", "React", "PostgreSQL", "SRI WS"],
    startDate: "02/2021",
    endDate: "05/2023",
  },
];
