import { FC } from 'react'

import { getImageByTitle } from '../utils/svgLibrary'

interface TimelineImageProps {
  image: string
  altText?: string
  description: string
}

const TimelineImage: FC<TimelineImageProps> = ({ image, altText, description }) => {
  return (
    <div className='timeline-image-wrapper'>
      <img className='timeline-image' src={getImageByTitle(image)} alt={altText || image}></img>
      <div className='timeline-image-text'>
        <span>{description}</span>
      </div>
    </div>
  )
}

export default TimelineImage
