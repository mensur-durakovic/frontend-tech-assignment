import { FC } from 'react'
import ArrowRight from './arrowRight'
import StartLine from './startLine'
import EndLine from './endLine'
import DotPlaceholder from './dotPlaceholder'
import TimelineItems from './timelineItems'
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
  return (
    <div className='timeline-item'>
      <div className='timeline-item-middle'>
        <StartLine
          startMargin={startMargin}
          startLineStyle={startLineStyle}
          isFirstItem={isFirstItem}
        />
        {hasDot ? (
          <TimelineItems
            description={description}
            startMargin={startMargin}
            endMargin={endMargin}
            hasTwoImages={images.length == 2}
            images={images}
          />
        ) : (
          <DotPlaceholder
            startMargin={startMargin}
            startLineStyle={startLineStyle}
            endLineStyle={endLineStyle}
          />
        )}
        <EndLine endMargin={endMargin} endLineStyle={endLineStyle} isFirstItem={isFirstItem} />
        {isLastItem && <ArrowRight />}
      </div>
    </div>
  )
}

export default TimelineItem
