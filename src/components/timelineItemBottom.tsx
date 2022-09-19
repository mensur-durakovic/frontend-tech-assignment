import { FC } from 'react'
import TimelineCard from './timelineCard'
import TimelineItemCaret from './timelineItemCaret'
import {
  BOTTOM,
  CARD_HALF_WIDTH,
  DOT_WITH_MARGINS,
  RIGHT_END,
  RIGHT_END_BOTTOM,
  TOP,
} from '../constants/timeline'

interface TimelineItemBottomProps {
  image?: string
  altText?: string
  description?: string
  timelineTitle: string
  position?: string
  startMargin?: number
  endMargin?: number
}

const TimelineItemBottom: FC<TimelineItemBottomProps> = ({
  image,
  altText,
  description,
  timelineTitle,
  position = BOTTOM,
  startMargin = 0,
  endMargin = 0,
}) => {
  let halfBottomOffset = 'auto'
  let className = 'timeline-item-bottom-wrapper'
  if (position === RIGHT_END_BOTTOM) {
    const total = startMargin + DOT_WITH_MARGINS + endMargin
    halfBottomOffset = `${total - CARD_HALF_WIDTH}px`
    className = 'timeline-item-end-wrapper'
  }

  return (
    <div className={className} style={{ left: halfBottomOffset }}>
      <div className='timeline-item-title'>{timelineTitle}</div>
      {image && (
        <>
          <TimelineItemCaret isBottom={true} />
          <TimelineCard
            image={image}
            altText={altText}
            description={description}
            arrowPosition={position === RIGHT_END_BOTTOM ? RIGHT_END : TOP}
          />
        </>
      )}
    </div>
  )
}

export default TimelineItemBottom
