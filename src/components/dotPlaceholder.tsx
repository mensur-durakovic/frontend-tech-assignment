import { FC } from 'react'
import { SOLID } from '../constants/timeline'

interface DotPlaceholderProps {
  startMargin?: number
  startLineStyle?: string
  endLineStyle?: string
}

const DotPlaceholder: FC<DotPlaceholderProps> = ({
  startMargin = 0,
  startLineStyle = SOLID,
  endLineStyle = SOLID,
}) => (
  <div
    className={`timeline-item-line-${startMargin ? startLineStyle : endLineStyle}`}
    style={{ width: '100%' }}
  ></div>
)

export default DotPlaceholder
