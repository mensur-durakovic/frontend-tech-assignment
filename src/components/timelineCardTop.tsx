import { FC } from 'react'

import { getImageByTitle } from '../utils/svgLibrary'
import TimelineItemCaret from './timelineItemCaret'

interface TimelineCardTopProps {
  image: string
  altText?: string
  description: string
}

const TimelineCardTop: FC<TimelineCardTopProps> = ({ image, altText, description }) => {
  return (
    <div className='timeline-item-top-wrapper'>
      <div className='timeline-card'>
        <img
          className='timeline-card-image'
          src={getImageByTitle(image)}
          alt={altText || image}
        ></img>
        <div className='timeline-card-text'>
          <span>{description}</span>
        </div>
      </div>
      <TimelineItemCaret />
    </div>
  )
}

export default TimelineCardTop
