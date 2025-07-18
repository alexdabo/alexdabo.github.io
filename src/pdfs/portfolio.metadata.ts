import { Document, Network, Profile } from '@schema'
import type { TDocumentInformation } from 'pdfmake/interfaces'

/**
 * metadata info
 */
export const PortfolioMetadata: TDocumentInformation = {
  author: Profile.alias,
  creator: Profile.name,
  producer: Profile.name,
  title: Profile.greeting,
  subject: Document.subject,
  keywords: [Profile.fullName, Network.email.label, Network.whatsapp.label].join()
}
