import type { IconName } from "@core/index"

export interface Basics {
  firstName: string
  lastName: string
  greeting: string
  name: string
  label: string
  image: string
  email: string
  phone: string
  url: string
  summary: string
  location: Location
  profiles: Profile[]
}

export interface Location {
  address: string
  postalCode: string
  city: string
  countryCode: string
  region: string
}

export interface Profile {
  network: string
  username: string
  url: string
  icon:IconName
}


