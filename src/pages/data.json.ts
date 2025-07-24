import type { APIRoute } from 'astro'
import { site } from '@core/util'
import {
  Educations,
  Interests,
  Languages,
  Document,
  Projects,
  Network,
  Profile,
  Skills,
  Works,
  Web
} from '@schema'

export const GET: APIRoute = async () => {
  return new Response(
    JSON.stringify({
      Profile,
      Web: { ...Web, image: site(Web.image.src) },
      Document,
      Network,
      Educations,
      Skills,
      Works: Works.map(work => ({
        ...work,
        projects: work.projects.map(project => ({
          ...project,
          images: project.images.map(asset => site(asset.image.src))
        }))
      })),
      Projects: Projects.map(project => ({
        ...project,
        images: project.images.map(asset => site(asset.image.src))
      })),
      Languages,
      Interests
    }),
    {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    }
  )
}
