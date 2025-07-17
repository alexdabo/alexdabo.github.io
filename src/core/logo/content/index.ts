import type { ToolLogoName } from './tools'
import type { LangLogoName } from './lang'
import type { WebLogoName } from './web'
import type { ApiLogoName } from './api'
import type { DbLogoName } from './db'

export type LogoName =
  | ApiLogoName
  | DbLogoName
  | LangLogoName
  | ToolLogoName
  | WebLogoName
