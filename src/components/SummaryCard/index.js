import React, { useState,useEffect } from 'react';
import './index.scss';
const easeOutQuad = t => t * (2 - t);
const frameDuration = 60;
export default function SummaryCard({title,value,subtitle,subvalue,color}) {
  const [val,setval] = useState(0);

  useEffect(() => {
    let duration=3000;
    let frame = 0;
    const totalFrames = Math.round(duration / frameDuration);
    const counter = setInterval(() => {
      frame++;
      const progress = easeOutQuad(frame / totalFrames);
      setval(Math.round(value * progress));

      if (frame === totalFrames) {
        clearInterval(counter);
      }
    }, frameDuration);

    },[]);

  return (
    <>
        <div className='card'>
            <div className='title'>
               {title}
            </div>
            <div className='value' style={{color}}>
               <span>{val}</span>
            </div>
            <div className='submenu'>
              <span className='subtitle'>{subtitle} </span> &nbsp; : &nbsp;
              <span className='subvalue'>{subvalue}</span>
            </div>
        </div>
    </>
  );
}
