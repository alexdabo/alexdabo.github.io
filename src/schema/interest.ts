import type { Interest } from './model/interest'

/**
 * List of personal interests and hobbies.
 *
 * Each interest includes a name, an associated icon, and a brief explanation of why it is meaningful.
 */
export const Interests: Array<Interest> = [
  {
    icon: 'judo',
    name: 'Judo',
    reason: `A través de esta disciplina, he adquirido la habilidad de manejar mis emociones y afrontar cada desafío con serenidad, mitigando los riesgos.`
  },
  {
    icon: 'chess',
    name: 'Estrategias',
    reason: `Me apasiona aprender estrategias por su enfoque meticuloso en la planificación y ejecución de acciones efectivas.`
  }
]
