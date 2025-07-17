import type { ImageSource } from '@core/model'
import { type LogoTag } from '@core/logo'

export interface Work {
  pdf: boolean
  project: string
  name: string
  position: string
  url: string
  startDate: string
  endDate: string
  summary: string
  images: Array<ImageSource>
  highlights: Array<LogoTag>
}
