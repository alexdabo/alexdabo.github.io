import { Icons, type IconName } from '@core/icon'
import type { ContentColumns, ContentSvg, ContentText } from 'pdfmake/interfaces'
import { Color } from './enum'

type IconProps = Omit<ContentSvg, 'svg' | 'width' | 'height'> & {
  icon: IconName
  size?: number
}

export function Icon(props: IconProps): ContentSvg {
  const { color = Color.Link, size = 16, icon, ...svgProps } = props
  return {
    ...svgProps,
    width: size,
    height: size,
    svg: `<svg viewBox="0 0 24 24"
        fill="none"
        stroke="${color}"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round">${Icons[icon]}</svg>`
  }
}
type ChipProps = Omit<ContentSvg, 'svg' | 'width' | 'height'> & {
  label: string
}

/**
 * @deprecated
 */
export function Chip(props: ChipProps): ContentSvg {
  const { label, color = Color.Grey, ...svgProps } = props
  const width = 15 + 6 * label.length
  return {
    ...svgProps,
    width,
    height: 20,
    svg: `<svg fill="none" stroke="${color}">
        <rect x="1" y="1" width="${width - 2}" height="18" rx="5" fill="none"></rect>
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${color}" font-size="8px" stroke-width="0.5">${label}</text>
    </svg>`
  }
}

export function IconLabel(icon: IconName, text: ContentText): ContentColumns {
  return { columnGap: 5, columns: [Icon({ icon, size: 12 }), text] }
}
