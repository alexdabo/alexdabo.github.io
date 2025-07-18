import type { Person } from '@core/util'
import type { Network } from './network'

export type ProfileData = Omit<Person, 'format'> & {
  greeting: string
}

export type WebProfileData = {
  ogDescription: string
  image: ImageMetadata
  about: string
  summary: string
  label: string
}

export type DocumentProfileData = {
  subject: string
  description: string
}
