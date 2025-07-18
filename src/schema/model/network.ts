import type { IconName } from '@core/icon'

export interface Network {
  name: string
  label: string
  url: string
  icon: IconName
}
export interface Networks {
  cv: Network
  email: Network
  github: Network
  whatsapp: Network
  website: Network
}
