import { FC } from 'react'

interface TimelineItemCaretProps {
  isBottom?: boolean
}

const TimelineItemCaret: FC<TimelineItemCaretProps> = ({ isBottom }) => (
  <div className={isBottom ? 'timeline-item-caret-bottom' : 'timeline-item-caret'}></div>
)

export default TimelineItemCaret
