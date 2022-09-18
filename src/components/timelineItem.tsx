import { FC } from 'react'
import TimelineCardTop from './timelineCardTop'
import TimelineDot from './timelineDot'
import TimelineItemCaret from './timelineItemCaret'
import ArrowRight from './arrowRight'

import { START_CIRCLE_DEFAULT_TITLE } from '../constants/text'
import TimelineCardBottom from './timelineCardBottom'
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
      {/* {hasUpperImage ? (
        <TimelineCard
          image={images[0].image}
          altText={images[0].altText}
          description={images[0].title}
          position={images[0].position}
        />
      ) : (
        <div className='timeline-card-empty'></div>
      )} */}
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
                <TimelineCardBottom
                  key={im.image}
                  description={im.title}
                  timelineTitle={description}
                  image={im.image}
                  altText={im.altText}
                />
              ) : (
                <>
                  <TimelineCardTop
                    key={im.image}
                    description={im.title}
                    image={im.image}
                    altText={im.altText}
                  />
                  {!hasTwoImages && <TimelineItemTitle key={description} title={description} />}
                </>
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
      {/* {hasBottomImage ? (
        <TimelineCard
          image={images[1].image}
          altText={images[1].altText}
          description={images[1].title}
          position={images[1].position}
        />
      ) : (
        <div className='timeline-card-empty'></div>
      )} */}
    </div>
  )
}

export default TimelineItem
