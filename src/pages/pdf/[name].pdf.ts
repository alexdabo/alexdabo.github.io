import type { APIRoute, GetStaticPaths } from 'astro'
import { filename } from '@core/util'
import { generatePDF } from '@pdf'
import { Profile } from '@schema'

// You must statically define all possible names
export const getStaticPaths: GetStaticPaths = async () => {
  return [{ params: { name: filename(Profile.name) } }]
}

export const GET: APIRoute = async ({ params }) => {
  const name = params.name ?? 'cv'

  const pdfBuffer = await generatePDF()

  return new Response(pdfBuffer, {
    status: 200,
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': `filename="${name}"`
    }
  })
}
