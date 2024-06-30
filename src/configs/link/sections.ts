interface SectionLink {
  id: string;
  label: string;
}

export const HOME: SectionLink = {
  label: "Inicio",
  id: "home",
};

export const EXPERIENCE: SectionLink = {
  label: "Experiencia",
  id: "experience",
};

export const SKILL: SectionLink = {
  label: "Habilidad",
  id: "skill",
};

export const ABOUT: SectionLink = {
  label: "Acerca",
  id: "about",
};

export const SECTIONS: Array<SectionLink> = [HOME, EXPERIENCE, SKILL, ABOUT];
