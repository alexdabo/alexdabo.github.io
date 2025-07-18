import type { APIRoute } from 'astro'
import {
  TechnicalSkills,
  PersonalSkills,
  Educations,
  Interests,
  Languages,
  Projects,
  Network,
  Profile,
  Document,
  Works,
  Web
} from '@schema'

export const GET: APIRoute = async () => {
  return new Response(
    JSON.stringify({
      Profile,
      Web,
      Export: Document,
      Network,
      Educations,
      Works,
      Projects,
      Languages,
      Interests,
      PersonalSkills,
      TechnicalSkills
    }),
    {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    }
  )
}
