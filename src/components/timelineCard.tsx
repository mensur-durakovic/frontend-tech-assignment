import { FC } from 'react'
import { RIGHT_END, TOP } from '../constants/timeline'
import { getImageByTitle } from '../utils/svgLibrary'

interface TimelineCardProps {
  image: string
  altText?: string
  description?: string
  arrowPosition: string
}

const TimelineCard: FC<TimelineCardProps> = ({
  image,
  altText,
  description,
  arrowPosition = TOP,
}) => {
  const rightEndCardClass = arrowPosition === RIGHT_END ? 'timeline-card-light-green' : ''
  return (
    <div className={`timeline-card timeline-card-${arrowPosition}-arrow ${rightEndCardClass}`}>
      <img
        className='timeline-card-image'
        src={getImageByTitle(image)}
        alt={altText || image}
      ></img>
      <div className='timeline-card-text'>
        <span>{description}</span>
      </div>
    </div>
  )
}

export default TimelineCard
