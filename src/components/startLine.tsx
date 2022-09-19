import { FC } from 'react'
import { SOLID } from '../constants/timeline'

interface StartLineProps {
  startMargin?: number
  startLineStyle?: string
  isFirstItem: boolean
}

const StartLine: FC<StartLineProps> = ({
  startMargin = 0,
  isFirstItem,
  startLineStyle = SOLID,
}) => {
  if (!startMargin) {
    return null
  }

  const startMarginPx = `${isFirstItem ? startMargin + 20 : startMargin}px`
  const firstItemSolidClass =
    isFirstItem && startLineStyle === SOLID ? 'timeline-item-start-line-first-item' : ''
  const nonFirstItemSolidClass =
    !isFirstItem && startLineStyle === SOLID ? 'timeline-item-start-line-normal-item' : ''

  return (
    <div
      className={`timeline-item-line-${startLineStyle} ${firstItemSolidClass} ${nonFirstItemSolidClass}`}
      style={{ width: startMarginPx }}
    ></div>
  )
}

export default StartLine
