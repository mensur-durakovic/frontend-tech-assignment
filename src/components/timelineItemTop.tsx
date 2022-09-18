import { FC } from 'react'
import TimelineCard from './timelineCard'
import TimelineItemCaret from './timelineItemCaret'

interface TimelineItemTopProps {
  image: string
  altText?: string
  description: string
}

const TimelineItemTop: FC<TimelineItemTopProps> = ({ image, altText, description }) => {
  return (
    <div className='timeline-item-top-wrapper'>
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
