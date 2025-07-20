import type { TDocumentInformation } from 'pdfmake/interfaces'
import { Document, Profile } from '@schema'
import { Pkg } from '@config/pkg'

/**
 * metadata info
 */
export const PortfolioMetadata: TDocumentInformation = {
  author: Profile.alias,
  creator: Profile.name,
  title: Profile.greeting,
  subject: Document.subject,
  producer: `${Pkg.name}@${Pkg.version}`,
  keywords: Document.keywords.join(', ')
}
