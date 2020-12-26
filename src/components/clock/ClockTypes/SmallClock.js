import React from 'react';


const SmallClock = (props)=>{

 return(
     
          <div className="hours-indicator clock" id='hour' 
                style={{
                  
                  border: '1px none #333',
                  height: '75px',
                  width: '75px',
                  backgroundColor: 'white',
                }}>
            <div className="min-indicator clock" id="minutes"
                   style={{
                      
                      border: '1px none #333',
                      height: '50px',
                      width: '50px',
                      backgroundColor: 'white',
                    }}>
              <div className="sec-indicator clock" id ="seconds"
                   onClick = {()=>{props.changeClockView(2)}}
                       style={{
                          
                          border: '1px none #333',
                          height: '25px',
                          width: '25px',
                          backgroundColor: 'white',
                        }}>
              
              </div>
            </div>

            
          </div>
      
      )		


}

export default SmallClock;
