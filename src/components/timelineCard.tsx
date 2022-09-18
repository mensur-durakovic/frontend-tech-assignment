import { FC } from 'react'
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
  arrowPosition = 'top',
}) => {
  let arrowClass = ''
  if (arrowPosition === 'top') {
    arrowClass = 'timeline-card-top-arrow'
  } else if (arrowPosition === 'bottom') {
    arrowClass = 'timeline-card-bottom-arrow'
  } else if (arrowPosition === 'right-end') {
    arrowClass = 'timeline-card-right-end-arrow'
  }
  return (
    <div
      className={`timeline-card ${arrowClass} ${
        arrowPosition === 'right-end' ? 'timeline-card-light-green' : ''
      }`}
    >
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
