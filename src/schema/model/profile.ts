import type { IconName } from '@core/icon'

interface Network {
  name: string
  label: string
  url: string
  icon: IconName
}
interface Networks {
  cv: Network
  email: Network
  github: Network
  mobile: Network
  whatsapp: Network
  website: Network
}
interface Location {
  address: string
  postalCode: string
  city: string
  countryCode: string
  region: string
}

export interface ProfileResume {
  firstName: string
  lastName: string
  greeting: string
  name: string
  label: string
  image: string
  email: string
  phone: string
  url: string
  about: string
  summary: string
  description: string
  ogDescription: string
  location: Location
  network: Networks
}
