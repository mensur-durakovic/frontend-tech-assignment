import { FC } from 'react'
import { SOLID } from '../constants/timeline'

interface EndLineProps {
  endMargin?: number
  isFirstItem: boolean
  endLineStyle?: string
}

const EndLine: FC<EndLineProps> = ({ endMargin = 0, isFirstItem, endLineStyle = SOLID }) => {
  if (!endMargin) {
    return null
  }

  const firstItemSolidClass =
    isFirstItem && endLineStyle === SOLID ? 'timeline-item-end-line-first-item' : ''
  const nonFirstItemSolidClass =
    !isFirstItem && endLineStyle === SOLID ? 'timeline-item-end-line-normal-item' : ''

  return (
    <div
      className={`timeline-item-line-${endLineStyle} ${firstItemSolidClass} ${nonFirstItemSolidClass}`}
      style={{ width: `${endMargin}px` }}
    ></div>
  )
}

export default EndLine
