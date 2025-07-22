import { Educations, Projects, Document, Works, Skills } from '@schema'
import { ABOUT, EXPERIENCE, PROJECT, SKILL } from '@config/link'
import { PortfolioMetadata } from './portfolio.metadata'
import { Color, FontSize } from './core/enum'
import { NewSection } from './core/section'
import { HLineLayout } from './core/table'
import { Layout } from './core/layout'
import type {
  TDocumentDefinitions,
  UnorderedListElement,
  Table
} from 'pdfmake/interfaces'

//#endregion

/************************************************
 *                     MAIN                     *
 ************************************************/
//#region
const EXPERIENCE_TABLE: Table = NewSection(
  Works.map(item => ({
    url: item.url,
    alt: item.company,
    title: item.position,
    endDate: item.endDate,
    startDate: item.startDate,
    rows: [[{ alignment: 'justify', ul: item.activities }]]
  }))
)

const PROJECT_TABLE: Table = NewSection(
  Projects.filter(i => i.export).map(item => ({
    title: item.name,
    endDate: item.endDate,
    startDate: item.startDate,
    rows: [[{ text: item.description, alignment: 'justify' }]]
  }))
)

const EDUCATION_TABLE: Table = NewSection(
  Educations.map(item => ({
    title: item.studyType,
    endDate: item.endDate,
    startDate: item.startDate,
    rows: [
      [
        {
          text: [
            { text: item.area },
            { text: ' ' },
            { text: item.institution, link: item.url, color: Color.Link },
            { text: '.' }
          ],
          alignment: 'justify'
        }
      ]
    ]
  }))
)

const SKILL_LIST: UnorderedListElement = Skills.map(skil => ({
  text: [
    { text: `${skil.name}:  `, bold: true },
    { text: skil.keywords.map(item => item.name).join(', ') }
  ]
}))

//#endregion

/************************************************
 *                 DEFINITION                   *
 ************************************************/
//#region

export const PortfolioDefinition: TDocumentDefinitions = Layout(
  [
    { text: (ABOUT.label ?? ABOUT.name).toUpperCase(), style: 'section' },
    { text: Document.description, alignment: 'justify' },

    { text: EXPERIENCE.name.toUpperCase(), style: 'section' },
    { layout: HLineLayout(), table: EXPERIENCE_TABLE },

    { text: PROJECT.name.toUpperCase(), style: 'section' },
    { layout: HLineLayout(), table: PROJECT_TABLE },

    { text: 'FORMACIÓN', style: 'section' },
    { layout: HLineLayout(), table: EDUCATION_TABLE },

    { text: (SKILL.label ?? SKILL.name).toUpperCase(), style: 'section' },
    { ul: SKILL_LIST }
  ],
  {
    pageMargins: [30, 30],
    info: PortfolioMetadata,
    styles: {
      sideTitle: { bold: true, fontSize: FontSize.Small },
      mainTitle: { bold: true, fontSize: FontSize.Normal },
      section: { bold: true, fontSize: FontSize.Large, color: Color.Primary }
    }
  }
)

//#endregion
