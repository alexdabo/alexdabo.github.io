import { Logo, type LogoTag } from "@core/logo";

interface TechnicalSkill {
  name: string;
  keywords: Array<LogoTag>;
}

interface Skill {
  name: string;
  keywords: Array<string>;
}

export const TechnicalSkills: Array<TechnicalSkill> = [
  {
    name: "Leguajes",
    keywords: [Logo.go, Logo.java, Logo.node, Logo.typescript],
  },
  {
    name: "Servicio web",
    keywords: [Logo.express, Logo.nest, Logo.graphql],
  },
  {
    name: "Desarrollo web",
    keywords: [Logo.astro, Logo.react, Logo.vue],
  },
  {
    name: "Bases de datos",
    keywords: [Logo.mongodb, Logo.mysql, Logo.postgres],
  },
];

export const PersonalSkills: Skill = {
  name: "Persolanes",
  keywords: [
    "Resolutivo",
    "Habilidad empática.",
    "Trabajo colaborativo.",
    "Me apasiona compartir lo que he aprendido.",
  ],
};
