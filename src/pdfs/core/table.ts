import type { TableLayout as Layout } from 'pdfmake/interfaces'
import { Color } from './enum'


/**
 * Table layout whit horizontal line 
 * @returns
 */
export function SectionLayout(): Layout {

    return {
        paddingLeft: () => 0,
        paddingRight: () => 2,
        paddingTop: (i) => i % 2 === 1 ? 10 : 0,
        paddingBottom: (i) => i % 2 === 1 ? 10 : 0,

        vLineWidth: () => 0,
        hLineColor: () => (Color.Third),
        hLineWidth: i => (i % 2 === 1 ? 2 : 0),
    }
}

/**
 * Table labout whit horizontal dot line
 * @returns
 */
export function HLineLayout(): Layout {

    return {
        paddingLeft: () => 0,
        paddingRight: () => 2,
        paddingTop: (i, node) => (i < node.table.body.length ? 5 : 0),
        paddingBottom: (i, node) => (i+1 < node.table.body.length  ? 5 : 0),
        vLineWidth: () => 0,
        hLineColor: () => (Color.LightGrey),
        hLineStyle: () => ({ dash: { length: 4, space: 4 } }),
        hLineWidth: (i, node) => (i > 0 && i < node.table.body.length ? 1 : 0),
    }
}