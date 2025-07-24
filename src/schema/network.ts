import type { Networks } from './model/network'
import { filename, site } from '@core/util'
import { Profile } from './profile'

/**
 * Collection of network/contact information.
 *
 * Includes key communication channels like CV download, email, GitHub, WhatsApp, and website,
 * each with a name, label, URL, and an icon.
 */
export const Network: Networks = {
  cv: {
    icon: 'cv',
    name: 'Descargar',
    label: 'Descargar CV',
    url: site('/pdf/' + filename(Profile.name, '.pdf'))
  },
  email: {
    icon: 'email',
    name: 'Correo',
    label: 'adbonilla.ad@gmail.com',
    url: 'mailto:adbonilla.ad@gmail.com'
  },
  github: {
    icon: 'github',
    name: 'GitHub',
    label: 'github.com/alexdabo',
    url: 'https://github.com/alexdabo'
  },
  whatsapp: {
    icon: 'whatsapp',
    name: 'WhatsApp',
    label: '+593979728686',
    url: 'https://wa.me/593979728686'
  },
  website: {
    icon: 'web',
    name: 'Sitio web',
    label: 'alexdabo.github.io',
    url: import.meta.env.SITE
  }
}
