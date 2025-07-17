import { Profile } from '@schema'
import type { TDocumentInformation } from 'pdfmake/interfaces'

/**
 * metadata info
 */
export const PortfolioMetadata: TDocumentInformation = {
  author: Profile.name,
  creator: Profile.name,
  producer: Profile.name,
  title: Profile.greeting,
  subject: Profile.ogDescription,
  keywords: `CV ${Profile.lastName} ${Profile.firstName}, ${Profile.email}, ${Profile.phone}`
}
