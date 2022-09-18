import { FC } from 'react'

interface TimelineItemTitleProps {
  title: string
}

const TimelineItemTitle: FC<TimelineItemTitleProps> = ({ title }) => (
  <div className='timeline-item-title-wrapper'>
    <div className='timeline-item-title'>{title}</div>
  </div>
)

export default TimelineItemTitle
