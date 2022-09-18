import { FC } from 'react'
import TimelineCard from './timelineCard'
import TimelineItemCaret from './timelineItemCaret'

interface TimelineItemBottomProps {
  image?: string
  altText?: string
  description?: string
  timelineTitle: string
  position?: string
  startMargin: number
  endMargin: number
}

const TimelineItemBottom: FC<TimelineItemBottomProps> = ({
  image,
  altText,
  description,
  timelineTitle,
  position = 'bottom',
  startMargin,
  endMargin,
}) => {
  let halfBottomOffset = 'auto'
  if (position === 'right-end-bottom') {
    const dotWithMargins = 16
    const cardHalfWidth = 65
    const total = startMargin + dotWithMargins + endMargin
    halfBottomOffset = `${total - cardHalfWidth}px`
  }
  return (
    <div
      className={
        position === 'right-end-bottom'
          ? 'timeline-item-end-wrapper'
          : 'timeline-item-bottom-wrapper'
      }
      style={{ left: halfBottomOffset }}
    >
      <div className='timeline-item-title'>{timelineTitle}</div>
      {image && (
        <>
          <TimelineItemCaret isBottom={true} />
          <TimelineCard
            image={image}
            altText={altText}
            description={description}
            arrowPosition={position === 'right-end-bottom' ? 'right-end' : 'top'}
          />
        </>
      )}
    </div>
  )
}

export default TimelineItemBottom
