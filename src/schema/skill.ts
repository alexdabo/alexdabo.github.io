interface Skill {
  name: string
  keywords: string[]
}

export const TechnicalSkills: Array<Skill> = [


  {
    name: 'Servicio web',
    keywords: ['Go', 'NodeJS', 'GraphQL']
  },
  {
    name: 'Desarrollo web',
    keywords: ['React', 'Vue', 'Astro']
  },
  {
    name: 'Bases de datos',
    keywords: ['MySQL', 'PostgreSQL']
  },
]

export const PersonalSkills: Skill =

{
  name: 'Persolanes',
  keywords: [
    'Habilidad empática.',
    'Trabajo colaborativo.',
    'Me apasiona compartir lo que he aprendido.'
  ]
}
