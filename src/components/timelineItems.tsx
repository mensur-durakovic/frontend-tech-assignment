import React, { FC } from 'react'
import TimelineDot from './timelineDot'
import TimelineItemBottom from './timelineItemBottom'
import TimelineItemTitle from './timelineItemTitle'
import TimelineItemTop from './timelineItemTop'
import { BOTTOM, RIGHT_END_BOTTOM, RIGHT_HALF_TOP, TOP } from '../constants/timeline'

interface TimelineItemsProps {
  description: string
  startMargin?: number
  endMargin?: number
  images: TimelineItemImage[]
  hasTwoImages: boolean
}

const TimelineItems: FC<TimelineItemsProps> = ({
  images,
  description,
  startMargin = 0,
  endMargin = 0,
  hasTwoImages,
}) => {
  return (
    <div className='timeline-item-dot-wrapper'>
      <TimelineDot />
      {images.map((im) => {
        if (im.position === BOTTOM || im.position === RIGHT_END_BOTTOM) {
          return (
            <TimelineItemBottom
              key={im.image}
              description={im.title}
              timelineTitle={im.position === BOTTOM ? description : im.description ?? ''}
              image={im.image}
              altText={im.altText}
              position={im.position}
              startMargin={startMargin}
              endMargin={endMargin}
            />
          )
        } else if (im.position === TOP) {
          return (
            <React.Fragment key={im.image}>
              <TimelineItemTop
                description={im.title}
                image={im.image}
                altText={im.altText}
                startMargin={startMargin}
                endMargin={endMargin}
              />
              {!hasTwoImages && <TimelineItemTitle title={description} />}
            </React.Fragment>
          )
        } else if (im.position === RIGHT_HALF_TOP) {
          return (
            <TimelineItemTop
              key={im.image}
              description={im.title}
              image={im.image}
              altText={im.altText}
              isHalfTop={true}
              startMargin={startMargin}
              endMargin={endMargin}
            />
          )
        }
      })}
    </div>
  )
}

export default TimelineItems
