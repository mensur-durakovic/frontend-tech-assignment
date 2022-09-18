import { FC } from 'react'

import { getImageByTitle } from '../utils/svgLibrary'
import TimelineItemCaret from './timelineItemCaret'

interface TimelineCardBottomProps {
  image?: string
  altText?: string
  description?: string
  timelineTitle: string
}

const TimelineCardBottom: FC<TimelineCardBottomProps> = ({
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
        </>
      )}
    </div>
  )
}

export default TimelineCardBottom
