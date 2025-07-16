import { renderPdf } from "./core/render";
import { PortfolioDefinition } from "./portfolio.definition";

export function generatePDF() {
  return renderPdf(PortfolioDefinition);
}
