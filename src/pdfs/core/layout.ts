import type { ContentTable, TDocumentDefinitions } from "pdfmake/interfaces";
import { Color, FontSize } from "./enum";
import { Profile } from "@schema";

type Content = ContentTable & { width?: number | "*" | "auto" };

type Contents = [side: Content, main: Content];
type Options = Omit<TDocumentDefinitions, "content">;

export function Layout(
  content: Contents,
  options: Options,
): TDocumentDefinitions {
  const [{ width: sideWidth, ...side }, { width: mainWidth, ...main }] =
    content;
  return {
    content: [
      {
        marginBottom: 25,
        layout: "noBorders",
        table: {
          widths: ["*"],
          body: [
            [
              {
                type: "none",
                lineHeight: 1.5,
                alignment: "center",
                ul: [
                  {
                    style: "layout_title",
                    text: `${Profile.firstName} ${Profile.lastName}`.toUpperCase(),
                  },
                  {
                    style: "layout_subtitle",
                    text: Profile.label.toUpperCase(),
                  },
                ],
              },
            ],
          ],
        },
      },
      {
        columnGap: 10,
        columns: [
          { width: sideWidth, ...side },
          { width: mainWidth, ...main },
        ],
      },
    ],

    ...options,
    defaultStyle: {
      color: Color.SlateGrey,
      fontSize: FontSize.Small,
      ...options.defaultStyle,
    },
    styles: {
      ...options.styles,
      layout_title: {
        bold: true,
        fontSize: FontSize.XLarge,
        color: Color.Primary,
      },
      layout_subtitle: {
        bold: true,
        fontSize: FontSize.Normal,
        color: Color.Primary,
      },
    },
  };
}
