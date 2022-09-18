import { FC } from 'react'
import timelineItemsJson from '../constants/timeline-items.json'
import StartCircle from '../components/startCircle'
import TimelineItem from '../components/timelineItem'

const Timeline: FC = () => {
  return (
    <div className='timeline'>
      <StartCircle />
      {timelineItemsJson.map((ti, index) => (
        <TimelineItem
          key={ti.description}
          isFirstItem={index === 0}
          isLastItem={index === timelineItemsJson.length - 1}
          hasDot={!!ti.hasDot}
          description={ti.description}
          startMargin={ti.startMargin}
          endMargin={ti.endMargin}
          startLineStyle={ti.startLineStyle}
          endLineStyle={ti.endLineStyle}
          images={ti.images}
        />
      ))}
    </div>
  )
}

export default Timeline
