export interface Project {
  name: string;
  place: string;
  startDate: string;
  endDate: string;
  description: string;
  highlights: string[];
  url?: string;
  github?: string;
}

export const Projects: Array<Project> = [
  {
    name: "Bamboo",
    place: "Senagua",
    description:
      " Desarrollo del sistema informático para las juntas de administración de agua potable y capacitación del sistema informático.",
    startDate: "02/2018",
    endDate: "04/2019",
    highlights: ["Java", "REST", "Vue"],
  },
  {
    name: "Sisho",
    place: "Hospital Universitario Andino",
    description:
      "Desarrollo del sistema de historias clínicas para el Hospital Universitario Andino.",
    startDate: "06/2020",
    endDate: "10/2020",
    highlights: ["NodeJS", "LoopBack", "REST", "Vue"],
  },
];
