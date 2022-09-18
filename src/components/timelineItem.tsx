import React, { FC } from 'react'
import TimelineItemTop from './timelineItemTop'
import TimelineDot from './timelineDot'
import ArrowRight from './arrowRight'
import TimelineItemBottom from './timelineItemBottom'
import TimelineItemTitle from './timelineItemTitle'
interface TimelineItemProps {
  description: string
  startMargin?: number
  endMargin?: number
  startLineStyle?: string
  endLineStyle?: string
  hasDot: boolean
  isFirstItem: boolean
  isLastItem: boolean
  images: TimelineItemImage[]
}

const TimelineItem: FC<TimelineItemProps> = ({
  description,
  startMargin,
  endMargin,
  hasDot,
  startLineStyle,
  endLineStyle,
  isFirstItem,
  isLastItem,
  images,
}) => {
  const startMarginPx = startMargin ? `${isFirstItem ? startMargin + 20 : startMargin}px` : 0
  const endMarginPx = endMargin ? `${endMargin}px` : 0
  const hasTwoImages = images.length == 2

  return (
    <div className='timeline-item'>
      <div className='timeline-item-middle'>
        {startMargin && (
          <div
            className={`timeline-item-line-${startLineStyle}`}
            style={{ width: startMarginPx }}
          ></div>
        )}

        {hasDot ? (
          <div className='timeline-item-dot-wrapper'>
            <TimelineDot />
            {images.map((im) =>
              im.position === 'bottom' ? (
                <TimelineItemBottom
                  key={im.image}
                  description={im.title}
                  timelineTitle={description}
                  image={im.image}
                  altText={im.altText}
                />
              ) : (
                <React.Fragment key={im.image}>
                  <TimelineItemTop description={im.title} image={im.image} altText={im.altText} />
                  {!hasTwoImages && <TimelineItemTitle title={description} />}
                </React.Fragment>
              ),
            )}
          </div>
        ) : (
          <div
            className={`timeline-item-line-${startMargin ? startLineStyle : endLineStyle}`}
            style={{ width: '100%' }}
          ></div>
        )}

        {endMargin && (
          <div
            className={`timeline-item-line-${endLineStyle}`}
            style={{ width: endMarginPx }}
          ></div>
        )}

        {isLastItem && <ArrowRight />}
      </div>
    </div>
  )
}

export default TimelineItem
