import { FC } from 'react';
import timelineItems from '../constants/timeline-items.json';
import StartCircle from '../components/startCircle';


const Timeline: FC = () => {
    return (
      <div className='timeline'>
        {JSON.stringify(timelineItems)}
        <StartCircle/>
      </div>
    )
  }
  
  
  export default Timeline;
