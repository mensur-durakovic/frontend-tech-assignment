import { FC } from 'react'
import TimelineCard from './timelineCard'
import TimelineItemCaret from './timelineItemCaret'

interface TimelineItemTopProps {
  image: string
  altText?: string
  description: string
  isHalfTop?: boolean
  startMargin: number
  endMargin: number
}

const TimelineItemTop: FC<TimelineItemTopProps> = ({
  image,
  altText,
  description,
  isHalfTop,
  startMargin,
  endMargin,
}) => {
  let halfTopOffset = 'auto'
  if (isHalfTop) {
    const dotWithMargins = 16
    const cardHalfWidth = 65
    const total = startMargin + dotWithMargins + endMargin / 2
    halfTopOffset = `${total - cardHalfWidth}px`
  }
  return (
    <div className='timeline-item-top-wrapper' style={{ left: halfTopOffset }}>
      <TimelineCard
        image={image}
        altText={altText}
        description={description}
        arrowPosition='bottom'
      />
      <TimelineItemCaret />
    </div>
  )
}

export default TimelineItemTop
