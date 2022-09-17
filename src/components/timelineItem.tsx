import { FC } from 'react'
import TimelineImage from './timelineImage'

interface TimelineItemImage {
  title: string
  image: string
  altText: string
}

interface TimelineItemProps {
  description: string
  startMargin?: number
  endMargin?: number
  startLineStyle?: string
  endLineStyle?: string
  images: TimelineItemImage[]
}

const TimelineItem: FC<TimelineItemProps> = ({
  description,
  startMargin,
  endMargin,
  startLineStyle,
  endLineStyle,
  images,
}) => {
  return (
    <>
      {images.map((img) => (
        <TimelineImage
          key={img.image}
          image={img.image}
          altText={img.altText}
          description={img.title}
        />
      ))}
      <div className='timeline-item-caret'></div>
    </>
  )
}

export default TimelineItem
