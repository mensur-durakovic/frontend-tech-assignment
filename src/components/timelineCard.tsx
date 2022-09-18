import { FC } from 'react'
import { getImageByTitle } from '../utils/svgLibrary'

interface TimelineCardProps {
  image: string
  altText?: string
  description?: string
  arrowPosition: string
}

const TimelineCard: FC<TimelineCardProps> = ({ image, altText, description, arrowPosition }) => {
  let arrowClass = ''
  if (arrowPosition === 'top') {
    arrowClass = 'timeline-card-top'
  } else if (arrowPosition === 'bottom') {
    arrowClass = 'timeline-card-bottom'
  }
  return (
    <div className={`timeline-card ${arrowClass}`}>
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
