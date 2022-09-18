import { FC } from 'react'
import TimelineCard from './timelineCard'
import TimelineItemCaret from './timelineItemCaret'

interface TimelineItemBottomProps {
  image?: string
  altText?: string
  description?: string
  timelineTitle: string
}

const TimelineItemBottom: FC<TimelineItemBottomProps> = ({
  image,
  altText,
  description,
  timelineTitle,
}) => {
  return (
    <div className='timeline-item-bottom-wrapper'>
      <div className='timeline-item-title'>{timelineTitle}</div>
      {image && (
        <>
          <TimelineItemCaret isBottom={true} />
          <TimelineCard
            image={image}
            altText={altText}
            description={description}
            arrowPosition='top'
          />
        </>
      )}
    </div>
  )
}

export default TimelineItemBottom
