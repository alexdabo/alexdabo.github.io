import type { TDocumentDefinitions, TFontDictionary } from "pdfmake/interfaces";
import FontNormal from "@assets/fonts/CenturyGothicNormal.ttf";
import FontBold from "@assets/fonts/CenturyGothicBold.ttf";
import * as pdfMake from "pdfmake/build/pdfmake";

const fonts: TFontDictionary = {
  Roboto: {
    bold: window.location.origin.concat(FontBold),
    normal: window.location.origin.concat(FontNormal),
  },
};

/**
 * Rendering engine for generating pdf reports
 * @param document document content
 * @returns
 */
export function renderPdf(document: TDocumentDefinitions) {
  return pdfMake.createPdf(document, undefined, fonts);
}
