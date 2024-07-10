import type { TDocumentDefinitions, Table } from "pdfmake/interfaces";
import { HLineLayout, SectionLayout } from "./core/table";
import { PortfolioMetadata } from "./portfolio.metadata";
import { ABOUT, EXPERIENCE } from "@config/link";
import { Color, FontSize } from "./core/enum";
import { Chip, IconLabel } from "./core/svg";
import { Layout } from "./core/layout";
import {
  TechnicalSkills,
  PersonalSkills,
  Educations,
  Interests,
  Languages,
  Projects,
  Profile,
  Works,
} from "@schema";

/************************************************
 *                     SIDE                     *
 ************************************************/
//#region

const CONTACT_TABLE: Table = {
  widths: ["*"],
  body: [
    Profile.network.email,
    Profile.network.whatsapp,
    Profile.network.website,
  ].map((lang) => [
    {
      stack: [
        { text: lang.name, style: "sideTitle" },
        { text: lang.label, color: Color.Link, link: lang.url },
      ],
    },
  ]),
};

const SKILL_TABLE: Table = {
  widths: ["*"],
  body: [
    ...TechnicalSkills.map((skill) => [
      {
        stack: [
          { text: skill.name, style: "sideTitle" },
          {
            columnGap: 2,
            margin: [0, 5],
            columns: skill.keywords
              .filter((i) => i.pdf)
              .map((tag) => Chip({ label: tag.name })),
          },
        ],
      },
    ]),
    [
      [
        {
          stack: [
            { text: PersonalSkills.name, style: "sideTitle" },
            {
              ul: PersonalSkills.keywords.map((text) => ({ text })),
            },
          ],
        },
      ],
    ],
  ],
};

const LANGUAGE_TABLE: Table = {
  widths: ["auto", "*"],
  body: Languages.map((lang) => [
    { text: lang.language, style: "sideTitle" },
    { text: lang.fluency, color: Color.Link },
  ]),
};
//#endregion

/************************************************
 *                     MAIN                     *
 ************************************************/
//#region
const EXPERIENCE_TABLE: Table = {
  body: [
    ...Works.map((item) => [
      {
        layout: "noBorders",
        table: {
          body: [
            [
              {
                columns: [
                  {
                    text: [
                      { text: `${item.position} `, style: "mainTitle" },
                      { text: item.name, link: item.url, color: Color.Link },
                    ],
                    width: 260,
                  },
                  IconLabel("calendar", {
                    text: `${item.startDate} - ${item.endDate}`,
                  }),
                ],
              },
            ],
            [{ text: item.summary, alignment: "justify" }],
            [
              {
                columnGap: 5,
                columns: item.highlights.map((element) =>
                  Chip({ label: element.name }),
                ),
              },
            ],
          ],
        },
      },
    ]),
  ],
};

const PROJECT_TABLE: Table = {
  body: [
    ...Projects.map((item) => [
      {
        layout: "noBorders",
        table: {
          body: [
            [
              {
                columns: [
                  { text: item.name, style: "mainTitle", width: 260 },
                  IconLabel("calendar", {
                    text: `${item.startDate} - ${item.endDate}`,
                  }),
                ],
              },
            ],
            [{ text: item.description, alignment: "justify" }],
            [
              {
                columnGap: 5,
                columns: item.highlights.map((element) =>
                  Chip({ label: element.name }),
                ),
              },
            ],
          ],
        },
      },
    ]),
  ],
};

const EDUCATION_TABLE: Table = {
  body: [
    ...Educations.map((item) => [
      {
        layout: "noBorders",
        table: {
          body: [
            [
              {
                columns: [
                  { text: item.studyType, style: "mainTitle", width: 260 },
                  IconLabel("calendar", {
                    text: `${item.startDate} - ${item.endDate}`,
                  }),
                ],
              },
            ],
            [
              {
                text: [
                  { text: item.area },
                  { text: " " },
                  { text: item.institution, link: item.url, color: Color.Link },
                  { text: "." },
                ],
                alignment: "justify",
              },
            ],
          ],
        },
      },
    ]),
  ],
};

const HOBBIES_TABLE: Table = {
  body: [
    ...Interests.map((item) => [
      {
        layout: "noBorders",
        table: {
          body: [
            [IconLabel(item.icon, { text: item.name, style: "mainTitle" })],
            [{ text: item.reason, alignment: "justify" }],
          ],
        },
      },
    ]),
  ],
};

//#endregion

/************************************************
 *                 DEFINITION                   *
 ************************************************/
//#region

export const PortfolioDefinition: TDocumentDefinitions = Layout(
  [
    {
      width: 150,
      layout: SectionLayout(),
      table: {
        body: [
          [{ text: "CONTACTO", style: "section" }],
          [{ layout: HLineLayout(), table: CONTACT_TABLE }],

          [{ text: "APTITUDES", style: "section" }],
          [{ layout: HLineLayout(), table: SKILL_TABLE }],

          [{ text: "IDIOMA", style: "section" }],
          [{ layout: HLineLayout(), table: LANGUAGE_TABLE }],
        ],
      },
    },

    {
      width: "*",
      layout: SectionLayout(),
      table: {
        body: [
          [{ text: ABOUT.label?.toUpperCase(), style: "section" }],
          [{ text: Profile.description, alignment: "justify" }],

          [{ text: EXPERIENCE.name?.toUpperCase(), style: "section" }],
          [{ layout: HLineLayout(), table: EXPERIENCE_TABLE }],

          [{ text: "PROYECTOS", style: "section" }],
          [{ layout: HLineLayout(), table: PROJECT_TABLE }],

          [{ text: "FORMACIÓN", style: "section" }],
          [{ layout: HLineLayout(), table: EDUCATION_TABLE }],

          [{ text: "HOBBIES", style: "section" }],
          [{ layout: HLineLayout(), table: HOBBIES_TABLE }],
        ],
      },
    },
  ],
  {
    pageMargins: [30, 30],
    info: PortfolioMetadata,
    styles: {
      sideTitle: { bold: true, fontSize: FontSize.Small },
      mainTitle: { bold: true, fontSize: FontSize.Normal },
      section: { bold: true, fontSize: FontSize.Large, color: Color.Primary },
    },
  },
);

//#endregion
