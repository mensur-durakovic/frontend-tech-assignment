import { FC } from 'react'
import timelineItems from '../constants/timeline-items.json'
import StartCircle from '../components/startCircle'
import TimelineDot from '../components/timelineDot'

const Timeline: FC = () => {
  return (
    <div className='timeline'>
      {JSON.stringify(timelineItems)}
      <StartCircle />
      <TimelineDot />
    </div>
  )
}

export default Timeline
