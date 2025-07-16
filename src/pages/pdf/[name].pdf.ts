import type { APIRoute, GetStaticPaths } from "astro";
import { filename, isProd } from "@core/util";
import { generatePDF } from "@pdf";
import { Profile } from "@schema";

// You must statically define all possible names
export const getStaticPaths: GetStaticPaths = async () => {
  if (isProd()) {
    return [{ params: { name: filename(Profile.name) } }];
  }

  return [{ params: { name: "cv" } }];
};

export const GET: APIRoute = async ({ params }) => {
  const name = params.name ?? "cv";

  const pdfBuffer = await generatePDF();

  return new Response(pdfBuffer, {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `filename="${name}"`,
    },
  });
};
