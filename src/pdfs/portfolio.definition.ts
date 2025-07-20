import { Educations, Interests, Projects, Document, Works } from '@schema'
import type { TDocumentDefinitions, Table } from 'pdfmake/interfaces'
import { PortfolioMetadata } from './portfolio.metadata'
import { ABOUT, EXPERIENCE, PROJECT } from '@config/link'
import { Color, FontSize } from './core/enum'
import { Chip, IconLabel } from './core/svg'
import { NewSection } from './core/section'
import { HLineLayout } from './core/table'
import { Layout } from './core/layout'

//#endregion

/************************************************
 *                     MAIN                     *
 ************************************************/
//#region
const EXPERIENCE_TABLE: Table = NewSection(
  Works.filter(i => i.export).map(item => ({
    url: item.url,
    alt: item.name,
    title: item.position,
    endDate: item.endDate,
    startDate: item.startDate,
    rows: [
      [{ text: item.summary, alignment: 'justify' }],
      [
        {
          columnGap: 5,
          columns: item.highlights.map(element => Chip({ label: element.name }))
        }
      ]
    ]
  }))
)

const PROJECT_TABLE: Table = NewSection(
  Projects.map(item => ({
    title: item.name,
    endDate: item.endDate,
    startDate: item.startDate,
    rows: [
      [{ text: item.description, alignment: 'justify' }],
      [
        {
          columnGap: 5,
          columns: item.highlights.map(element => Chip({ label: element.name }))
        }
      ]
    ]
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

const HOBBIES_TABLE: Table = {
  body: [
    ...Interests.map(item => [
      {
        layout: 'noBorders',
        table: {
          body: [
            [IconLabel(item.icon, { text: item.name, style: 'mainTitle' })],
            [{ text: item.reason, alignment: 'justify' }]
          ]
        }
      }
    ])
  ]
}

//#endregion

/************************************************
 *                 DEFINITION                   *
 ************************************************/
//#region

export const PortfolioDefinition: TDocumentDefinitions = Layout(
  [
    { text: (ABOUT.label ?? ABOUT.name).toUpperCase(), style: 'section' },
    { text: Document.description, alignment: 'justify' },

    { text: EXPERIENCE.name?.toUpperCase(), style: 'section' },
    { layout: HLineLayout(), table: EXPERIENCE_TABLE },

    { text: PROJECT.name, style: 'section' },
    { layout: HLineLayout(), table: PROJECT_TABLE },

    { text: 'FORMACIÓN', style: 'section' },
    { layout: HLineLayout(), table: EDUCATION_TABLE },

    { text: 'HOBBIES', style: 'section' },
    { layout: HLineLayout(), table: HOBBIES_TABLE }
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
