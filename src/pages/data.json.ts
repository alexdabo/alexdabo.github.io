import type { APIRoute } from 'astro'
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
      Web,
      Document,
      Network,
      Educations,
      Skills,
      Works,
      Projects,
      Languages,
      Interests
    }),
    {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    }
  )
}
