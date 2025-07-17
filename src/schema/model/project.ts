import type { ImageSource } from '@core/model'
import { type LogoTag } from '@core/logo'

export interface Project {
  name: string
  place: string
  startDate: string
  endDate: string
  description: string
  highlights: Array<LogoTag>
  url?: string
  github?: string
  images: Array<ImageSource>
}
