import { PortfolioDefinition } from './portfolio.definition'
import { renderPdf } from './core/render'

export function generatePDF() {
  return renderPdf(PortfolioDefinition)
}
