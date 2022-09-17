import { FC } from 'react'
import timelineItems from '../constants/timeline-items.json'
import StartCircle from '../components/startCircle'
import TimelineDot from '../components/timelineDot'
import TimelineItem from '../components/timelineItem'

const Timeline: FC = () => {
  return (
    <div className='timeline'>
      <StartCircle />
      {timelineItems.map((ti) => (
        <TimelineItem
          key={ti.description}
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
