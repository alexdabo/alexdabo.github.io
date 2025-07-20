import type { ContentTable, Table, TableCell } from 'pdfmake/interfaces'
import { IconLabel } from './svg'
import { Color } from './enum'

type Row = [TableCell]

type Section = {
  startDate: string
  endDate: string
  title: string
  alt?: string
  url?: string
  rows: Array<Row>
}
function sectionItem(props: Section): ContentTable {
  const { startDate, endDate, title, alt, rows, url } = props

  return {
    layout: 'noBorders',
    table: {
      widths: ['*'],
      body: [
        [
          {
            columns: [
              {
                width: '*',
                text: [
                  { text: title, style: 'mainTitle' },
                  { text: ' ' },
                  { text: alt, link: url, color: Color.Link }
                ]
              },
              {
                width: 'auto',
                alignment: 'right',
                ...IconLabel('calendar', {
                  text: `${startDate} - ${endDate}`
                })
              }
            ]
          }
        ],
        ...rows
      ]
    }
  }
}

export function NewSection(data: Array<Section>): Table {
  return {
    widths: ['*'],
    body: data.map(item => [sectionItem(item)])
  }
}
