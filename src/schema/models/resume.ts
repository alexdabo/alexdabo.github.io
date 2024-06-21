import type { Award } from "./award"
import type { Basics } from "./basic"
import type { Certificate } from "./certificate"
import type { Education } from "./education"
import type { Interest } from "./interest"
import type { Language } from "./language"
import type { Project } from "./project"
import type { Publication } from "./publication"
import type { Reference } from "./reference"
import type { Skill } from "./skill"
import type { Volunteer } from "./volunteer"
import type { Work } from "./work"

export interface Resume {
    basics: Basics
    work: Work[]
    volunteer: Volunteer[]
    education: Education[]
    awards: Award[]
    certificates: Certificate[]
    publications: Publication[]
    skills: Skill[]
    languages: Language[]
    interests: Interest[]
    references: Reference[]
    projects: Project[]
  }
  
  