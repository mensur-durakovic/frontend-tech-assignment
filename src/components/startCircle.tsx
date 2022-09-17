import { FC } from 'react';
import { START_CIRCLE_DEFAULT_TITLE } from '../constants/text';

interface StartCircleProps {
  title?: string;
}

const StartCircle: FC = ({title = START_CIRCLE_DEFAULT_TITLE}:StartCircleProps) => {
    return (
      <div className='start-circle-wrapper'>
        <div className='start-circle-outer'>
            <div className='start-circle-inner'></div>
        </div>
        <span className='start-circle-title'>{title}</span>
      </div>
    )
  }
  
  
  export default StartCircle;