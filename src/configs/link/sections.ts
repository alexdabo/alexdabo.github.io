export interface SectionLink {
  id: string
  name: string
  label?: string
}

export const HOME: SectionLink = {
  id: 'home',
  name: 'Inicio'
}

export const EXPERIENCE: SectionLink = {
  id: 'experience',
  name: 'Experiencia'
}
export const PROJECT: SectionLink = {
  id: 'project',
  name: 'Proyectos'
}

export const SKILL: SectionLink = {
  id: 'skill',
  name: 'Habilidades',
  label: 'Habilidades técnicas'
}

export const ABOUT: SectionLink = {
  id: 'about',
  name: 'Acerca',
  label: 'Acerca de mi'
}

export const SECTIONS: Array<SectionLink> = [HOME, EXPERIENCE, PROJECT, SKILL, ABOUT]
