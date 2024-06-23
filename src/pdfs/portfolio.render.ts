import { renderPdf } from "./core/render";
import { PortfolioDefinition } from "./portfolio.definition";

export function render(){
    return renderPdf(PortfolioDefinition)
}