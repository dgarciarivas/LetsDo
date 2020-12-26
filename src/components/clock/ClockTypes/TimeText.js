import React from 'react';

const TimeText = (props) =>{

  return(
      <div className = 'time-text clock' 
            onClick = {()=>{props.changeClockView(1)}}>
                 <div className = 'clock-text' 
                    id="weekday" 
                   >
                                {`${props.weekday}`}
                  </div>
                  <div className = 'clock-text' 
                      id='date' 
                     >   
                          {`${props.month} / ${props.day} / ${props.year}`}
                  </div>
                  <div className='clock-text'> 
                      {`${props.hour} : ${props.min} : ${props.sec}`} 
                  </div> 

                        
                 
                </div>


)

}

export default TimeText;