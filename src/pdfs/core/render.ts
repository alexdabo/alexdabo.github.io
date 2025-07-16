import type { TDocumentDefinitions, TFontDictionary } from "pdfmake/interfaces";
import { isProd } from "@core/util";
import PdfPrinter from "pdfmake";
import fs from "fs/promises";
import { join } from "path";

/**
 * Loads a static file (e.g., a font) from the file system.
 *
 * @param paths - A sequence of path segments leading to the file.
 * @returns A Promise resolving to the file's contents as a Buffer.
 */
function Static(...paths: string[]): Promise<Buffer> {
  const srcPath = isProd() ? "../../" : "../../../";
  const dirname = import.meta.dirname;

  const fontPath = join(dirname, srcPath, "/src/assets", ...paths);
  return fs.readFile(fontPath);
}

/**
 * Loads and prepares custom fonts for use with pdfmake.
 *
 * @returns A Promise resolving to a font dictionary object
 *          compatible with pdfmake's PdfPrinter.
 */
async function loadFonts(): Promise<TFontDictionary> {
  return {
    Roboto: {
      normal: await Static("/fonts/CenturyGothicNormal.ttf"),
      bold: await Static("/fonts/CenturyGothicBold.ttf"),
    },
  };
}

/**
 * Generates a PDF from the provided document definition.
 *
 * This function uses pdfmake's PdfPrinter to render a PDF in memory
 * using the specified fonts and document structure. It returns the
 * resulting PDF as a Node.js Buffer.
 *
 * @param document - The PDF document definition object,
 *                   describing content, styles, layout, etc.
 * @returns A Promise resolving to a Buffer containing the PDF file data.
 */
export async function renderPdf(
  document: TDocumentDefinitions,
): Promise<Buffer> {
  const fonts = await loadFonts();
  const printer = new PdfPrinter(fonts);
  const pdfDoc = printer.createPdfKitDocument(document);

  const chunks: Buffer[] = [];

  return new Promise((resolve, reject) => {
    pdfDoc.on("data", (chunk: Buffer) => chunks.push(chunk));
    pdfDoc.on("end", () => resolve(Buffer.concat(chunks as any)));
    pdfDoc.on("error", reject);
    pdfDoc.end();
  });
}
