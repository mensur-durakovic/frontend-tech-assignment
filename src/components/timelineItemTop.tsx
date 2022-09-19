import { FC } from 'react'
import TimelineCard from './timelineCard'
import TimelineItemCaret from './timelineItemCaret'
import { DOT_WITH_MARGINS, CARD_HALF_WIDTH, BOTTOM } from '../constants/timeline'

interface TimelineItemTopProps {
  image: string
  altText?: string
  description: string
  isHalfTop?: boolean
  startMargin?: number
  endMargin?: number
}

const TimelineItemTop: FC<TimelineItemTopProps> = ({
  image,
  altText,
  description,
  isHalfTop,
  startMargin = 0,
  endMargin = 0,
}) => {
  let halfTopOffset = 'auto'
  if (isHalfTop) {
    const total = startMargin + DOT_WITH_MARGINS + endMargin / 2
    halfTopOffset = `${total - CARD_HALF_WIDTH}px`
  }
  return (
    <div className='timeline-item-top-wrapper' style={{ left: halfTopOffset }}>
      <TimelineCard
        image={image}
        altText={altText}
        description={description}
        arrowPosition={BOTTOM}
      />
      <TimelineItemCaret />
    </div>
  )
}

export default TimelineItemTop
