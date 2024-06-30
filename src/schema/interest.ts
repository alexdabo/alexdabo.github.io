import type { IconName } from "@core/icon";

interface Interest {
  name: string;
  icon: IconName;
  reason: string;
}

export const Interests: Array<Interest> = [
  {
    icon: "judo",
    name: "Judo",
    reason:
      "A través de esta disciplina, he adquirido la habilidad de manejar mis emociones y afrontar cada desafío con serenidad, mitigando los riesgos.",
  },
  {
    icon: "chess",
    name: "Estrategias militares",
    reason:
      "Me apasiona aprender estrategias militares por su enfoque meticuloso en la planificación y ejecución de acciones efectivas.",
  },
];
